/*
* Copyright (c) 2006-2012 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/
System.register(["Box2D", "Testbed"], function (exports_1, context_1) {
    "use strict";
    var box2d, testbed, ParticleVFX, Sparky;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (box2d_1) {
                box2d = box2d_1;
            },
            function (testbed_1) {
                testbed = testbed_1;
            }
        ],
        execute: function () {
            ParticleVFX = class ParticleVFX {
                constructor(particleSystem, origin, size, speed, lifetime, particleFlags) {
                    this.m_initialLifetime = 0.0;
                    this.m_remainingLifetime = 0.0;
                    this.m_halfLifetime = 0.0;
                    this.m_origColor = new box2d.b2Color();
                    // Create a circle to house the particles of size size
                    const shape = new box2d.b2CircleShape();
                    shape.m_p.Copy(origin);
                    shape.m_radius = size;
                    // Create particle def of random color.
                    const pd = new box2d.b2ParticleGroupDef();
                    pd.flags = particleFlags;
                    pd.shape = shape;
                    // this.m_origColor.Set(
                    //   Math.random(),
                    //   Math.random(),
                    //   Math.random(),
                    //   1.0);
                    function hue2rgb(p, q, t) {
                        if (t < 0) {
                            t += 1;
                        }
                        if (t > 1) {
                            t -= 1;
                        }
                        if (t < 1 / 6) {
                            return p + (q - p) * 6 * t;
                        }
                        if (t < 1 / 2) {
                            return q;
                        }
                        if (t < 2 / 3) {
                            return p + (q - p) * (2 / 3 - t) * 6;
                        }
                        return p;
                    }
                    function hslToRgb(h, s, l, a = 1) {
                        let r, g, b;
                        if (s === 0) {
                            r = g = b = l; // achromatic
                        }
                        else {
                            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                            const p = 2 * l - q;
                            r = hue2rgb(p, q, h + 1 / 3);
                            g = hue2rgb(p, q, h);
                            b = hue2rgb(p, q, h - 1 / 3);
                        }
                        return { r, g, b, a };
                    }
                    this.m_origColor.Copy(hslToRgb(Math.random(), 1, 0.5));
                    pd.color.Copy(this.m_origColor);
                    this.m_particleSystem = particleSystem;
                    // Create a circle full of particles
                    this.m_pg = this.m_particleSystem.CreateParticleGroup(pd);
                    this.m_initialLifetime = this.m_remainingLifetime = lifetime;
                    this.m_halfLifetime = this.m_initialLifetime * 0.5;
                    // Set particle initial velocity based on how far away it is from
                    // origin, exploding outwards.
                    const bufferIndex = this.m_pg.GetBufferIndex();
                    const pos = this.m_particleSystem.GetPositionBuffer();
                    const vel = this.m_particleSystem.GetVelocityBuffer();
                    for (let i = bufferIndex; i < bufferIndex + this.m_pg.GetParticleCount(); i++) {
                        ///  vel[i] = pos[i] - origin;
                        box2d.b2Vec2.SubVV(pos[i], origin, vel[i]);
                        ///  vel[i] *= speed;
                        box2d.b2Vec2.MulVS(vel[i], speed, vel[i]);
                    }
                }
                Drop() {
                    this.m_pg.DestroyParticles(false);
                    // this.m_pg = null;
                }
                ColorCoeff() {
                    if (this.m_remainingLifetime >= this.m_halfLifetime) {
                        return 1.0;
                    }
                    return 1.0 - ((this.m_halfLifetime - this.m_remainingLifetime) / this.m_halfLifetime);
                }
                Step(dt) {
                    if (dt > 0 && this.m_remainingLifetime > 0.0) {
                        this.m_remainingLifetime = Math.max(this.m_remainingLifetime - dt, 0.0);
                        const coeff = this.ColorCoeff();
                        const colors = this.m_particleSystem.GetColorBuffer();
                        const bufferIndex = this.m_pg.GetBufferIndex();
                        // Set particle colors all at once.
                        for (let i = bufferIndex; i < bufferIndex + this.m_pg.GetParticleCount(); i++) {
                            const c = colors[i];
                            // c *= coeff;
                            // c.SelfMul(coeff);
                            // c.a = this.m_origColor.a;
                            c.a *= coeff;
                        }
                    }
                }
                IsDone() {
                    return this.m_remainingLifetime <= 0.0;
                }
            };
            Sparky = class Sparky extends testbed.Test {
                constructor() {
                    super();
                    this.m_VFXIndex = 0;
                    this.m_VFX = [];
                    this.m_contact = false;
                    this.m_contactPoint = new box2d.b2Vec2();
                    // Set up array of sparks trackers.
                    this.m_VFXIndex = 0;
                    for (let i = 0; i < Sparky.c_maxVFX; i++) {
                        this.m_VFX[i] = null;
                    }
                    this.CreateWalls();
                    this.m_particleSystem.SetRadius(0.25 * 2); // HACK: increase particle radius
                    // Create a list of circles that will spark.
                    for (let i = 0; i < Sparky.c_maxCircles; i++) {
                        const bd = new box2d.b2BodyDef();
                        bd.type = box2d.b2BodyType.b2_dynamicBody;
                        const body = this.m_world.CreateBody(bd);
                        const shape = new box2d.b2CircleShape();
                        shape.m_p.Set(3.0 * testbed.RandomFloat(), Sparky.SHAPE_HEIGHT_OFFSET + Sparky.SHAPE_OFFSET * i);
                        shape.m_radius = 2;
                        const f = body.CreateFixture(shape, 0.5);
                        // Tag this as a sparkable body.
                        f.SetUserData({
                            spark: true,
                        });
                    }
                    testbed.Test.SetRestartOnParticleParameterChange(false);
                    testbed.Test.SetParticleParameterValue(box2d.b2ParticleFlag.b2_powderParticle);
                }
                BeginContact(contact) {
                    super.BeginContact(contact);
                    // Check to see if these are two circles hitting one another.
                    const userA = contact.GetFixtureA().GetUserData();
                    const userB = contact.GetFixtureB().GetUserData();
                    if ((userA && userA.spark) ||
                        (userB && userB.spark)) {
                        const worldManifold = new box2d.b2WorldManifold();
                        contact.GetWorldManifold(worldManifold);
                        // Note that we overwrite any contact; if there are two collisions
                        // on the same frame, only the last one showers sparks.
                        // Two collisions are rare, and this also guarantees we will not
                        // run out of places to store ParticleVFX explosions.
                        this.m_contactPoint.Copy(worldManifold.points[0]);
                        this.m_contact = true;
                    }
                }
                Step(settings) {
                    const particleFlags = testbed.Test.GetParticleParameterValue();
                    let dt = settings.hz > 0.0 ? 1.0 / settings.hz : 0.0;
                    if (settings.pause && !settings.singleStep) {
                        dt = 0.0;
                    }
                    super.Step(settings);
                    // If there was a contacts...
                    if (this.m_contact) {
                        // ...explode!
                        this.AddVFX(this.m_contactPoint, particleFlags);
                        this.m_contact = false;
                    }
                    // Step particle explosions.
                    for (let i = 0; i < Sparky.c_maxVFX; i++) {
                        const vfx = this.m_VFX[i];
                        if (vfx === null) {
                            continue;
                        }
                        vfx.Step(dt);
                        if (vfx.IsDone()) {
                            /// delete vfx;
                            vfx.Drop();
                            this.m_VFX[i] = null;
                        }
                    }
                }
                AddVFX(p, particleFlags) {
                    const vfx = this.m_VFX[this.m_VFXIndex];
                    if (vfx !== null) {
                        /// delete vfx;
                        vfx.Drop();
                        this.m_VFX[this.m_VFXIndex] = null;
                    }
                    this.m_VFX[this.m_VFXIndex] = new ParticleVFX(this.m_particleSystem, p, testbed.RandomFloat(1.0, 2.0), testbed.RandomFloat(10.0, 20.0), testbed.RandomFloat(0.5, 1.0), particleFlags);
                    if (++this.m_VFXIndex >= Sparky.c_maxVFX) {
                        this.m_VFXIndex = 0;
                    }
                }
                CreateWalls() {
                    // Create the walls of the world.
                    {
                        const bd = new box2d.b2BodyDef();
                        const ground = this.m_world.CreateBody(bd);
                        {
                            const shape = new box2d.b2PolygonShape();
                            const vertices = [
                                new box2d.b2Vec2(-40, -10),
                                new box2d.b2Vec2(40, -10),
                                new box2d.b2Vec2(40, 0),
                                new box2d.b2Vec2(-40, 0),
                            ];
                            shape.Set(vertices, 4);
                            ground.CreateFixture(shape, 0.0);
                        }
                        {
                            const shape = new box2d.b2PolygonShape();
                            const vertices = [
                                new box2d.b2Vec2(-40, 40),
                                new box2d.b2Vec2(40, 40),
                                new box2d.b2Vec2(40, 50),
                                new box2d.b2Vec2(-40, 50),
                            ];
                            shape.Set(vertices, 4);
                            ground.CreateFixture(shape, 0.0);
                        }
                        {
                            const shape = new box2d.b2PolygonShape();
                            const vertices = [
                                new box2d.b2Vec2(-40, -10),
                                new box2d.b2Vec2(-20, -10),
                                new box2d.b2Vec2(-20, 50),
                                new box2d.b2Vec2(-40, 50),
                            ];
                            shape.Set(vertices, 4);
                            ground.CreateFixture(shape, 0.0);
                        }
                        {
                            const shape = new box2d.b2PolygonShape();
                            const vertices = [
                                new box2d.b2Vec2(20, -10),
                                new box2d.b2Vec2(40, -10),
                                new box2d.b2Vec2(40, 50),
                                new box2d.b2Vec2(20, 50),
                            ];
                            shape.Set(vertices, 4);
                            ground.CreateFixture(shape, 0.0);
                        }
                    }
                }
                static Create() {
                    return new Sparky();
                }
            };
            Sparky.c_maxCircles = 3; ///6;
            Sparky.c_maxVFX = 20; ///50;
            Sparky.SHAPE_HEIGHT_OFFSET = 7;
            Sparky.SHAPE_OFFSET = 4.5;
            exports_1("Sparky", Sparky);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Bhcmt5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vVGVzdGJlZC9UZXN0cy9TcGFya3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7Ozs7Ozs7Ozs7Ozs7OztZQU9GLGNBQUEsTUFBTSxXQUFXO2dCQU9mLFlBQVksY0FBc0MsRUFBRSxNQUFvQixFQUFFLElBQVksRUFBRSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxhQUFtQztvQkFOcEosc0JBQWlCLEdBQUcsR0FBRyxDQUFDO29CQUN4Qix3QkFBbUIsR0FBRyxHQUFHLENBQUM7b0JBQzFCLG1CQUFjLEdBQUcsR0FBRyxDQUFDO29CQUdyQixnQkFBVyxHQUFrQixJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFFdkQsc0RBQXNEO29CQUN0RCxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDeEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3ZCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUV0Qix1Q0FBdUM7b0JBQ3ZDLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQzFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDO29CQUN6QixFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDakIsd0JBQXdCO29CQUN4QixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixVQUFVO29CQUNWLFNBQVMsT0FBTyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUzt3QkFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFOzRCQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQUU7d0JBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFBRSxDQUFD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