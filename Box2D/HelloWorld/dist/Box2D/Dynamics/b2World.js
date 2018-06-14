/*
* Copyright (c) 2006-2011 Erin Catto http://www.box2d.org
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
System.register(["../Common/b2Settings", "../Common/b2Math", "../Common/b2Timer", "../Common/b2Draw", "../Collision/b2Collision", "../Collision/b2TimeOfImpact", "../Collision/Shapes/b2Shape", "./Joints/b2Joint", "./Joints/b2JointFactory", "./b2Body", "./b2ContactManager", "./b2Island", "./b2TimeStep", "./b2WorldCallbacks", "../Particle/b2Particle", "../Particle/b2ParticleSystem"], function (exports_1, context_1) {
    "use strict";
    var b2Settings_1, b2Math_1, b2Timer_1, b2Draw_1, b2Collision_1, b2TimeOfImpact_1, b2Shape_1, b2Joint_1, b2JointFactory_1, b2Body_1, b2ContactManager_1, b2Island_1, b2TimeStep_1, b2WorldCallbacks_1, b2Settings_2, b2Particle_1, b2ParticleSystem_1, b2World;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (b2Settings_1_1) {
                b2Settings_1 = b2Settings_1_1;
                b2Settings_2 = b2Settings_1_1;
            },
            function (b2Math_1_1) {
                b2Math_1 = b2Math_1_1;
            },
            function (b2Timer_1_1) {
                b2Timer_1 = b2Timer_1_1;
            },
            function (b2Draw_1_1) {
                b2Draw_1 = b2Draw_1_1;
            },
            function (b2Collision_1_1) {
                b2Collision_1 = b2Collision_1_1;
            },
            function (b2TimeOfImpact_1_1) {
                b2TimeOfImpact_1 = b2TimeOfImpact_1_1;
            },
            function (b2Shape_1_1) {
                b2Shape_1 = b2Shape_1_1;
            },
            function (b2Joint_1_1) {
                b2Joint_1 = b2Joint_1_1;
            },
            function (b2JointFactory_1_1) {
                b2JointFactory_1 = b2JointFactory_1_1;
            },
            function (b2Body_1_1) {
                b2Body_1 = b2Body_1_1;
            },
            function (b2ContactManager_1_1) {
                b2ContactManager_1 = b2ContactManager_1_1;
            },
            function (b2Island_1_1) {
                b2Island_1 = b2Island_1_1;
            },
            function (b2TimeStep_1_1) {
                b2TimeStep_1 = b2TimeStep_1_1;
            },
            function (b2WorldCallbacks_1_1) {
                b2WorldCallbacks_1 = b2WorldCallbacks_1_1;
            },
            function (b2Particle_1_1) {
                b2Particle_1 = b2Particle_1_1;
            },
            function (b2ParticleSystem_1_1) {
                b2ParticleSystem_1 = b2ParticleSystem_1_1;
            }
        ],
        execute: function () {
            // #endif
            /// The world class manages all physics entities, dynamic simulation,
            /// and asynchronous queries. The world also contains efficient memory
            /// management facilities.
            b2World = class b2World {
                // #endif
                /// Construct a world object.
                /// @param gravity the world gravity vector.
                constructor(gravity) {
                    // b2BlockAllocator m_blockAllocator;
                    // b2StackAllocator m_stackAllocator;
                    this.m_newFixture = false;
                    this.m_locked = false;
                    this.m_clearForces = true;
                    this.m_contactManager = new b2ContactManager_1.b2ContactManager();
                    this.m_bodyList = null;
                    this.m_jointList = null;
                    // #if B2_ENABLE_PARTICLE
                    this.m_particleSystemList = null;
                    // #endif
                    this.m_bodyCount = 0;
                    this.m_jointCount = 0;
                    this.m_gravity = new b2Math_1.b2Vec2();
                    this.m_allowSleep = true;
                    this.m_destructionListener = null;
                    this.m_debugDraw = null;
                    // This is used to compute the time step ratio to
                    // support a variable time step.
                    this.m_inv_dt0 = 0;
                    // These are for debugging the solver.
                    this.m_warmStarting = true;
                    this.m_continuousPhysics = true;
                    this.m_subStepping = false;
                    this.m_stepComplete = true;
                    this.m_profile = new b2TimeStep_1.b2Profile();
                    this.m_island = new b2Island_1.b2Island();
                    this.s_stack = [];
                    // #if B2_ENABLE_CONTROLLER
                    this.m_controllerList = null;
                    this.m_controllerCount = 0;
                    this.m_gravity.Copy(gravity);
                }
                /// Register a destruction listener. The listener is owned by you and must
                /// remain in scope.
                SetDestructionListener(listener) {
                    this.m_destructionListener = listener;
                }
                /// Register a contact filter to provide specific control over collision.
                /// Otherwise the default filter is used (b2_defaultFilter). The listener is
                /// owned by you and must remain in scope.
                SetContactFilter(filter) {
                    this.m_contactManager.m_contactFilter = filter;
                }
                /// Register a contact event listener. The listener is owned by you and must
                /// remain in scope.
                SetContactListener(listener) {
                    this.m_contactManager.m_contactListener = listener;
                }
                /// Register a routine for debug drawing. The debug draw functions are called
                /// inside with b2World::DrawDebugData method. The debug draw object is owned
                /// by you and must remain in scope.
                SetDebugDraw(debugDraw) {
                    this.m_debugDraw = debugDraw;
                }
                /// Create a rigid body given a definition. No reference to the definition
                /// is retained.
                /// @warning This function is locked during callbacks.
                CreateBody(def = {}) {
                    if (this.IsLocked()) {
                        throw new Error();
                    }
                    const b = new b2Body_1.b2Body(def, this);
                    // Add to world doubly linked list.
                    b.m_prev = null;
                    b.m_next = this.m_bodyList;
                    if (this.m_bodyList) {
                        this.m_bodyList.m_prev = b;
                    }
                    this.m_bodyList = b;
                    ++this.m_bodyCount;
                    return b;
                }
                /// Destroy a rigid body given a definition. No reference to the definition
                /// is retained. This function is locked during callbacks.
                /// @warning This automatically deletes all associated shapes and joints.
                /// @warning This function is locked during callbacks.
                DestroyBody(b) {
                    // DEBUG: b2Assert(this.m_bodyCount > 0);
                    if (this.IsLocked()) {
                        throw new Error();
                    }
                    // Delete the attached joints.
                    let je = b.m_jointList;
                    while (je) {
                        const je0 = je;
                        je = je.next;
                        if (this.m_destructionListener) {
                            this.m_destructionListener.SayGoodbyeJoint(je0.joint);
                        }
                        this.DestroyJoint(je0.joint);
                        b.m_jointList = je;
                    }
                    b.m_jointList = null;
                    // #if B2_ENABLE_CONTROLLER
                    // @see b2Controller list
                    let coe = b.m_controllerList;
                    while (coe) {
                        const coe0 = coe;
                        coe = coe.nextController;
                        coe0.controller.RemoveBody(b);
                    }
                    // #endif
                    // Delete the attached contacts.
                    let ce = b.m_contactList;
                    while (ce) {
                        const ce0 = ce;
                        ce = ce.next;
                        this.m_contactManager.Destroy(ce0.contact);
                    }
                    b.m_contactList = null;
                    // Delete the attached fixtures. This destroys broad-phase proxies.
                    let f = b.m_fixtureList;
                    while (f) {
                        const f0 = f;
                        f = f.m_next;
                        if (this.m_destructionListener) {
                            this.m_destructionListener.SayGoodbyeFixture(f0);
                        }
                        f0.DestroyProxies();
                        f0.Destroy();
                        b.m_fixtureList = f;
                        b.m_fixtureCount -= 1;
                    }
                    b.m_fixtureList = null;
                    b.m_fixtureCount = 0;
                    // Remove world body list.
                    if (b.m_prev) {
                        b.m_prev.m_next = b.m_next;
                    }
                    if (b.m_next) {
                        b.m_next.m_prev = b.m_prev;
                    }
                    if (b === this.m_bodyList) {
                        this.m_bodyList = b.m_next;
                    }
                    --this.m_bodyCount;
                }
                /// Create a joint to constrain bodies together. No reference to the definition
                /// is retained. This may cause the connected bodies to cease colliding.
                /// @warning This function is locked during callbacks.
                CreateJoint(def) {
                    if (this.IsLocked()) {
                        throw new Error();
                    }
                    const j = b2JointFactory_1.b2JointFactory.Create(def, null);
                    // Connect to the world list.
                    j.m_prev = null;
                    j.m_next = this.m_jointList;
                    if (this.m_jointList) {
                        this.m_jointList.m_prev = j;
                    }
                    this.m_jointList = j;
                    ++this.m_jointCount;
                    // Connect to the bodies' doubly linked lists.
                    // j.m_edgeA.joint = j;
                    // j.m_edgeA.other = j.m_bodyB;
                    j.m_edgeA.prev = null;
                    j.m_edgeA.next = j.m_bodyA.m_jointList;
                    if (j.m_bodyA.m_jointList) {
                        j.m_bodyA.m_jointList.prev = j.m_edgeA;
                    }
                    j.m_bodyA.m_jointList = j.m_edgeA;
                    // j.m_edgeB.joint = j;
                    // j.m_edgeB.other = j.m_bodyA;
                    j.m_edgeB.prev = null;
                    j.m_edgeB.next = j.m_bodyB.m_jointList;
                    if (j.m_bodyB.m_jointList) {
                        j.m_bodyB.m_jointList.prev = j.m_edgeB;
                    }
                    j.m_bodyB.m_jointList = j.m_edgeB;
                    const bodyA = def.bodyA;
                    const bodyB = def.bodyB;
                    // If the joint prevents collisions, then flag any contacts for filtering.
                    if (!def.collideConnected) {
                        let edge = bodyB.GetContactList();
                        while (edge) {
                            if (edge.other === bodyA) {
                                // Flag the contact for filtering at the next time step (where either
                                // body is awake).
                                edge.contact.FlagForFiltering();
                            }
                            edge = edge.next;
                        }
                    }
                    // Note: creating a joint doesn't wake the bodies.
                    return j;
                }
                /// Destroy a joint. This may cause the connected bodies to begin colliding.
                /// @warning This function is locked during callbacks.
                DestroyJoint(j) {
                    if (this.IsLocked()) {
                        throw new Error();
                    }
                    const collideConnected = j.m_collideConnected;
                    // Remove from the doubly linked list.
                    if (j.m_prev) {
                        j.m_prev.m_next = j.m_next;
                    }
                    if (j.m_next) {
                        j.m_next.m_prev = j.m_prev;
                    }
                    if (j === this.m_jointList) {
                        this.m_jointList = j.m_next;
                    }
                    // Disconnect from island graph.
                    const bodyA = j.m_bodyA;
                    const bodyB = j.m_bodyB;
                    // Wake up connected bodies.
                    bodyA.SetAwake(true);
                    bodyB.SetAwake(true);
                    // Remove from body 1.
                    if (j.m_edgeA.prev) {
                        j.m_edgeA.prev.next = j.m_edgeA.next;
                    }
                    if (j.m_edgeA.next) {
                        j.m_edgeA.next.prev = j.m_edgeA.prev;
                    }
                    if (j.m_edgeA === bodyA.m_jointList) {
                        bodyA.m_jointList = j.m_edgeA.next;
                    }
                    j.m_edgeA.prev = null;
                    j.m_edgeA.next = null;
                    // Remove from body 2
                    if (j.m_edgeB.prev) {
                        j.m_edgeB.prev.next = j.m_edgeB.next;
                    }
                    if (j.m_edgeB.next) {
                        j.m_edgeB.next.prev = j.m_edgeB.prev;
                    }
                    if (j.m_edgeB === bodyB.m_jointList) {
                        bodyB.m_jointList = j.m_edgeB.next;
                    }
                    j.m_edgeB.prev = null;
                    j.m_edgeB.next = null;
                    b2JointFactory_1.b2JointFactory.Destroy(j, null);
                    // DEBUG: b2Assert(this.m_jointCount > 0);
                    --this.m_jointCount;
                    // If the joint prevents collisions, then flag any contacts for filtering.
                    if (!collideConnected) {
                        let edge = bodyB.GetContactList();
                        while (edge) {
                            if (edge.other === bodyA) {
                                // Flag the contact for filtering at the next time step (where either
                                // body is awake).
                                edge.contact.FlagForFiltering();
                            }
                            edge = edge.next;
                        }
                    }
                }
                // #if B2_ENABLE_PARTICLE
                CreateParticleSystem(def) {
                    if (this.IsLocked()) {
                        throw new Error();
                    }
                    const p = new b2ParticleSystem_1.b2ParticleSystem(def, this);
                    // Add to world doubly linked list.
                    p.m_prev = null;
                    p.m_next = this.m_particleSystemList;
                    if (this.m_particleSystemList) {
                        this.m_particleSystemList.m_prev = p;
                    }
                    this.m_particleSystemList = p;
                    return p;
                }
                DestroyParticleSystem(p) {
                    if (this.IsLocked()) {
                        throw new Error();
                    }
                    // Remove world particleSystem list.
                    if (p.m_prev) {
                        p.m_prev.m_next = p.m_next;
                    }
                    if (p.m_next) {
                        p.m_next.m_prev = p.m_prev;
                    }
                    if (p === this.m_particleSystemList) {
                        this.m_particleSystemList = p.m_next;
                    }
                }
                CalculateReasonableParticleIterations(timeStep) {
                    if (this.m_particleSystemList === null) {
                        return 1;
                    }
                    function GetSmallestRadius(world) {
                        let smallestRadius = b2Settings_2.b2_maxFloat;
                        for (let system = world.GetParticleSystemList(); system !== null; system = system.m_next) {
                            smallestRadius = b2Math_1.b2Min(smallestRadius, system.GetRadius());
                        }
                        return smallestRadius;
                    }
                    // Use the smallest radius, since that represents the worst-case.
                    return b2Particle_1.b2CalculateParticleIterations(this.m_gravity.Length(), GetSmallestRadius(this), timeStep);
                }
                // #if B2_ENABLE_PARTICLE
                Step(dt, velocityIterations, positionIterations, particleIterations = this.CalculateReasonableParticleIterations(dt)) {
                    // #else
                    // public Step(dt: number, velocityIterations: number, positionIterations: number): void {
                    // #endif
                    const stepTimer = b2World.Step_s_stepTimer.Reset();
                    // If new fixtures were added, we need to find the new contacts.
                    if (this.m_newFixture) {
                        this.m_contactManager.FindNewContacts();
                        this.m_newFixture = false;
                    }
                    this.m_locked = true;
                    const step = b2World.Step_s_step;
                    step.dt = dt;
                    step.velocityIterations = velocityIterations;
                    step.positionIterations = positionIterations;
                    // #if B2_ENABLE_PARTICLE
                    step.particleIterations = particleIterations;
                    // #endif
                    if (dt > 0) {
                        step.inv_dt = 1 / dt;
                    }
                    else {
                        step.inv_dt = 0;
                    }
                    step.dtRatio = this.m_inv_dt0 * dt;
                    step.warmStarting = this.m_warmStarting;
                    // Update contacts. This is where some contacts are destroyed.
                    const timer = b2World.Step_s_timer.Reset();
                    this.m_contactManager.Collide();
                    this.m_profile.collide = timer.GetMilliseconds();
                    // Integrate velocities, solve velocity constraints, and integrate positions.
                    if (this.m_stepComplete && step.dt > 0) {
                        const timer = b2World.Step_s_timer.Reset();
                        // #if B2_ENABLE_PARTICLE
                        for (let p = this.m_particleSystemList; p; p = p.m_next) {
                            p.Solve(step); // Particle Simulation
                        }
                        // #endif
                        this.Solve(step);
                        this.m_profile.solve = timer.GetMilliseconds();
                    }
                    // Handle TOI events.
                    if (this.m_continuousPhysics && step.dt > 0) {
                        const timer = b2World.Step_s_timer.Reset();
                        this.SolveTOI(step);
                        this.m_profile.solveTOI = timer.GetMilliseconds();
                    }
                    if (step.dt > 0) {
                        this.m_inv_dt0 = step.inv_dt;
                    }
                    if (this.m_clearForces) {
                        this.ClearForces();
                    }
                    this.m_locked = false;
                    this.m_profile.step = stepTimer.GetMilliseconds();
                }
                /// Manually clear the force buffer on all bodies. By default, forces are cleared automatically
                /// after each call to Step. The default behavior is modified by calling SetAutoClearForces.
                /// The purpose of this function is to support sub-stepping. Sub-stepping is often used to maintain
                /// a fixed sized time step under a variable frame-rate.
                /// When you perform sub-stepping you will disable auto clearing of forces and instead call
                /// ClearForces after all sub-steps are complete in one pass of your game loop.
                /// @see SetAutoClearForces
                ClearForces() {
                    for (let body = this.m_bodyList; body; body = body.m_next) {
                        body.m_force.SetZero();
                        body.m_torque = 0;
                    }
                }
                // #if B2_ENABLE_PARTICLE
                DrawParticleSystem(system) {
                    if (this.m_debugDraw === null) {
                        return;
                    }
                    const particleCount = system.GetParticleCount();
                    if (particleCount) {
                        const radius = system.GetRadius();
                        const positionBuffer = system.GetPositionBuffer();
                        if (system.m_colorBuffer.data) {
                            const colorBuffer = system.GetColorBuffer();
                            this.m_debugDraw.DrawParticles(positionBuffer, radius, colorBuffer, particleCount);
                        }
                        else {
                            this.m_debugDraw.DrawParticles(positionBuffer, radius, null, particleCount);
                        }
                    }
                }
                DrawDebugData() {
                    if (this.m_debugDraw === null) {
                        return;
                    }
                    const flags = this.m_debugDraw.GetFlags();
                    const color = b2World.DrawDebugData_s_color.SetRGB(0, 0, 0);
                    if (flags & b2Draw_1.b2DrawFlags.e_shapeBit) {
                        for (let b = this.m_bodyList; b; b = b.m_next) {
                            const xf = b.m_xf;
                            this.m_debugDraw.PushTransform(xf);
                            for (let f = b.GetFixtureList(); f; f = f.m_next) {
                                if (!b.IsActive()) {
                                    color.SetRGB(0.5, 0.5, 0.3);
                                    this.DrawShape(f, color);
                                }
                                else if (b.GetType() === b2Body_1.b2BodyType.b2_staticBody) {
                                    color.SetRGB(0.5, 0.9, 0.5);
                                    this.DrawShape(f, color);
                                }
                                else if (b.GetType() === b2Body_1.b2BodyType.b2_kinematicBody) {
                                    color.SetRGB(0.5, 0.5, 0.9);
                                    this.DrawShape(f, color);
                                }
                                else if (!b.IsAwake()) {
                                    color.SetRGB(0.6, 0.6, 0.6);
                                    this.DrawShape(f, color);
                                }
                                else {
                                    color.SetRGB(0.9, 0.7, 0.7);
                                    this.DrawShape(f, color);
                                }
                            }
                            this.m_debugDraw.PopTransform(xf);
                        }
                    }
                    // #if B2_ENABLE_PARTICLE
                    if (flags & b2Draw_1.b2DrawFlags.e_particleBit) {
                        for (let p = this.m_particleSystemList; p; p = p.m_next) {
                            this.DrawParticleSystem(p);
                        }
                    }
                    // #endif
                    if (flags & b2Draw_1.b2DrawFlags.e_jointBit) {
                        for (let j = this.m_jointList; j; j = j.m_next) {
                            this.DrawJoint(j);
                        }
                    }
                    /*
                    if (flags & b2DrawFlags.e_pairBit) {
                      color.SetRGB(0.3, 0.9, 0.9);
                      for (let contact = this.m_contactManager.m_contactList; contact; contact = contact.m_next) {
                        const fixtureA = contact.GetFixtureA();
                        const fixtureB = contact.GetFixtureB();
                
                        const cA = fixtureA.GetAABB().GetCenter();
                        const cB = fixtureB.GetAABB().GetCenter();
                
                        this.m_debugDraw.DrawSegment(cA, cB, color);
                      }
                    }
                    */
                    if (flags & b2Draw_1.b2DrawFlags.e_aabbBit) {
                        color.SetRGB(0.9, 0.3, 0.9);
                        const vs = b2World.DrawDebugData_s_vs;
                        for (let b = this.m_bodyList; b; b = b.m_next) {
                            if (!b.IsActive()) {
                                continue;
                            }
                            for (let f = b.GetFixtureList(); f; f = f.m_next) {
                                for (let i = 0; i < f.m_proxyCount; ++i) {
                                    const proxy = f.m_proxies[i];
                                    const aabb = proxy.treeNode.aabb;
                                    vs[0].Set(aabb.lowerBound.x, aabb.lowerBound.y);
                                    vs[1].Set(aabb.upperBound.x, aabb.lowerBound.y);
                                    vs[2].Set(aabb.upperBound.x, aabb.upperBound.y);
                                    vs[3].Set(aabb.lowerBound.x, aabb.upperBound.y);
                                    this.m_debugDraw.DrawPolygon(vs, 4, color);
                                }
                            }
                        }
                    }
                    if (flags & b2Draw_1.b2DrawFlags.e_centerOfMassBit) {
                        for (let b = this.m_bodyList; b; b = b.m_next) {
                            const xf = b2World.DrawDebugData_s_xf;
                            xf.q.Copy(b.m_xf.q);
                            xf.p.Copy(b.GetWorldCenter());
                            this.m_debugDraw.DrawTransform(xf);
                        }
                    }
                    // #if B2_ENABLE_CONTROLLER
                    // @see b2Controller list
                    if (flags & b2Draw_1.b2DrawFlags.e_controllerBit) {
                        for (let c = this.m_controllerList; c; c = c.m_next) {
                            c.Draw(this.m_debugDraw);
                        }
                    }
                    // #endif
                }
                /// Query the world for all fixtures that potentially overlap the
                /// provided AABB.
                /// @param callback a user implemented callback class.
                /// @param aabb the query box.
                QueryAABB(callback, aabb, fn) {
                    this.m_contactManager.m_broadPhase.Query(aabb, (proxy) => {
                        const fixture_proxy = proxy.userData;
                        // DEBUG: b2Assert(fixture_proxy instanceof b2FixtureProxy);
                        const fixture = fixture_proxy.fixture;
                        if (callback) {
                            return callback.ReportFixture(fixture);
                        }
                        else if (fn) {
                            return fn(fixture);
                        }
                        return true;
                    });
                    // #if B2_ENABLE_PARTICLE
                    if (callback instanceof b2WorldCallbacks_1.b2QueryCallback) {
                        for (let p = this.m_particleSystemList; p; p = p.m_next) {
                            if (callback.ShouldQueryParticleSystem(p)) {
                                p.QueryAABB(callback, aabb);
                            }
                        }
                    }
                    // #endif
                }
                QueryAllAABB(aabb, out = []) {
                    this.QueryAABB(null, aabb, (fixture) => { out.push(fixture); return true; });
                    return out;
                }
                /// Query the world for all fixtures that potentially overlap the
                /// provided point.
                /// @param callback a user implemented callback class.
                /// @param point the query point.
                QueryPointAABB(callback, point, fn) {
                    this.m_contactManager.m_broadPhase.QueryPoint(point, (proxy) => {
                        const fixture_proxy = proxy.userData;
                        // DEBUG: b2Assert(fixture_proxy instanceof b2FixtureProxy);
                        const fixture = fixture_proxy.fixture;
                        if (callback) {
                            return callback.ReportFixture(fixture);
                        }
                        else if (fn) {
                            return fn(fixture);
                        }
                        return true;
                    });
                    // #if B2_ENABLE_PARTICLE
                    if (callback instanceof b2WorldCallbacks_1.b2QueryCallback) {
                        for (let p = this.m_particleSystemList; p; p = p.m_next) {
                            if (callback.ShouldQueryParticleSystem(p)) {
                                p.QueryPointAABB(callback, point);
                            }
                        }
                    }
                    // #endif
                }
                QueryAllPointAABB(point, out = []) {
                    this.QueryPointAABB(null, point, (fixture) => { out.push(fixture); return true; });
                    return out;
                }
                QueryFixtureShape(callback, shape, index, transform, fn) {
                    const aabb = b2World.QueryFixtureShape_s_aabb;
                    shape.ComputeAABB(aabb, transform, index);
                    this.m_contactManager.m_broadPhase.Query(aabb, (proxy) => {
                        const fixture_proxy = proxy.userData;
                        // DEBUG: b2Assert(fixture_proxy instanceof b2FixtureProxy);
                        const fixture = fixture_proxy.fixture;
                        if (b2Collision_1.b2TestOverlapShape(shape, index, fixture.GetShape(), fixture_proxy.childIndex, transform, fixture.GetBody().GetTransform())) {
                            if (callback) {
                                return callback.ReportFixture(fixture);
                            }
                            else if (fn) {
                                return fn(fixture);
                            }
                        }
                        return true;
                    });
                    // #if B2_ENABLE_PARTICLE
                    if (callback instanceof b2WorldCallbacks_1.b2QueryCallback) {
                        for (let p = this.m_particleSystemList; p; p = p.m_next) {
                            if (callback.ShouldQueryParticleSystem(p)) {
                                p.QueryAABB(callback, aabb);
                            }
                        }
                    }
                    // #endif
                }
                QueryAllFixtureShape(shape, index, transform, out = []) {
                    this.QueryFixtureShape(null, shape, index, transform, (fixture) => { out.push(fixture); return true; });
                    return out;
                }
                QueryFixturePoint(callback, point, fn) {
                    this.m_contactManager.m_broadPhase.QueryPoint(point, (proxy) => {
                        const fixture_proxy = proxy.userData;
                        // DEBUG: b2Assert(fixture_proxy instanceof b2FixtureProxy);
                        const fixture = fixture_proxy.fixture;
                        if (fixture.TestPoint(point)) {
                            if (callback) {
                                return callback.ReportFixture(fixture);
                            }
                            else if (fn) {
                                return fn(fixture);
                            }
                        }
                        return true;
                    });
                    // #if B2_ENABLE_PARTICLE
                    if (callback) {
                        for (let p = this.m_particleSystemList; p; p = p.m_next) {
                            if (callback.ShouldQueryParticleSystem(p)) {
                                p.QueryPointAABB(callback, point);
                            }
                        }
                    }
                    // #endif
                }
                QueryAllFixturePoint(point, out = []) {
                    this.QueryFixturePoint(null, point, (fixture) => { out.push(fixture); return true; });
                    return out;
                }
                RayCast(callback, point1, point2, fn) {
                    const input = b2World.RayCast_s_input;
                    input.maxFraction = 1;
                    input.p1.Copy(point1);
                    input.p2.Copy(point2);
                    this.m_contactManager.m_broadPhase.RayCast(input, (input, proxy) => {
                        const fixture_proxy = proxy.userData;
                        // DEBUG: b2Assert(fixture_proxy instanceof b2FixtureProxy);
                        const fixture = fixture_proxy.fixture;
                        const index = fixture_proxy.childIndex;
                        const output = b2World.RayCast_s_output;
                        const hit = fixture.RayCast(output, input, index);
                        if (hit) {
                            const fraction = output.fraction;
                            const point = b2World.RayCast_s_point;
                            point.Set((1 - fraction) * point1.x + fraction * point2.x, (1 - fraction) * point1.y + fraction * point2.y);
                            if (callback) {
                                return callback.ReportFixture(fixture, point, output.normal, fraction);
                            }
                            else if (fn) {
                                return fn(fixture, point, output.normal, fraction);
                            }
                        }
                        return input.maxFraction;
                    });
                    // #if B2_ENABLE_PARTICLE
                    if (callback) {
                        for (let p = this.m_particleSystemList; p; p = p.m_next) {
                            if (callback.ShouldQueryParticleSystem(p)) {
                                p.RayCast(callback, point1, point2);
                            }
                        }
                    }
                    // #endif
                }
                RayCastOne(point1, point2) {
                    let result = null;
                    let min_fraction = 1;
                    this.RayCast(null, point1, point2, (fixture, point, normal, fraction) => {
                        if (fraction < min_fraction) {
                            min_fraction = fraction;
                            result = fixture;
                        }
                        return min_fraction;
                    });
                    return result;
                }
                RayCastAll(point1, point2, out = []) {
                    this.RayCast(null, point1, point2, (fixture, point, normal, fraction) => {
                        out.push(fixture);
                        return 1;
                    });
                    return out;
                }
                /// Get the world body list. With the returned body, use b2Body::GetNext to get
                /// the next body in the world list. A NULL body indicates the end of the list.
                /// @return the head of the world body list.
                GetBodyList() {
                    return this.m_bodyList;
                }
                /// Get the world joint list. With the returned joint, use b2Joint::GetNext to get
                /// the next joint in the world list. A NULL joint indicates the end of the list.
                /// @return the head of the world joint list.
                GetJointList() {
                    return this.m_jointList;
                }
                // #if B2_ENABLE_PARTICLE
                GetParticleSystemList() {
                    return this.m_particleSystemList;
                }
                // #endif
                /// Get the world contact list. With the returned contact, use b2Contact::GetNext to get
                /// the next contact in the world list. A NULL contact indicates the end of the list.
                /// @return the head of the world contact list.
                /// @warning contacts are created and destroyed in the middle of a time step.
                /// Use b2ContactListener to avoid missing contacts.
                GetContactList() {
                    return this.m_contactManager.m_contactList;
                }
                /// Enable/disable sleep.
                SetAllowSleeping(flag) {
                    if (flag === this.m_allowSleep) {
                        return;
                    }
                    this.m_allowSleep = flag;
                    if (!this.m_allowSleep) {
                        for (let b = this.m_bodyList; b; b = b.m_next) {
                            b.SetAwake(true);
                        }
                    }
                }
                GetAllowSleeping() {
                    return this.m_allowSleep;
                }
                /// Enable/disable warm starting. For testing.
                SetWarmStarting(flag) {
                    this.m_warmStarting = flag;
                }
                GetWarmStarting() {
                    return this.m_warmStarting;
                }
                /// Enable/disable continuous physics. For testing.
                SetContinuousPhysics(flag) {
                    this.m_continuousPhysics = flag;
                }
                GetContinuousPhysics() {
                    return this.m_continuousPhysics;
                }
                /// Enable/disable single stepped continuous physics. For testing.
                SetSubStepping(flag) {
                    this.m_subStepping = flag;
                }
                GetSubStepping() {
                    return this.m_subStepping;
                }
                /// Get the number of broad-phase proxies.
                GetProxyCount() {
                    return this.m_contactManager.m_broadPhase.GetProxyCount();
                }
                /// Get the number of bodies.
                GetBodyCount() {
                    return this.m_bodyCount;
                }
                /// Get the number of joints.
                GetJointCount() {
                    return this.m_jointCount;
                }
                /// Get the number of contacts (each may have 0 or more contact points).
                GetContactCount() {
                    return this.m_contactManager.m_contactCount;
                }
                /// Get the height of the dynamic tree.
                GetTreeHeight() {
                    return this.m_contactManager.m_broadPhase.GetTreeHeight();
                }
                /// Get the balance of the dynamic tree.
                GetTreeBalance() {
                    return this.m_contactManager.m_broadPhase.GetTreeBalance();
                }
                /// Get the quality metric of the dynamic tree. The smaller the better.
                /// The minimum is 1.
                GetTreeQuality() {
                    return this.m_contactManager.m_broadPhase.GetTreeQuality();
                }
                /// Change the global gravity vector.
                SetGravity(gravity, wake = true) {
                    if (!b2Math_1.b2Vec2.IsEqualToV(this.m_gravity, gravity)) {
                        this.m_gravity.Copy(gravity);
                        if (wake) {
                            for (let b = this.m_bodyList; b; b = b.m_next) {
                                b.SetAwake(true);
                            }
                        }
                    }
                }
                /// Get the global gravity vector.
                GetGravity() {
                    return this.m_gravity;
                }
                /// Is the world locked (in the middle of a time step).
                IsLocked() {
                    return this.m_locked;
                }
                /// Set flag to control automatic clearing of forces after each time step.
                SetAutoClearForces(flag) {
                    this.m_clearForces = flag;
                }
                /// Get the flag that controls automatic clearing of forces after each time step.
                GetAutoClearForces() {
                    return this.m_clearForces;
                }
                /// Shift the world origin. Useful for large worlds.
                /// The body shift formula is: position -= newOrigin
                /// @param newOrigin the new origin with respect to the old origin
                ShiftOrigin(newOrigin) {
                    if (this.IsLocked()) {
                        throw new Error();
                    }
                    for (let b = this.m_bodyList; b; b = b.m_next) {
                        b.m_xf.p.SelfSub(newOrigin);
                        b.m_sweep.c0.SelfSub(newOrigin);
                        b.m_sweep.c.SelfSub(newOrigin);
                    }
                    for (let j = this.m_jointList; j; j = j.m_next) {
                        j.ShiftOrigin(newOrigin);
                    }
                    this.m_contactManager.m_broadPhase.ShiftOrigin(newOrigin);
                }
                /// Get the contact manager for testing.
                GetContactManager() {
                    return this.m_contactManager;
                }
                /// Get the current profile.
                GetProfile() {
                    return this.m_profile;
                }
                /// Dump the world into the log file.
                /// @warning this should be called outside of a time step.
                Dump(log) {
                    if (this.m_locked) {
                        return;
                    }
                    log("const g: b2Vec2 = new b2Vec2(%.15f, %.15f);\n", this.m_gravity.x, this.m_gravity.y);
                    log("this.m_world.SetGravity(g);\n");
                    log("const bodies: b2Body[] = [];\n");
                    log("const joints: b2Joint[] = [];\n");
                    let i = 0;
                    for (let b = this.m_bodyList; b; b = b.m_next) {
                        b.m_islandIndex = i;
                        b.Dump(log);
                        ++i;
                    }
                    i = 0;
                    for (let j = this.m_jointList; j; j = j.m_next) {
                        j.m_index = i;
                        ++i;
                    }
                    // First pass on joints, skip gear joints.
                    for (let j = this.m_jointList; j; j = j.m_next) {
                        if (j.m_type === b2Joint_1.b2JointType.e_gearJoint) {
                            continue;
                        }
                        log("{\n");
                        j.Dump(log);
                        log("}\n");
                    }
                    // Second pass on joints, only gear joints.
                    for (let j = this.m_jointList; j; j = j.m_next) {
                        if (j.m_type !== b2Joint_1.b2JointType.e_gearJoint) {
                            continue;
                        }
                        log("{\n");
                        j.Dump(log);
                        log("}\n");
                    }
                }
                DrawJoint(joint) {
                    if (this.m_debugDraw === null) {
                        return;
                    }
                    const bodyA = joint.GetBodyA();
                    const bodyB = joint.GetBodyB();
                    const xf1 = bodyA.m_xf;
                    const xf2 = bodyB.m_xf;
                    const x1 = xf1.p;
                    const x2 = xf2.p;
                    const p1 = joint.GetAnchorA(b2World.DrawJoint_s_p1);
                    const p2 = joint.GetAnchorB(b2World.DrawJoint_s_p2);
                    const color = b2World.DrawJoint_s_color.SetRGB(0.5, 0.8, 0.8);
                    switch (joint.m_type) {
                        case b2Joint_1.b2JointType.e_distanceJoint:
                            this.m_debugDraw.DrawSegment(p1, p2, color);
                            break;
                        case b2Joint_1.b2JointType.e_pulleyJoint:
                            {
                                const pulley = joint;
                                const s1 = pulley.GetGroundAnchorA();
                                const s2 = pulley.GetGroundAnchorB();
                                this.m_debugDraw.DrawSegment(s1, p1, color);
                                this.m_debugDraw.DrawSegment(s2, p2, color);
                                this.m_debugDraw.DrawSegment(s1, s2, color);
                            }
                            break;
                        case b2Joint_1.b2JointType.e_mouseJoint:
                            // don't draw this
                            this.m_debugDraw.DrawSegment(p1, p2, color);
                            break;
                        default:
                            this.m_debugDraw.DrawSegment(x1, p1, color);
                            this.m_debugDraw.DrawSegment(p1, p2, color);
                            this.m_debugDraw.DrawSegment(x2, p2, color);
                    }
                }
                DrawShape(fixture, color) {
                    if (this.m_debugDraw === null) {
                        return;
                    }
                    const shape = fixture.GetShape();
                    switch (shape.m_type) {
                        case b2Shape_1.b2ShapeType.e_circleShape:
                            {
                                const circle = shape;
                                const center = circle.m_p;
                                const radius = circle.m_radius;
                                const axis = b2Math_1.b2Vec2.UNITX;
                                this.m_debugDraw.DrawSolidCircle(center, radius, axis, color);
                            }
                            break;
                        case b2Shape_1.b2ShapeType.e_edgeShape:
                            {
                                const edge = shape;
                                const v1 = edge.m_vertex1;
                                const v2 = edge.m_vertex2;
                                this.m_debugDraw.DrawSegment(v1, v2, color);
                            }
                            break;
                        case b2Shape_1.b2ShapeType.e_chainShape:
                            {
                                const chain = shape;
                                const count = chain.m_count;
                                const vertices = chain.m_vertices;
                                let v1 = vertices[0];
                                this.m_debugDraw.DrawCircle(v1, 0.05, color);
                                for (let i = 1; i < count; ++i) {
                                    const v2 = vertices[i];
                                    this.m_debugDraw.DrawSegment(v1, v2, color);
                                    this.m_debugDraw.DrawCircle(v2, 0.05, color);
                                    v1 = v2;
                                }
                            }
                            break;
                        case b2Shape_1.b2ShapeType.e_polygonShape:
                            {
                                const poly = shape;
                                const vertexCount = poly.m_count;
                                const vertices = poly.m_vertices;
                                this.m_debugDraw.DrawSolidPolygon(vertices, vertexCount, color);
                            }
                            break;
                    }
                }
                Solve(step) {
                    // #if B2_ENABLE_PARTICLE
                    // update previous transforms
                    for (let b = this.m_bodyList; b; b = b.m_next) {
                        b.m_xf0.Copy(b.m_xf);
                    }
                    // #endif
                    // #if B2_ENABLE_CONTROLLER
                    // @see b2Controller list
                    for (let controller = this.m_controllerList; controller; controller = controller.m_next) {
                        controller.Step(step);
                    }
                    // #endif
                    this.m_profile.solveInit = 0;
                    this.m_profile.solveVelocity = 0;
                    this.m_profile.solvePosition = 0;
                    // Size the island for the worst case.
                    const island = this.m_island;
                    island.Initialize(this.m_bodyCount, this.m_contactManager.m_contactCount, this.m_jointCount, null, // this.m_stackAllocator,
                    this.m_contactManager.m_contactListener);
                    // Clear all the island flags.
                    for (let b = this.m_bodyList; b; b = b.m_next) {
                        b.m_islandFlag = false;
                    }
                    for (let c = this.m_contactManager.m_contactList; c; c = c.m_next) {
                        c.m_islandFlag = false;
                    }
                    for (let j = this.m_jointList; j; j = j.m_next) {
                        j.m_islandFlag = false;
                    }
                    // Build and simulate all awake islands.
                    // DEBUG: const stackSize: number = this.m_bodyCount;
                    const stack = this.s_stack;
                    for (let seed = this.m_bodyList; seed; seed = seed.m_next) {
                        if (seed.m_islandFlag) {
                            continue;
                        }
                        if (!seed.IsAwake() || !seed.IsActive()) {
                            continue;
                        }
                        // The seed can be dynamic or kinematic.
                        if (seed.GetType() === b2Body_1.b2BodyType.b2_staticBody) {
                            continue;
                        }
                        // Reset island and stack.
                        island.Clear();
                        let stackCount = 0;
                        stack[stackCount++] = seed;
                        seed.m_islandFlag = true;
                        // Perform a depth first search (DFS) on the constraint graph.
                        while (stackCount > 0) {
                            // Grab the next body off the stack and add it to the island.
                            const b = stack[--stackCount];
                            if (!b) {
                                throw new Error();
                            }
                            // DEBUG: b2Assert(b.IsActive());
                            island.AddBody(b);
                            // Make sure the body is awake.
                            b.SetAwake(true);
                            // To keep islands as small as possible, we don't
                            // propagate islands across static bodies.
                            if (b.GetType() === b2Body_1.b2BodyType.b2_staticBody) {
                                continue;
                            }
                            // Search all contacts connected to this body.
                            for (let ce = b.m_contactList; ce; ce = ce.next) {
                                const contact = ce.contact;
                                // Has this contact already been added to an island?
                                if (contact.m_islandFlag) {
                                    continue;
                                }
                                // Is this contact solid and touching?
                                if (!contact.IsEnabled() || !contact.IsTouching()) {
                                    continue;
                                }
                                // Skip sensors.
                                const sensorA = contact.m_fixtureA.m_isSensor;
                                const sensorB = contact.m_fixtureB.m_isSensor;
                                if (sensorA || sensorB) {
                                    continue;
                                }
                                island.AddContact(contact);
                                contact.m_islandFlag = true;
                                const other = ce.other;
                                if (!other) {
                                    throw new Error();
                                }
                                // Was the other body already added to this island?
                                if (other.m_islandFlag) {
                                    continue;
                                }
                                // DEBUG: b2Assert(stackCount < stackSize);
                                stack[stackCount++] = other;
                                other.m_islandFlag = true;
                            }
                            // Search all joints connect to this body.
                            for (let je = b.m_jointList; je; je = je.next) {
                                if (je.joint.m_islandFlag) {
                                    continue;
                                }
                                const other = je.other;
                                // Don't simulate joints connected to inactive bodies.
                                if (!other.IsActive()) {
                                    continue;
                                }
                                island.AddJoint(je.joint);
                                je.joint.m_islandFlag = true;
                                if (other.m_islandFlag) {
                                    continue;
                                }
                                // DEBUG: b2Assert(stackCount < stackSize);
                                stack[stackCount++] = other;
                                other.m_islandFlag = true;
                            }
                        }
                        const profile = new b2TimeStep_1.b2Profile();
                        island.Solve(profile, step, this.m_gravity, this.m_allowSleep);
                        this.m_profile.solveInit += profile.solveInit;
                        this.m_profile.solveVelocity += profile.solveVelocity;
                        this.m_profile.solvePosition += profile.solvePosition;
                        // Post solve cleanup.
                        for (let i = 0; i < island.m_bodyCount; ++i) {
                            // Allow static bodies to participate in other islands.
                            const b = island.m_bodies[i];
                            if (b.GetType() === b2Body_1.b2BodyType.b2_staticBody) {
                                b.m_islandFlag = false;
                            }
                        }
                    }
                    for (let i = 0; i < stack.length; ++i) {
                        if (!stack[i]) {
                            break;
                        }
                        stack[i] = null;
                    }
                    const timer = new b2Timer_1.b2Timer();
                    // Synchronize fixtures, check for out of range bodies.
                    for (let b = this.m_bodyList; b; b = b.m_next) {
                        // If a body was not in an island then it did not move.
                        if (!b.m_islandFlag) {
                            continue;
                        }
                        if (b.GetType() === b2Body_1.b2BodyType.b2_staticBody) {
                            continue;
                        }
                        // Update fixtures (for broad-phase).
                        b.SynchronizeFixtures();
                    }
                    // Look for new contacts.
                    this.m_contactManager.FindNewContacts();
                    this.m_profile.broadphase = timer.GetMilliseconds();
                }
                SolveTOI(step) {
                    // b2Island island(2 * b2_maxTOIContacts, b2_maxTOIContacts, 0, &m_stackAllocator, m_contactManager.m_contactListener);
                    const island = this.m_island;
                    island.Initialize(2 * b2Settings_1.b2_maxTOIContacts, b2Settings_1.b2_maxTOIContacts, 0, null, this.m_contactManager.m_contactListener);
                    if (this.m_stepComplete) {
                        for (let b = this.m_bodyList; b; b = b.m_next) {
                            b.m_islandFlag = false;
                            b.m_sweep.alpha0 = 0;
                        }
                        for (let c = this.m_contactManager.m_contactList; c; c = c.m_next) {
                            // Invalidate TOI
                            c.m_toiFlag = false;
                            c.m_islandFlag = false;
                            c.m_toiCount = 0;
                            c.m_toi = 1;
                        }
                    }
                    // Find TOI events and solve them.
                    for (;;) {
                        // Find the first TOI.
                        let minContact = null;
                        let minAlpha = 1;
                        for (let c = this.m_contactManager.m_contactList; c; c = c.m_next) {
                            // Is this contact disabled?
                            if (!c.IsEnabled()) {
                                continue;
                            }
                            // Prevent excessive sub-stepping.
                            if (c.m_toiCount > b2Settings_1.b2_maxSubSteps) {
                                continue;
                            }
                            let alpha = 1;
                            if (c.m_toiFlag) {
                                // This contact has a valid cached TOI.
                                alpha = c.m_toi;
                            }
                            else {
                                const fA = c.GetFixtureA();
                                const fB = c.GetFixtureB();
                                // Is there a sensor?
                                if (fA.IsSensor() || fB.IsSensor()) {
                                    continue;
                                }
                                const bA = fA.GetBody();
                                const bB = fB.GetBody();
                                const typeA = bA.m_type;
                                const typeB = bB.m_type;
                                // DEBUG: b2Assert(typeA !== b2BodyType.b2_staticBody || typeB !== b2BodyType.b2_staticBody);
                                const activeA = bA.IsAwake() && typeA !== b2Body_1.b2BodyType.b2_staticBody;
                                const activeB = bB.IsAwake() && typeB !== b2Body_1.b2BodyType.b2_staticBody;
                                // Is at least one body active (awake and dynamic or kinematic)?
                                if (!activeA && !activeB) {
                                    continue;
                                }
                                const collideA = bA.IsBullet() || typeA !== b2Body_1.b2BodyType.b2_dynamicBody;
                                const collideB = bB.IsBullet() || typeB !== b2Body_1.b2BodyType.b2_dynamicBody;
                                // Are these two non-bullet dynamic bodies?
                                if (!collideA && !collideB) {
                                    continue;
                                }
                                // Compute the TOI for this contact.
                                // Put the sweeps onto the same time interval.
                                let alpha0 = bA.m_sweep.alpha0;
                                if (bA.m_sweep.alpha0 < bB.m_sweep.alpha0) {
                                    alpha0 = bB.m_sweep.alpha0;
                                    bA.m_sweep.Advance(alpha0);
                                }
                                else if (bB.m_sweep.alpha0 < bA.m_sweep.alpha0) {
                                    alpha0 = bA.m_sweep.alpha0;
                                    bB.m_sweep.Advance(alpha0);
                                }
                                // DEBUG: b2Assert(alpha0 < 1);
                                const indexA = c.GetChildIndexA();
                                const indexB = c.GetChildIndexB();
                                // Compute the time of impact in interval [0, minTOI]
                                const input = b2World.SolveTOI_s_toi_input;
                                input.proxyA.SetShape(fA.GetShape(), indexA);
                                input.proxyB.SetShape(fB.GetShape(), indexB);
                                input.sweepA.Copy(bA.m_sweep);
                                input.sweepB.Copy(bB.m_sweep);
                                input.tMax = 1;
                                const output = b2World.SolveTOI_s_toi_output;
                                b2TimeOfImpact_1.b2TimeOfImpact(output, input);
                                // Beta is the fraction of the remaining portion of the .
                                const beta = output.t;
                                if (output.state === b2TimeOfImpact_1.b2TOIOutputState.e_touching) {
                                    alpha = b2Math_1.b2Min(alpha0 + (1 - alpha0) * beta, 1);
                                }
                                else {
                                    alpha = 1;
                                }
                                c.m_toi = alpha;
                                c.m_toiFlag = true;
                            }
                            if (alpha < minAlpha) {
                                // This is the minimum TOI found so far.
                                minContact = c;
                                minAlpha = alpha;
                            }
                        }
                        if (minContact === null || 1 - 10 * b2Settings_1.b2_epsilon < minAlpha) {
                            // No more TOI events. Done!
                            this.m_stepComplete = true;
                            break;
                        }
                        // Advance the bodies to the TOI.
                        const fA = minContact.GetFixtureA();
                        const fB = minContact.GetFixtureB();
                        const bA = fA.GetBody();
                        const bB = fB.GetBody();
                        const backup1 = b2World.SolveTOI_s_backup1.Copy(bA.m_sweep);
                        const backup2 = b2World.SolveTOI_s_backup2.Copy(bB.m_sweep);
                        bA.Advance(minAlpha);
                        bB.Advance(minAlpha);
                        // The TOI contact likely has some new contact points.
                        minContact.Update(this.m_contactManager.m_contactListener);
                        minContact.m_toiFlag = false;
                        ++minContact.m_toiCount;
                        // Is the contact solid?
                        if (!minContact.IsEnabled() || !minContact.IsTouching()) {
                            // Restore the sweeps.
                            minContact.SetEnabled(false);
                            bA.m_sweep.Copy(backup1);
                            bB.m_sweep.Copy(backup2);
                            bA.SynchronizeTransform();
                            bB.SynchronizeTransform();
                            continue;
                        }
                        bA.SetAwake(true);
                        bB.SetAwake(true);
                        // Build the island
                        island.Clear();
                        island.AddBody(bA);
                        island.AddBody(bB);
                        island.AddContact(minContact);
                        bA.m_islandFlag = true;
                        bB.m_islandFlag = true;
                        minContact.m_islandFlag = true;
                        // Get contacts on bodyA and bodyB.
                        // const bodies: b2Body[] = [bA, bB];
                        for (let i = 0; i < 2; ++i) {
                            const body = (i === 0) ? (bA) : (bB); // bodies[i];
                            if (body.m_type === b2Body_1.b2BodyType.b2_dynamicBody) {
                                for (let ce = body.m_contactList; ce; ce = ce.next) {
                                    if (island.m_bodyCount === island.m_bodyCapacity) {
                                        break;
                                    }
                                    if (island.m_contactCount === island.m_contactCapacity) {
                                        break;
                                    }
                                    const contact = ce.contact;
                                    // Has this contact already been added to the island?
                                    if (contact.m_islandFlag) {
                                        continue;
                                    }
                                    // Only add static, kinematic, or bullet bodies.
                                    const other = ce.other;
                                    if (other.m_type === b2Body_1.b2BodyType.b2_dynamicBody &&
                                        !body.IsBullet() && !other.IsBullet()) {
                                        continue;
                                    }
                                    // Skip sensors.
                                    const sensorA = contact.m_fixtureA.m_isSensor;
                                    const sensorB = contact.m_fixtureB.m_isSensor;
                                    if (sensorA || sensorB) {
                                        continue;
                                    }
                                    // Tentatively advance the body to the TOI.
                                    const backup = b2World.SolveTOI_s_backup.Copy(other.m_sweep);
                                    if (!other.m_islandFlag) {
                                        other.Advance(minAlpha);
                                    }
                                    // Update the contact points
                                    contact.Update(this.m_contactManager.m_contactListener);
                                    // Was the contact disabled by the user?
                                    if (!contact.IsEnabled()) {
                                        other.m_sweep.Copy(backup);
                                        other.SynchronizeTransform();
                                        continue;
                                    }
                                    // Are there contact points?
                                    if (!contact.IsTouching()) {
                                        other.m_sweep.Copy(backup);
                                        other.SynchronizeTransform();
                                        continue;
                                    }
                                    // Add the contact to the island
                                    contact.m_islandFlag = true;
                                    island.AddContact(contact);
                                    // Has the other body already been added to the island?
                                    if (other.m_islandFlag) {
                                        continue;
                                    }
                                    // Add the other body to the island.
                                    other.m_islandFlag = true;
                                    if (other.m_type !== b2Body_1.b2BodyType.b2_staticBody) {
                                        other.SetAwake(true);
                                    }
                                    island.AddBody(other);
                                }
                            }
                        }
                        const subStep = b2World.SolveTOI_s_subStep;
                        subStep.dt = (1 - minAlpha) * step.dt;
                        subStep.inv_dt = 1 / subStep.dt;
                        subStep.dtRatio = 1;
                        subStep.positionIterations = 20;
                        subStep.velocityIterations = step.velocityIterations;
                        // #if B2_ENABLE_PARTICLE
                        subStep.particleIterations = step.particleIterations;
                        // #endif
                        subStep.warmStarting = false;
                        island.SolveTOI(subStep, bA.m_islandIndex, bB.m_islandIndex);
                        // Reset island flags and synchronize broad-phase proxies.
                        for (let i = 0; i < island.m_bodyCount; ++i) {
                            const body = island.m_bodies[i];
                            body.m_islandFlag = false;
                            if (body.m_type !== b2Body_1.b2BodyType.b2_dynamicBody) {
                                continue;
                            }
                            body.SynchronizeFixtures();
                            // Invalidate all contact TOIs on this displaced body.
                            for (let ce = body.m_contactList; ce; ce = ce.next) {
                                ce.contact.m_toiFlag = false;
                                ce.contact.m_islandFlag = false;
                            }
                        }
                        // Commit fixture proxy movements to the broad-phase so that new contacts are created.
                        // Also, some contacts can be destroyed.
                        this.m_contactManager.FindNewContacts();
                        if (this.m_subStepping) {
                            this.m_stepComplete = false;
                            break;
                        }
                    }
                }
                // #if B2_ENABLE_CONTROLLER
                AddController(controller) {
                    // b2Assert(controller.m_world === null, "Controller can only be a member of one world");
                    // controller.m_world = this;
                    controller.m_next = this.m_controllerList;
                    controller.m_prev = null;
                    if (this.m_controllerList) {
                        this.m_controllerList.m_prev = controller;
                    }
                    this.m_controllerList = controller;
                    ++this.m_controllerCount;
                    return controller;
                }
                RemoveController(controller) {
                    // b2Assert(controller.m_world === this, "Controller is not a member of this world");
                    if (controller.m_prev) {
                        controller.m_prev.m_next = controller.m_next;
                    }
                    if (controller.m_next) {
                        controller.m_next.m_prev = controller.m_prev;
                    }
                    if (this.m_controllerList === controller) {
                        this.m_controllerList = controller.m_next;
                    }
                    --this.m_controllerCount;
                    controller.m_prev = null;
                    controller.m_next = null;
                    // delete controller.m_world; // = null;
                    return controller;
                }
            };
            // #endif
            /// Take a time step. This performs collision detection, integration,
            /// and constraint solution.
            /// @param timeStep the amount of time to simulate, this should not vary.
            /// @param velocityIterations for the velocity constraint solver.
            /// @param positionIterations for the position constraint solver.
            b2World.Step_s_step = new b2TimeStep_1.b2TimeStep();
            b2World.Step_s_stepTimer = new b2Timer_1.b2Timer();
            b2World.Step_s_timer = new b2Timer_1.b2Timer();
            // #endif
            /// Call this to draw shapes and other debug draw data.
            b2World.DrawDebugData_s_color = new b2Draw_1.b2Color(0, 0, 0);
            b2World.DrawDebugData_s_vs = b2Math_1.b2Vec2.MakeArray(4);
            b2World.DrawDebugData_s_xf = new b2Math_1.b2Transform();
            b2World.QueryFixtureShape_s_aabb = new b2Collision_1.b2AABB();
            /// Ray-cast the world for all fixtures in the path of the ray. Your callback
            /// controls whether you get the closest point, any point, or n-points.
            /// The ray-cast ignores shapes that contain the starting point.
            /// @param callback a user implemented callback class.
            /// @param point1 the ray starting point
            /// @param point2 the ray ending point
            b2World.RayCast_s_input = new b2Collision_1.b2RayCastInput();
            b2World.RayCast_s_output = new b2Collision_1.b2RayCastOutput();
            b2World.RayCast_s_point = new b2Math_1.b2Vec2();
            b2World.DrawJoint_s_p1 = new b2Math_1.b2Vec2();
            b2World.DrawJoint_s_p2 = new b2Math_1.b2Vec2();
            b2World.DrawJoint_s_color = new b2Draw_1.b2Color(0.5, 0.8, 0.8);
            b2World.SolveTOI_s_subStep = new b2TimeStep_1.b2TimeStep();
            b2World.SolveTOI_s_backup = new b2Math_1.b2Sweep();
            b2World.SolveTOI_s_backup1 = new b2Math_1.b2Sweep();
            b2World.SolveTOI_s_backup2 = new b2Math_1.b2Sweep();
            b2World.SolveTOI_s_toi_input = new b2TimeOfImpact_1.b2TOIInput();
            b2World.SolveTOI_s_toi_output = new b2TimeOfImpact_1.b2TOIOutput();
            exports_1("b2World", b2World);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJXb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0JveDJEL0R5bmFtaWNzL2IyV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQ0YsU0FBUztZQUVULHFFQUFxRTtZQUNyRSxzRUFBc0U7WUFDdEUsMEJBQTBCO1lBQzFCLFVBQUE7Z0JBOENFLFNBQVM7Z0JBRVQsNkJBQTZCO2dCQUM3Qiw0Q0FBNEM7Z0JBQzVDLFlBQVksT0FBVztvQkFqRHZCLHFDQUFxQztvQkFDckMscUNBQXFDO29CQUU5QixpQkFBWSxHQUFZLEtBQUssQ0FBQztvQkFDOUIsYUFBUSxHQUFZLEtBQUssQ0FBQztvQkFDMUIsa0JBQWEsR0FBWSxJQUFJLENBQUM7b0JBRXJCLHFCQUFnQixHQUFxQixJQUFJLG1DQUFnQixFQUFFLENBQUM7b0JBRXJFLGVBQVUsR0FBa0IsSUFBSSxDQUFDO29CQUNqQyxnQkFBVyxHQUFtQixJQUFJLENBQUM7b0JBRTFDLHlCQUF5QjtvQkFDbEIseUJBQW9CLEdBQTRCLElBQUksQ0FBQztvQkFDNUQsU0FBUztvQkFFRixnQkFBVyxHQUFXLENBQUMsQ0FBQztvQkFDeEIsaUJBQVksR0FBVyxDQUFDLENBQUM7b0JBRWhCLGNBQVMsR0FBVyxJQUFJLGVBQU0sRUFBRSxDQUFDO29CQUMxQyxpQkFBWSxHQUFZLElBQUksQ0FBQztvQkFFN0IsMEJBQXFCLEdBQWlDLElBQUksQ0FBQztvQkFDM0QsZ0JBQVcsR0FBa0IsSUFBSSxDQUFDO29CQUV6QyxpREFBaUQ7b0JBQ2pELGdDQUFnQztvQkFDekIsY0FBUyxHQUFXLENBQUMsQ0FBQztvQkFFN0Isc0NBQXNDO29CQUMvQixtQkFBYyxHQUFZLElBQUksQ0FBQztvQkFDL0Isd0JBQW1CLEdBQVksSUFBSSxDQUFDO29CQUNw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