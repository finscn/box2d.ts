System.register("Common/b2Settings", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function b2Assert(condition, ...args) {
        if (!condition) {
            throw new Error(...args);
        }
    }
    exports_1("b2Assert", b2Assert);
    function b2Maybe(value, def) {
        return value !== undefined ? value : def;
    }
    exports_1("b2Maybe", b2Maybe);
    function b2Alloc(size) {
        return null;
    }
    exports_1("b2Alloc", b2Alloc);
    function b2Free(mem) {
    }
    exports_1("b2Free", b2Free);
    function b2Log(message, ...args) {
    }
    exports_1("b2Log", b2Log);
    function b2ParseInt(v) {
        return parseInt(v, 10);
    }
    exports_1("b2ParseInt", b2ParseInt);
    function b2ParseUInt(v) {
        return Math.abs(parseInt(v, 10));
    }
    exports_1("b2ParseUInt", b2ParseUInt);
    function b2MakeArray(length, init) {
        const a = [];
        for (let i = 0; i < length; ++i) {
            a.push(init(i));
        }
        return a;
    }
    exports_1("b2MakeArray", b2MakeArray);
    function b2MakeNullArray(length) {
        const a = [];
        for (let i = 0; i < length; ++i) {
            a.push(null);
        }
        return a;
    }
    exports_1("b2MakeNullArray", b2MakeNullArray);
    function b2MakeNumberArray(length, init = 0) {
        const a = [];
        for (let i = 0; i < length; ++i) {
            a.push(init);
        }
        return a;
    }
    exports_1("b2MakeNumberArray", b2MakeNumberArray);
    var b2_maxFloat, b2_epsilon, b2_epsilon_sq, b2_pi, b2_maxManifoldPoints, b2_maxPolygonVertices, b2_aabbExtension, b2_aabbMultiplier, b2_linearSlop, b2_angularSlop, b2_polygonRadius, b2_maxSubSteps, b2_maxTOIContacts, b2_velocityThreshold, b2_maxLinearCorrection, b2_maxAngularCorrection, b2_maxTranslation, b2_maxTranslationSquared, b2_maxRotation, b2_maxRotationSquared, b2_baumgarte, b2_toiBaumgarte, b2_invalidParticleIndex, b2_maxParticleIndex, b2_particleStride, b2_minParticleWeight, b2_maxParticlePressure, b2_maxParticleForce, b2_maxTriadDistance, b2_maxTriadDistanceSquared, b2_minParticleSystemBufferCapacity, b2_barrierCollisionTime, b2_timeToSleep, b2_linearSleepTolerance, b2_angularSleepTolerance, b2Version, b2_version, b2_changelist;
    return {
        setters: [],
        execute: function () {
            exports_1("b2_maxFloat", b2_maxFloat = 1E+37);
            exports_1("b2_epsilon", b2_epsilon = 1E-5);
            exports_1("b2_epsilon_sq", b2_epsilon_sq = (b2_epsilon * b2_epsilon));
            exports_1("b2_pi", b2_pi = 3.14159265359);
            exports_1("b2_maxManifoldPoints", b2_maxManifoldPoints = 2);
            exports_1("b2_maxPolygonVertices", b2_maxPolygonVertices = 8);
            exports_1("b2_aabbExtension", b2_aabbExtension = 0.1);
            exports_1("b2_aabbMultiplier", b2_aabbMultiplier = 2);
            exports_1("b2_linearSlop", b2_linearSlop = 0.008);
            exports_1("b2_angularSlop", b2_angularSlop = 2 / 180 * b2_pi);
            exports_1("b2_polygonRadius", b2_polygonRadius = 2 * b2_linearSlop);
            exports_1("b2_maxSubSteps", b2_maxSubSteps = 8);
            exports_1("b2_maxTOIContacts", b2_maxTOIContacts = 32);
            exports_1("b2_velocityThreshold", b2_velocityThreshold = 1);
            exports_1("b2_maxLinearCorrection", b2_maxLinearCorrection = 0.2);
            exports_1("b2_maxAngularCorrection", b2_maxAngularCorrection = 8 / 180 * b2_pi);
            exports_1("b2_maxTranslation", b2_maxTranslation = 2);
            exports_1("b2_maxTranslationSquared", b2_maxTranslationSquared = b2_maxTranslation * b2_maxTranslation);
            exports_1("b2_maxRotation", b2_maxRotation = 0.5 * b2_pi);
            exports_1("b2_maxRotationSquared", b2_maxRotationSquared = b2_maxRotation * b2_maxRotation);
            exports_1("b2_baumgarte", b2_baumgarte = 0.2);
            exports_1("b2_toiBaumgarte", b2_toiBaumgarte = 0.75);
            exports_1("b2_invalidParticleIndex", b2_invalidParticleIndex = -1);
            exports_1("b2_maxParticleIndex", b2_maxParticleIndex = 0x7FFFFFFF);
            exports_1("b2_particleStride", b2_particleStride = 0.75);
            exports_1("b2_minParticleWeight", b2_minParticleWeight = 1.0);
            exports_1("b2_maxParticlePressure", b2_maxParticlePressure = 0.25);
            exports_1("b2_maxParticleForce", b2_maxParticleForce = 0.5);
            exports_1("b2_maxTriadDistance", b2_maxTriadDistance = 2.0);
            exports_1("b2_maxTriadDistanceSquared", b2_maxTriadDistanceSquared = (b2_maxTriadDistance * b2_maxTriadDistance));
            exports_1("b2_minParticleSystemBufferCapacity", b2_minParticleSystemBufferCapacity = 256);
            exports_1("b2_barrierCollisionTime", b2_barrierCollisionTime = 2.5);
            exports_1("b2_timeToSleep", b2_timeToSleep = 0.5);
            exports_1("b2_linearSleepTolerance", b2_linearSleepTolerance = 0.01);
            exports_1("b2_angularSleepTolerance", b2_angularSleepTolerance = 2 / 180 * b2_pi);
            b2Version = class b2Version {
                constructor(major = 0, minor = 0, revision = 0) {
                    this.major = 0;
                    this.minor = 0;
                    this.revision = 0;
                    this.major = major;
                    this.minor = minor;
                    this.revision = revision;
                }
                toString() {
                    return this.major + "." + this.minor + "." + this.revision;
                }
            };
            exports_1("b2Version", b2Version);
            exports_1("b2_version", b2_version = new b2Version(2, 3, 2));
            exports_1("b2_changelist", b2_changelist = 313);
        }
    };
});
System.register("Common/b2Math", ["Common/b2Settings"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function b2Clamp(a, lo, hi) {
        return (a < lo) ? (lo) : ((a > hi) ? (hi) : (a));
    }
    exports_2("b2Clamp", b2Clamp);
    function b2Swap(a, b) {
        const tmp = a[0];
        a[0] = b[0];
        b[0] = tmp;
    }
    exports_2("b2Swap", b2Swap);
    function b2Sq(n) {
        return n * n;
    }
    exports_2("b2Sq", b2Sq);
    function b2InvSqrt(n) {
        return 1 / Math.sqrt(n);
    }
    exports_2("b2InvSqrt", b2InvSqrt);
    function b2DegToRad(degrees) {
        return degrees * b2_pi_over_180;
    }
    exports_2("b2DegToRad", b2DegToRad);
    function b2RadToDeg(radians) {
        return radians * b2_180_over_pi;
    }
    exports_2("b2RadToDeg", b2RadToDeg);
    function b2NextPowerOfTwo(x) {
        x |= (x >> 1) & 0x7FFFFFFF;
        x |= (x >> 2) & 0x3FFFFFFF;
        x |= (x >> 4) & 0x0FFFFFFF;
        x |= (x >> 8) & 0x00FFFFFF;
        x |= (x >> 16) & 0x0000FFFF;
        return x + 1;
    }
    exports_2("b2NextPowerOfTwo", b2NextPowerOfTwo);
    function b2IsPowerOfTwo(x) {
        return x > 0 && (x & (x - 1)) === 0;
    }
    exports_2("b2IsPowerOfTwo", b2IsPowerOfTwo);
    function b2Random() {
        return Math.random() * 2 - 1;
    }
    exports_2("b2Random", b2Random);
    function b2RandomRange(lo, hi) {
        return (hi - lo) * Math.random() + lo;
    }
    exports_2("b2RandomRange", b2RandomRange);
    var b2Settings_1, b2_pi_over_180, b2_180_over_pi, b2_two_pi, b2Abs, b2Min, b2Max, b2IsValid, b2Sqrt, b2Pow, b2Cos, b2Sin, b2Acos, b2Asin, b2Atan2, b2Vec2, b2Vec2_zero, b2Vec3, b2Mat22, b2Mat33, b2Rot, b2Transform, b2Sweep;
    return {
        setters: [
            function (b2Settings_1_1) {
                b2Settings_1 = b2Settings_1_1;
            }
        ],
        execute: function () {
            exports_2("b2_pi_over_180", b2_pi_over_180 = b2Settings_1.b2_pi / 180);
            exports_2("b2_180_over_pi", b2_180_over_pi = 180 / b2Settings_1.b2_pi);
            exports_2("b2_two_pi", b2_two_pi = 2 * b2Settings_1.b2_pi);
            exports_2("b2Abs", b2Abs = Math.abs);
            exports_2("b2Min", b2Min = Math.min);
            exports_2("b2Max", b2Max = Math.max);
            exports_2("b2IsValid", b2IsValid = isFinite);
            exports_2("b2Sqrt", b2Sqrt = Math.sqrt);
            exports_2("b2Pow", b2Pow = Math.pow);
            exports_2("b2Cos", b2Cos = Math.cos);
            exports_2("b2Sin", b2Sin = Math.sin);
            exports_2("b2Acos", b2Acos = Math.acos);
            exports_2("b2Asin", b2Asin = Math.asin);
            exports_2("b2Atan2", b2Atan2 = Math.atan2);
            b2Vec2 = class b2Vec2 {
                constructor(x = 0, y = 0) {
                    this.x = x;
                    this.y = y;
                }
                Clone() {
                    return new b2Vec2(this.x, this.y);
                }
                SetZero() {
                    this.x = 0;
                    this.y = 0;
                    return this;
                }
                Set(x, y) {
                    this.x = x;
                    this.y = y;
                    return this;
                }
                Copy(other) {
                    this.x = other.x;
                    this.y = other.y;
                    return this;
                }
                SelfAdd(v) {
                    this.x += v.x;
                    this.y += v.y;
                    return this;
                }
                SelfAddXY(x, y) {
                    this.x += x;
                    this.y += y;
                    return this;
                }
                SelfSub(v) {
                    this.x -= v.x;
                    this.y -= v.y;
                    return this;
                }
                SelfSubXY(x, y) {
                    this.x -= x;
                    this.y -= y;
                    return this;
                }
                SelfMul(s) {
                    this.x *= s;
                    this.y *= s;
                    return this;
                }
                SelfMulAdd(s, v) {
                    this.x += s * v.x;
                    this.y += s * v.y;
                    return this;
                }
                SelfMulSub(s, v) {
                    this.x -= s * v.x;
                    this.y -= s * v.y;
                    return this;
                }
                Dot(v) {
                    return this.x * v.x + this.y * v.y;
                }
                Cross(v) {
                    return this.x * v.y - this.y * v.x;
                }
                Length() {
                    const x = this.x, y = this.y;
                    return Math.sqrt(x * x + y * y);
                }
                LengthSquared() {
                    const x = this.x, y = this.y;
                    return (x * x + y * y);
                }
                Normalize() {
                    const length = this.Length();
                    if (length >= b2Settings_1.b2_epsilon) {
                        const inv_length = 1 / length;
                        this.x *= inv_length;
                        this.y *= inv_length;
                    }
                    return length;
                }
                SelfNormalize() {
                    const length = this.Length();
                    if (length >= b2Settings_1.b2_epsilon) {
                        const inv_length = 1 / length;
                        this.x *= inv_length;
                        this.y *= inv_length;
                    }
                    return this;
                }
                SelfRotate(radians) {
                    const c = Math.cos(radians);
                    const s = Math.sin(radians);
                    const x = this.x;
                    this.x = c * x - s * this.y;
                    this.y = s * x + c * this.y;
                    return this;
                }
                IsValid() {
                    return isFinite(this.x) && isFinite(this.y);
                }
                SelfCrossVS(s) {
                    const x = this.x;
                    this.x = s * this.y;
                    this.y = -s * x;
                    return this;
                }
                SelfCrossSV(s) {
                    const x = this.x;
                    this.x = -s * this.y;
                    this.y = s * x;
                    return this;
                }
                SelfMinV(v) {
                    this.x = b2Min(this.x, v.x);
                    this.y = b2Min(this.y, v.y);
                    return this;
                }
                SelfMaxV(v) {
                    this.x = b2Max(this.x, v.x);
                    this.y = b2Max(this.y, v.y);
                    return this;
                }
                SelfAbs() {
                    this.x = b2Abs(this.x);
                    this.y = b2Abs(this.y);
                    return this;
                }
                SelfNeg() {
                    this.x = (-this.x);
                    this.y = (-this.y);
                    return this;
                }
                SelfSkew() {
                    const x = this.x;
                    this.x = -this.y;
                    this.y = x;
                    return this;
                }
                static MakeArray(length) {
                    return b2Settings_1.b2MakeArray(length, (i) => new b2Vec2());
                }
                static AbsV(v, out) {
                    out.x = b2Abs(v.x);
                    out.y = b2Abs(v.y);
                    return out;
                }
                static MinV(a, b, out) {
                    out.x = b2Min(a.x, b.x);
                    out.y = b2Min(a.y, b.y);
                    return out;
                }
                static MaxV(a, b, out) {
                    out.x = b2Max(a.x, b.x);
                    out.y = b2Max(a.y, b.y);
                    return out;
                }
                static ClampV(v, lo, hi, out) {
                    out.x = b2Clamp(v.x, lo.x, hi.x);
                    out.y = b2Clamp(v.y, lo.y, hi.y);
                    return out;
                }
                static RotateV(v, radians, out) {
                    const v_x = v.x, v_y = v.y;
                    const c = Math.cos(radians);
                    const s = Math.sin(radians);
                    out.x = c * v_x - s * v_y;
                    out.y = s * v_x + c * v_y;
                    return out;
                }
                static DotVV(a, b) {
                    return a.x * b.x + a.y * b.y;
                }
                static CrossVV(a, b) {
                    return a.x * b.y - a.y * b.x;
                }
                static CrossVS(v, s, out) {
                    const v_x = v.x;
                    out.x = s * v.y;
                    out.y = -s * v_x;
                    return out;
                }
                static CrossVOne(v, out) {
                    const v_x = v.x;
                    out.x = v.y;
                    out.y = -v_x;
                    return out;
                }
                static CrossSV(s, v, out) {
                    const v_x = v.x;
                    out.x = -s * v.y;
                    out.y = s * v_x;
                    return out;
                }
                static CrossOneV(v, out) {
                    const v_x = v.x;
                    out.x = -v.y;
                    out.y = v_x;
                    return out;
                }
                static AddVV(a, b, out) {
                    out.x = a.x + b.x;
                    out.y = a.y + b.y;
                    return out;
                }
                static SubVV(a, b, out) {
                    out.x = a.x - b.x;
                    out.y = a.y - b.y;
                    return out;
                }
                static MulSV(s, v, out) {
                    out.x = v.x * s;
                    out.y = v.y * s;
                    return out;
                }
                static MulVS(v, s, out) {
                    out.x = v.x * s;
                    out.y = v.y * s;
                    return out;
                }
                static AddVMulSV(a, s, b, out) {
                    out.x = a.x + (s * b.x);
                    out.y = a.y + (s * b.y);
                    return out;
                }
                static SubVMulSV(a, s, b, out) {
                    out.x = a.x - (s * b.x);
                    out.y = a.y - (s * b.y);
                    return out;
                }
                static AddVCrossSV(a, s, v, out) {
                    const v_x = v.x;
                    out.x = a.x - (s * v.y);
                    out.y = a.y + (s * v_x);
                    return out;
                }
                static MidVV(a, b, out) {
                    out.x = (a.x + b.x) * 0.5;
                    out.y = (a.y + b.y) * 0.5;
                    return out;
                }
                static ExtVV(a, b, out) {
                    out.x = (b.x - a.x) * 0.5;
                    out.y = (b.y - a.y) * 0.5;
                    return out;
                }
                static IsEqualToV(a, b) {
                    return a.x === b.x && a.y === b.y;
                }
                static DistanceVV(a, b) {
                    const c_x = a.x - b.x;
                    const c_y = a.y - b.y;
                    return Math.sqrt(c_x * c_x + c_y * c_y);
                }
                static DistanceSquaredVV(a, b) {
                    const c_x = a.x - b.x;
                    const c_y = a.y - b.y;
                    return (c_x * c_x + c_y * c_y);
                }
                static NegV(v, out) {
                    out.x = -v.x;
                    out.y = -v.y;
                    return out;
                }
            };
            b2Vec2.ZERO = new b2Vec2(0, 0);
            b2Vec2.UNITX = new b2Vec2(1, 0);
            b2Vec2.UNITY = new b2Vec2(0, 1);
            b2Vec2.s_t0 = new b2Vec2();
            b2Vec2.s_t1 = new b2Vec2();
            b2Vec2.s_t2 = new b2Vec2();
            b2Vec2.s_t3 = new b2Vec2();
            exports_2("b2Vec2", b2Vec2);
            exports_2("b2Vec2_zero", b2Vec2_zero = new b2Vec2(0, 0));
            b2Vec3 = class b2Vec3 {
                constructor(x = 0, y = 0, z = 0) {
                    this.x = x;
                    this.y = y;
                    this.z = z;
                }
                Clone() {
                    return new b2Vec3(this.x, this.y, this.z);
                }
                SetZero() {
                    this.x = 0;
                    this.y = 0;
                    this.z = 0;
                    return this;
                }
                SetXYZ(x, y, z) {
                    this.x = x;
                    this.y = y;
                    this.z = z;
                    return this;
                }
                Copy(other) {
                    this.x = other.x;
                    this.y = other.y;
                    this.z = other.z;
                    return this;
                }
                SelfNeg() {
                    this.x = (-this.x);
                    this.y = (-this.y);
                    this.z = (-this.z);
                    return this;
                }
                SelfAdd(v) {
                    this.x += v.x;
                    this.y += v.y;
                    this.z += v.z;
                    return this;
                }
                SelfAddXYZ(x, y, z) {
                    this.x += x;
                    this.y += y;
                    this.z += z;
                    return this;
                }
                SelfSub(v) {
                    this.x -= v.x;
                    this.y -= v.y;
                    this.z -= v.z;
                    return this;
                }
                SelfSubXYZ(x, y, z) {
                    this.x -= x;
                    this.y -= y;
                    this.z -= z;
                    return this;
                }
                SelfMul(s) {
                    this.x *= s;
                    this.y *= s;
                    this.z *= s;
                    return this;
                }
                static DotV3V3(a, b) {
                    return a.x * b.x + a.y * b.y + a.z * b.z;
                }
                static CrossV3V3(a, b, out) {
                    const a_x = a.x, a_y = a.y, a_z = a.z;
                    const b_x = b.x, b_y = b.y, b_z = b.z;
                    out.x = a_y * b_z - a_z * b_y;
                    out.y = a_z * b_x - a_x * b_z;
                    out.z = a_x * b_y - a_y * b_x;
                    return out;
                }
            };
            b2Vec3.ZERO = new b2Vec3(0, 0, 0);
            b2Vec3.s_t0 = new b2Vec3();
            exports_2("b2Vec3", b2Vec3);
            b2Mat22 = class b2Mat22 {
                constructor() {
                    this.ex = new b2Vec2(1, 0);
                    this.ey = new b2Vec2(0, 1);
                }
                Clone() {
                    return new b2Mat22().Copy(this);
                }
                static FromVV(c1, c2) {
                    return new b2Mat22().SetVV(c1, c2);
                }
                static FromSSSS(r1c1, r1c2, r2c1, r2c2) {
                    return new b2Mat22().SetSSSS(r1c1, r1c2, r2c1, r2c2);
                }
                static FromAngle(radians) {
                    return new b2Mat22().SetAngle(radians);
                }
                SetSSSS(r1c1, r1c2, r2c1, r2c2) {
                    this.ex.Set(r1c1, r2c1);
                    this.ey.Set(r1c2, r2c2);
                    return this;
                }
                SetVV(c1, c2) {
                    this.ex.Copy(c1);
                    this.ey.Copy(c2);
                    return this;
                }
                SetAngle(radians) {
                    const c = Math.cos(radians);
                    const s = Math.sin(radians);
                    this.ex.Set(c, s);
                    this.ey.Set(-s, c);
                    return this;
                }
                Copy(other) {
                    this.ex.Copy(other.ex);
                    this.ey.Copy(other.ey);
                    return this;
                }
                SetIdentity() {
                    this.ex.Set(1, 0);
                    this.ey.Set(0, 1);
                    return this;
                }
                SetZero() {
                    this.ex.SetZero();
                    this.ey.SetZero();
                    return this;
                }
                GetAngle() {
                    return Math.atan2(this.ex.y, this.ex.x);
                }
                GetInverse(out) {
                    const a = this.ex.x;
                    const b = this.ey.x;
                    const c = this.ex.y;
                    const d = this.ey.y;
                    let det = a * d - b * c;
                    if (det !== 0) {
                        det = 1 / det;
                    }
                    out.ex.x = det * d;
                    out.ey.x = (-det * b);
                    out.ex.y = (-det * c);
                    out.ey.y = det * a;
                    return out;
                }
                Solve(b_x, b_y, out) {
                    const a11 = this.ex.x, a12 = this.ey.x;
                    const a21 = this.ex.y, a22 = this.ey.y;
                    let det = a11 * a22 - a12 * a21;
                    if (det !== 0) {
                        det = 1 / det;
                    }
                    out.x = det * (a22 * b_x - a12 * b_y);
                    out.y = det * (a11 * b_y - a21 * b_x);
                    return out;
                }
                SelfAbs() {
                    this.ex.SelfAbs();
                    this.ey.SelfAbs();
                    return this;
                }
                SelfInv() {
                    this.GetInverse(this);
                    return this;
                }
                SelfAddM(M) {
                    this.ex.SelfAdd(M.ex);
                    this.ey.SelfAdd(M.ey);
                    return this;
                }
                SelfSubM(M) {
                    this.ex.SelfSub(M.ex);
                    this.ey.SelfSub(M.ey);
                    return this;
                }
                static AbsM(M, out) {
                    const M_ex = M.ex, M_ey = M.ey;
                    out.ex.x = b2Abs(M_ex.x);
                    out.ex.y = b2Abs(M_ex.y);
                    out.ey.x = b2Abs(M_ey.x);
                    out.ey.y = b2Abs(M_ey.y);
                    return out;
                }
                static MulMV(M, v, out) {
                    const M_ex = M.ex, M_ey = M.ey;
                    const v_x = v.x, v_y = v.y;
                    out.x = M_ex.x * v_x + M_ey.x * v_y;
                    out.y = M_ex.y * v_x + M_ey.y * v_y;
                    return out;
                }
                static MulTMV(M, v, out) {
                    const M_ex = M.ex, M_ey = M.ey;
                    const v_x = v.x, v_y = v.y;
                    out.x = M_ex.x * v_x + M_ex.y * v_y;
                    out.y = M_ey.x * v_x + M_ey.y * v_y;
                    return out;
                }
                static AddMM(A, B, out) {
                    const A_ex = A.ex, A_ey = A.ey;
                    const B_ex = B.ex, B_ey = B.ey;
                    out.ex.x = A_ex.x + B_ex.x;
                    out.ex.y = A_ex.y + B_ex.y;
                    out.ey.x = A_ey.x + B_ey.x;
                    out.ey.y = A_ey.y + B_ey.y;
                    return out;
                }
                static MulMM(A, B, out) {
                    const A_ex_x = A.ex.x, A_ex_y = A.ex.y;
                    const A_ey_x = A.ey.x, A_ey_y = A.ey.y;
                    const B_ex_x = B.ex.x, B_ex_y = B.ex.y;
                    const B_ey_x = B.ey.x, B_ey_y = B.ey.y;
                    out.ex.x = A_ex_x * B_ex_x + A_ey_x * B_ex_y;
                    out.ex.y = A_ex_y * B_ex_x + A_ey_y * B_ex_y;
                    out.ey.x = A_ex_x * B_ey_x + A_ey_x * B_ey_y;
                    out.ey.y = A_ex_y * B_ey_x + A_ey_y * B_ey_y;
                    return out;
                }
                static MulTMM(A, B, out) {
                    const A_ex_x = A.ex.x, A_ex_y = A.ex.y;
                    const A_ey_x = A.ey.x, A_ey_y = A.ey.y;
                    const B_ex_x = B.ex.x, B_ex_y = B.ex.y;
                    const B_ey_x = B.ey.x, B_ey_y = B.ey.y;
                    out.ex.x = A_ex_x * B_ex_x + A_ex_y * B_ex_y;
                    out.ex.y = A_ey_x * B_ex_x + A_ey_y * B_ex_y;
                    out.ey.x = A_ex_x * B_ey_x + A_ex_y * B_ey_y;
                    out.ey.y = A_ey_x * B_ey_x + A_ey_y * B_ey_y;
                    return out;
                }
            };
            b2Mat22.IDENTITY = new b2Mat22();
            exports_2("b2Mat22", b2Mat22);
            b2Mat33 = class b2Mat33 {
                constructor() {
                    this.ex = new b2Vec3(1, 0, 0);
                    this.ey = new b2Vec3(0, 1, 0);
                    this.ez = new b2Vec3(0, 0, 1);
                }
                Clone() {
                    return new b2Mat33().Copy(this);
                }
                SetVVV(c1, c2, c3) {
                    this.ex.Copy(c1);
                    this.ey.Copy(c2);
                    this.ez.Copy(c3);
                    return this;
                }
                Copy(other) {
                    this.ex.Copy(other.ex);
                    this.ey.Copy(other.ey);
                    this.ez.Copy(other.ez);
                    return this;
                }
                SetIdentity() {
                    this.ex.SetXYZ(1, 0, 0);
                    this.ey.SetXYZ(0, 1, 0);
                    this.ez.SetXYZ(0, 0, 1);
                    return this;
                }
                SetZero() {
                    this.ex.SetZero();
                    this.ey.SetZero();
                    this.ez.SetZero();
                    return this;
                }
                SelfAddM(M) {
                    this.ex.SelfAdd(M.ex);
                    this.ey.SelfAdd(M.ey);
                    this.ez.SelfAdd(M.ez);
                    return this;
                }
                Solve33(b_x, b_y, b_z, out) {
                    const a11 = this.ex.x, a21 = this.ex.y, a31 = this.ex.z;
                    const a12 = this.ey.x, a22 = this.ey.y, a32 = this.ey.z;
                    const a13 = this.ez.x, a23 = this.ez.y, a33 = this.ez.z;
                    let det = a11 * (a22 * a33 - a32 * a23) + a21 * (a32 * a13 - a12 * a33) + a31 * (a12 * a23 - a22 * a13);
                    if (det !== 0) {
                        det = 1 / det;
                    }
                    out.x = det * (b_x * (a22 * a33 - a32 * a23) + b_y * (a32 * a13 - a12 * a33) + b_z * (a12 * a23 - a22 * a13));
                    out.y = det * (a11 * (b_y * a33 - b_z * a23) + a21 * (b_z * a13 - b_x * a33) + a31 * (b_x * a23 - b_y * a13));
                    out.z = det * (a11 * (a22 * b_z - a32 * b_y) + a21 * (a32 * b_x - a12 * b_z) + a31 * (a12 * b_y - a22 * b_x));
                    return out;
                }
                Solve22(b_x, b_y, out) {
                    const a11 = this.ex.x, a12 = this.ey.x;
                    const a21 = this.ex.y, a22 = this.ey.y;
                    let det = a11 * a22 - a12 * a21;
                    if (det !== 0) {
                        det = 1 / det;
                    }
                    out.x = det * (a22 * b_x - a12 * b_y);
                    out.y = det * (a11 * b_y - a21 * b_x);
                    return out;
                }
                GetInverse22(M) {
                    const a = this.ex.x, b = this.ey.x, c = this.ex.y, d = this.ey.y;
                    let det = a * d - b * c;
                    if (det !== 0) {
                        det = 1 / det;
                    }
                    M.ex.x = det * d;
                    M.ey.x = -det * b;
                    M.ex.z = 0;
                    M.ex.y = -det * c;
                    M.ey.y = det * a;
                    M.ey.z = 0;
                    M.ez.x = 0;
                    M.ez.y = 0;
                    M.ez.z = 0;
                }
                GetSymInverse33(M) {
                    let det = b2Vec3.DotV3V3(this.ex, b2Vec3.CrossV3V3(this.ey, this.ez, b2Vec3.s_t0));
                    if (det !== 0) {
                        det = 1 / det;
                    }
                    const a11 = this.ex.x, a12 = this.ey.x, a13 = this.ez.x;
                    const a22 = this.ey.y, a23 = this.ez.y;
                    const a33 = this.ez.z;
                    M.ex.x = det * (a22 * a33 - a23 * a23);
                    M.ex.y = det * (a13 * a23 - a12 * a33);
                    M.ex.z = det * (a12 * a23 - a13 * a22);
                    M.ey.x = M.ex.y;
                    M.ey.y = det * (a11 * a33 - a13 * a13);
                    M.ey.z = det * (a13 * a12 - a11 * a23);
                    M.ez.x = M.ex.z;
                    M.ez.y = M.ey.z;
                    M.ez.z = det * (a11 * a22 - a12 * a12);
                }
                static MulM33V3(A, v, out) {
                    const v_x = v.x, v_y = v.y, v_z = v.z;
                    out.x = A.ex.x * v_x + A.ey.x * v_y + A.ez.x * v_z;
                    out.y = A.ex.y * v_x + A.ey.y * v_y + A.ez.y * v_z;
                    out.z = A.ex.z * v_x + A.ey.z * v_y + A.ez.z * v_z;
                    return out;
                }
                static MulM33XYZ(A, x, y, z, out) {
                    out.x = A.ex.x * x + A.ey.x * y + A.ez.x * z;
                    out.y = A.ex.y * x + A.ey.y * y + A.ez.y * z;
                    out.z = A.ex.z * x + A.ey.z * y + A.ez.z * z;
                    return out;
                }
                static MulM33V2(A, v, out) {
                    const v_x = v.x, v_y = v.y;
                    out.x = A.ex.x * v_x + A.ey.x * v_y;
                    out.y = A.ex.y * v_x + A.ey.y * v_y;
                    return out;
                }
                static MulM33XY(A, x, y, out) {
                    out.x = A.ex.x * x + A.ey.x * y;
                    out.y = A.ex.y * x + A.ey.y * y;
                    return out;
                }
            };
            b2Mat33.IDENTITY = new b2Mat33();
            exports_2("b2Mat33", b2Mat33);
            b2Rot = class b2Rot {
                constructor(angle = 0) {
                    this.s = 0;
                    this.c = 1;
                    if (angle) {
                        this.s = Math.sin(angle);
                        this.c = Math.cos(angle);
                    }
                }
                Clone() {
                    return new b2Rot().Copy(this);
                }
                Copy(other) {
                    this.s = other.s;
                    this.c = other.c;
                    return this;
                }
                SetAngle(angle) {
                    this.s = Math.sin(angle);
                    this.c = Math.cos(angle);
                    return this;
                }
                SetIdentity() {
                    this.s = 0;
                    this.c = 1;
                    return this;
                }
                GetAngle() {
                    return Math.atan2(this.s, this.c);
                }
                GetXAxis(out) {
                    out.x = this.c;
                    out.y = this.s;
                    return out;
                }
                GetYAxis(out) {
                    out.x = -this.s;
                    out.y = this.c;
                    return out;
                }
                static MulRR(q, r, out) {
                    const q_c = q.c, q_s = q.s;
                    const r_c = r.c, r_s = r.s;
                    out.s = q_s * r_c + q_c * r_s;
                    out.c = q_c * r_c - q_s * r_s;
                    return out;
                }
                static MulTRR(q, r, out) {
                    const q_c = q.c, q_s = q.s;
                    const r_c = r.c, r_s = r.s;
                    out.s = q_c * r_s - q_s * r_c;
                    out.c = q_c * r_c + q_s * r_s;
                    return out;
                }
                static MulRV(q, v, out) {
                    const q_c = q.c, q_s = q.s;
                    const v_x = v.x, v_y = v.y;
                    out.x = q_c * v_x - q_s * v_y;
                    out.y = q_s * v_x + q_c * v_y;
                    return out;
                }
                static MulTRV(q, v, out) {
                    const q_c = q.c, q_s = q.s;
                    const v_x = v.x, v_y = v.y;
                    out.x = q_c * v_x + q_s * v_y;
                    out.y = -q_s * v_x + q_c * v_y;
                    return out;
                }
            };
            b2Rot.IDENTITY = new b2Rot();
            exports_2("b2Rot", b2Rot);
            b2Transform = class b2Transform {
                constructor() {
                    this.p = new b2Vec2();
                    this.q = new b2Rot();
                }
                Clone() {
                    return new b2Transform().Copy(this);
                }
                Copy(other) {
                    this.p.Copy(other.p);
                    this.q.Copy(other.q);
                    return this;
                }
                SetIdentity() {
                    this.p.SetZero();
                    this.q.SetIdentity();
                    return this;
                }
                SetPositionRotation(position, q) {
                    this.p.Copy(position);
                    this.q.Copy(q);
                    return this;
                }
                SetPositionAngle(pos, a) {
                    this.p.Copy(pos);
                    this.q.SetAngle(a);
                    return this;
                }
                SetPosition(position) {
                    this.p.Copy(position);
                    return this;
                }
                SetPositionXY(x, y) {
                    this.p.Set(x, y);
                    return this;
                }
                SetRotation(rotation) {
                    this.q.Copy(rotation);
                    return this;
                }
                SetRotationAngle(radians) {
                    this.q.SetAngle(radians);
                    return this;
                }
                GetPosition() {
                    return this.p;
                }
                GetRotation() {
                    return this.q;
                }
                GetRotationAngle() {
                    return this.q.GetAngle();
                }
                GetAngle() {
                    return this.q.GetAngle();
                }
                static MulXV(T, v, out) {
                    const T_q_c = T.q.c, T_q_s = T.q.s;
                    const v_x = v.x, v_y = v.y;
                    out.x = (T_q_c * v_x - T_q_s * v_y) + T.p.x;
                    out.y = (T_q_s * v_x + T_q_c * v_y) + T.p.y;
                    return out;
                }
                static MulTXV(T, v, out) {
                    const T_q_c = T.q.c, T_q_s = T.q.s;
                    const p_x = v.x - T.p.x;
                    const p_y = v.y - T.p.y;
                    out.x = (T_q_c * p_x + T_q_s * p_y);
                    out.y = (-T_q_s * p_x + T_q_c * p_y);
                    return out;
                }
                static MulXX(A, B, out) {
                    b2Rot.MulRR(A.q, B.q, out.q);
                    b2Vec2.AddVV(b2Rot.MulRV(A.q, B.p, out.p), A.p, out.p);
                    return out;
                }
                static MulTXX(A, B, out) {
                    b2Rot.MulTRR(A.q, B.q, out.q);
                    b2Rot.MulTRV(A.q, b2Vec2.SubVV(B.p, A.p, out.p), out.p);
                    return out;
                }
            };
            b2Transform.IDENTITY = new b2Transform();
            exports_2("b2Transform", b2Transform);
            b2Sweep = class b2Sweep {
                constructor() {
                    this.localCenter = new b2Vec2();
                    this.c0 = new b2Vec2();
                    this.c = new b2Vec2();
                    this.a0 = 0;
                    this.a = 0;
                    this.alpha0 = 0;
                }
                Clone() {
                    return new b2Sweep().Copy(this);
                }
                Copy(other) {
                    this.localCenter.Copy(other.localCenter);
                    this.c0.Copy(other.c0);
                    this.c.Copy(other.c);
                    this.a0 = other.a0;
                    this.a = other.a;
                    this.alpha0 = other.alpha0;
                    return this;
                }
                GetTransform(xf, beta) {
                    const one_minus_beta = (1 - beta);
                    xf.p.x = one_minus_beta * this.c0.x + beta * this.c.x;
                    xf.p.y = one_minus_beta * this.c0.y + beta * this.c.y;
                    const angle = one_minus_beta * this.a0 + beta * this.a;
                    xf.q.SetAngle(angle);
                    xf.p.SelfSub(b2Rot.MulRV(xf.q, this.localCenter, b2Vec2.s_t0));
                    return xf;
                }
                Advance(alpha) {
                    const beta = (alpha - this.alpha0) / (1 - this.alpha0);
                    const one_minus_beta = (1 - beta);
                    this.c0.x = one_minus_beta * this.c0.x + beta * this.c.x;
                    this.c0.y = one_minus_beta * this.c0.y + beta * this.c.y;
                    this.a0 = one_minus_beta * this.a0 + beta * this.a;
                    this.alpha0 = alpha;
                }
                Normalize() {
                    const d = b2_two_pi * Math.floor(this.a0 / b2_two_pi);
                    this.a0 -= d;
                    this.a -= d;
                }
            };
            exports_2("b2Sweep", b2Sweep);
        }
    };
});
System.register("Common/b2Draw", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var b2Color, b2DrawFlags, b2Draw;
    return {
        setters: [],
        execute: function () {
            b2Color = class b2Color {
                constructor(rr = 0.5, gg = 0.5, bb = 0.5, aa = 1.0) {
                    this.r = rr;
                    this.g = gg;
                    this.b = bb;
                    this.a = aa;
                }
                Clone() {
                    return new b2Color().Copy(this);
                }
                Copy(other) {
                    this.r = other.r;
                    this.g = other.g;
                    this.b = other.b;
                    this.a = other.a;
                    return this;
                }
                IsEqual(color) {
                    return (this.r === color.r) && (this.g === color.g) && (this.b === color.b) && (this.a === color.a);
                }
                IsZero() {
                    return (this.r === 0) && (this.g === 0) && (this.b === 0) && (this.a === 0);
                }
                Set(r, g, b, a = this.a) {
                    this.SetRGBA(r, g, b, a);
                }
                SetByteRGB(r, g, b) {
                    this.r = r / 0xff;
                    this.g = g / 0xff;
                    this.b = b / 0xff;
                    return this;
                }
                SetByteRGBA(r, g, b, a) {
                    this.r = r / 0xff;
                    this.g = g / 0xff;
                    this.b = b / 0xff;
                    this.a = a / 0xff;
                    return this;
                }
                SetRGB(rr, gg, bb) {
                    this.r = rr;
                    this.g = gg;
                    this.b = bb;
                    return this;
                }
                SetRGBA(rr, gg, bb, aa) {
                    this.r = rr;
                    this.g = gg;
                    this.b = bb;
                    this.a = aa;
                    return this;
                }
                SelfAdd(color) {
                    this.r += color.r;
                    this.g += color.g;
                    this.b += color.b;
                    this.a += color.a;
                    return this;
                }
                Add(color, out) {
                    out.r = this.r + color.r;
                    out.g = this.g + color.g;
                    out.b = this.b + color.b;
                    out.a = this.a + color.a;
                    return out;
                }
                SelfSub(color) {
                    this.r -= color.r;
                    this.g -= color.g;
                    this.b -= color.b;
                    this.a -= color.a;
                    return this;
                }
                Sub(color, out) {
                    out.r = this.r - color.r;
                    out.g = this.g - color.g;
                    out.b = this.b - color.b;
                    out.a = this.a - color.a;
                    return out;
                }
                SelfMul(s) {
                    this.r *= s;
                    this.g *= s;
                    this.b *= s;
                    this.a *= s;
                    return this;
                }
                Mul(s, out) {
                    out.r = this.r * s;
                    out.g = this.g * s;
                    out.b = this.b * s;
                    out.a = this.a * s;
                    return out;
                }
                Mix(mixColor, strength) {
                    b2Color.MixColors(this, mixColor, strength);
                }
                static MixColors(colorA, colorB, strength) {
                    const dr = (strength * (colorB.r - colorA.r));
                    const dg = (strength * (colorB.g - colorA.g));
                    const db = (strength * (colorB.b - colorA.b));
                    const da = (strength * (colorB.a - colorA.a));
                    colorA.r += dr;
                    colorA.g += dg;
                    colorA.b += db;
                    colorA.a += da;
                    colorB.r -= dr;
                    colorB.g -= dg;
                    colorB.b -= db;
                    colorB.a -= da;
                }
                MakeStyleString(alpha = this.a) {
                    return b2Color.MakeStyleString(this.r, this.g, this.b, alpha);
                }
                static MakeStyleString(r, g, b, a = 1.0) {
                    r *= 255;
                    g *= 255;
                    b *= 255;
                    if (a < 1) {
                        return `rgba(${r},${g},${b},${a})`;
                    }
                    else {
                        return `rgb(${r},${g},${b})`;
                    }
                }
            };
            b2Color.ZERO = new b2Color(0, 0, 0, 0);
            b2Color.RED = new b2Color(1, 0, 0);
            b2Color.GREEN = new b2Color(0, 1, 0);
            b2Color.BLUE = new b2Color(0, 0, 1);
            exports_3("b2Color", b2Color);
            (function (b2DrawFlags) {
                b2DrawFlags[b2DrawFlags["e_none"] = 0] = "e_none";
                b2DrawFlags[b2DrawFlags["e_shapeBit"] = 1] = "e_shapeBit";
                b2DrawFlags[b2DrawFlags["e_jointBit"] = 2] = "e_jointBit";
                b2DrawFlags[b2DrawFlags["e_aabbBit"] = 4] = "e_aabbBit";
                b2DrawFlags[b2DrawFlags["e_pairBit"] = 8] = "e_pairBit";
                b2DrawFlags[b2DrawFlags["e_centerOfMassBit"] = 16] = "e_centerOfMassBit";
                b2DrawFlags[b2DrawFlags["e_particleBit"] = 32] = "e_particleBit";
                b2DrawFlags[b2DrawFlags["e_controllerBit"] = 64] = "e_controllerBit";
                b2DrawFlags[b2DrawFlags["e_all"] = 63] = "e_all";
            })(b2DrawFlags || (b2DrawFlags = {}));
            exports_3("b2DrawFlags", b2DrawFlags);
            b2Draw = class b2Draw {
                constructor() {
                    this.m_drawFlags = 0;
                }
                SetFlags(flags) {
                    this.m_drawFlags = flags;
                }
                GetFlags() {
                    return this.m_drawFlags;
                }
                AppendFlags(flags) {
                    this.m_drawFlags |= flags;
                }
                ClearFlags(flags) {
                    this.m_drawFlags &= ~flags;
                }
                PushTransform(xf) { }
                PopTransform(xf) { }
                DrawPolygon(vertices, vertexCount, color) { }
                DrawSolidPolygon(vertices, vertexCount, color) { }
                DrawCircle(center, radius, color) { }
                DrawSolidCircle(center, radius, axis, color) { }
                DrawParticles(centers, radius, colors, count) { }
                DrawSegment(p1, p2, color) { }
                DrawTransform(xf) { }
            };
            exports_3("b2Draw", b2Draw);
        }
    };
});
System.register("Common/b2Timer", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var b2Timer, b2Counter;
    return {
        setters: [],
        execute: function () {
            b2Timer = class b2Timer {
                constructor() {
                    this.m_start = Date.now();
                }
                Reset() {
                    this.m_start = Date.now();
                    return this;
                }
                GetMilliseconds() {
                    return Date.now() - this.m_start;
                }
            };
            exports_4("b2Timer", b2Timer);
            b2Counter = class b2Counter {
                constructor() {
                    this.m_count = 0;
                    this.m_min_count = 0;
                    this.m_max_count = 0;
                }
                GetCount() {
                    return this.m_count;
                }
                GetMinCount() {
                    return this.m_min_count;
                }
                GetMaxCount() {
                    return this.m_max_count;
                }
                ResetCount() {
                    const count = this.m_count;
                    this.m_count = 0;
                    return count;
                }
                ResetMinCount() {
                    this.m_min_count = 0;
                }
                ResetMaxCount() {
                    this.m_max_count = 0;
                }
                Increment() {
                    this.m_count++;
                    if (this.m_max_count < this.m_count) {
                        this.m_max_count = this.m_count;
                    }
                }
                Decrement() {
                    this.m_count--;
                    if (this.m_min_count > this.m_count) {
                        this.m_min_count = this.m_count;
                    }
                }
            };
            exports_4("b2Counter", b2Counter);
        }
    };
});
System.register("Common/b2GrowableStack", ["Common/b2Settings"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var b2Settings_2, b2GrowableStack;
    return {
        setters: [
            function (b2Settings_2_1) {
                b2Settings_2 = b2Settings_2_1;
            }
        ],
        execute: function () {
            b2GrowableStack = class b2GrowableStack {
                constructor(N) {
                    this.m_stack = [];
                    this.m_count = 0;
                    this.m_stack = b2Settings_2.b2MakeArray(N, (index) => null);
                    this.m_count = 0;
                }
                Reset() {
                    this.m_count = 0;
                    return this;
                }
                Push(element) {
                    this.m_stack[this.m_count] = element;
                    this.m_count++;
                }
                Pop() {
                    this.m_count--;
                    const element = this.m_stack[this.m_count];
                    this.m_stack[this.m_count] = null;
                    if (element === null) {
                        throw new Error();
                    }
                    return element;
                }
                GetCount() {
                    return this.m_count;
                }
            };
            exports_5("b2GrowableStack", b2GrowableStack);
        }
    };
});
System.register("Common/b2BlockAllocator", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var b2BlockAllocator;
    return {
        setters: [],
        execute: function () {
            b2BlockAllocator = class b2BlockAllocator {
            };
            exports_6("b2BlockAllocator", b2BlockAllocator);
        }
    };
});
System.register("Common/b2StackAllocator", [], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var b2StackAllocator;
    return {
        setters: [],
        execute: function () {
            b2StackAllocator = class b2StackAllocator {
            };
            exports_7("b2StackAllocator", b2StackAllocator);
        }
    };
});
System.register("Collision/b2Distance", ["Common/b2Settings", "Common/b2Math"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    function b2_gjk_reset() {
        exports_8("b2_gjkCalls", b2_gjkCalls = 0);
        exports_8("b2_gjkIters", b2_gjkIters = 0);
        exports_8("b2_gjkMaxIters", b2_gjkMaxIters = 0);
    }
    exports_8("b2_gjk_reset", b2_gjk_reset);
    function b2Distance(output, cache, input) {
        exports_8("b2_gjkCalls", ++b2_gjkCalls);
        const proxyA = input.proxyA;
        const proxyB = input.proxyB;
        const transformA = input.transformA;
        const transformB = input.transformB;
        const simplex = b2Distance_s_simplex;
        simplex.ReadCache(cache, proxyA, transformA, proxyB, transformB);
        const vertices = simplex.m_vertices;
        const k_maxIters = 20;
        const saveA = b2Distance_s_saveA;
        const saveB = b2Distance_s_saveB;
        let saveCount = 0;
        let distanceSqr1 = b2Settings_3.b2_maxFloat;
        let distanceSqr2 = distanceSqr1;
        let iter = 0;
        while (iter < k_maxIters) {
            saveCount = simplex.m_count;
            for (let i = 0; i < saveCount; ++i) {
                saveA[i] = vertices[i].indexA;
                saveB[i] = vertices[i].indexB;
            }
            switch (simplex.m_count) {
                case 1:
                    break;
                case 2:
                    simplex.Solve2();
                    break;
                case 3:
                    simplex.Solve3();
                    break;
                default:
                    break;
            }
            if (simplex.m_count === 3) {
                break;
            }
            const p = simplex.GetClosestPoint(b2Distance_s_p);
            distanceSqr2 = p.LengthSquared();
            distanceSqr1 = distanceSqr2;
            const d = simplex.GetSearchDirection(b2Distance_s_d);
            if (d.LengthSquared() < b2Settings_3.b2_epsilon_sq) {
                break;
            }
            const vertex = vertices[simplex.m_count];
            vertex.indexA = proxyA.GetSupport(b2Math_1.b2Rot.MulTRV(transformA.q, b2Math_1.b2Vec2.NegV(d, b2Math_1.b2Vec2.s_t0), b2Distance_s_supportA));
            b2Math_1.b2Transform.MulXV(transformA, proxyA.GetVertex(vertex.indexA), vertex.wA);
            vertex.indexB = proxyB.GetSupport(b2Math_1.b2Rot.MulTRV(transformB.q, d, b2Distance_s_supportB));
            b2Math_1.b2Transform.MulXV(transformB, proxyB.GetVertex(vertex.indexB), vertex.wB);
            b2Math_1.b2Vec2.SubVV(vertex.wB, vertex.wA, vertex.w);
            ++iter;
            exports_8("b2_gjkIters", ++b2_gjkIters);
            let duplicate = false;
            for (let i = 0; i < saveCount; ++i) {
                if (vertex.indexA === saveA[i] && vertex.indexB === saveB[i]) {
                    duplicate = true;
                    break;
                }
            }
            if (duplicate) {
                break;
            }
            ++simplex.m_count;
        }
        exports_8("b2_gjkMaxIters", b2_gjkMaxIters = b2Math_1.b2Max(b2_gjkMaxIters, iter));
        simplex.GetWitnessPoints(output.pointA, output.pointB);
        output.distance = b2Math_1.b2Vec2.DistanceVV(output.pointA, output.pointB);
        output.iterations = iter;
        simplex.WriteCache(cache);
        if (input.useRadii) {
            const rA = proxyA.m_radius;
            const rB = proxyB.m_radius;
            if (output.distance > (rA + rB) && output.distance > b2Settings_3.b2_epsilon) {
                output.distance -= rA + rB;
                const normal = b2Math_1.b2Vec2.SubVV(output.pointB, output.pointA, b2Distance_s_normal);
                normal.Normalize();
                output.pointA.SelfMulAdd(rA, normal);
                output.pointB.SelfMulSub(rB, normal);
            }
            else {
                const p = b2Math_1.b2Vec2.MidVV(output.pointA, output.pointB, b2Distance_s_p);
                output.pointA.Copy(p);
                output.pointB.Copy(p);
                output.distance = 0;
            }
        }
    }
    exports_8("b2Distance", b2Distance);
    var b2Settings_3, b2Math_1, b2DistanceProxy, b2SimplexCache, b2DistanceInput, b2DistanceOutput, b2_gjkCalls, b2_gjkIters, b2_gjkMaxIters, b2SimplexVertex, b2Simplex, b2Distance_s_simplex, b2Distance_s_saveA, b2Distance_s_saveB, b2Distance_s_p, b2Distance_s_d, b2Distance_s_normal, b2Distance_s_supportA, b2Distance_s_supportB;
    return {
        setters: [
            function (b2Settings_3_1) {
                b2Settings_3 = b2Settings_3_1;
            },
            function (b2Math_1_1) {
                b2Math_1 = b2Math_1_1;
            }
        ],
        execute: function () {
            b2DistanceProxy = class b2DistanceProxy {
                constructor() {
                    this.m_buffer = b2Math_1.b2Vec2.MakeArray(2);
                    this.m_vertices = this.m_buffer;
                    this.m_count = 0;
                    this.m_radius = 0;
                }
                Reset() {
                    this.m_vertices = this.m_buffer;
                    this.m_count = 0;
                    this.m_radius = 0;
                    return this;
                }
                SetShape(shape, index) {
                    shape.SetupDistanceProxy(this, index);
                }
                GetSupport(d) {
                    let bestIndex = 0;
                    let bestValue = b2Math_1.b2Vec2.DotVV(this.m_vertices[0], d);
                    for (let i = 1; i < this.m_count; ++i) {
                        const value = b2Math_1.b2Vec2.DotVV(this.m_vertices[i], d);
                        if (value > bestValue) {
                            bestIndex = i;
                            bestValue = value;
                        }
                    }
                    return bestIndex;
                }
                GetSupportVertex(d) {
                    let bestIndex = 0;
                    let bestValue = b2Math_1.b2Vec2.DotVV(this.m_vertices[0], d);
                    for (let i = 1; i < this.m_count; ++i) {
                        const value = b2Math_1.b2Vec2.DotVV(this.m_vertices[i], d);
                        if (value > bestValue) {
                            bestIndex = i;
                            bestValue = value;
                        }
                    }
                    return this.m_vertices[bestIndex];
                }
                GetVertexCount() {
                    return this.m_count;
                }
                GetVertex(index) {
                    return this.m_vertices[index];
                }
            };
            exports_8("b2DistanceProxy", b2DistanceProxy);
            b2SimplexCache = class b2SimplexCache {
                constructor() {
                    this.metric = 0;
                    this.count = 0;
                    this.indexA = [0, 0, 0];
                    this.indexB = [0, 0, 0];
                }
                Reset() {
                    this.metric = 0;
                    this.count = 0;
                    return this;
                }
            };
            exports_8("b2SimplexCache", b2SimplexCache);
            b2DistanceInput = class b2DistanceInput {
                constructor() {
                    this.proxyA = new b2DistanceProxy();
                    this.proxyB = new b2DistanceProxy();
                    this.transformA = new b2Math_1.b2Transform();
                    this.transformB = new b2Math_1.b2Transform();
                    this.useRadii = false;
                }
                Reset() {
                    this.proxyA.Reset();
                    this.proxyB.Reset();
                    this.transformA.SetIdentity();
                    this.transformB.SetIdentity();
                    this.useRadii = false;
                    return this;
                }
            };
            exports_8("b2DistanceInput", b2DistanceInput);
            b2DistanceOutput = class b2DistanceOutput {
                constructor() {
                    this.pointA = new b2Math_1.b2Vec2();
                    this.pointB = new b2Math_1.b2Vec2();
                    this.distance = 0;
                    this.iterations = 0;
                }
                Reset() {
                    this.pointA.SetZero();
                    this.pointB.SetZero();
                    this.distance = 0;
                    this.iterations = 0;
                    return this;
                }
            };
            exports_8("b2DistanceOutput", b2DistanceOutput);
            exports_8("b2_gjkCalls", b2_gjkCalls = 0);
            exports_8("b2_gjkIters", b2_gjkIters = 0);
            exports_8("b2_gjkMaxIters", b2_gjkMaxIters = 0);
            b2SimplexVertex = class b2SimplexVertex {
                constructor() {
                    this.wA = new b2Math_1.b2Vec2();
                    this.wB = new b2Math_1.b2Vec2();
                    this.w = new b2Math_1.b2Vec2();
                    this.a = 0;
                    this.indexA = 0;
                    this.indexB = 0;
                }
                Copy(other) {
                    this.wA.Copy(other.wA);
                    this.wB.Copy(other.wB);
                    this.w.Copy(other.w);
                    this.a = other.a;
                    this.indexA = other.indexA;
                    this.indexB = other.indexB;
                    return this;
                }
            };
            exports_8("b2SimplexVertex", b2SimplexVertex);
            b2Simplex = class b2Simplex {
                constructor() {
                    this.m_v1 = new b2SimplexVertex();
                    this.m_v2 = new b2SimplexVertex();
                    this.m_v3 = new b2SimplexVertex();
                    this.m_vertices = [];
                    this.m_count = 0;
                    this.m_vertices[0] = this.m_v1;
                    this.m_vertices[1] = this.m_v2;
                    this.m_vertices[2] = this.m_v3;
                }
                ReadCache(cache, proxyA, transformA, proxyB, transformB) {
                    this.m_count = cache.count;
                    const vertices = this.m_vertices;
                    for (let i = 0; i < this.m_count; ++i) {
                        const v = vertices[i];
                        v.indexA = cache.indexA[i];
                        v.indexB = cache.indexB[i];
                        const wALocal = proxyA.GetVertex(v.indexA);
                        const wBLocal = proxyB.GetVertex(v.indexB);
                        b2Math_1.b2Transform.MulXV(transformA, wALocal, v.wA);
                        b2Math_1.b2Transform.MulXV(transformB, wBLocal, v.wB);
                        b2Math_1.b2Vec2.SubVV(v.wB, v.wA, v.w);
                        v.a = 0;
                    }
                    if (this.m_count > 1) {
                        const metric1 = cache.metric;
                        const metric2 = this.GetMetric();
                        if (metric2 < 0.5 * metric1 || 2 * metric1 < metric2 || metric2 < b2Settings_3.b2_epsilon) {
                            this.m_count = 0;
                        }
                    }
                    if (this.m_count === 0) {
                        const v = vertices[0];
                        v.indexA = 0;
                        v.indexB = 0;
                        const wALocal = proxyA.GetVertex(0);
                        const wBLocal = proxyB.GetVertex(0);
                        b2Math_1.b2Transform.MulXV(transformA, wALocal, v.wA);
                        b2Math_1.b2Transform.MulXV(transformB, wBLocal, v.wB);
                        b2Math_1.b2Vec2.SubVV(v.wB, v.wA, v.w);
                        v.a = 1;
                        this.m_count = 1;
                    }
                }
                WriteCache(cache) {
                    cache.metric = this.GetMetric();
                    cache.count = this.m_count;
                    const vertices = this.m_vertices;
                    for (let i = 0; i < this.m_count; ++i) {
                        cache.indexA[i] = vertices[i].indexA;
                        cache.indexB[i] = vertices[i].indexB;
                    }
                }
                GetSearchDirection(out) {
                    switch (this.m_count) {
                        case 1:
                            return b2Math_1.b2Vec2.NegV(this.m_v1.w, out);
                        case 2: {
                            const e12 = b2Math_1.b2Vec2.SubVV(this.m_v2.w, this.m_v1.w, out);
                            const sgn = b2Math_1.b2Vec2.CrossVV(e12, b2Math_1.b2Vec2.NegV(this.m_v1.w, b2Math_1.b2Vec2.s_t0));
                            if (sgn > 0) {
                                return b2Math_1.b2Vec2.CrossOneV(e12, out);
                            }
                            else {
                                return b2Math_1.b2Vec2.CrossVOne(e12, out);
                            }
                        }
                        default:
                            return out.SetZero();
                    }
                }
                GetClosestPoint(out) {
                    switch (this.m_count) {
                        case 0:
                            return out.SetZero();
                        case 1:
                            return out.Copy(this.m_v1.w);
                        case 2:
                            return out.Set(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
                        case 3:
                            return out.SetZero();
                        default:
                            return out.SetZero();
                    }
                }
                GetWitnessPoints(pA, pB) {
                    switch (this.m_count) {
                        case 0:
                            break;
                        case 1:
                            pA.Copy(this.m_v1.wA);
                            pB.Copy(this.m_v1.wB);
                            break;
                        case 2:
                            pA.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
                            pA.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
                            pB.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
                            pB.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
                            break;
                        case 3:
                            pB.x = pA.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x;
                            pB.y = pA.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
                            break;
                        default:
                            break;
                    }
                }
                GetMetric() {
                    switch (this.m_count) {
                        case 0:
                            return 0;
                        case 1:
                            return 0;
                        case 2:
                            return b2Math_1.b2Vec2.DistanceVV(this.m_v1.w, this.m_v2.w);
                        case 3:
                            return b2Math_1.b2Vec2.CrossVV(b2Math_1.b2Vec2.SubVV(this.m_v2.w, this.m_v1.w, b2Math_1.b2Vec2.s_t0), b2Math_1.b2Vec2.SubVV(this.m_v3.w, this.m_v1.w, b2Math_1.b2Vec2.s_t1));
                        default:
                            return 0;
                    }
                }
                Solve2() {
                    const w1 = this.m_v1.w;
                    const w2 = this.m_v2.w;
                    const e12 = b2Math_1.b2Vec2.SubVV(w2, w1, b2Simplex.s_e12);
                    const d12_2 = (-b2Math_1.b2Vec2.DotVV(w1, e12));
                    if (d12_2 <= 0) {
                        this.m_v1.a = 1;
                        this.m_count = 1;
                        return;
                    }
                    const d12_1 = b2Math_1.b2Vec2.DotVV(w2, e12);
                    if (d12_1 <= 0) {
                        this.m_v2.a = 1;
                        this.m_count = 1;
                        this.m_v1.Copy(this.m_v2);
                        return;
                    }
                    const inv_d12 = 1 / (d12_1 + d12_2);
                    this.m_v1.a = d12_1 * inv_d12;
                    this.m_v2.a = d12_2 * inv_d12;
                    this.m_count = 2;
                }
                Solve3() {
                    const w1 = this.m_v1.w;
                    const w2 = this.m_v2.w;
                    const w3 = this.m_v3.w;
                    const e12 = b2Math_1.b2Vec2.SubVV(w2, w1, b2Simplex.s_e12);
                    const w1e12 = b2Math_1.b2Vec2.DotVV(w1, e12);
                    const w2e12 = b2Math_1.b2Vec2.DotVV(w2, e12);
                    const d12_1 = w2e12;
                    const d12_2 = (-w1e12);
                    const e13 = b2Math_1.b2Vec2.SubVV(w3, w1, b2Simplex.s_e13);
                    const w1e13 = b2Math_1.b2Vec2.DotVV(w1, e13);
                    const w3e13 = b2Math_1.b2Vec2.DotVV(w3, e13);
                    const d13_1 = w3e13;
                    const d13_2 = (-w1e13);
                    const e23 = b2Math_1.b2Vec2.SubVV(w3, w2, b2Simplex.s_e23);
                    const w2e23 = b2Math_1.b2Vec2.DotVV(w2, e23);
                    const w3e23 = b2Math_1.b2Vec2.DotVV(w3, e23);
                    const d23_1 = w3e23;
                    const d23_2 = (-w2e23);
                    const n123 = b2Math_1.b2Vec2.CrossVV(e12, e13);
                    const d123_1 = n123 * b2Math_1.b2Vec2.CrossVV(w2, w3);
                    const d123_2 = n123 * b2Math_1.b2Vec2.CrossVV(w3, w1);
                    const d123_3 = n123 * b2Math_1.b2Vec2.CrossVV(w1, w2);
                    if (d12_2 <= 0 && d13_2 <= 0) {
                        this.m_v1.a = 1;
                        this.m_count = 1;
                        return;
                    }
                    if (d12_1 > 0 && d12_2 > 0 && d123_3 <= 0) {
                        const inv_d12 = 1 / (d12_1 + d12_2);
                        this.m_v1.a = d12_1 * inv_d12;
                        this.m_v2.a = d12_2 * inv_d12;
                        this.m_count = 2;
                        return;
                    }
                    if (d13_1 > 0 && d13_2 > 0 && d123_2 <= 0) {
                        const inv_d13 = 1 / (d13_1 + d13_2);
                        this.m_v1.a = d13_1 * inv_d13;
                        this.m_v3.a = d13_2 * inv_d13;
                        this.m_count = 2;
                        this.m_v2.Copy(this.m_v3);
                        return;
                    }
                    if (d12_1 <= 0 && d23_2 <= 0) {
                        this.m_v2.a = 1;
                        this.m_count = 1;
                        this.m_v1.Copy(this.m_v2);
                        return;
                    }
                    if (d13_1 <= 0 && d23_1 <= 0) {
                        this.m_v3.a = 1;
                        this.m_count = 1;
                        this.m_v1.Copy(this.m_v3);
                        return;
                    }
                    if (d23_1 > 0 && d23_2 > 0 && d123_1 <= 0) {
                        const inv_d23 = 1 / (d23_1 + d23_2);
                        this.m_v2.a = d23_1 * inv_d23;
                        this.m_v3.a = d23_2 * inv_d23;
                        this.m_count = 2;
                        this.m_v1.Copy(this.m_v3);
                        return;
                    }
                    const inv_d123 = 1 / (d123_1 + d123_2 + d123_3);
                    this.m_v1.a = d123_1 * inv_d123;
                    this.m_v2.a = d123_2 * inv_d123;
                    this.m_v3.a = d123_3 * inv_d123;
                    this.m_count = 3;
                }
            };
            b2Simplex.s_e12 = new b2Math_1.b2Vec2();
            b2Simplex.s_e13 = new b2Math_1.b2Vec2();
            b2Simplex.s_e23 = new b2Math_1.b2Vec2();
            exports_8("b2Simplex", b2Simplex);
            b2Distance_s_simplex = new b2Simplex();
            b2Distance_s_saveA = [0, 0, 0];
            b2Distance_s_saveB = [0, 0, 0];
            b2Distance_s_p = new b2Math_1.b2Vec2();
            b2Distance_s_d = new b2Math_1.b2Vec2();
            b2Distance_s_normal = new b2Math_1.b2Vec2();
            b2Distance_s_supportA = new b2Math_1.b2Vec2();
            b2Distance_s_supportB = new b2Math_1.b2Vec2();
        }
    };
});
System.register("Collision/Shapes/b2Shape", ["Common/b2Math"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var b2Math_2, b2MassData, b2ShapeType, b2Shape;
    return {
        setters: [
            function (b2Math_2_1) {
                b2Math_2 = b2Math_2_1;
            }
        ],
        execute: function () {
            b2MassData = class b2MassData {
                constructor() {
                    this.mass = 0;
                    this.center = new b2Math_2.b2Vec2(0, 0);
                    this.I = 0;
                }
            };
            exports_9("b2MassData", b2MassData);
            (function (b2ShapeType) {
                b2ShapeType[b2ShapeType["e_unknown"] = -1] = "e_unknown";
                b2ShapeType[b2ShapeType["e_circleShape"] = 0] = "e_circleShape";
                b2ShapeType[b2ShapeType["e_edgeShape"] = 1] = "e_edgeShape";
                b2ShapeType[b2ShapeType["e_polygonShape"] = 2] = "e_polygonShape";
                b2ShapeType[b2ShapeType["e_chainShape"] = 3] = "e_chainShape";
                b2ShapeType[b2ShapeType["e_shapeTypeCount"] = 4] = "e_shapeTypeCount";
            })(b2ShapeType || (b2ShapeType = {}));
            exports_9("b2ShapeType", b2ShapeType);
            b2Shape = class b2Shape {
                constructor(type, radius) {
                    this.m_type = b2ShapeType.e_unknown;
                    this.m_radius = 0;
                    this.m_type = type;
                    this.m_radius = radius;
                }
                Copy(other) {
                    this.m_radius = other.m_radius;
                    return this;
                }
                GetType() {
                    return this.m_type;
                }
            };
            exports_9("b2Shape", b2Shape);
        }
    };
});
System.register("Collision/b2Collision", ["Common/b2Settings", "Common/b2Math", "Collision/b2Distance"], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    function b2GetPointStates(state1, state2, manifold1, manifold2) {
        let i;
        for (i = 0; i < manifold1.pointCount; ++i) {
            const id = manifold1.points[i].id;
            const key = id.key;
            state1[i] = b2PointState.b2_removeState;
            for (let j = 0, jct = manifold2.pointCount; j < jct; ++j) {
                if (manifold2.points[j].id.key === key) {
                    state1[i] = b2PointState.b2_persistState;
                    break;
                }
            }
        }
        for (; i < b2Settings_4.b2_maxManifoldPoints; ++i) {
            state1[i] = b2PointState.b2_nullState;
        }
        for (i = 0; i < manifold2.pointCount; ++i) {
            const id = manifold2.points[i].id;
            const key = id.key;
            state2[i] = b2PointState.b2_addState;
            for (let j = 0, jct = manifold1.pointCount; j < jct; ++j) {
                if (manifold1.points[j].id.key === key) {
                    state2[i] = b2PointState.b2_persistState;
                    break;
                }
            }
        }
        for (; i < b2Settings_4.b2_maxManifoldPoints; ++i) {
            state2[i] = b2PointState.b2_nullState;
        }
    }
    exports_10("b2GetPointStates", b2GetPointStates);
    function b2TestOverlapAABB(a, b) {
        const d1_x = b.lowerBound.x - a.upperBound.x;
        const d1_y = b.lowerBound.y - a.upperBound.y;
        const d2_x = a.lowerBound.x - b.upperBound.x;
        const d2_y = a.lowerBound.y - b.upperBound.y;
        if (d1_x > 0 || d1_y > 0) {
            return false;
        }
        if (d2_x > 0 || d2_y > 0) {
            return false;
        }
        return true;
    }
    exports_10("b2TestOverlapAABB", b2TestOverlapAABB);
    function b2ClipSegmentToLine(vOut, vIn, normal, offset, vertexIndexA) {
        let numOut = 0;
        const vIn0 = vIn[0];
        const vIn1 = vIn[1];
        const distance0 = b2Math_3.b2Vec2.DotVV(normal, vIn0.v) - offset;
        const distance1 = b2Math_3.b2Vec2.DotVV(normal, vIn1.v) - offset;
        if (distance0 <= 0) {
            vOut[numOut++].Copy(vIn0);
        }
        if (distance1 <= 0) {
            vOut[numOut++].Copy(vIn1);
        }
        if (distance0 * distance1 < 0) {
            const interp = distance0 / (distance0 - distance1);
            const v = vOut[numOut].v;
            v.x = vIn0.v.x + interp * (vIn1.v.x - vIn0.v.x);
            v.y = vIn0.v.y + interp * (vIn1.v.y - vIn0.v.y);
            const id = vOut[numOut].id;
            id.cf.indexA = vertexIndexA;
            id.cf.indexB = vIn0.id.cf.indexB;
            id.cf.typeA = b2ContactFeatureType.e_vertex;
            id.cf.typeB = b2ContactFeatureType.e_face;
            ++numOut;
        }
        return numOut;
    }
    exports_10("b2ClipSegmentToLine", b2ClipSegmentToLine);
    function b2TestOverlapShape(shapeA, indexA, shapeB, indexB, xfA, xfB) {
        const input = b2TestOverlapShape_s_input.Reset();
        input.proxyA.SetShape(shapeA, indexA);
        input.proxyB.SetShape(shapeB, indexB);
        input.transformA.Copy(xfA);
        input.transformB.Copy(xfB);
        input.useRadii = true;
        const simplexCache = b2TestOverlapShape_s_simplexCache.Reset();
        simplexCache.count = 0;
        const output = b2TestOverlapShape_s_output.Reset();
        b2Distance_1.b2Distance(output, simplexCache, input);
        return output.distance < 10 * b2Settings_4.b2_epsilon;
    }
    exports_10("b2TestOverlapShape", b2TestOverlapShape);
    var b2Settings_4, b2Math_3, b2Distance_1, b2ContactFeatureType, b2ContactFeature, b2ContactID, b2ManifoldPoint, b2ManifoldType, b2Manifold, b2WorldManifold, b2PointState, b2ClipVertex, b2RayCastInput, b2RayCastOutput, b2AABB, b2TestOverlapShape_s_input, b2TestOverlapShape_s_simplexCache, b2TestOverlapShape_s_output;
    return {
        setters: [
            function (b2Settings_4_1) {
                b2Settings_4 = b2Settings_4_1;
            },
            function (b2Math_3_1) {
                b2Math_3 = b2Math_3_1;
            },
            function (b2Distance_1_1) {
                b2Distance_1 = b2Distance_1_1;
            }
        ],
        execute: function () {
            (function (b2ContactFeatureType) {
                b2ContactFeatureType[b2ContactFeatureType["e_vertex"] = 0] = "e_vertex";
                b2ContactFeatureType[b2ContactFeatureType["e_face"] = 1] = "e_face";
            })(b2ContactFeatureType || (b2ContactFeatureType = {}));
            exports_10("b2ContactFeatureType", b2ContactFeatureType);
            b2ContactFeature = class b2ContactFeature {
                constructor() {
                    this._key = 0;
                    this._key_invalid = false;
                    this._indexA = 0;
                    this._indexB = 0;
                    this._typeA = 0;
                    this._typeB = 0;
                }
                get key() {
                    if (this._key_invalid) {
                        this._key_invalid = false;
                        this._key = this._indexA | (this._indexB << 8) | (this._typeA << 16) | (this._typeB << 24);
                    }
                    return this._key;
                }
                set key(value) {
                    this._key = value;
                    this._key_invalid = false;
                    this._indexA = this._key & 0xff;
                    this._indexB = (this._key >> 8) & 0xff;
                    this._typeA = (this._key >> 16) & 0xff;
                    this._typeB = (this._key >> 24) & 0xff;
                }
                get indexA() {
                    return this._indexA;
                }
                set indexA(value) {
                    this._indexA = value;
                    this._key_invalid = true;
                }
                get indexB() {
                    return this._indexB;
                }
                set indexB(value) {
                    this._indexB = value;
                    this._key_invalid = true;
                }
                get typeA() {
                    return this._typeA;
                }
                set typeA(value) {
                    this._typeA = value;
                    this._key_invalid = true;
                }
                get typeB() {
                    return this._typeB;
                }
                set typeB(value) {
                    this._typeB = value;
                    this._key_invalid = true;
                }
            };
            exports_10("b2ContactFeature", b2ContactFeature);
            b2ContactID = class b2ContactID {
                constructor() {
                    this.cf = new b2ContactFeature();
                }
                Copy(o) {
                    this.key = o.key;
                    return this;
                }
                Clone() {
                    return new b2ContactID().Copy(this);
                }
                get key() {
                    return this.cf.key;
                }
                set key(value) {
                    this.cf.key = value;
                }
            };
            exports_10("b2ContactID", b2ContactID);
            b2ManifoldPoint = class b2ManifoldPoint {
                constructor() {
                    this.localPoint = new b2Math_3.b2Vec2();
                    this.normalImpulse = 0;
                    this.tangentImpulse = 0;
                    this.id = new b2ContactID();
                }
                static MakeArray(length) {
                    return b2Settings_4.b2MakeArray(length, (i) => new b2ManifoldPoint());
                }
                Reset() {
                    this.localPoint.SetZero();
                    this.normalImpulse = 0;
                    this.tangentImpulse = 0;
                    this.id.key = 0;
                }
                Copy(o) {
                    this.localPoint.Copy(o.localPoint);
                    this.normalImpulse = o.normalImpulse;
                    this.tangentImpulse = o.tangentImpulse;
                    this.id.Copy(o.id);
                    return this;
                }
            };
            exports_10("b2ManifoldPoint", b2ManifoldPoint);
            (function (b2ManifoldType) {
                b2ManifoldType[b2ManifoldType["e_unknown"] = -1] = "e_unknown";
                b2ManifoldType[b2ManifoldType["e_circles"] = 0] = "e_circles";
                b2ManifoldType[b2ManifoldType["e_faceA"] = 1] = "e_faceA";
                b2ManifoldType[b2ManifoldType["e_faceB"] = 2] = "e_faceB";
            })(b2ManifoldType || (b2ManifoldType = {}));
            exports_10("b2ManifoldType", b2ManifoldType);
            b2Manifold = class b2Manifold {
                constructor() {
                    this.points = b2ManifoldPoint.MakeArray(b2Settings_4.b2_maxManifoldPoints);
                    this.localNormal = new b2Math_3.b2Vec2();
                    this.localPoint = new b2Math_3.b2Vec2();
                    this.type = b2ManifoldType.e_unknown;
                    this.pointCount = 0;
                }
                Reset() {
                    for (let i = 0; i < b2Settings_4.b2_maxManifoldPoints; ++i) {
                        this.points[i].Reset();
                    }
                    this.localNormal.SetZero();
                    this.localPoint.SetZero();
                    this.type = b2ManifoldType.e_unknown;
                    this.pointCount = 0;
                }
                Copy(o) {
                    this.pointCount = o.pointCount;
                    for (let i = 0; i < b2Settings_4.b2_maxManifoldPoints; ++i) {
                        this.points[i].Copy(o.points[i]);
                    }
                    this.localNormal.Copy(o.localNormal);
                    this.localPoint.Copy(o.localPoint);
                    this.type = o.type;
                    return this;
                }
                Clone() {
                    return new b2Manifold().Copy(this);
                }
            };
            exports_10("b2Manifold", b2Manifold);
            b2WorldManifold = class b2WorldManifold {
                constructor() {
                    this.normal = new b2Math_3.b2Vec2();
                    this.points = b2Math_3.b2Vec2.MakeArray(b2Settings_4.b2_maxManifoldPoints);
                    this.separations = b2Settings_4.b2MakeNumberArray(b2Settings_4.b2_maxManifoldPoints);
                }
                Initialize(manifold, xfA, radiusA, xfB, radiusB) {
                    if (manifold.pointCount === 0) {
                        return;
                    }
                    switch (manifold.type) {
                        case b2ManifoldType.e_circles:
                            {
                                this.normal.Set(1, 0);
                                const pointA = b2Math_3.b2Transform.MulXV(xfA, manifold.localPoint, b2WorldManifold.Initialize_s_pointA);
                                const pointB = b2Math_3.b2Transform.MulXV(xfB, manifold.points[0].localPoint, b2WorldManifold.Initialize_s_pointB);
                                if (b2Math_3.b2Vec2.DistanceSquaredVV(pointA, pointB) > b2Settings_4.b2_epsilon_sq) {
                                    b2Math_3.b2Vec2.SubVV(pointB, pointA, this.normal).SelfNormalize();
                                }
                                const cA = b2Math_3.b2Vec2.AddVMulSV(pointA, radiusA, this.normal, b2WorldManifold.Initialize_s_cA);
                                const cB = b2Math_3.b2Vec2.SubVMulSV(pointB, radiusB, this.normal, b2WorldManifold.Initialize_s_cB);
                                b2Math_3.b2Vec2.MidVV(cA, cB, this.points[0]);
                                this.separations[0] = b2Math_3.b2Vec2.DotVV(b2Math_3.b2Vec2.SubVV(cB, cA, b2Math_3.b2Vec2.s_t0), this.normal);
                            }
                            break;
                        case b2ManifoldType.e_faceA:
                            {
                                b2Math_3.b2Rot.MulRV(xfA.q, manifold.localNormal, this.normal);
                                const planePoint = b2Math_3.b2Transform.MulXV(xfA, manifold.localPoint, b2WorldManifold.Initialize_s_planePoint);
                                for (let i = 0; i < manifold.pointCount; ++i) {
                                    const clipPoint = b2Math_3.b2Transform.MulXV(xfB, manifold.points[i].localPoint, b2WorldManifold.Initialize_s_clipPoint);
                                    const s = radiusA - b2Math_3.b2Vec2.DotVV(b2Math_3.b2Vec2.SubVV(clipPoint, planePoint, b2Math_3.b2Vec2.s_t0), this.normal);
                                    const cA = b2Math_3.b2Vec2.AddVMulSV(clipPoint, s, this.normal, b2WorldManifold.Initialize_s_cA);
                                    const cB = b2Math_3.b2Vec2.SubVMulSV(clipPoint, radiusB, this.normal, b2WorldManifold.Initialize_s_cB);
                                    b2Math_3.b2Vec2.MidVV(cA, cB, this.points[i]);
                                    this.separations[i] = b2Math_3.b2Vec2.DotVV(b2Math_3.b2Vec2.SubVV(cB, cA, b2Math_3.b2Vec2.s_t0), this.normal);
                                }
                            }
                            break;
                        case b2ManifoldType.e_faceB:
                            {
                                b2Math_3.b2Rot.MulRV(xfB.q, manifold.localNormal, this.normal);
                                const planePoint = b2Math_3.b2Transform.MulXV(xfB, manifold.localPoint, b2WorldManifold.Initialize_s_planePoint);
                                for (let i = 0; i < manifold.pointCount; ++i) {
                                    const clipPoint = b2Math_3.b2Transform.MulXV(xfA, manifold.points[i].localPoint, b2WorldManifold.Initialize_s_clipPoint);
                                    const s = radiusB - b2Math_3.b2Vec2.DotVV(b2Math_3.b2Vec2.SubVV(clipPoint, planePoint, b2Math_3.b2Vec2.s_t0), this.normal);
                                    const cB = b2Math_3.b2Vec2.AddVMulSV(clipPoint, s, this.normal, b2WorldManifold.Initialize_s_cB);
                                    const cA = b2Math_3.b2Vec2.SubVMulSV(clipPoint, radiusA, this.normal, b2WorldManifold.Initialize_s_cA);
                                    b2Math_3.b2Vec2.MidVV(cA, cB, this.points[i]);
                                    this.separations[i] = b2Math_3.b2Vec2.DotVV(b2Math_3.b2Vec2.SubVV(cA, cB, b2Math_3.b2Vec2.s_t0), this.normal);
                                }
                                this.normal.SelfNeg();
                            }
                            break;
                    }
                }
            };
            b2WorldManifold.Initialize_s_pointA = new b2Math_3.b2Vec2();
            b2WorldManifold.Initialize_s_pointB = new b2Math_3.b2Vec2();
            b2WorldManifold.Initialize_s_cA = new b2Math_3.b2Vec2();
            b2WorldManifold.Initialize_s_cB = new b2Math_3.b2Vec2();
            b2WorldManifold.Initialize_s_planePoint = new b2Math_3.b2Vec2();
            b2WorldManifold.Initialize_s_clipPoint = new b2Math_3.b2Vec2();
            exports_10("b2WorldManifold", b2WorldManifold);
            (function (b2PointState) {
                b2PointState[b2PointState["b2_nullState"] = 0] = "b2_nullState";
                b2PointState[b2PointState["b2_addState"] = 1] = "b2_addState";
                b2PointState[b2PointState["b2_persistState"] = 2] = "b2_persistState";
                b2PointState[b2PointState["b2_removeState"] = 3] = "b2_removeState";
            })(b2PointState || (b2PointState = {}));
            exports_10("b2PointState", b2PointState);
            b2ClipVertex = class b2ClipVertex {
                constructor() {
                    this.v = new b2Math_3.b2Vec2();
                    this.id = new b2ContactID();
                }
                static MakeArray(length) {
                    return b2Settings_4.b2MakeArray(length, (i) => new b2ClipVertex());
                }
                Copy(other) {
                    this.v.Copy(other.v);
                    this.id.Copy(other.id);
                    return this;
                }
            };
            exports_10("b2ClipVertex", b2ClipVertex);
            b2RayCastInput = class b2RayCastInput {
                constructor() {
                    this.p1 = new b2Math_3.b2Vec2();
                    this.p2 = new b2Math_3.b2Vec2();
                    this.maxFraction = 1;
                }
                Copy(o) {
                    this.p1.Copy(o.p1);
                    this.p2.Copy(o.p2);
                    this.maxFraction = o.maxFraction;
                    return this;
                }
            };
            exports_10("b2RayCastInput", b2RayCastInput);
            b2RayCastOutput = class b2RayCastOutput {
                constructor() {
                    this.normal = new b2Math_3.b2Vec2();
                    this.fraction = 0;
                }
                Copy(o) {
                    this.normal.Copy(o.normal);
                    this.fraction = o.fraction;
                    return this;
                }
            };
            exports_10("b2RayCastOutput", b2RayCastOutput);
            b2AABB = class b2AABB {
                constructor() {
                    this.lowerBound = new b2Math_3.b2Vec2();
                    this.upperBound = new b2Math_3.b2Vec2();
                    this.m_cache_center = new b2Math_3.b2Vec2();
                    this.m_cache_extent = new b2Math_3.b2Vec2();
                }
                Copy(o) {
                    this.lowerBound.Copy(o.lowerBound);
                    this.upperBound.Copy(o.upperBound);
                    return this;
                }
                IsValid() {
                    const d_x = this.upperBound.x - this.lowerBound.x;
                    const d_y = this.upperBound.y - this.lowerBound.y;
                    let valid = d_x >= 0 && d_y >= 0;
                    valid = valid && this.lowerBound.IsValid() && this.upperBound.IsValid();
                    return valid;
                }
                GetCenter() {
                    return b2Math_3.b2Vec2.MidVV(this.lowerBound, this.upperBound, this.m_cache_center);
                }
                GetExtents() {
                    return b2Math_3.b2Vec2.ExtVV(this.lowerBound, this.upperBound, this.m_cache_extent);
                }
                GetPerimeter() {
                    const wx = this.upperBound.x - this.lowerBound.x;
                    const wy = this.upperBound.y - this.lowerBound.y;
                    return 2 * (wx + wy);
                }
                Combine1(aabb) {
                    this.lowerBound.x = b2Math_3.b2Min(this.lowerBound.x, aabb.lowerBound.x);
                    this.lowerBound.y = b2Math_3.b2Min(this.lowerBound.y, aabb.lowerBound.y);
                    this.upperBound.x = b2Math_3.b2Max(this.upperBound.x, aabb.upperBound.x);
                    this.upperBound.y = b2Math_3.b2Max(this.upperBound.y, aabb.upperBound.y);
                    return this;
                }
                Combine2(aabb1, aabb2) {
                    this.lowerBound.x = b2Math_3.b2Min(aabb1.lowerBound.x, aabb2.lowerBound.x);
                    this.lowerBound.y = b2Math_3.b2Min(aabb1.lowerBound.y, aabb2.lowerBound.y);
                    this.upperBound.x = b2Math_3.b2Max(aabb1.upperBound.x, aabb2.upperBound.x);
                    this.upperBound.y = b2Math_3.b2Max(aabb1.upperBound.y, aabb2.upperBound.y);
                    return this;
                }
                static Combine(aabb1, aabb2, out) {
                    out.Combine2(aabb1, aabb2);
                    return out;
                }
                Contains(aabb) {
                    let result = true;
                    result = result && this.lowerBound.x <= aabb.lowerBound.x;
                    result = result && this.lowerBound.y <= aabb.lowerBound.y;
                    result = result && aabb.upperBound.x <= this.upperBound.x;
                    result = result && aabb.upperBound.y <= this.upperBound.y;
                    return result;
                }
                RayCast(output, input) {
                    let tmin = (-b2Settings_4.b2_maxFloat);
                    let tmax = b2Settings_4.b2_maxFloat;
                    const p_x = input.p1.x;
                    const p_y = input.p1.y;
                    const d_x = input.p2.x - input.p1.x;
                    const d_y = input.p2.y - input.p1.y;
                    const absD_x = b2Math_3.b2Abs(d_x);
                    const absD_y = b2Math_3.b2Abs(d_y);
                    const normal = output.normal;
                    if (absD_x < b2Settings_4.b2_epsilon) {
                        if (p_x < this.lowerBound.x || this.upperBound.x < p_x) {
                            return false;
                        }
                    }
                    else {
                        const inv_d = 1 / d_x;
                        let t1 = (this.lowerBound.x - p_x) * inv_d;
                        let t2 = (this.upperBound.x - p_x) * inv_d;
                        let s = (-1);
                        if (t1 > t2) {
                            const t3 = t1;
                            t1 = t2;
                            t2 = t3;
                            s = 1;
                        }
                        if (t1 > tmin) {
                            normal.x = s;
                            normal.y = 0;
                            tmin = t1;
                        }
                        tmax = b2Math_3.b2Min(tmax, t2);
                        if (tmin > tmax) {
                            return false;
                        }
                    }
                    if (absD_y < b2Settings_4.b2_epsilon) {
                        if (p_y < this.lowerBound.y || this.upperBound.y < p_y) {
                            return false;
                        }
                    }
                    else {
                        const inv_d = 1 / d_y;
                        let t1 = (this.lowerBound.y - p_y) * inv_d;
                        let t2 = (this.upperBound.y - p_y) * inv_d;
                        let s = (-1);
                        if (t1 > t2) {
                            const t3 = t1;
                            t1 = t2;
                            t2 = t3;
                            s = 1;
                        }
                        if (t1 > tmin) {
                            normal.x = 0;
                            normal.y = s;
                            tmin = t1;
                        }
                        tmax = b2Math_3.b2Min(tmax, t2);
                        if (tmin > tmax) {
                            return false;
                        }
                    }
                    if (tmin < 0 || input.maxFraction < tmin) {
                        return false;
                    }
                    output.fraction = tmin;
                    return true;
                }
                TestContain(point) {
                    if (point.x < this.lowerBound.x || this.upperBound.x < point.x) {
                        return false;
                    }
                    if (point.y < this.lowerBound.y || this.upperBound.y < point.y) {
                        return false;
                    }
                    return true;
                }
                TestOverlap(other) {
                    const d1_x = other.lowerBound.x - this.upperBound.x;
                    const d1_y = other.lowerBound.y - this.upperBound.y;
                    const d2_x = this.lowerBound.x - other.upperBound.x;
                    const d2_y = this.lowerBound.y - other.upperBound.y;
                    if (d1_x > 0 || d1_y > 0) {
                        return false;
                    }
                    if (d2_x > 0 || d2_y > 0) {
                        return false;
                    }
                    return true;
                }
            };
            exports_10("b2AABB", b2AABB);
            b2TestOverlapShape_s_input = new b2Distance_1.b2DistanceInput();
            b2TestOverlapShape_s_simplexCache = new b2Distance_1.b2SimplexCache();
            b2TestOverlapShape_s_output = new b2Distance_1.b2DistanceOutput();
        }
    };
});
System.register("Collision/b2DynamicTree", ["Common/b2Settings", "Common/b2Math", "Common/b2GrowableStack", "Collision/b2Collision"], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    function verify(value) {
        if (value === null) {
            throw new Error();
        }
        return value;
    }
    var b2Settings_5, b2Math_4, b2GrowableStack_1, b2Collision_1, b2TreeNode, b2DynamicTree;
    return {
        setters: [
            function (b2Settings_5_1) {
                b2Settings_5 = b2Settings_5_1;
            },
            function (b2Math_4_1) {
                b2Math_4 = b2Math_4_1;
            },
            function (b2GrowableStack_1_1) {
                b2GrowableStack_1 = b2GrowableStack_1_1;
            },
            function (b2Collision_1_1) {
                b2Collision_1 = b2Collision_1_1;
            }
        ],
        execute: function () {
            b2TreeNode = class b2TreeNode {
                constructor(id = 0) {
                    this.m_id = 0;
                    this.aabb = new b2Collision_1.b2AABB();
                    this.userData = null;
                    this.parent = null;
                    this.child1 = null;
                    this.child2 = null;
                    this.height = 0;
                    this.m_id = id;
                }
                IsLeaf() {
                    return this.child1 === null;
                }
            };
            exports_11("b2TreeNode", b2TreeNode);
            b2DynamicTree = class b2DynamicTree {
                constructor() {
                    this.m_root = null;
                    this.m_freeList = null;
                    this.m_path = 0;
                    this.m_insertionCount = 0;
                }
                GetUserData(proxy) {
                    return proxy.userData;
                }
                GetFatAABB(proxy) {
                    return proxy.aabb;
                }
                Query(aabb, callback) {
                    if (this.m_root === null) {
                        return;
                    }
                    const stack = b2DynamicTree.s_stack.Reset();
                    stack.Push(this.m_root);
                    while (stack.GetCount() > 0) {
                        const node = stack.Pop();
                        if (node.aabb.TestOverlap(aabb)) {
                            if (node.IsLeaf()) {
                                const proceed = callback(node);
                                if (!proceed) {
                                    return;
                                }
                            }
                            else {
                                stack.Push(verify(node.child1));
                                stack.Push(verify(node.child2));
                            }
                        }
                    }
                }
                QueryPoint(point, callback) {
                    if (this.m_root === null) {
                        return;
                    }
                    const stack = b2DynamicTree.s_stack.Reset();
                    stack.Push(this.m_root);
                    while (stack.GetCount() > 0) {
                        const node = stack.Pop();
                        if (node.aabb.TestContain(point)) {
                            if (node.IsLeaf()) {
                                const proceed = callback(node);
                                if (!proceed) {
                                    return;
                                }
                            }
                            else {
                                stack.Push(verify(node.child1));
                                stack.Push(verify(node.child2));
                            }
                        }
                    }
                }
                RayCast(input, callback) {
                    if (this.m_root === null) {
                        return;
                    }
                    const p1 = input.p1;
                    const p2 = input.p2;
                    const r = b2Math_4.b2Vec2.SubVV(p2, p1, b2DynamicTree.s_r);
                    r.Normalize();
                    const v = b2Math_4.b2Vec2.CrossOneV(r, b2DynamicTree.s_v);
                    const abs_v = b2Math_4.b2Vec2.AbsV(v, b2DynamicTree.s_abs_v);
                    let maxFraction = input.maxFraction;
                    const segmentAABB = b2DynamicTree.s_segmentAABB;
                    let t_x = p1.x + maxFraction * (p2.x - p1.x);
                    let t_y = p1.y + maxFraction * (p2.y - p1.y);
                    segmentAABB.lowerBound.x = b2Math_4.b2Min(p1.x, t_x);
                    segmentAABB.lowerBound.y = b2Math_4.b2Min(p1.y, t_y);
                    segmentAABB.upperBound.x = b2Math_4.b2Max(p1.x, t_x);
                    segmentAABB.upperBound.y = b2Math_4.b2Max(p1.y, t_y);
                    const stack = b2DynamicTree.s_stack.Reset();
                    stack.Push(this.m_root);
                    while (stack.GetCount() > 0) {
                        const node = stack.Pop();
                        if (!b2Collision_1.b2TestOverlapAABB(node.aabb, segmentAABB)) {
                            continue;
                        }
                        const c = node.aabb.GetCenter();
                        const h = node.aabb.GetExtents();
                        const separation = b2Math_4.b2Abs(b2Math_4.b2Vec2.DotVV(v, b2Math_4.b2Vec2.SubVV(p1, c, b2Math_4.b2Vec2.s_t0))) - b2Math_4.b2Vec2.DotVV(abs_v, h);
                        if (separation > 0) {
                            continue;
                        }
                        if (node.IsLeaf()) {
                            const subInput = b2DynamicTree.s_subInput;
                            subInput.p1.Copy(input.p1);
                            subInput.p2.Copy(input.p2);
                            subInput.maxFraction = maxFraction;
                            const value = callback(subInput, node);
                            if (value === 0) {
                                return;
                            }
                            if (value > 0) {
                                maxFraction = value;
                                t_x = p1.x + maxFraction * (p2.x - p1.x);
                                t_y = p1.y + maxFraction * (p2.y - p1.y);
                                segmentAABB.lowerBound.x = b2Math_4.b2Min(p1.x, t_x);
                                segmentAABB.lowerBound.y = b2Math_4.b2Min(p1.y, t_y);
                                segmentAABB.upperBound.x = b2Math_4.b2Max(p1.x, t_x);
                                segmentAABB.upperBound.y = b2Math_4.b2Max(p1.y, t_y);
                            }
                        }
                        else {
                            stack.Push(verify(node.child1));
                            stack.Push(verify(node.child2));
                        }
                    }
                }
                AllocateNode() {
                    if (this.m_freeList) {
                        const node = this.m_freeList;
                        this.m_freeList = node.parent;
                        node.parent = null;
                        node.child1 = null;
                        node.child2 = null;
                        node.height = 0;
                        node.userData = null;
                        return node;
                    }
                    return new b2TreeNode(b2DynamicTree.s_node_id++);
                }
                FreeNode(node) {
                    node.parent = this.m_freeList;
                    node.child1 = null;
                    node.child2 = null;
                    node.height = -1;
                    node.userData = null;
                    this.m_freeList = node;
                }
                CreateProxy(aabb, userData) {
                    const node = this.AllocateNode();
                    const r_x = b2Settings_5.b2_aabbExtension;
                    const r_y = b2Settings_5.b2_aabbExtension;
                    node.aabb.lowerBound.x = aabb.lowerBound.x - r_x;
                    node.aabb.lowerBound.y = aabb.lowerBound.y - r_y;
                    node.aabb.upperBound.x = aabb.upperBound.x + r_x;
                    node.aabb.upperBound.y = aabb.upperBound.y + r_y;
                    node.userData = userData;
                    node.height = 0;
                    this.InsertLeaf(node);
                    return node;
                }
                DestroyProxy(proxy) {
                    this.RemoveLeaf(proxy);
                    this.FreeNode(proxy);
                }
                MoveProxy(proxy, aabb, displacement) {
                    if (proxy.aabb.Contains(aabb)) {
                        return false;
                    }
                    this.RemoveLeaf(proxy);
                    const r_x = b2Settings_5.b2_aabbExtension + b2Settings_5.b2_aabbMultiplier * (displacement.x > 0 ? displacement.x : (-displacement.x));
                    const r_y = b2Settings_5.b2_aabbExtension + b2Settings_5.b2_aabbMultiplier * (displacement.y > 0 ? displacement.y : (-displacement.y));
                    proxy.aabb.lowerBound.x = aabb.lowerBound.x - r_x;
                    proxy.aabb.lowerBound.y = aabb.lowerBound.y - r_y;
                    proxy.aabb.upperBound.x = aabb.upperBound.x + r_x;
                    proxy.aabb.upperBound.y = aabb.upperBound.y + r_y;
                    this.InsertLeaf(proxy);
                    return true;
                }
                InsertLeaf(leaf) {
                    ++this.m_insertionCount;
                    if (this.m_root === null) {
                        this.m_root = leaf;
                        this.m_root.parent = null;
                        return;
                    }
                    const leafAABB = leaf.aabb;
                    let index = this.m_root;
                    while (!index.IsLeaf()) {
                        const child1 = verify(index.child1);
                        const child2 = verify(index.child2);
                        const area = index.aabb.GetPerimeter();
                        const combinedAABB = b2DynamicTree.s_combinedAABB;
                        combinedAABB.Combine2(index.aabb, leafAABB);
                        const combinedArea = combinedAABB.GetPerimeter();
                        const cost = 2 * combinedArea;
                        const inheritanceCost = 2 * (combinedArea - area);
                        let cost1;
                        const aabb = b2DynamicTree.s_aabb;
                        let oldArea;
                        let newArea;
                        if (child1.IsLeaf()) {
                            aabb.Combine2(leafAABB, child1.aabb);
                            cost1 = aabb.GetPerimeter() + inheritanceCost;
                        }
                        else {
                            aabb.Combine2(leafAABB, child1.aabb);
                            oldArea = child1.aabb.GetPerimeter();
                            newArea = aabb.GetPerimeter();
                            cost1 = (newArea - oldArea) + inheritanceCost;
                        }
                        let cost2;
                        if (child2.IsLeaf()) {
                            aabb.Combine2(leafAABB, child2.aabb);
                            cost2 = aabb.GetPerimeter() + inheritanceCost;
                        }
                        else {
                            aabb.Combine2(leafAABB, child2.aabb);
                            oldArea = child2.aabb.GetPerimeter();
                            newArea = aabb.GetPerimeter();
                            cost2 = newArea - oldArea + inheritanceCost;
                        }
                        if (cost < cost1 && cost < cost2) {
                            break;
                        }
                        if (cost1 < cost2) {
                            index = child1;
                        }
                        else {
                            index = child2;
                        }
                    }
                    const sibling = index;
                    const oldParent = sibling.parent;
                    const newParent = this.AllocateNode();
                    newParent.parent = oldParent;
                    newParent.userData = null;
                    newParent.aabb.Combine2(leafAABB, sibling.aabb);
                    newParent.height = sibling.height + 1;
                    if (oldParent) {
                        if (oldParent.child1 === sibling) {
                            oldParent.child1 = newParent;
                        }
                        else {
                            oldParent.child2 = newParent;
                        }
                        newParent.child1 = sibling;
                        newParent.child2 = leaf;
                        sibling.parent = newParent;
                        leaf.parent = newParent;
                    }
                    else {
                        newParent.child1 = sibling;
                        newParent.child2 = leaf;
                        sibling.parent = newParent;
                        leaf.parent = newParent;
                        this.m_root = newParent;
                    }
                    let index2 = leaf.parent;
                    while (index2 !== null) {
                        index2 = this.Balance(index2);
                        const child1 = verify(index2.child1);
                        const child2 = verify(index2.child2);
                        index2.height = 1 + b2Math_4.b2Max(child1.height, child2.height);
                        index2.aabb.Combine2(child1.aabb, child2.aabb);
                        index2 = index2.parent;
                    }
                }
                RemoveLeaf(leaf) {
                    if (leaf === this.m_root) {
                        this.m_root = null;
                        return;
                    }
                    const parent = verify(leaf.parent);
                    const grandParent = parent && parent.parent;
                    let sibling;
                    if (parent.child1 === leaf) {
                        sibling = verify(parent.child2);
                    }
                    else {
                        sibling = verify(parent.child1);
                    }
                    if (grandParent) {
                        if (grandParent.child1 === parent) {
                            grandParent.child1 = sibling;
                        }
                        else {
                            grandParent.child2 = sibling;
                        }
                        sibling.parent = grandParent;
                        this.FreeNode(parent);
                        let index = grandParent;
                        while (index) {
                            index = this.Balance(index);
                            const child1 = verify(index.child1);
                            const child2 = verify(index.child2);
                            index.aabb.Combine2(child1.aabb, child2.aabb);
                            index.height = 1 + b2Math_4.b2Max(child1.height, child2.height);
                            index = index.parent;
                        }
                    }
                    else {
                        this.m_root = sibling;
                        sibling.parent = null;
                        this.FreeNode(parent);
                    }
                }
                Balance(A) {
                    if (A.IsLeaf() || A.height < 2) {
                        return A;
                    }
                    const B = verify(A.child1);
                    const C = verify(A.child2);
                    const balance = C.height - B.height;
                    if (balance > 1) {
                        const F = verify(C.child1);
                        const G = verify(C.child2);
                        C.child1 = A;
                        C.parent = A.parent;
                        A.parent = C;
                        if (C.parent !== null) {
                            if (C.parent.child1 === A) {
                                C.parent.child1 = C;
                            }
                            else {
                                C.parent.child2 = C;
                            }
                        }
                        else {
                            this.m_root = C;
                        }
                        if (F.height > G.height) {
                            C.child2 = F;
                            A.child2 = G;
                            G.parent = A;
                            A.aabb.Combine2(B.aabb, G.aabb);
                            C.aabb.Combine2(A.aabb, F.aabb);
                            A.height = 1 + b2Math_4.b2Max(B.height, G.height);
                            C.height = 1 + b2Math_4.b2Max(A.height, F.height);
                        }
                        else {
                            C.child2 = G;
                            A.child2 = F;
                            F.parent = A;
                            A.aabb.Combine2(B.aabb, F.aabb);
                            C.aabb.Combine2(A.aabb, G.aabb);
                            A.height = 1 + b2Math_4.b2Max(B.height, F.height);
                            C.height = 1 + b2Math_4.b2Max(A.height, G.height);
                        }
                        return C;
                    }
                    if (balance < -1) {
                        const D = verify(B.child1);
                        const E = verify(B.child2);
                        B.child1 = A;
                        B.parent = A.parent;
                        A.parent = B;
                        if (B.parent !== null) {
                            if (B.parent.child1 === A) {
                                B.parent.child1 = B;
                            }
                            else {
                                B.parent.child2 = B;
                            }
                        }
                        else {
                            this.m_root = B;
                        }
                        if (D.height > E.height) {
                            B.child2 = D;
                            A.child1 = E;
                            E.parent = A;
                            A.aabb.Combine2(C.aabb, E.aabb);
                            B.aabb.Combine2(A.aabb, D.aabb);
                            A.height = 1 + b2Math_4.b2Max(C.height, E.height);
                            B.height = 1 + b2Math_4.b2Max(A.height, D.height);
                        }
                        else {
                            B.child2 = E;
                            A.child1 = D;
                            D.parent = A;
                            A.aabb.Combine2(C.aabb, D.aabb);
                            B.aabb.Combine2(A.aabb, E.aabb);
                            A.height = 1 + b2Math_4.b2Max(C.height, D.height);
                            B.height = 1 + b2Math_4.b2Max(A.height, E.height);
                        }
                        return B;
                    }
                    return A;
                }
                GetHeight() {
                    if (this.m_root === null) {
                        return 0;
                    }
                    return this.m_root.height;
                }
                static GetAreaNode(node) {
                    if (node === null) {
                        return 0;
                    }
                    if (node.IsLeaf()) {
                        return 0;
                    }
                    let area = node.aabb.GetPerimeter();
                    area += b2DynamicTree.GetAreaNode(node.child1);
                    area += b2DynamicTree.GetAreaNode(node.child2);
                    return area;
                }
                GetAreaRatio() {
                    if (this.m_root === null) {
                        return 0;
                    }
                    const root = this.m_root;
                    const rootArea = root.aabb.GetPerimeter();
                    const totalArea = b2DynamicTree.GetAreaNode(this.m_root);
                    return totalArea / rootArea;
                }
                ComputeHeightNode(node) {
                    if (!node || node.IsLeaf()) {
                        return 0;
                    }
                    const height1 = this.ComputeHeightNode(node.child1);
                    const height2 = this.ComputeHeightNode(node.child2);
                    return 1 + b2Math_4.b2Max(height1, height2);
                }
                ComputeHeight() {
                    const height = this.ComputeHeightNode(this.m_root);
                    return height;
                }
                ValidateStructure(index) {
                    if (index === null) {
                        return;
                    }
                    if (index === this.m_root) {
                    }
                    const node = index;
                    if (node.IsLeaf()) {
                        return;
                    }
                    const child1 = verify(node.child1);
                    const child2 = verify(node.child2);
                    this.ValidateStructure(child1);
                    this.ValidateStructure(child2);
                }
                ValidateMetrics(index) {
                    if (index === null) {
                        return;
                    }
                    const node = index;
                    if (node.IsLeaf()) {
                        return;
                    }
                    const child1 = verify(node.child1);
                    const child2 = verify(node.child2);
                    const aabb = b2DynamicTree.s_aabb;
                    aabb.Combine2(child1.aabb, child2.aabb);
                    this.ValidateMetrics(child1);
                    this.ValidateMetrics(child2);
                }
                Validate() {
                    this.ValidateStructure(this.m_root);
                    this.ValidateMetrics(this.m_root);
                    let freeIndex = this.m_freeList;
                    while (freeIndex !== null) {
                        freeIndex = freeIndex.parent;
                    }
                }
                static GetMaxBalanceNode(node, maxBalance) {
                    if (node === null) {
                        return maxBalance;
                    }
                    if (node.height <= 1) {
                        return maxBalance;
                    }
                    const child1 = verify(node.child1);
                    const child2 = verify(node.child2);
                    const balance = b2Math_4.b2Abs(child2.height - child1.height);
                    return b2Math_4.b2Max(maxBalance, balance);
                }
                GetMaxBalance() {
                    const maxBalance = b2DynamicTree.GetMaxBalanceNode(this.m_root, 0);
                    return maxBalance;
                }
                RebuildBottomUp() {
                    this.Validate();
                }
                static ShiftOriginNode(node, newOrigin) {
                    if (node === null) {
                        return;
                    }
                    if (node.height <= 1) {
                        return;
                    }
                    const child1 = node.child1;
                    const child2 = node.child2;
                    b2DynamicTree.ShiftOriginNode(child1, newOrigin);
                    b2DynamicTree.ShiftOriginNode(child2, newOrigin);
                    node.aabb.lowerBound.SelfSub(newOrigin);
                    node.aabb.upperBound.SelfSub(newOrigin);
                }
                ShiftOrigin(newOrigin) {
                    b2DynamicTree.ShiftOriginNode(this.m_root, newOrigin);
                }
            };
            b2DynamicTree.s_stack = new b2GrowableStack_1.b2GrowableStack(256);
            b2DynamicTree.s_r = new b2Math_4.b2Vec2();
            b2DynamicTree.s_v = new b2Math_4.b2Vec2();
            b2DynamicTree.s_abs_v = new b2Math_4.b2Vec2();
            b2DynamicTree.s_segmentAABB = new b2Collision_1.b2AABB();
            b2DynamicTree.s_subInput = new b2Collision_1.b2RayCastInput();
            b2DynamicTree.s_combinedAABB = new b2Collision_1.b2AABB();
            b2DynamicTree.s_aabb = new b2Collision_1.b2AABB();
            b2DynamicTree.s_node_id = 0;
            exports_11("b2DynamicTree", b2DynamicTree);
        }
    };
});
System.register("Collision/b2TimeOfImpact", ["Common/b2Settings", "Common/b2Math", "Common/b2Timer", "Collision/b2Distance"], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    function b2_toi_reset() {
        exports_12("b2_toiTime", b2_toiTime = 0);
        exports_12("b2_toiMaxTime", b2_toiMaxTime = 0);
        exports_12("b2_toiCalls", b2_toiCalls = 0);
        exports_12("b2_toiIters", b2_toiIters = 0);
        exports_12("b2_toiMaxIters", b2_toiMaxIters = 0);
        exports_12("b2_toiRootIters", b2_toiRootIters = 0);
        exports_12("b2_toiMaxRootIters", b2_toiMaxRootIters = 0);
    }
    exports_12("b2_toi_reset", b2_toi_reset);
    function b2TimeOfImpact(output, input) {
        const timer = b2TimeOfImpact_s_timer.Reset();
        exports_12("b2_toiCalls", ++b2_toiCalls);
        output.state = b2TOIOutputState.e_unknown;
        output.t = input.tMax;
        const proxyA = input.proxyA;
        const proxyB = input.proxyB;
        const sweepA = b2TimeOfImpact_s_sweepA.Copy(input.sweepA);
        const sweepB = b2TimeOfImpact_s_sweepB.Copy(input.sweepB);
        sweepA.Normalize();
        sweepB.Normalize();
        const tMax = input.tMax;
        const totalRadius = proxyA.m_radius + proxyB.m_radius;
        const target = b2Math_5.b2Max(b2Settings_6.b2_linearSlop, totalRadius - 3 * b2Settings_6.b2_linearSlop);
        const tolerance = 0.25 * b2Settings_6.b2_linearSlop;
        let t1 = 0;
        const k_maxIterations = 20;
        let iter = 0;
        const cache = b2TimeOfImpact_s_cache;
        cache.count = 0;
        const distanceInput = b2TimeOfImpact_s_distanceInput;
        distanceInput.proxyA = input.proxyA;
        distanceInput.proxyB = input.proxyB;
        distanceInput.useRadii = false;
        for (;;) {
            const xfA = b2TimeOfImpact_s_xfA;
            const xfB = b2TimeOfImpact_s_xfB;
            sweepA.GetTransform(xfA, t1);
            sweepB.GetTransform(xfB, t1);
            distanceInput.transformA.Copy(xfA);
            distanceInput.transformB.Copy(xfB);
            const distanceOutput = b2TimeOfImpact_s_distanceOutput;
            b2Distance_2.b2Distance(distanceOutput, cache, distanceInput);
            if (distanceOutput.distance <= 0) {
                output.state = b2TOIOutputState.e_overlapped;
                output.t = 0;
                break;
            }
            if (distanceOutput.distance < target + tolerance) {
                output.state = b2TOIOutputState.e_touching;
                output.t = t1;
                break;
            }
            const fcn = b2TimeOfImpact_s_fcn;
            fcn.Initialize(cache, proxyA, sweepA, proxyB, sweepB, t1);
            let done = false;
            let t2 = tMax;
            let pushBackIter = 0;
            for (;;) {
                const indexA = b2TimeOfImpact_s_indexA;
                const indexB = b2TimeOfImpact_s_indexB;
                let s2 = fcn.FindMinSeparation(indexA, indexB, t2);
                if (s2 > (target + tolerance)) {
                    output.state = b2TOIOutputState.e_separated;
                    output.t = tMax;
                    done = true;
                    break;
                }
                if (s2 > (target - tolerance)) {
                    t1 = t2;
                    break;
                }
                let s1 = fcn.Evaluate(indexA[0], indexB[0], t1);
                if (s1 < (target - tolerance)) {
                    output.state = b2TOIOutputState.e_failed;
                    output.t = t1;
                    done = true;
                    break;
                }
                if (s1 <= (target + tolerance)) {
                    output.state = b2TOIOutputState.e_touching;
                    output.t = t1;
                    done = true;
                    break;
                }
                let rootIterCount = 0;
                let a1 = t1;
                let a2 = t2;
                for (;;) {
                    let t = 0;
                    if (rootIterCount & 1) {
                        t = a1 + (target - s1) * (a2 - a1) / (s2 - s1);
                    }
                    else {
                        t = 0.5 * (a1 + a2);
                    }
                    ++rootIterCount;
                    exports_12("b2_toiRootIters", ++b2_toiRootIters);
                    const s = fcn.Evaluate(indexA[0], indexB[0], t);
                    if (b2Math_5.b2Abs(s - target) < tolerance) {
                        t2 = t;
                        break;
                    }
                    if (s > target) {
                        a1 = t;
                        s1 = s;
                    }
                    else {
                        a2 = t;
                        s2 = s;
                    }
                    if (rootIterCount === 50) {
                        break;
                    }
                }
                exports_12("b2_toiMaxRootIters", b2_toiMaxRootIters = b2Math_5.b2Max(b2_toiMaxRootIters, rootIterCount));
                ++pushBackIter;
                if (pushBackIter === b2Settings_6.b2_maxPolygonVertices) {
                    break;
                }
            }
            ++iter;
            exports_12("b2_toiIters", ++b2_toiIters);
            if (done) {
                break;
            }
            if (iter === k_maxIterations) {
                output.state = b2TOIOutputState.e_failed;
                output.t = t1;
                break;
            }
        }
        exports_12("b2_toiMaxIters", b2_toiMaxIters = b2Math_5.b2Max(b2_toiMaxIters, iter));
        const time = timer.GetMilliseconds();
        exports_12("b2_toiMaxTime", b2_toiMaxTime = b2Math_5.b2Max(b2_toiMaxTime, time));
        exports_12("b2_toiTime", b2_toiTime += time);
    }
    exports_12("b2TimeOfImpact", b2TimeOfImpact);
    var b2Settings_6, b2Math_5, b2Timer_1, b2Distance_2, b2_toiTime, b2_toiMaxTime, b2_toiCalls, b2_toiIters, b2_toiMaxIters, b2_toiRootIters, b2_toiMaxRootIters, b2TimeOfImpact_s_xfA, b2TimeOfImpact_s_xfB, b2TimeOfImpact_s_pointA, b2TimeOfImpact_s_pointB, b2TimeOfImpact_s_normal, b2TimeOfImpact_s_axisA, b2TimeOfImpact_s_axisB, b2TOIInput, b2TOIOutputState, b2TOIOutput, b2SeparationFunctionType, b2SeparationFunction, b2TimeOfImpact_s_timer, b2TimeOfImpact_s_cache, b2TimeOfImpact_s_distanceInput, b2TimeOfImpact_s_distanceOutput, b2TimeOfImpact_s_fcn, b2TimeOfImpact_s_indexA, b2TimeOfImpact_s_indexB, b2TimeOfImpact_s_sweepA, b2TimeOfImpact_s_sweepB;
    return {
        setters: [
            function (b2Settings_6_1) {
                b2Settings_6 = b2Settings_6_1;
            },
            function (b2Math_5_1) {
                b2Math_5 = b2Math_5_1;
            },
            function (b2Timer_1_1) {
                b2Timer_1 = b2Timer_1_1;
            },
            function (b2Distance_2_1) {
                b2Distance_2 = b2Distance_2_1;
            }
        ],
        execute: function () {
            exports_12("b2_toiTime", b2_toiTime = 0);
            exports_12("b2_toiMaxTime", b2_toiMaxTime = 0);
            exports_12("b2_toiCalls", b2_toiCalls = 0);
            exports_12("b2_toiIters", b2_toiIters = 0);
            exports_12("b2_toiMaxIters", b2_toiMaxIters = 0);
            exports_12("b2_toiRootIters", b2_toiRootIters = 0);
            exports_12("b2_toiMaxRootIters", b2_toiMaxRootIters = 0);
            b2TimeOfImpact_s_xfA = new b2Math_5.b2Transform();
            b2TimeOfImpact_s_xfB = new b2Math_5.b2Transform();
            b2TimeOfImpact_s_pointA = new b2Math_5.b2Vec2();
            b2TimeOfImpact_s_pointB = new b2Math_5.b2Vec2();
            b2TimeOfImpact_s_normal = new b2Math_5.b2Vec2();
            b2TimeOfImpact_s_axisA = new b2Math_5.b2Vec2();
            b2TimeOfImpact_s_axisB = new b2Math_5.b2Vec2();
            b2TOIInput = class b2TOIInput {
                constructor() {
                    this.proxyA = new b2Distance_2.b2DistanceProxy();
                    this.proxyB = new b2Distance_2.b2DistanceProxy();
                    this.sweepA = new b2Math_5.b2Sweep();
                    this.sweepB = new b2Math_5.b2Sweep();
                    this.tMax = 0;
                }
            };
            exports_12("b2TOIInput", b2TOIInput);
            (function (b2TOIOutputState) {
                b2TOIOutputState[b2TOIOutputState["e_unknown"] = 0] = "e_unknown";
                b2TOIOutputState[b2TOIOutputState["e_failed"] = 1] = "e_failed";
                b2TOIOutputState[b2TOIOutputState["e_overlapped"] = 2] = "e_overlapped";
                b2TOIOutputState[b2TOIOutputState["e_touching"] = 3] = "e_touching";
                b2TOIOutputState[b2TOIOutputState["e_separated"] = 4] = "e_separated";
            })(b2TOIOutputState || (b2TOIOutputState = {}));
            exports_12("b2TOIOutputState", b2TOIOutputState);
            b2TOIOutput = class b2TOIOutput {
                constructor() {
                    this.state = b2TOIOutputState.e_unknown;
                    this.t = 0;
                }
            };
            exports_12("b2TOIOutput", b2TOIOutput);
            (function (b2SeparationFunctionType) {
                b2SeparationFunctionType[b2SeparationFunctionType["e_unknown"] = -1] = "e_unknown";
                b2SeparationFunctionType[b2SeparationFunctionType["e_points"] = 0] = "e_points";
                b2SeparationFunctionType[b2SeparationFunctionType["e_faceA"] = 1] = "e_faceA";
                b2SeparationFunctionType[b2SeparationFunctionType["e_faceB"] = 2] = "e_faceB";
            })(b2SeparationFunctionType || (b2SeparationFunctionType = {}));
            exports_12("b2SeparationFunctionType", b2SeparationFunctionType);
            b2SeparationFunction = class b2SeparationFunction {
                constructor() {
                    this.m_sweepA = new b2Math_5.b2Sweep();
                    this.m_sweepB = new b2Math_5.b2Sweep();
                    this.m_type = b2SeparationFunctionType.e_unknown;
                    this.m_localPoint = new b2Math_5.b2Vec2();
                    this.m_axis = new b2Math_5.b2Vec2();
                }
                Initialize(cache, proxyA, sweepA, proxyB, sweepB, t1) {
                    this.m_proxyA = proxyA;
                    this.m_proxyB = proxyB;
                    const count = cache.count;
                    this.m_sweepA.Copy(sweepA);
                    this.m_sweepB.Copy(sweepB);
                    const xfA = b2TimeOfImpact_s_xfA;
                    const xfB = b2TimeOfImpact_s_xfB;
                    this.m_sweepA.GetTransform(xfA, t1);
                    this.m_sweepB.GetTransform(xfB, t1);
                    if (count === 1) {
                        this.m_type = b2SeparationFunctionType.e_points;
                        const localPointA = this.m_proxyA.GetVertex(cache.indexA[0]);
                        const localPointB = this.m_proxyB.GetVertex(cache.indexB[0]);
                        const pointA = b2Math_5.b2Transform.MulXV(xfA, localPointA, b2TimeOfImpact_s_pointA);
                        const pointB = b2Math_5.b2Transform.MulXV(xfB, localPointB, b2TimeOfImpact_s_pointB);
                        b2Math_5.b2Vec2.SubVV(pointB, pointA, this.m_axis);
                        const s = this.m_axis.Normalize();
                        this.m_localPoint.SetZero();
                        return s;
                    }
                    else if (cache.indexA[0] === cache.indexA[1]) {
                        this.m_type = b2SeparationFunctionType.e_faceB;
                        const localPointB1 = this.m_proxyB.GetVertex(cache.indexB[0]);
                        const localPointB2 = this.m_proxyB.GetVertex(cache.indexB[1]);
                        b2Math_5.b2Vec2.CrossVOne(b2Math_5.b2Vec2.SubVV(localPointB2, localPointB1, b2Math_5.b2Vec2.s_t0), this.m_axis).SelfNormalize();
                        const normal = b2Math_5.b2Rot.MulRV(xfB.q, this.m_axis, b2TimeOfImpact_s_normal);
                        b2Math_5.b2Vec2.MidVV(localPointB1, localPointB2, this.m_localPoint);
                        const pointB = b2Math_5.b2Transform.MulXV(xfB, this.m_localPoint, b2TimeOfImpact_s_pointB);
                        const localPointA = this.m_proxyA.GetVertex(cache.indexA[0]);
                        const pointA = b2Math_5.b2Transform.MulXV(xfA, localPointA, b2TimeOfImpact_s_pointA);
                        let s = b2Math_5.b2Vec2.DotVV(b2Math_5.b2Vec2.SubVV(pointA, pointB, b2Math_5.b2Vec2.s_t0), normal);
                        if (s < 0) {
                            this.m_axis.SelfNeg();
                            s = -s;
                        }
                        return s;
                    }
                    else {
                        this.m_type = b2SeparationFunctionType.e_faceA;
                        const localPointA1 = this.m_proxyA.GetVertex(cache.indexA[0]);
                        const localPointA2 = this.m_proxyA.GetVertex(cache.indexA[1]);
                        b2Math_5.b2Vec2.CrossVOne(b2Math_5.b2Vec2.SubVV(localPointA2, localPointA1, b2Math_5.b2Vec2.s_t0), this.m_axis).SelfNormalize();
                        const normal = b2Math_5.b2Rot.MulRV(xfA.q, this.m_axis, b2TimeOfImpact_s_normal);
                        b2Math_5.b2Vec2.MidVV(localPointA1, localPointA2, this.m_localPoint);
                        const pointA = b2Math_5.b2Transform.MulXV(xfA, this.m_localPoint, b2TimeOfImpact_s_pointA);
                        const localPointB = this.m_proxyB.GetVertex(cache.indexB[0]);
                        const pointB = b2Math_5.b2Transform.MulXV(xfB, localPointB, b2TimeOfImpact_s_pointB);
                        let s = b2Math_5.b2Vec2.DotVV(b2Math_5.b2Vec2.SubVV(pointB, pointA, b2Math_5.b2Vec2.s_t0), normal);
                        if (s < 0) {
                            this.m_axis.SelfNeg();
                            s = -s;
                        }
                        return s;
                    }
                }
                FindMinSeparation(indexA, indexB, t) {
                    const xfA = b2TimeOfImpact_s_xfA;
                    const xfB = b2TimeOfImpact_s_xfB;
                    this.m_sweepA.GetTransform(xfA, t);
                    this.m_sweepB.GetTransform(xfB, t);
                    switch (this.m_type) {
                        case b2SeparationFunctionType.e_points: {
                            const axisA = b2Math_5.b2Rot.MulTRV(xfA.q, this.m_axis, b2TimeOfImpact_s_axisA);
                            const axisB = b2Math_5.b2Rot.MulTRV(xfB.q, b2Math_5.b2Vec2.NegV(this.m_axis, b2Math_5.b2Vec2.s_t0), b2TimeOfImpact_s_axisB);
                            indexA[0] = this.m_proxyA.GetSupport(axisA);
                            indexB[0] = this.m_proxyB.GetSupport(axisB);
                            const localPointA = this.m_proxyA.GetVertex(indexA[0]);
                            const localPointB = this.m_proxyB.GetVertex(indexB[0]);
                            const pointA = b2Math_5.b2Transform.MulXV(xfA, localPointA, b2TimeOfImpact_s_pointA);
                            const pointB = b2Math_5.b2Transform.MulXV(xfB, localPointB, b2TimeOfImpact_s_pointB);
                            const separation = b2Math_5.b2Vec2.DotVV(b2Math_5.b2Vec2.SubVV(pointB, pointA, b2Math_5.b2Vec2.s_t0), this.m_axis);
                            return separation;
                        }
                        case b2SeparationFunctionType.e_faceA: {
                            const normal = b2Math_5.b2Rot.MulRV(xfA.q, this.m_axis, b2TimeOfImpact_s_normal);
                            const pointA = b2Math_5.b2Transform.MulXV(xfA, this.m_localPoint, b2TimeOfImpact_s_pointA);
                            const axisB = b2Math_5.b2Rot.MulTRV(xfB.q, b2Math_5.b2Vec2.NegV(normal, b2Math_5.b2Vec2.s_t0), b2TimeOfImpact_s_axisB);
                            indexA[0] = -1;
                            indexB[0] = this.m_proxyB.GetSupport(axisB);
                            const localPointB = this.m_proxyB.GetVertex(indexB[0]);
                            const pointB = b2Math_5.b2Transform.MulXV(xfB, localPointB, b2TimeOfImpact_s_pointB);
                            const separation = b2Math_5.b2Vec2.DotVV(b2Math_5.b2Vec2.SubVV(pointB, pointA, b2Math_5.b2Vec2.s_t0), normal);
                            return separation;
                        }
                        case b2SeparationFunctionType.e_faceB: {
                            const normal = b2Math_5.b2Rot.MulRV(xfB.q, this.m_axis, b2TimeOfImpact_s_normal);
                            const pointB = b2Math_5.b2Transform.MulXV(xfB, this.m_localPoint, b2TimeOfImpact_s_pointB);
                            const axisA = b2Math_5.b2Rot.MulTRV(xfA.q, b2Math_5.b2Vec2.NegV(normal, b2Math_5.b2Vec2.s_t0), b2TimeOfImpact_s_axisA);
                            indexB[0] = -1;
                            indexA[0] = this.m_proxyA.GetSupport(axisA);
                            const localPointA = this.m_proxyA.GetVertex(indexA[0]);
                            const pointA = b2Math_5.b2Transform.MulXV(xfA, localPointA, b2TimeOfImpact_s_pointA);
                            const separation = b2Math_5.b2Vec2.DotVV(b2Math_5.b2Vec2.SubVV(pointA, pointB, b2Math_5.b2Vec2.s_t0), normal);
                            return separation;
                        }
                        default:
                            indexA[0] = -1;
                            indexB[0] = -1;
                            return 0;
                    }
                }
                Evaluate(indexA, indexB, t) {
                    const xfA = b2TimeOfImpact_s_xfA;
                    const xfB = b2TimeOfImpact_s_xfB;
                    this.m_sweepA.GetTransform(xfA, t);
                    this.m_sweepB.GetTransform(xfB, t);
                    switch (this.m_type) {
                        case b2SeparationFunctionType.e_points: {
                            const localPointA = this.m_proxyA.GetVertex(indexA);
                            const localPointB = this.m_proxyB.GetVertex(indexB);
                            const pointA = b2Math_5.b2Transform.MulXV(xfA, localPointA, b2TimeOfImpact_s_pointA);
                            const pointB = b2Math_5.b2Transform.MulXV(xfB, localPointB, b2TimeOfImpact_s_pointB);
                            const separation = b2Math_5.b2Vec2.DotVV(b2Math_5.b2Vec2.SubVV(pointB, pointA, b2Math_5.b2Vec2.s_t0), this.m_axis);
                            return separation;
                        }
                        case b2SeparationFunctionType.e_faceA: {
                            const normal = b2Math_5.b2Rot.MulRV(xfA.q, this.m_axis, b2TimeOfImpact_s_normal);
                            const pointA = b2Math_5.b2Transform.MulXV(xfA, this.m_localPoint, b2TimeOfImpact_s_pointA);
                            const localPointB = this.m_proxyB.GetVertex(indexB);
                            const pointB = b2Math_5.b2Transform.MulXV(xfB, localPointB, b2TimeOfImpact_s_pointB);
                            const separation = b2Math_5.b2Vec2.DotVV(b2Math_5.b2Vec2.SubVV(pointB, pointA, b2Math_5.b2Vec2.s_t0), normal);
                            return separation;
                        }
                        case b2SeparationFunctionType.e_faceB: {
                            const normal = b2Math_5.b2Rot.MulRV(xfB.q, this.m_axis, b2TimeOfImpact_s_normal);
                            const pointB = b2Math_5.b2Transform.MulXV(xfB, this.m_localPoint, b2TimeOfImpact_s_pointB);
                            const localPointA = this.m_proxyA.GetVertex(indexA);
                            const pointA = b2Math_5.b2Transform.MulXV(xfA, localPointA, b2TimeOfImpact_s_pointA);
                            const separation = b2Math_5.b2Vec2.DotVV(b2Math_5.b2Vec2.SubVV(pointA, pointB, b2Math_5.b2Vec2.s_t0), normal);
                            return separation;
                        }
                        default:
                            return 0;
                    }
                }
            };
            exports_12("b2SeparationFunction", b2SeparationFunction);
            b2TimeOfImpact_s_timer = new b2Timer_1.b2Timer();
            b2TimeOfImpact_s_cache = new b2Distance_2.b2SimplexCache();
            b2TimeOfImpact_s_distanceInput = new b2Distance_2.b2DistanceInput();
            b2TimeOfImpact_s_distanceOutput = new b2Distance_2.b2DistanceOutput();
            b2TimeOfImpact_s_fcn = new b2SeparationFunction();
            b2TimeOfImpact_s_indexA = [0];
            b2TimeOfImpact_s_indexB = [0];
            b2TimeOfImpact_s_sweepA = new b2Math_5.b2Sweep();
            b2TimeOfImpact_s_sweepB = new b2Math_5.b2Sweep();
        }
    };
});
System.register("Dynamics/b2TimeStep", ["Common/b2Settings", "Common/b2Math"], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var b2Settings_7, b2Math_6, b2Profile, b2TimeStep, b2Position, b2Velocity, b2SolverData;
    return {
        setters: [
            function (b2Settings_7_1) {
                b2Settings_7 = b2Settings_7_1;
            },
            function (b2Math_6_1) {
                b2Math_6 = b2Math_6_1;
            }
        ],
        execute: function () {
            b2Profile = class b2Profile {
                constructor() {
                    this.step = 0;
                    this.collide = 0;
                    this.solve = 0;
                    this.solveInit = 0;
                    this.solveVelocity = 0;
                    this.solvePosition = 0;
                    this.broadphase = 0;
                    this.solveTOI = 0;
                }
                Reset() {
                    this.step = 0;
                    this.collide = 0;
                    this.solve = 0;
                    this.solveInit = 0;
                    this.solveVelocity = 0;
                    this.solvePosition = 0;
                    this.broadphase = 0;
                    this.solveTOI = 0;
                    return this;
                }
            };
            exports_13("b2Profile", b2Profile);
            b2TimeStep = class b2TimeStep {
                constructor() {
                    this.dt = 0;
                    this.inv_dt = 0;
                    this.dtRatio = 0;
                    this.velocityIterations = 0;
                    this.positionIterations = 0;
                    this.particleIterations = 0;
                    this.warmStarting = false;
                }
                Copy(step) {
                    this.dt = step.dt;
                    this.inv_dt = step.inv_dt;
                    this.dtRatio = step.dtRatio;
                    this.positionIterations = step.positionIterations;
                    this.velocityIterations = step.velocityIterations;
                    this.particleIterations = step.particleIterations;
                    this.warmStarting = step.warmStarting;
                    return this;
                }
            };
            exports_13("b2TimeStep", b2TimeStep);
            b2Position = class b2Position {
                constructor() {
                    this.c = new b2Math_6.b2Vec2();
                    this.a = 0;
                }
                static MakeArray(length) {
                    return b2Settings_7.b2MakeArray(length, (i) => new b2Position());
                }
            };
            exports_13("b2Position", b2Position);
            b2Velocity = class b2Velocity {
                constructor() {
                    this.v = new b2Math_6.b2Vec2();
                    this.w = 0;
                }
                static MakeArray(length) {
                    return b2Settings_7.b2MakeArray(length, (i) => new b2Velocity());
                }
            };
            exports_13("b2Velocity", b2Velocity);
            b2SolverData = class b2SolverData {
                constructor() {
                    this.step = new b2TimeStep();
                }
            };
            exports_13("b2SolverData", b2SolverData);
        }
    };
});
System.register("Dynamics/Joints/b2Joint", ["Common/b2Settings", "Common/b2Math"], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var b2Settings_8, b2Math_7, b2JointType, b2LimitState, b2Jacobian, b2JointDef, b2Joint;
    return {
        setters: [
            function (b2Settings_8_1) {
                b2Settings_8 = b2Settings_8_1;
            },
            function (b2Math_7_1) {
                b2Math_7 = b2Math_7_1;
            }
        ],
        execute: function () {
            (function (b2JointType) {
                b2JointType[b2JointType["e_unknownJoint"] = 0] = "e_unknownJoint";
                b2JointType[b2JointType["e_revoluteJoint"] = 1] = "e_revoluteJoint";
                b2JointType[b2JointType["e_prismaticJoint"] = 2] = "e_prismaticJoint";
                b2JointType[b2JointType["e_distanceJoint"] = 3] = "e_distanceJoint";
                b2JointType[b2JointType["e_pulleyJoint"] = 4] = "e_pulleyJoint";
                b2JointType[b2JointType["e_mouseJoint"] = 5] = "e_mouseJoint";
                b2JointType[b2JointType["e_gearJoint"] = 6] = "e_gearJoint";
                b2JointType[b2JointType["e_wheelJoint"] = 7] = "e_wheelJoint";
                b2JointType[b2JointType["e_weldJoint"] = 8] = "e_weldJoint";
                b2JointType[b2JointType["e_frictionJoint"] = 9] = "e_frictionJoint";
                b2JointType[b2JointType["e_ropeJoint"] = 10] = "e_ropeJoint";
                b2JointType[b2JointType["e_motorJoint"] = 11] = "e_motorJoint";
                b2JointType[b2JointType["e_areaJoint"] = 12] = "e_areaJoint";
            })(b2JointType || (b2JointType = {}));
            exports_14("b2JointType", b2JointType);
            (function (b2LimitState) {
                b2LimitState[b2LimitState["e_inactiveLimit"] = 0] = "e_inactiveLimit";
                b2LimitState[b2LimitState["e_atLowerLimit"] = 1] = "e_atLowerLimit";
                b2LimitState[b2LimitState["e_atUpperLimit"] = 2] = "e_atUpperLimit";
                b2LimitState[b2LimitState["e_equalLimits"] = 3] = "e_equalLimits";
            })(b2LimitState || (b2LimitState = {}));
            exports_14("b2LimitState", b2LimitState);
            b2Jacobian = class b2Jacobian {
                constructor() {
                    this.linear = new b2Math_7.b2Vec2();
                    this.angularA = 0;
                    this.angularB = 0;
                }
                SetZero() {
                    this.linear.SetZero();
                    this.angularA = 0;
                    this.angularB = 0;
                    return this;
                }
                Set(x, a1, a2) {
                    this.linear.Copy(x);
                    this.angularA = a1;
                    this.angularB = a2;
                    return this;
                }
            };
            exports_14("b2Jacobian", b2Jacobian);
            b2JointDef = class b2JointDef {
                constructor(type) {
                    this.type = b2JointType.e_unknownJoint;
                    this.userData = null;
                    this.collideConnected = false;
                    this.type = type;
                }
            };
            exports_14("b2JointDef", b2JointDef);
            b2Joint = class b2Joint {
                constructor(def) {
                    this.m_type = b2JointType.e_unknownJoint;
                    this.m_index = 0;
                    this.m_islandFlag = false;
                    this.m_collideConnected = false;
                    this.m_userData = null;
                    this.m_type = def.type;
                    this.m_bodyA = def.bodyA;
                    this.m_bodyB = def.bodyB;
                    this.m_collideConnected = b2Settings_8.b2Maybe(def.collideConnected, false);
                    this.m_userData = def.userData;
                }
                GetType() {
                    return this.m_type;
                }
                GetBodyA() {
                    return this.m_bodyA;
                }
                GetBodyB() {
                    return this.m_bodyB;
                }
                GetOtherBody(body) {
                    const bodyA = this.m_bodyA;
                    return body === bodyA ? this.m_bodyB : bodyA;
                }
                GetUserData() {
                    return this.m_userData;
                }
                SetUserData(data) {
                    this.m_userData = data;
                }
                IsActive() {
                    return this.m_bodyA.IsActive() && this.m_bodyB.IsActive();
                }
                GetCollideConnected() {
                    return this.m_collideConnected;
                }
                Dump(log) {
                    log("// Dump is not supported for this joint type.\n");
                }
                ShiftOrigin(newOrigin) {
                }
            };
            exports_14("b2Joint", b2Joint);
        }
    };
});
System.register("Dynamics/b2Fixture", ["Common/b2Settings", "Common/b2Math", "Collision/b2Collision", "Collision/Shapes/b2Shape"], function (exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var b2Settings_9, b2Math_8, b2Collision_2, b2Shape_1, b2Filter, b2FixtureDef, b2FixtureProxy, b2Fixture;
    return {
        setters: [
            function (b2Settings_9_1) {
                b2Settings_9 = b2Settings_9_1;
            },
            function (b2Math_8_1) {
                b2Math_8 = b2Math_8_1;
            },
            function (b2Collision_2_1) {
                b2Collision_2 = b2Collision_2_1;
            },
            function (b2Shape_1_1) {
                b2Shape_1 = b2Shape_1_1;
            }
        ],
        execute: function () {
            b2Filter = class b2Filter {
                constructor() {
                    this.categoryBits = 0x0001;
                    this.maskBits = 0xFFFF;
                    this.groupIndex = 0;
                }
                Clone() {
                    return new b2Filter().Copy(this);
                }
                Copy(other) {
                    this.categoryBits = other.categoryBits;
                    this.maskBits = other.maskBits;
                    this.groupIndex = other.groupIndex || 0;
                    return this;
                }
            };
            b2Filter.DEFAULT = new b2Filter();
            exports_15("b2Filter", b2Filter);
            b2FixtureDef = class b2FixtureDef {
                constructor() {
                    this.userData = null;
                    this.friction = 0.2;
                    this.restitution = 0;
                    this.density = 0;
                    this.isSensor = false;
                    this.filter = new b2Filter();
                }
            };
            exports_15("b2FixtureDef", b2FixtureDef);
            b2FixtureProxy = class b2FixtureProxy {
                constructor(fixture) {
                    this.aabb = new b2Collision_2.b2AABB();
                    this.childIndex = 0;
                    this.fixture = fixture;
                }
            };
            exports_15("b2FixtureProxy", b2FixtureProxy);
            b2Fixture = class b2Fixture {
                constructor(def, body) {
                    this.m_density = 0;
                    this.m_friction = 0;
                    this.m_restitution = 0;
                    this.m_proxies = [];
                    this.m_proxyCount = 0;
                    this.m_filter = new b2Filter();
                    this.m_isSensor = false;
                    this.m_userData = null;
                    this.m_body = body;
                    this.m_shape = def.shape.Clone();
                }
                GetType() {
                    return this.m_shape.GetType();
                }
                GetShape() {
                    return this.m_shape;
                }
                SetSensor(sensor) {
                    if (sensor !== this.m_isSensor) {
                        this.m_body.SetAwake(true);
                        this.m_isSensor = sensor;
                    }
                }
                IsSensor() {
                    return this.m_isSensor;
                }
                SetFilterData(filter) {
                    this.m_filter.Copy(filter);
                    this.Refilter();
                }
                GetFilterData() {
                    return this.m_filter;
                }
                Refilter() {
                    for (const contact of this.m_body.GetContactList()) {
                        const fixtureA = contact.GetFixtureA();
                        const fixtureB = contact.GetFixtureB();
                        if (fixtureA === this || fixtureB === this) {
                            contact.FlagForFiltering();
                        }
                    }
                    const broadPhase = this.m_body.GetWorld().m_contactManager.m_broadPhase;
                    for (let i = 0; i < this.m_proxyCount; ++i) {
                        broadPhase.TouchProxy(this.m_proxies[i].treeNode);
                    }
                }
                GetBody() {
                    return this.m_body;
                }
                GetUserData() {
                    return this.m_userData;
                }
                SetUserData(data) {
                    this.m_userData = data;
                }
                TestPoint(p) {
                    return this.m_shape.TestPoint(this.m_body.GetTransform(), p);
                }
                ComputeDistance(p, normal, childIndex) {
                    return this.m_shape.ComputeDistance(this.m_body.GetTransform(), p, normal, childIndex);
                }
                RayCast(output, input, childIndex) {
                    return this.m_shape.RayCast(output, input, this.m_body.GetTransform(), childIndex);
                }
                GetMassData(massData = new b2Shape_1.b2MassData()) {
                    this.m_shape.ComputeMass(massData, this.m_density);
                    return massData;
                }
                SetDensity(density) {
                    this.m_density = density;
                }
                GetDensity() {
                    return this.m_density;
                }
                GetFriction() {
                    return this.m_friction;
                }
                SetFriction(friction) {
                    this.m_friction = friction;
                }
                GetRestitution() {
                    return this.m_restitution;
                }
                SetRestitution(restitution) {
                    this.m_restitution = restitution;
                }
                GetAABB(childIndex) {
                    return this.m_proxies[childIndex].aabb;
                }
                Dump(log, bodyIndex) {
                    log("    const fd: b2FixtureDef = new b2FixtureDef();\n");
                    log("    fd.friction = %.15f;\n", this.m_friction);
                    log("    fd.restitution = %.15f;\n", this.m_restitution);
                    log("    fd.density = %.15f;\n", this.m_density);
                    log("    fd.isSensor = %s;\n", (this.m_isSensor) ? ("true") : ("false"));
                    log("    fd.filter.categoryBits = %d;\n", this.m_filter.categoryBits);
                    log("    fd.filter.maskBits = %d;\n", this.m_filter.maskBits);
                    log("    fd.filter.groupIndex = %d;\n", this.m_filter.groupIndex);
                    this.m_shape.Dump(log);
                    log("\n");
                    log("    fd.shape = shape;\n");
                    log("\n");
                    log("    bodies[%d].CreateFixture(fd);\n", bodyIndex);
                }
                Create(def) {
                    this.m_userData = def.userData;
                    this.m_friction = b2Settings_9.b2Maybe(def.friction, 0.2);
                    this.m_restitution = b2Settings_9.b2Maybe(def.restitution, 0);
                    this.m_filter.Copy(b2Settings_9.b2Maybe(def.filter, b2Filter.DEFAULT));
                    this.m_isSensor = b2Settings_9.b2Maybe(def.isSensor, false);
                    this.m_proxies = b2Settings_9.b2MakeArray(this.m_shape.GetChildCount(), (i) => new b2FixtureProxy(this));
                    this.m_proxyCount = 0;
                    this.m_density = b2Settings_9.b2Maybe(def.density, 0);
                }
                Destroy() {
                }
                CreateProxies(broadPhase, xf) {
                    this.m_proxyCount = this.m_shape.GetChildCount();
                    for (let i = 0; i < this.m_proxyCount; ++i) {
                        const proxy = this.m_proxies[i] = new b2FixtureProxy(this);
                        this.m_shape.ComputeAABB(proxy.aabb, xf, i);
                        proxy.treeNode = broadPhase.CreateProxy(proxy.aabb, proxy);
                        proxy.childIndex = i;
                    }
                }
                DestroyProxies(broadPhase) {
                    for (let i = 0; i < this.m_proxyCount; ++i) {
                        const proxy = this.m_proxies[i];
                        proxy.treeNode.userData = null;
                        broadPhase.DestroyProxy(proxy.treeNode);
                        delete proxy.treeNode;
                    }
                    this.m_proxyCount = 0;
                }
                Synchronize(broadPhase, transform1, transform2) {
                    if (this.m_proxyCount === 0) {
                        return;
                    }
                    for (let i = 0; i < this.m_proxyCount; ++i) {
                        const proxy = this.m_proxies[i];
                        const aabb1 = b2Fixture.Synchronize_s_aabb1;
                        const aabb2 = b2Fixture.Synchronize_s_aabb2;
                        this.m_shape.ComputeAABB(aabb1, transform1, i);
                        this.m_shape.ComputeAABB(aabb2, transform2, i);
                        proxy.aabb.Combine2(aabb1, aabb2);
                        const displacement = b2Math_8.b2Vec2.SubVV(transform2.p, transform1.p, b2Fixture.Synchronize_s_displacement);
                        broadPhase.MoveProxy(proxy.treeNode, proxy.aabb, displacement);
                    }
                }
            };
            b2Fixture.Synchronize_s_aabb1 = new b2Collision_2.b2AABB();
            b2Fixture.Synchronize_s_aabb2 = new b2Collision_2.b2AABB();
            b2Fixture.Synchronize_s_displacement = new b2Math_8.b2Vec2();
            exports_15("b2Fixture", b2Fixture);
        }
    };
});
System.register("Collision/Shapes/b2EdgeShape", ["Common/b2Settings", "Common/b2Math", "Collision/Shapes/b2Shape"], function (exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var b2Settings_10, b2Math_9, b2Shape_2, b2EdgeShape;
    return {
        setters: [
            function (b2Settings_10_1) {
                b2Settings_10 = b2Settings_10_1;
            },
            function (b2Math_9_1) {
                b2Math_9 = b2Math_9_1;
            },
            function (b2Shape_2_1) {
                b2Shape_2 = b2Shape_2_1;
            }
        ],
        execute: function () {
            b2EdgeShape = class b2EdgeShape extends b2Shape_2.b2Shape {
                constructor() {
                    super(b2Shape_2.b2ShapeType.e_edgeShape, b2Settings_10.b2_polygonRadius);
                    this.m_vertex1 = new b2Math_9.b2Vec2();
                    this.m_vertex2 = new b2Math_9.b2Vec2();
                    this.m_vertex0 = new b2Math_9.b2Vec2();
                    this.m_vertex3 = new b2Math_9.b2Vec2();
                    this.m_hasVertex0 = false;
                    this.m_hasVertex3 = false;
                }
                Set(v1, v2) {
                    this.m_vertex1.Copy(v1);
                    this.m_vertex2.Copy(v2);
                    this.m_hasVertex0 = false;
                    this.m_hasVertex3 = false;
                    return this;
                }
                Clone() {
                    return new b2EdgeShape().Copy(this);
                }
                Copy(other) {
                    super.Copy(other);
                    this.m_vertex1.Copy(other.m_vertex1);
                    this.m_vertex2.Copy(other.m_vertex2);
                    this.m_vertex0.Copy(other.m_vertex0);
                    this.m_vertex3.Copy(other.m_vertex3);
                    this.m_hasVertex0 = other.m_hasVertex0;
                    this.m_hasVertex3 = other.m_hasVertex3;
                    return this;
                }
                GetChildCount() {
                    return 1;
                }
                TestPoint(xf, p) {
                    return false;
                }
                ComputeDistance(xf, p, normal, childIndex) {
                    const v1 = b2Math_9.b2Transform.MulXV(xf, this.m_vertex1, b2EdgeShape.ComputeDistance_s_v1);
                    const v2 = b2Math_9.b2Transform.MulXV(xf, this.m_vertex2, b2EdgeShape.ComputeDistance_s_v2);
                    const d = b2Math_9.b2Vec2.SubVV(p, v1, b2EdgeShape.ComputeDistance_s_d);
                    const s = b2Math_9.b2Vec2.SubVV(v2, v1, b2EdgeShape.ComputeDistance_s_s);
                    const ds = b2Math_9.b2Vec2.DotVV(d, s);
                    if (ds > 0) {
                        const s2 = b2Math_9.b2Vec2.DotVV(s, s);
                        if (ds > s2) {
                            b2Math_9.b2Vec2.SubVV(p, v2, d);
                        }
                        else {
                            d.SelfMulSub(ds / s2, s);
                        }
                    }
                    normal.Copy(d);
                    return normal.Normalize();
                }
                RayCast(output, input, xf, childIndex) {
                    const p1 = b2Math_9.b2Transform.MulTXV(xf, input.p1, b2EdgeShape.RayCast_s_p1);
                    const p2 = b2Math_9.b2Transform.MulTXV(xf, input.p2, b2EdgeShape.RayCast_s_p2);
                    const d = b2Math_9.b2Vec2.SubVV(p2, p1, b2EdgeShape.RayCast_s_d);
                    const v1 = this.m_vertex1;
                    const v2 = this.m_vertex2;
                    const e = b2Math_9.b2Vec2.SubVV(v2, v1, b2EdgeShape.RayCast_s_e);
                    const normal = output.normal.Set(e.y, -e.x).SelfNormalize();
                    const numerator = b2Math_9.b2Vec2.DotVV(normal, b2Math_9.b2Vec2.SubVV(v1, p1, b2Math_9.b2Vec2.s_t0));
                    const denominator = b2Math_9.b2Vec2.DotVV(normal, d);
                    if (denominator === 0) {
                        return false;
                    }
                    const t = numerator / denominator;
                    if (t < 0 || input.maxFraction < t) {
                        return false;
                    }
                    const q = b2Math_9.b2Vec2.AddVMulSV(p1, t, d, b2EdgeShape.RayCast_s_q);
                    const r = b2Math_9.b2Vec2.SubVV(v2, v1, b2EdgeShape.RayCast_s_r);
                    const rr = b2Math_9.b2Vec2.DotVV(r, r);
                    if (rr === 0) {
                        return false;
                    }
                    const s = b2Math_9.b2Vec2.DotVV(b2Math_9.b2Vec2.SubVV(q, v1, b2Math_9.b2Vec2.s_t0), r) / rr;
                    if (s < 0 || 1 < s) {
                        return false;
                    }
                    output.fraction = t;
                    b2Math_9.b2Rot.MulRV(xf.q, output.normal, output.normal);
                    if (numerator > 0) {
                        output.normal.SelfNeg();
                    }
                    return true;
                }
                ComputeAABB(aabb, xf, childIndex) {
                    const v1 = b2Math_9.b2Transform.MulXV(xf, this.m_vertex1, b2EdgeShape.ComputeAABB_s_v1);
                    const v2 = b2Math_9.b2Transform.MulXV(xf, this.m_vertex2, b2EdgeShape.ComputeAABB_s_v2);
                    b2Math_9.b2Vec2.MinV(v1, v2, aabb.lowerBound);
                    b2Math_9.b2Vec2.MaxV(v1, v2, aabb.upperBound);
                    const r = this.m_radius;
                    aabb.lowerBound.SelfSubXY(r, r);
                    aabb.upperBound.SelfAddXY(r, r);
                }
                ComputeMass(massData, density) {
                    massData.mass = 0;
                    b2Math_9.b2Vec2.MidVV(this.m_vertex1, this.m_vertex2, massData.center);
                    massData.I = 0;
                }
                SetupDistanceProxy(proxy, index) {
                    proxy.m_vertices = proxy.m_buffer;
                    proxy.m_vertices[0].Copy(this.m_vertex1);
                    proxy.m_vertices[1].Copy(this.m_vertex2);
                    proxy.m_count = 2;
                    proxy.m_radius = this.m_radius;
                }
                ComputeSubmergedArea(normal, offset, xf, c) {
                    c.SetZero();
                    return 0;
                }
                Dump(log) {
                    log("    const shape: b2EdgeShape = new b2EdgeShape();\n");
                    log("    shape.m_radius = %.15f;\n", this.m_radius);
                    log("    shape.m_vertex0.Set(%.15f, %.15f);\n", this.m_vertex0.x, this.m_vertex0.y);
                    log("    shape.m_vertex1.Set(%.15f, %.15f);\n", this.m_vertex1.x, this.m_vertex1.y);
                    log("    shape.m_vertex2.Set(%.15f, %.15f);\n", this.m_vertex2.x, this.m_vertex2.y);
                    log("    shape.m_vertex3.Set(%.15f, %.15f);\n", this.m_vertex3.x, this.m_vertex3.y);
                    log("    shape.m_hasVertex0 = %s;\n", this.m_hasVertex0);
                    log("    shape.m_hasVertex3 = %s;\n", this.m_hasVertex3);
                }
            };
            b2EdgeShape.ComputeDistance_s_v1 = new b2Math_9.b2Vec2();
            b2EdgeShape.ComputeDistance_s_v2 = new b2Math_9.b2Vec2();
            b2EdgeShape.ComputeDistance_s_d = new b2Math_9.b2Vec2();
            b2EdgeShape.ComputeDistance_s_s = new b2Math_9.b2Vec2();
            b2EdgeShape.RayCast_s_p1 = new b2Math_9.b2Vec2();
            b2EdgeShape.RayCast_s_p2 = new b2Math_9.b2Vec2();
            b2EdgeShape.RayCast_s_d = new b2Math_9.b2Vec2();
            b2EdgeShape.RayCast_s_e = new b2Math_9.b2Vec2();
            b2EdgeShape.RayCast_s_q = new b2Math_9.b2Vec2();
            b2EdgeShape.RayCast_s_r = new b2Math_9.b2Vec2();
            b2EdgeShape.ComputeAABB_s_v1 = new b2Math_9.b2Vec2();
            b2EdgeShape.ComputeAABB_s_v2 = new b2Math_9.b2Vec2();
            exports_16("b2EdgeShape", b2EdgeShape);
        }
    };
});
System.register("Collision/Shapes/b2ChainShape", ["Common/b2Settings", "Common/b2Math", "Collision/Shapes/b2Shape", "Collision/Shapes/b2EdgeShape"], function (exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var b2Settings_11, b2Math_10, b2Shape_3, b2EdgeShape_1, b2ChainShape;
    return {
        setters: [
            function (b2Settings_11_1) {
                b2Settings_11 = b2Settings_11_1;
            },
            function (b2Math_10_1) {
                b2Math_10 = b2Math_10_1;
            },
            function (b2Shape_3_1) {
                b2Shape_3 = b2Shape_3_1;
            },
            function (b2EdgeShape_1_1) {
                b2EdgeShape_1 = b2EdgeShape_1_1;
            }
        ],
        execute: function () {
            b2ChainShape = class b2ChainShape extends b2Shape_3.b2Shape {
                constructor() {
                    super(b2Shape_3.b2ShapeType.e_chainShape, b2Settings_11.b2_polygonRadius);
                    this.m_vertices = [];
                    this.m_count = 0;
                    this.m_prevVertex = new b2Math_10.b2Vec2();
                    this.m_nextVertex = new b2Math_10.b2Vec2();
                    this.m_hasPrevVertex = false;
                    this.m_hasNextVertex = false;
                }
                CreateLoop(vertices, count = vertices.length, start = 0) {
                    this.m_count = count + 1;
                    this.m_vertices = b2Math_10.b2Vec2.MakeArray(this.m_count);
                    for (let i = 0; i < count; ++i) {
                        this.m_vertices[i].Copy(vertices[start + i]);
                    }
                    this.m_vertices[count].Copy(this.m_vertices[0]);
                    this.m_prevVertex.Copy(this.m_vertices[this.m_count - 2]);
                    this.m_nextVertex.Copy(this.m_vertices[1]);
                    this.m_hasPrevVertex = true;
                    this.m_hasNextVertex = true;
                    return this;
                }
                CreateChain(vertices, count = vertices.length, start = 0) {
                    this.m_count = count;
                    this.m_vertices = b2Math_10.b2Vec2.MakeArray(count);
                    for (let i = 0; i < count; ++i) {
                        this.m_vertices[i].Copy(vertices[start + i]);
                    }
                    this.m_hasPrevVertex = false;
                    this.m_hasNextVertex = false;
                    this.m_prevVertex.SetZero();
                    this.m_nextVertex.SetZero();
                    return this;
                }
                SetPrevVertex(prevVertex) {
                    this.m_prevVertex.Copy(prevVertex);
                    this.m_hasPrevVertex = true;
                    return this;
                }
                SetNextVertex(nextVertex) {
                    this.m_nextVertex.Copy(nextVertex);
                    this.m_hasNextVertex = true;
                    return this;
                }
                Clone() {
                    return new b2ChainShape().Copy(this);
                }
                Copy(other) {
                    super.Copy(other);
                    this.CreateChain(other.m_vertices, other.m_count);
                    this.m_prevVertex.Copy(other.m_prevVertex);
                    this.m_nextVertex.Copy(other.m_nextVertex);
                    this.m_hasPrevVertex = other.m_hasPrevVertex;
                    this.m_hasNextVertex = other.m_hasNextVertex;
                    return this;
                }
                GetChildCount() {
                    return this.m_count - 1;
                }
                GetChildEdge(edge, index) {
                    edge.m_type = b2Shape_3.b2ShapeType.e_edgeShape;
                    edge.m_radius = this.m_radius;
                    edge.m_vertex1.Copy(this.m_vertices[index]);
                    edge.m_vertex2.Copy(this.m_vertices[index + 1]);
                    if (index > 0) {
                        edge.m_vertex0.Copy(this.m_vertices[index - 1]);
                        edge.m_hasVertex0 = true;
                    }
                    else {
                        edge.m_vertex0.Copy(this.m_prevVertex);
                        edge.m_hasVertex0 = this.m_hasPrevVertex;
                    }
                    if (index < this.m_count - 2) {
                        edge.m_vertex3.Copy(this.m_vertices[index + 2]);
                        edge.m_hasVertex3 = true;
                    }
                    else {
                        edge.m_vertex3.Copy(this.m_nextVertex);
                        edge.m_hasVertex3 = this.m_hasNextVertex;
                    }
                }
                TestPoint(xf, p) {
                    return false;
                }
                ComputeDistance(xf, p, normal, childIndex) {
                    const edge = b2ChainShape.ComputeDistance_s_edgeShape;
                    this.GetChildEdge(edge, childIndex);
                    return edge.ComputeDistance(xf, p, normal, 0);
                }
                RayCast(output, input, xf, childIndex) {
                    const edgeShape = b2ChainShape.RayCast_s_edgeShape;
                    edgeShape.m_vertex1.Copy(this.m_vertices[childIndex]);
                    edgeShape.m_vertex2.Copy(this.m_vertices[(childIndex + 1) % this.m_count]);
                    return edgeShape.RayCast(output, input, xf, 0);
                }
                ComputeAABB(aabb, xf, childIndex) {
                    const vertexi1 = this.m_vertices[childIndex];
                    const vertexi2 = this.m_vertices[(childIndex + 1) % this.m_count];
                    const v1 = b2Math_10.b2Transform.MulXV(xf, vertexi1, b2ChainShape.ComputeAABB_s_v1);
                    const v2 = b2Math_10.b2Transform.MulXV(xf, vertexi2, b2ChainShape.ComputeAABB_s_v2);
                    b2Math_10.b2Vec2.MinV(v1, v2, aabb.lowerBound);
                    b2Math_10.b2Vec2.MaxV(v1, v2, aabb.upperBound);
                }
                ComputeMass(massData, density) {
                    massData.mass = 0;
                    massData.center.SetZero();
                    massData.I = 0;
                }
                SetupDistanceProxy(proxy, index) {
                    proxy.m_vertices = proxy.m_buffer;
                    proxy.m_vertices[0].Copy(this.m_vertices[index]);
                    if (index + 1 < this.m_count) {
                        proxy.m_vertices[1].Copy(this.m_vertices[index + 1]);
                    }
                    else {
                        proxy.m_vertices[1].Copy(this.m_vertices[0]);
                    }
                    proxy.m_count = 2;
                    proxy.m_radius = this.m_radius;
                }
                ComputeSubmergedArea(normal, offset, xf, c) {
                    c.SetZero();
                    return 0;
                }
                Dump(log) {
                    log("    const shape: b2ChainShape = new b2ChainShape();\n");
                    log("    const vs: b2Vec2[] = b2Vec2.MakeArray(%d);\n", b2Settings_11.b2_maxPolygonVertices);
                    for (let i = 0; i < this.m_count; ++i) {
                        log("    vs[%d].Set(%.15f, %.15f);\n", i, this.m_vertices[i].x, this.m_vertices[i].y);
                    }
                    log("    shape.CreateChain(vs, %d);\n", this.m_count);
                    log("    shape.m_prevVertex.Set(%.15f, %.15f);\n", this.m_prevVertex.x, this.m_prevVertex.y);
                    log("    shape.m_nextVertex.Set(%.15f, %.15f);\n", this.m_nextVertex.x, this.m_nextVertex.y);
                    log("    shape.m_hasPrevVertex = %s;\n", (this.m_hasPrevVertex) ? ("true") : ("false"));
                    log("    shape.m_hasNextVertex = %s;\n", (this.m_hasNextVertex) ? ("true") : ("false"));
                }
            };
            b2ChainShape.ComputeDistance_s_edgeShape = new b2EdgeShape_1.b2EdgeShape();
            b2ChainShape.RayCast_s_edgeShape = new b2EdgeShape_1.b2EdgeShape();
            b2ChainShape.ComputeAABB_s_v1 = new b2Math_10.b2Vec2();
            b2ChainShape.ComputeAABB_s_v2 = new b2Math_10.b2Vec2();
            exports_17("b2ChainShape", b2ChainShape);
        }
    };
});
System.register("Collision/Shapes/b2CircleShape", ["Common/b2Settings", "Common/b2Math", "Collision/Shapes/b2Shape"], function (exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var b2Settings_12, b2Math_11, b2Shape_4, b2CircleShape;
    return {
        setters: [
            function (b2Settings_12_1) {
                b2Settings_12 = b2Settings_12_1;
            },
            function (b2Math_11_1) {
                b2Math_11 = b2Math_11_1;
            },
            function (b2Shape_4_1) {
                b2Shape_4 = b2Shape_4_1;
            }
        ],
        execute: function () {
            b2CircleShape = class b2CircleShape extends b2Shape_4.b2Shape {
                constructor(radius = 0) {
                    super(b2Shape_4.b2ShapeType.e_circleShape, radius);
                    this.m_p = new b2Math_11.b2Vec2();
                }
                Set(position, radius = this.m_radius) {
                    this.m_p.Copy(position);
                    this.m_radius = radius;
                    return this;
                }
                Clone() {
                    return new b2CircleShape().Copy(this);
                }
                Copy(other) {
                    super.Copy(other);
                    this.m_p.Copy(other.m_p);
                    return this;
                }
                GetChildCount() {
                    return 1;
                }
                TestPoint(transform, p) {
                    const center = b2Math_11.b2Transform.MulXV(transform, this.m_p, b2CircleShape.TestPoint_s_center);
                    const d = b2Math_11.b2Vec2.SubVV(p, center, b2CircleShape.TestPoint_s_d);
                    return b2Math_11.b2Vec2.DotVV(d, d) <= b2Math_11.b2Sq(this.m_radius);
                }
                ComputeDistance(xf, p, normal, childIndex) {
                    const center = b2Math_11.b2Transform.MulXV(xf, this.m_p, b2CircleShape.ComputeDistance_s_center);
                    b2Math_11.b2Vec2.SubVV(p, center, normal);
                    return normal.Normalize() - this.m_radius;
                }
                RayCast(output, input, transform, childIndex) {
                    const position = b2Math_11.b2Transform.MulXV(transform, this.m_p, b2CircleShape.RayCast_s_position);
                    const s = b2Math_11.b2Vec2.SubVV(input.p1, position, b2CircleShape.RayCast_s_s);
                    const b = b2Math_11.b2Vec2.DotVV(s, s) - b2Math_11.b2Sq(this.m_radius);
                    const r = b2Math_11.b2Vec2.SubVV(input.p2, input.p1, b2CircleShape.RayCast_s_r);
                    const c = b2Math_11.b2Vec2.DotVV(s, r);
                    const rr = b2Math_11.b2Vec2.DotVV(r, r);
                    const sigma = c * c - rr * b;
                    if (sigma < 0 || rr < b2Settings_12.b2_epsilon) {
                        return false;
                    }
                    let a = (-(c + b2Math_11.b2Sqrt(sigma)));
                    if (0 <= a && a <= input.maxFraction * rr) {
                        a /= rr;
                        output.fraction = a;
                        b2Math_11.b2Vec2.AddVMulSV(s, a, r, output.normal).SelfNormalize();
                        return true;
                    }
                    return false;
                }
                ComputeAABB(aabb, transform, childIndex) {
                    const p = b2Math_11.b2Transform.MulXV(transform, this.m_p, b2CircleShape.ComputeAABB_s_p);
                    aabb.lowerBound.Set(p.x - this.m_radius, p.y - this.m_radius);
                    aabb.upperBound.Set(p.x + this.m_radius, p.y + this.m_radius);
                }
                ComputeMass(massData, density) {
                    const radius_sq = b2Math_11.b2Sq(this.m_radius);
                    massData.mass = density * b2Settings_12.b2_pi * radius_sq;
                    massData.center.Copy(this.m_p);
                    massData.I = massData.mass * (0.5 * radius_sq + b2Math_11.b2Vec2.DotVV(this.m_p, this.m_p));
                }
                SetupDistanceProxy(proxy, index) {
                    proxy.m_vertices = proxy.m_buffer;
                    proxy.m_vertices[0].Copy(this.m_p);
                    proxy.m_count = 1;
                    proxy.m_radius = this.m_radius;
                }
                ComputeSubmergedArea(normal, offset, xf, c) {
                    const p = b2Math_11.b2Transform.MulXV(xf, this.m_p, new b2Math_11.b2Vec2());
                    const l = (-(b2Math_11.b2Vec2.DotVV(normal, p) - offset));
                    if (l < (-this.m_radius) + b2Settings_12.b2_epsilon) {
                        return 0;
                    }
                    if (l > this.m_radius) {
                        c.Copy(p);
                        return b2Settings_12.b2_pi * this.m_radius * this.m_radius;
                    }
                    const r2 = this.m_radius * this.m_radius;
                    const l2 = l * l;
                    const area = r2 * (b2Math_11.b2Asin(l / this.m_radius) + b2Settings_12.b2_pi / 2) + l * b2Math_11.b2Sqrt(r2 - l2);
                    const com = (-2 / 3 * b2Math_11.b2Pow(r2 - l2, 1.5) / area);
                    c.x = p.x + normal.x * com;
                    c.y = p.y + normal.y * com;
                    return area;
                }
                Dump(log) {
                    log("    const shape: b2CircleShape = new b2CircleShape();\n");
                    log("    shape.m_radius = %.15f;\n", this.m_radius);
                    log("    shape.m_p.Set(%.15f, %.15f);\n", this.m_p.x, this.m_p.y);
                }
            };
            b2CircleShape.TestPoint_s_center = new b2Math_11.b2Vec2();
            b2CircleShape.TestPoint_s_d = new b2Math_11.b2Vec2();
            b2CircleShape.ComputeDistance_s_center = new b2Math_11.b2Vec2();
            b2CircleShape.RayCast_s_position = new b2Math_11.b2Vec2();
            b2CircleShape.RayCast_s_s = new b2Math_11.b2Vec2();
            b2CircleShape.RayCast_s_r = new b2Math_11.b2Vec2();
            b2CircleShape.ComputeAABB_s_p = new b2Math_11.b2Vec2();
            exports_18("b2CircleShape", b2CircleShape);
        }
    };
});
System.register("Collision/Shapes/b2PolygonShape", ["Common/b2Settings", "Common/b2Math", "Collision/Shapes/b2Shape"], function (exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var b2Settings_13, b2Math_12, b2Shape_5, b2Shape_6, b2PolygonShape;
    return {
        setters: [
            function (b2Settings_13_1) {
                b2Settings_13 = b2Settings_13_1;
            },
            function (b2Math_12_1) {
                b2Math_12 = b2Math_12_1;
            },
            function (b2Shape_5_1) {
                b2Shape_5 = b2Shape_5_1;
                b2Shape_6 = b2Shape_5_1;
            }
        ],
        execute: function () {
            b2PolygonShape = class b2PolygonShape extends b2Shape_6.b2Shape {
                constructor() {
                    super(b2Shape_6.b2ShapeType.e_polygonShape, b2Settings_13.b2_polygonRadius);
                    this.m_centroid = new b2Math_12.b2Vec2(0, 0);
                    this.m_vertices = [];
                    this.m_normals = [];
                    this.m_count = 0;
                }
                Clone() {
                    return new b2PolygonShape().Copy(this);
                }
                Copy(other) {
                    super.Copy(other);
                    this.m_centroid.Copy(other.m_centroid);
                    this.m_count = other.m_count;
                    this.m_vertices = b2Math_12.b2Vec2.MakeArray(this.m_count);
                    this.m_normals = b2Math_12.b2Vec2.MakeArray(this.m_count);
                    for (let i = 0; i < this.m_count; ++i) {
                        this.m_vertices[i].Copy(other.m_vertices[i]);
                        this.m_normals[i].Copy(other.m_normals[i]);
                    }
                    return this;
                }
                GetChildCount() {
                    return 1;
                }
                Set(vertices, count = vertices.length, start = 0) {
                    if (count < 3) {
                        return this.SetAsBox(1, 1);
                    }
                    let n = b2Math_12.b2Min(count, b2Settings_13.b2_maxPolygonVertices);
                    const ps = b2PolygonShape.Set_s_ps;
                    let tempCount = 0;
                    for (let i = 0; i < n; ++i) {
                        const v = vertices[start + i];
                        let unique = true;
                        for (let j = 0; j < tempCount; ++j) {
                            if (b2Math_12.b2Vec2.DistanceSquaredVV(v, ps[j]) < ((0.5 * b2Settings_13.b2_linearSlop) * (0.5 * b2Settings_13.b2_linearSlop))) {
                                unique = false;
                                break;
                            }
                        }
                        if (unique) {
                            ps[tempCount++].Copy(v);
                        }
                    }
                    n = tempCount;
                    if (n < 3) {
                        return this.SetAsBox(1.0, 1.0);
                    }
                    let i0 = 0;
                    let x0 = ps[0].x;
                    for (let i = 1; i < n; ++i) {
                        const x = ps[i].x;
                        if (x > x0 || (x === x0 && ps[i].y < ps[i0].y)) {
                            i0 = i;
                            x0 = x;
                        }
                    }
                    const hull = b2PolygonShape.Set_s_hull;
                    let m = 0;
                    let ih = i0;
                    for (;;) {
                        hull[m] = ih;
                        let ie = 0;
                        for (let j = 1; j < n; ++j) {
                            if (ie === ih) {
                                ie = j;
                                continue;
                            }
                            const r = b2Math_12.b2Vec2.SubVV(ps[ie], ps[hull[m]], b2PolygonShape.Set_s_r);
                            const v = b2Math_12.b2Vec2.SubVV(ps[j], ps[hull[m]], b2PolygonShape.Set_s_v);
                            const c = b2Math_12.b2Vec2.CrossVV(r, v);
                            if (c < 0) {
                                ie = j;
                            }
                            if (c === 0 && v.LengthSquared() > r.LengthSquared()) {
                                ie = j;
                            }
                        }
                        ++m;
                        ih = ie;
                        if (ie === i0) {
                            break;
                        }
                    }
                    this.m_count = m;
                    this.m_vertices = b2Math_12.b2Vec2.MakeArray(this.m_count);
                    this.m_normals = b2Math_12.b2Vec2.MakeArray(this.m_count);
                    for (let i = 0; i < m; ++i) {
                        this.m_vertices[i].Copy(ps[hull[i]]);
                    }
                    for (let i = 0; i < m; ++i) {
                        const vertexi1 = this.m_vertices[i];
                        const vertexi2 = this.m_vertices[(i + 1) % m];
                        const edge = b2Math_12.b2Vec2.SubVV(vertexi2, vertexi1, b2Math_12.b2Vec2.s_t0);
                        b2Math_12.b2Vec2.CrossVOne(edge, this.m_normals[i]).SelfNormalize();
                    }
                    b2PolygonShape.ComputeCentroid(this.m_vertices, m, this.m_centroid);
                    return this;
                }
                SetAsArray(vertices, count = vertices.length) {
                    return this.Set(vertices, count);
                }
                SetAsBox(hx, hy, center, angle = 0) {
                    this.m_count = 4;
                    this.m_vertices = b2Math_12.b2Vec2.MakeArray(this.m_count);
                    this.m_normals = b2Math_12.b2Vec2.MakeArray(this.m_count);
                    this.m_vertices[0].Set((-hx), (-hy));
                    this.m_vertices[1].Set(hx, (-hy));
                    this.m_vertices[2].Set(hx, hy);
                    this.m_vertices[3].Set((-hx), hy);
                    this.m_normals[0].Set(0, (-1));
                    this.m_normals[1].Set(1, 0);
                    this.m_normals[2].Set(0, 1);
                    this.m_normals[3].Set((-1), 0);
                    this.m_centroid.SetZero();
                    if (center) {
                        this.m_centroid.Copy(center);
                        const xf = new b2Math_12.b2Transform();
                        xf.SetPosition(center);
                        xf.SetRotationAngle(angle);
                        for (let i = 0; i < this.m_count; ++i) {
                            b2Math_12.b2Transform.MulXV(xf, this.m_vertices[i], this.m_vertices[i]);
                            b2Math_12.b2Rot.MulRV(xf.q, this.m_normals[i], this.m_normals[i]);
                        }
                    }
                    return this;
                }
                TestPoint(xf, p) {
                    const pLocal = b2Math_12.b2Transform.MulTXV(xf, p, b2PolygonShape.TestPoint_s_pLocal);
                    for (let i = 0; i < this.m_count; ++i) {
                        const dot = b2Math_12.b2Vec2.DotVV(this.m_normals[i], b2Math_12.b2Vec2.SubVV(pLocal, this.m_vertices[i], b2Math_12.b2Vec2.s_t0));
                        if (dot > 0) {
                            return false;
                        }
                    }
                    return true;
                }
                ComputeDistance(xf, p, normal, childIndex) {
                    const pLocal = b2Math_12.b2Transform.MulTXV(xf, p, b2PolygonShape.ComputeDistance_s_pLocal);
                    let maxDistance = -b2Settings_13.b2_maxFloat;
                    const normalForMaxDistance = b2PolygonShape.ComputeDistance_s_normalForMaxDistance.Copy(pLocal);
                    for (let i = 0; i < this.m_count; ++i) {
                        const dot = b2Math_12.b2Vec2.DotVV(this.m_normals[i], b2Math_12.b2Vec2.SubVV(pLocal, this.m_vertices[i], b2Math_12.b2Vec2.s_t0));
                        if (dot > maxDistance) {
                            maxDistance = dot;
                            normalForMaxDistance.Copy(this.m_normals[i]);
                        }
                    }
                    if (maxDistance > 0) {
                        const minDistance = b2PolygonShape.ComputeDistance_s_minDistance.Copy(normalForMaxDistance);
                        let minDistance2 = maxDistance * maxDistance;
                        for (let i = 0; i < this.m_count; ++i) {
                            const distance = b2Math_12.b2Vec2.SubVV(pLocal, this.m_vertices[i], b2PolygonShape.ComputeDistance_s_distance);
                            const distance2 = distance.LengthSquared();
                            if (minDistance2 > distance2) {
                                minDistance.Copy(distance);
                                minDistance2 = distance2;
                            }
                        }
                        b2Math_12.b2Rot.MulRV(xf.q, minDistance, normal);
                        normal.Normalize();
                        return Math.sqrt(minDistance2);
                    }
                    else {
                        b2Math_12.b2Rot.MulRV(xf.q, normalForMaxDistance, normal);
                        return maxDistance;
                    }
                }
                RayCast(output, input, xf, childIndex) {
                    const p1 = b2Math_12.b2Transform.MulTXV(xf, input.p1, b2PolygonShape.RayCast_s_p1);
                    const p2 = b2Math_12.b2Transform.MulTXV(xf, input.p2, b2PolygonShape.RayCast_s_p2);
                    const d = b2Math_12.b2Vec2.SubVV(p2, p1, b2PolygonShape.RayCast_s_d);
                    let lower = 0, upper = input.maxFraction;
                    let index = -1;
                    for (let i = 0; i < this.m_count; ++i) {
                        const numerator = b2Math_12.b2Vec2.DotVV(this.m_normals[i], b2Math_12.b2Vec2.SubVV(this.m_vertices[i], p1, b2Math_12.b2Vec2.s_t0));
                        const denominator = b2Math_12.b2Vec2.DotVV(this.m_normals[i], d);
                        if (denominator === 0) {
                            if (numerator < 0) {
                                return false;
                            }
                        }
                        else {
                            if (denominator < 0 && numerator < lower * denominator) {
                                lower = numerator / denominator;
                                index = i;
                            }
                            else if (denominator > 0 && numerator < upper * denominator) {
                                upper = numerator / denominator;
                            }
                        }
                        if (upper < lower) {
                            return false;
                        }
                    }
                    if (index >= 0) {
                        output.fraction = lower;
                        b2Math_12.b2Rot.MulRV(xf.q, this.m_normals[index], output.normal);
                        return true;
                    }
                    return false;
                }
                ComputeAABB(aabb, xf, childIndex) {
                    const lower = b2Math_12.b2Transform.MulXV(xf, this.m_vertices[0], aabb.lowerBound);
                    const upper = aabb.upperBound.Copy(lower);
                    for (let i = 0; i < this.m_count; ++i) {
                        const v = b2Math_12.b2Transform.MulXV(xf, this.m_vertices[i], b2PolygonShape.ComputeAABB_s_v);
                        b2Math_12.b2Vec2.MinV(v, lower, lower);
                        b2Math_12.b2Vec2.MaxV(v, upper, upper);
                    }
                    const r = this.m_radius;
                    lower.SelfSubXY(r, r);
                    upper.SelfAddXY(r, r);
                }
                ComputeMass(massData, density) {
                    const center = b2PolygonShape.ComputeMass_s_center.SetZero();
                    let area = 0;
                    let I = 0;
                    const s = b2PolygonShape.ComputeMass_s_s.SetZero();
                    for (let i = 0; i < this.m_count; ++i) {
                        s.SelfAdd(this.m_vertices[i]);
                    }
                    s.SelfMul(1 / this.m_count);
                    const k_inv3 = 1 / 3;
                    for (let i = 0; i < this.m_count; ++i) {
                        const e1 = b2Math_12.b2Vec2.SubVV(this.m_vertices[i], s, b2PolygonShape.ComputeMass_s_e1);
                        const e2 = b2Math_12.b2Vec2.SubVV(this.m_vertices[(i + 1) % this.m_count], s, b2PolygonShape.ComputeMass_s_e2);
                        const D = b2Math_12.b2Vec2.CrossVV(e1, e2);
                        const triangleArea = 0.5 * D;
                        area += triangleArea;
                        center.SelfAdd(b2Math_12.b2Vec2.MulSV(triangleArea * k_inv3, b2Math_12.b2Vec2.AddVV(e1, e2, b2Math_12.b2Vec2.s_t0), b2Math_12.b2Vec2.s_t1));
                        const ex1 = e1.x;
                        const ey1 = e1.y;
                        const ex2 = e2.x;
                        const ey2 = e2.y;
                        const intx2 = ex1 * ex1 + ex2 * ex1 + ex2 * ex2;
                        const inty2 = ey1 * ey1 + ey2 * ey1 + ey2 * ey2;
                        I += (0.25 * k_inv3 * D) * (intx2 + inty2);
                    }
                    massData.mass = density * area;
                    center.SelfMul(1 / area);
                    b2Math_12.b2Vec2.AddVV(center, s, massData.center);
                    massData.I = density * I;
                    massData.I += massData.mass * (b2Math_12.b2Vec2.DotVV(massData.center, massData.center) - b2Math_12.b2Vec2.DotVV(center, center));
                }
                Validate() {
                    for (let i = 0; i < this.m_count; ++i) {
                        const i1 = i;
                        const i2 = (i + 1) % this.m_count;
                        const p = this.m_vertices[i1];
                        const e = b2Math_12.b2Vec2.SubVV(this.m_vertices[i2], p, b2PolygonShape.Validate_s_e);
                        for (let j = 0; j < this.m_count; ++j) {
                            if (j === i1 || j === i2) {
                                continue;
                            }
                            const v = b2Math_12.b2Vec2.SubVV(this.m_vertices[j], p, b2PolygonShape.Validate_s_v);
                            const c = b2Math_12.b2Vec2.CrossVV(e, v);
                            if (c < 0) {
                                return false;
                            }
                        }
                    }
                    return true;
                }
                SetupDistanceProxy(proxy, index) {
                    proxy.m_vertices = this.m_vertices;
                    proxy.m_count = this.m_count;
                    proxy.m_radius = this.m_radius;
                }
                ComputeSubmergedArea(normal, offset, xf, c) {
                    const normalL = b2Math_12.b2Rot.MulTRV(xf.q, normal, b2PolygonShape.ComputeSubmergedArea_s_normalL);
                    const offsetL = offset - b2Math_12.b2Vec2.DotVV(normal, xf.p);
                    const depths = b2PolygonShape.ComputeSubmergedArea_s_depths;
                    let diveCount = 0;
                    let intoIndex = -1;
                    let outoIndex = -1;
                    let lastSubmerged = false;
                    for (let i = 0; i < this.m_count; ++i) {
                        depths[i] = b2Math_12.b2Vec2.DotVV(normalL, this.m_vertices[i]) - offsetL;
                        const isSubmerged = depths[i] < (-b2Settings_13.b2_epsilon);
                        if (i > 0) {
                            if (isSubmerged) {
                                if (!lastSubmerged) {
                                    intoIndex = i - 1;
                                    diveCount++;
                                }
                            }
                            else {
                                if (lastSubmerged) {
                                    outoIndex = i - 1;
                                    diveCount++;
                                }
                            }
                        }
                        lastSubmerged = isSubmerged;
                    }
                    switch (diveCount) {
                        case 0:
                            if (lastSubmerged) {
                                const md = b2PolygonShape.ComputeSubmergedArea_s_md;
                                this.ComputeMass(md, 1);
                                b2Math_12.b2Transform.MulXV(xf, md.center, c);
                                return md.mass;
                            }
                            else {
                                return 0;
                            }
                        case 1:
                            if (intoIndex === (-1)) {
                                intoIndex = this.m_count - 1;
                            }
                            else {
                                outoIndex = this.m_count - 1;
                            }
                            break;
                    }
                    const intoIndex2 = ((intoIndex + 1) % this.m_count);
                    const outoIndex2 = ((outoIndex + 1) % this.m_count);
                    const intoLamdda = (0 - depths[intoIndex]) / (depths[intoIndex2] - depths[intoIndex]);
                    const outoLamdda = (0 - depths[outoIndex]) / (depths[outoIndex2] - depths[outoIndex]);
                    const intoVec = b2PolygonShape.ComputeSubmergedArea_s_intoVec.Set(this.m_vertices[intoIndex].x * (1 - intoLamdda) + this.m_vertices[intoIndex2].x * intoLamdda, this.m_vertices[intoIndex].y * (1 - intoLamdda) + this.m_vertices[intoIndex2].y * intoLamdda);
                    const outoVec = b2PolygonShape.ComputeSubmergedArea_s_outoVec.Set(this.m_vertices[outoIndex].x * (1 - outoLamdda) + this.m_vertices[outoIndex2].x * outoLamdda, this.m_vertices[outoIndex].y * (1 - outoLamdda) + this.m_vertices[outoIndex2].y * outoLamdda);
                    let area = 0;
                    const center = b2PolygonShape.ComputeSubmergedArea_s_center.SetZero();
                    let p2 = this.m_vertices[intoIndex2];
                    let p3;
                    let i = intoIndex2;
                    while (i !== outoIndex2) {
                        i = (i + 1) % this.m_count;
                        if (i === outoIndex2) {
                            p3 = outoVec;
                        }
                        else {
                            p3 = this.m_vertices[i];
                        }
                        const triangleArea = 0.5 * ((p2.x - intoVec.x) * (p3.y - intoVec.y) - (p2.y - intoVec.y) * (p3.x - intoVec.x));
                        area += triangleArea;
                        center.x += triangleArea * (intoVec.x + p2.x + p3.x) / 3;
                        center.y += triangleArea * (intoVec.y + p2.y + p3.y) / 3;
                        p2 = p3;
                    }
                    center.SelfMul(1 / area);
                    b2Math_12.b2Transform.MulXV(xf, center, c);
                    return area;
                }
                Dump(log) {
                    log("    const shape: b2PolygonShape = new b2PolygonShape();\n");
                    log("    const vs: b2Vec2[] = b2Vec2.MakeArray(%d);\n", b2Settings_13.b2_maxPolygonVertices);
                    for (let i = 0; i < this.m_count; ++i) {
                        log("    vs[%d].Set(%.15f, %.15f);\n", i, this.m_vertices[i].x, this.m_vertices[i].y);
                    }
                    log("    shape.Set(vs, %d);\n", this.m_count);
                }
                static ComputeCentroid(vs, count, out) {
                    const c = out;
                    c.SetZero();
                    let area = 0;
                    const pRef = b2PolygonShape.ComputeCentroid_s_pRef.SetZero();
                    const inv3 = 1 / 3;
                    for (let i = 0; i < count; ++i) {
                        const p1 = pRef;
                        const p2 = vs[i];
                        const p3 = vs[(i + 1) % count];
                        const e1 = b2Math_12.b2Vec2.SubVV(p2, p1, b2PolygonShape.ComputeCentroid_s_e1);
                        const e2 = b2Math_12.b2Vec2.SubVV(p3, p1, b2PolygonShape.ComputeCentroid_s_e2);
                        const D = b2Math_12.b2Vec2.CrossVV(e1, e2);
                        const triangleArea = 0.5 * D;
                        area += triangleArea;
                        c.x += triangleArea * inv3 * (p1.x + p2.x + p3.x);
                        c.y += triangleArea * inv3 * (p1.y + p2.y + p3.y);
                    }
                    c.SelfMul(1 / area);
                    return c;
                }
            };
            b2PolygonShape.Set_s_ps = b2Math_12.b2Vec2.MakeArray(b2Settings_13.b2_maxPolygonVertices);
            b2PolygonShape.Set_s_hull = b2Settings_13.b2MakeNumberArray(b2Settings_13.b2_maxPolygonVertices);
            b2PolygonShape.Set_s_r = new b2Math_12.b2Vec2();
            b2PolygonShape.Set_s_v = new b2Math_12.b2Vec2();
            b2PolygonShape.TestPoint_s_pLocal = new b2Math_12.b2Vec2();
            b2PolygonShape.ComputeDistance_s_pLocal = new b2Math_12.b2Vec2();
            b2PolygonShape.ComputeDistance_s_normalForMaxDistance = new b2Math_12.b2Vec2();
            b2PolygonShape.ComputeDistance_s_minDistance = new b2Math_12.b2Vec2();
            b2PolygonShape.ComputeDistance_s_distance = new b2Math_12.b2Vec2();
            b2PolygonShape.RayCast_s_p1 = new b2Math_12.b2Vec2();
            b2PolygonShape.RayCast_s_p2 = new b2Math_12.b2Vec2();
            b2PolygonShape.RayCast_s_d = new b2Math_12.b2Vec2();
            b2PolygonShape.ComputeAABB_s_v = new b2Math_12.b2Vec2();
            b2PolygonShape.ComputeMass_s_center = new b2Math_12.b2Vec2();
            b2PolygonShape.ComputeMass_s_s = new b2Math_12.b2Vec2();
            b2PolygonShape.ComputeMass_s_e1 = new b2Math_12.b2Vec2();
            b2PolygonShape.ComputeMass_s_e2 = new b2Math_12.b2Vec2();
            b2PolygonShape.Validate_s_e = new b2Math_12.b2Vec2();
            b2PolygonShape.Validate_s_v = new b2Math_12.b2Vec2();
            b2PolygonShape.ComputeSubmergedArea_s_normalL = new b2Math_12.b2Vec2();
            b2PolygonShape.ComputeSubmergedArea_s_depths = b2Settings_13.b2MakeNumberArray(b2Settings_13.b2_maxPolygonVertices);
            b2PolygonShape.ComputeSubmergedArea_s_md = new b2Shape_5.b2MassData();
            b2PolygonShape.ComputeSubmergedArea_s_intoVec = new b2Math_12.b2Vec2();
            b2PolygonShape.ComputeSubmergedArea_s_outoVec = new b2Math_12.b2Vec2();
            b2PolygonShape.ComputeSubmergedArea_s_center = new b2Math_12.b2Vec2();
            b2PolygonShape.ComputeCentroid_s_pRef = new b2Math_12.b2Vec2();
            b2PolygonShape.ComputeCentroid_s_e1 = new b2Math_12.b2Vec2();
            b2PolygonShape.ComputeCentroid_s_e2 = new b2Math_12.b2Vec2();
            exports_19("b2PolygonShape", b2PolygonShape);
        }
    };
});
System.register("Dynamics/Joints/b2DistanceJoint", ["Common/b2Settings", "Common/b2Math", "Dynamics/Joints/b2Joint"], function (exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var b2Settings_14, b2Math_13, b2Joint_1, b2DistanceJointDef, b2DistanceJoint;
    return {
        setters: [
            function (b2Settings_14_1) {
                b2Settings_14 = b2Settings_14_1;
            },
            function (b2Math_13_1) {
                b2Math_13 = b2Math_13_1;
            },
            function (b2Joint_1_1) {
                b2Joint_1 = b2Joint_1_1;
            }
        ],
        execute: function () {
            b2DistanceJointDef = class b2DistanceJointDef extends b2Joint_1.b2JointDef {
                constructor() {
                    super(b2Joint_1.b2JointType.e_distanceJoint);
                    this.localAnchorA = new b2Math_13.b2Vec2();
                    this.localAnchorB = new b2Math_13.b2Vec2();
                    this.length = 1;
                    this.frequencyHz = 0;
                    this.dampingRatio = 0;
                }
                Initialize(b1, b2, anchor1, anchor2) {
                    this.bodyA = b1;
                    this.bodyB = b2;
                    this.bodyA.GetLocalPoint(anchor1, this.localAnchorA);
                    this.bodyB.GetLocalPoint(anchor2, this.localAnchorB);
                    this.length = b2Math_13.b2Vec2.DistanceVV(anchor1, anchor2);
                    this.frequencyHz = 0;
                    this.dampingRatio = 0;
                }
            };
            exports_20("b2DistanceJointDef", b2DistanceJointDef);
            b2DistanceJoint = class b2DistanceJoint extends b2Joint_1.b2Joint {
                constructor(def) {
                    super(def);
                    this.m_frequencyHz = 0;
                    this.m_dampingRatio = 0;
                    this.m_bias = 0;
                    this.m_localAnchorA = new b2Math_13.b2Vec2();
                    this.m_localAnchorB = new b2Math_13.b2Vec2();
                    this.m_gamma = 0;
                    this.m_impulse = 0;
                    this.m_length = 0;
                    this.m_indexA = 0;
                    this.m_indexB = 0;
                    this.m_u = new b2Math_13.b2Vec2();
                    this.m_rA = new b2Math_13.b2Vec2();
                    this.m_rB = new b2Math_13.b2Vec2();
                    this.m_localCenterA = new b2Math_13.b2Vec2();
                    this.m_localCenterB = new b2Math_13.b2Vec2();
                    this.m_invMassA = 0;
                    this.m_invMassB = 0;
                    this.m_invIA = 0;
                    this.m_invIB = 0;
                    this.m_mass = 0;
                    this.m_qA = new b2Math_13.b2Rot();
                    this.m_qB = new b2Math_13.b2Rot();
                    this.m_lalcA = new b2Math_13.b2Vec2();
                    this.m_lalcB = new b2Math_13.b2Vec2();
                    this.m_frequencyHz = b2Settings_14.b2Maybe(def.frequencyHz, 0);
                    this.m_dampingRatio = b2Settings_14.b2Maybe(def.dampingRatio, 0);
                    this.m_localAnchorA.Copy(def.localAnchorA);
                    this.m_localAnchorB.Copy(def.localAnchorB);
                    this.m_length = def.length;
                }
                GetAnchorA(out) {
                    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
                }
                GetAnchorB(out) {
                    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
                }
                GetReactionForce(inv_dt, out) {
                    out.x = inv_dt * this.m_impulse * this.m_u.x;
                    out.y = inv_dt * this.m_impulse * this.m_u.y;
                    return out;
                }
                GetReactionTorque(inv_dt) {
                    return 0;
                }
                GetLocalAnchorA() { return this.m_localAnchorA; }
                GetLocalAnchorB() { return this.m_localAnchorB; }
                SetLength(length) {
                    this.m_length = length;
                }
                Length() {
                    return this.m_length;
                }
                SetFrequency(hz) {
                    this.m_frequencyHz = hz;
                }
                GetFrequency() {
                    return this.m_frequencyHz;
                }
                SetDampingRatio(ratio) {
                    this.m_dampingRatio = ratio;
                }
                GetDampingRatio() {
                    return this.m_dampingRatio;
                }
                Dump(log) {
                    const indexA = this.m_bodyA.m_islandIndex;
                    const indexB = this.m_bodyB.m_islandIndex;
                    log("  const jd: b2DistanceJointDef = new b2DistanceJointDef();\n");
                    log("  jd.bodyA = bodies[%d];\n", indexA);
                    log("  jd.bodyB = bodies[%d];\n", indexB);
                    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
                    log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
                    log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
                    log("  jd.length = %.15f;\n", this.m_length);
                    log("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz);
                    log("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio);
                    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
                }
                InitVelocityConstraints(data) {
                    this.m_indexA = this.m_bodyA.m_islandIndex;
                    this.m_indexB = this.m_bodyB.m_islandIndex;
                    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
                    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
                    this.m_invMassA = this.m_bodyA.m_invMass;
                    this.m_invMassB = this.m_bodyB.m_invMass;
                    this.m_invIA = this.m_bodyA.m_invI;
                    this.m_invIB = this.m_bodyB.m_invI;
                    const cA = data.positions[this.m_indexA].c;
                    const aA = data.positions[this.m_indexA].a;
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const cB = data.positions[this.m_indexB].c;
                    const aB = data.positions[this.m_indexB].a;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB);
                    b2Math_13.b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
                    b2Math_13.b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
                    b2Math_13.b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
                    b2Math_13.b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
                    this.m_u.x = cB.x + this.m_rB.x - cA.x - this.m_rA.x;
                    this.m_u.y = cB.y + this.m_rB.y - cA.y - this.m_rA.y;
                    const length = this.m_u.Length();
                    if (length > b2Settings_14.b2_linearSlop) {
                        this.m_u.SelfMul(1 / length);
                    }
                    else {
                        this.m_u.SetZero();
                    }
                    const crAu = b2Math_13.b2Vec2.CrossVV(this.m_rA, this.m_u);
                    const crBu = b2Math_13.b2Vec2.CrossVV(this.m_rB, this.m_u);
                    let invMass = this.m_invMassA + this.m_invIA * crAu * crAu + this.m_invMassB + this.m_invIB * crBu * crBu;
                    this.m_mass = invMass !== 0 ? 1 / invMass : 0;
                    if (this.m_frequencyHz > 0) {
                        const C = length - this.m_length;
                        const omega = 2 * b2Settings_14.b2_pi * this.m_frequencyHz;
                        const d = 2 * this.m_mass * this.m_dampingRatio * omega;
                        const k = this.m_mass * omega * omega;
                        const h = data.step.dt;
                        this.m_gamma = h * (d + h * k);
                        this.m_gamma = this.m_gamma !== 0 ? 1 / this.m_gamma : 0;
                        this.m_bias = C * h * k * this.m_gamma;
                        invMass += this.m_gamma;
                        this.m_mass = invMass !== 0 ? 1 / invMass : 0;
                    }
                    else {
                        this.m_gamma = 0;
                        this.m_bias = 0;
                    }
                    if (data.step.warmStarting) {
                        this.m_impulse *= data.step.dtRatio;
                        const P = b2Math_13.b2Vec2.MulSV(this.m_impulse, this.m_u, b2DistanceJoint.InitVelocityConstraints_s_P);
                        vA.SelfMulSub(this.m_invMassA, P);
                        wA -= this.m_invIA * b2Math_13.b2Vec2.CrossVV(this.m_rA, P);
                        vB.SelfMulAdd(this.m_invMassB, P);
                        wB += this.m_invIB * b2Math_13.b2Vec2.CrossVV(this.m_rB, P);
                    }
                    else {
                        this.m_impulse = 0;
                    }
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolveVelocityConstraints(data) {
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const vpA = b2Math_13.b2Vec2.AddVCrossSV(vA, wA, this.m_rA, b2DistanceJoint.SolveVelocityConstraints_s_vpA);
                    const vpB = b2Math_13.b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2DistanceJoint.SolveVelocityConstraints_s_vpB);
                    const Cdot = b2Math_13.b2Vec2.DotVV(this.m_u, b2Math_13.b2Vec2.SubVV(vpB, vpA, b2Math_13.b2Vec2.s_t0));
                    const impulse = (-this.m_mass * (Cdot + this.m_bias + this.m_gamma * this.m_impulse));
                    this.m_impulse += impulse;
                    const P = b2Math_13.b2Vec2.MulSV(impulse, this.m_u, b2DistanceJoint.SolveVelocityConstraints_s_P);
                    vA.SelfMulSub(this.m_invMassA, P);
                    wA -= this.m_invIA * b2Math_13.b2Vec2.CrossVV(this.m_rA, P);
                    vB.SelfMulAdd(this.m_invMassB, P);
                    wB += this.m_invIB * b2Math_13.b2Vec2.CrossVV(this.m_rB, P);
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolvePositionConstraints(data) {
                    if (this.m_frequencyHz > 0) {
                        return true;
                    }
                    const cA = data.positions[this.m_indexA].c;
                    let aA = data.positions[this.m_indexA].a;
                    const cB = data.positions[this.m_indexB].c;
                    let aB = data.positions[this.m_indexB].a;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB);
                    const rA = b2Math_13.b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
                    const rB = b2Math_13.b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
                    const u = this.m_u;
                    u.x = cB.x + rB.x - cA.x - rA.x;
                    u.y = cB.y + rB.y - cA.y - rA.y;
                    const length = this.m_u.Normalize();
                    let C = length - this.m_length;
                    C = b2Math_13.b2Clamp(C, (-b2Settings_14.b2_maxLinearCorrection), b2Settings_14.b2_maxLinearCorrection);
                    const impulse = (-this.m_mass * C);
                    const P = b2Math_13.b2Vec2.MulSV(impulse, u, b2DistanceJoint.SolvePositionConstraints_s_P);
                    cA.SelfMulSub(this.m_invMassA, P);
                    aA -= this.m_invIA * b2Math_13.b2Vec2.CrossVV(rA, P);
                    cB.SelfMulAdd(this.m_invMassB, P);
                    aB += this.m_invIB * b2Math_13.b2Vec2.CrossVV(rB, P);
                    data.positions[this.m_indexA].a = aA;
                    data.positions[this.m_indexB].a = aB;
                    return b2Math_13.b2Abs(C) < b2Settings_14.b2_linearSlop;
                }
            };
            b2DistanceJoint.InitVelocityConstraints_s_P = new b2Math_13.b2Vec2();
            b2DistanceJoint.SolveVelocityConstraints_s_vpA = new b2Math_13.b2Vec2();
            b2DistanceJoint.SolveVelocityConstraints_s_vpB = new b2Math_13.b2Vec2();
            b2DistanceJoint.SolveVelocityConstraints_s_P = new b2Math_13.b2Vec2();
            b2DistanceJoint.SolvePositionConstraints_s_P = new b2Math_13.b2Vec2();
            exports_20("b2DistanceJoint", b2DistanceJoint);
        }
    };
});
System.register("Dynamics/Joints/b2AreaJoint", ["Common/b2Settings", "Common/b2Math", "Dynamics/Joints/b2Joint", "Dynamics/Joints/b2DistanceJoint"], function (exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    var b2Settings_15, b2Math_14, b2Joint_2, b2DistanceJoint_1, b2AreaJointDef, b2AreaJoint;
    return {
        setters: [
            function (b2Settings_15_1) {
                b2Settings_15 = b2Settings_15_1;
            },
            function (b2Math_14_1) {
                b2Math_14 = b2Math_14_1;
            },
            function (b2Joint_2_1) {
                b2Joint_2 = b2Joint_2_1;
            },
            function (b2DistanceJoint_1_1) {
                b2DistanceJoint_1 = b2DistanceJoint_1_1;
            }
        ],
        execute: function () {
            b2AreaJointDef = class b2AreaJointDef extends b2Joint_2.b2JointDef {
                constructor() {
                    super(b2Joint_2.b2JointType.e_areaJoint);
                    this.bodies = [];
                    this.frequencyHz = 0;
                    this.dampingRatio = 0;
                }
                AddBody(body) {
                    this.bodies.push(body);
                    if (this.bodies.length === 1) {
                        this.bodyA = body;
                    }
                    else if (this.bodies.length === 2) {
                        this.bodyB = body;
                    }
                }
            };
            exports_21("b2AreaJointDef", b2AreaJointDef);
            b2AreaJoint = class b2AreaJoint extends b2Joint_2.b2Joint {
                constructor(def) {
                    super(def);
                    this.m_frequencyHz = 0;
                    this.m_dampingRatio = 0;
                    this.m_impulse = 0;
                    this.m_targetArea = 0;
                    this.m_bodies = def.bodies;
                    this.m_frequencyHz = b2Settings_15.b2Maybe(def.frequencyHz, 0);
                    this.m_dampingRatio = b2Settings_15.b2Maybe(def.dampingRatio, 0);
                    this.m_targetLengths = b2Settings_15.b2MakeNumberArray(def.bodies.length);
                    this.m_normals = b2Math_14.b2Vec2.MakeArray(def.bodies.length);
                    this.m_joints = [];
                    this.m_deltas = b2Math_14.b2Vec2.MakeArray(def.bodies.length);
                    this.m_delta = new b2Math_14.b2Vec2();
                    const djd = new b2DistanceJoint_1.b2DistanceJointDef();
                    djd.frequencyHz = this.m_frequencyHz;
                    djd.dampingRatio = this.m_dampingRatio;
                    this.m_targetArea = 0;
                    for (let i = 0; i < this.m_bodies.length; ++i) {
                        const body = this.m_bodies[i];
                        const next = this.m_bodies[(i + 1) % this.m_bodies.length];
                        const body_c = body.GetWorldCenter();
                        const next_c = next.GetWorldCenter();
                        this.m_targetLengths[i] = b2Math_14.b2Vec2.DistanceVV(body_c, next_c);
                        this.m_targetArea += b2Math_14.b2Vec2.CrossVV(body_c, next_c);
                        djd.Initialize(body, next, body_c, next_c);
                        this.m_joints[i] = body.GetWorld().CreateJoint(djd);
                    }
                    this.m_targetArea *= 0.5;
                }
                GetAnchorA(out) {
                    return out;
                }
                GetAnchorB(out) {
                    return out;
                }
                GetReactionForce(inv_dt, out) {
                    return out;
                }
                GetReactionTorque(inv_dt) {
                    return 0;
                }
                SetFrequency(hz) {
                    this.m_frequencyHz = hz;
                    for (let i = 0; i < this.m_joints.length; ++i) {
                        this.m_joints[i].SetFrequency(hz);
                    }
                }
                GetFrequency() {
                    return this.m_frequencyHz;
                }
                SetDampingRatio(ratio) {
                    this.m_dampingRatio = ratio;
                    for (let i = 0; i < this.m_joints.length; ++i) {
                        this.m_joints[i].SetDampingRatio(ratio);
                    }
                }
                GetDampingRatio() {
                    return this.m_dampingRatio;
                }
                Dump(log) {
                    log("Area joint dumping is not supported.\n");
                }
                InitVelocityConstraints(data) {
                    for (let i = 0; i < this.m_bodies.length; ++i) {
                        const prev = this.m_bodies[(i + this.m_bodies.length - 1) % this.m_bodies.length];
                        const next = this.m_bodies[(i + 1) % this.m_bodies.length];
                        const prev_c = data.positions[prev.m_islandIndex].c;
                        const next_c = data.positions[next.m_islandIndex].c;
                        const delta = this.m_deltas[i];
                        b2Math_14.b2Vec2.SubVV(next_c, prev_c, delta);
                    }
                    if (data.step.warmStarting) {
                        this.m_impulse *= data.step.dtRatio;
                        for (let i = 0; i < this.m_bodies.length; ++i) {
                            const body = this.m_bodies[i];
                            const body_v = data.velocities[body.m_islandIndex].v;
                            const delta = this.m_deltas[i];
                            body_v.x += body.m_invMass * delta.y * 0.5 * this.m_impulse;
                            body_v.y += body.m_invMass * -delta.x * 0.5 * this.m_impulse;
                        }
                    }
                    else {
                        this.m_impulse = 0;
                    }
                }
                SolveVelocityConstraints(data) {
                    let dotMassSum = 0;
                    let crossMassSum = 0;
                    for (let i = 0; i < this.m_bodies.length; ++i) {
                        const body = this.m_bodies[i];
                        const body_v = data.velocities[body.m_islandIndex].v;
                        const delta = this.m_deltas[i];
                        dotMassSum += delta.LengthSquared() / body.GetMass();
                        crossMassSum += b2Math_14.b2Vec2.CrossVV(body_v, delta);
                    }
                    const lambda = -2 * crossMassSum / dotMassSum;
                    this.m_impulse += lambda;
                    for (let i = 0; i < this.m_bodies.length; ++i) {
                        const body = this.m_bodies[i];
                        const body_v = data.velocities[body.m_islandIndex].v;
                        const delta = this.m_deltas[i];
                        body_v.x += body.m_invMass * delta.y * 0.5 * lambda;
                        body_v.y += body.m_invMass * -delta.x * 0.5 * lambda;
                    }
                }
                SolvePositionConstraints(data) {
                    let perimeter = 0;
                    let area = 0;
                    for (let i = 0; i < this.m_bodies.length; ++i) {
                        const body = this.m_bodies[i];
                        const next = this.m_bodies[(i + 1) % this.m_bodies.length];
                        const body_c = data.positions[body.m_islandIndex].c;
                        const next_c = data.positions[next.m_islandIndex].c;
                        const delta = b2Math_14.b2Vec2.SubVV(next_c, body_c, this.m_delta);
                        let dist = delta.Length();
                        if (dist < b2Settings_15.b2_epsilon) {
                            dist = 1;
                        }
                        this.m_normals[i].x = delta.y / dist;
                        this.m_normals[i].y = -delta.x / dist;
                        perimeter += dist;
                        area += b2Math_14.b2Vec2.CrossVV(body_c, next_c);
                    }
                    area *= 0.5;
                    const deltaArea = this.m_targetArea - area;
                    const toExtrude = 0.5 * deltaArea / perimeter;
                    let done = true;
                    for (let i = 0; i < this.m_bodies.length; ++i) {
                        const body = this.m_bodies[i];
                        const body_c = data.positions[body.m_islandIndex].c;
                        const next_i = (i + 1) % this.m_bodies.length;
                        const delta = b2Math_14.b2Vec2.AddVV(this.m_normals[i], this.m_normals[next_i], this.m_delta);
                        delta.SelfMul(toExtrude);
                        const norm_sq = delta.LengthSquared();
                        if (norm_sq > b2Math_14.b2Sq(b2Settings_15.b2_maxLinearCorrection)) {
                            delta.SelfMul(b2Settings_15.b2_maxLinearCorrection / b2Math_14.b2Sqrt(norm_sq));
                        }
                        if (norm_sq > b2Math_14.b2Sq(b2Settings_15.b2_linearSlop)) {
                            done = false;
                        }
                        body_c.x += delta.x;
                        body_c.y += delta.y;
                    }
                    return done;
                }
            };
            exports_21("b2AreaJoint", b2AreaJoint);
        }
    };
});
System.register("Dynamics/Joints/b2FrictionJoint", ["Common/b2Settings", "Common/b2Math", "Dynamics/Joints/b2Joint"], function (exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    var b2Settings_16, b2Math_15, b2Joint_3, b2FrictionJointDef, b2FrictionJoint;
    return {
        setters: [
            function (b2Settings_16_1) {
                b2Settings_16 = b2Settings_16_1;
            },
            function (b2Math_15_1) {
                b2Math_15 = b2Math_15_1;
            },
            function (b2Joint_3_1) {
                b2Joint_3 = b2Joint_3_1;
            }
        ],
        execute: function () {
            b2FrictionJointDef = class b2FrictionJointDef extends b2Joint_3.b2JointDef {
                constructor() {
                    super(b2Joint_3.b2JointType.e_frictionJoint);
                    this.localAnchorA = new b2Math_15.b2Vec2();
                    this.localAnchorB = new b2Math_15.b2Vec2();
                    this.maxForce = 0;
                    this.maxTorque = 0;
                }
                Initialize(bA, bB, anchor) {
                    this.bodyA = bA;
                    this.bodyB = bB;
                    this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
                    this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
                }
            };
            exports_22("b2FrictionJointDef", b2FrictionJointDef);
            b2FrictionJoint = class b2FrictionJoint extends b2Joint_3.b2Joint {
                constructor(def) {
                    super(def);
                    this.m_localAnchorA = new b2Math_15.b2Vec2();
                    this.m_localAnchorB = new b2Math_15.b2Vec2();
                    this.m_linearImpulse = new b2Math_15.b2Vec2();
                    this.m_angularImpulse = 0;
                    this.m_maxForce = 0;
                    this.m_maxTorque = 0;
                    this.m_indexA = 0;
                    this.m_indexB = 0;
                    this.m_rA = new b2Math_15.b2Vec2();
                    this.m_rB = new b2Math_15.b2Vec2();
                    this.m_localCenterA = new b2Math_15.b2Vec2();
                    this.m_localCenterB = new b2Math_15.b2Vec2();
                    this.m_invMassA = 0;
                    this.m_invMassB = 0;
                    this.m_invIA = 0;
                    this.m_invIB = 0;
                    this.m_linearMass = new b2Math_15.b2Mat22();
                    this.m_angularMass = 0;
                    this.m_qA = new b2Math_15.b2Rot();
                    this.m_qB = new b2Math_15.b2Rot();
                    this.m_lalcA = new b2Math_15.b2Vec2();
                    this.m_lalcB = new b2Math_15.b2Vec2();
                    this.m_K = new b2Math_15.b2Mat22();
                    this.m_localAnchorA.Copy(def.localAnchorA);
                    this.m_localAnchorB.Copy(def.localAnchorB);
                    this.m_linearImpulse.SetZero();
                    this.m_maxForce = b2Settings_16.b2Maybe(def.maxForce, 0);
                    this.m_maxTorque = b2Settings_16.b2Maybe(def.maxTorque, 0);
                    this.m_linearMass.SetZero();
                }
                InitVelocityConstraints(data) {
                    this.m_indexA = this.m_bodyA.m_islandIndex;
                    this.m_indexB = this.m_bodyB.m_islandIndex;
                    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
                    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
                    this.m_invMassA = this.m_bodyA.m_invMass;
                    this.m_invMassB = this.m_bodyB.m_invMass;
                    this.m_invIA = this.m_bodyA.m_invI;
                    this.m_invIB = this.m_bodyB.m_invI;
                    const aA = data.positions[this.m_indexA].a;
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const aB = data.positions[this.m_indexB].a;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB);
                    b2Math_15.b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
                    const rA = b2Math_15.b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
                    b2Math_15.b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
                    const rB = b2Math_15.b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
                    const mA = this.m_invMassA, mB = this.m_invMassB;
                    const iA = this.m_invIA, iB = this.m_invIB;
                    const K = this.m_K;
                    K.ex.x = mA + mB + iA * rA.y * rA.y + iB * rB.y * rB.y;
                    K.ex.y = -iA * rA.x * rA.y - iB * rB.x * rB.y;
                    K.ey.x = K.ex.y;
                    K.ey.y = mA + mB + iA * rA.x * rA.x + iB * rB.x * rB.x;
                    K.GetInverse(this.m_linearMass);
                    this.m_angularMass = iA + iB;
                    if (this.m_angularMass > 0) {
                        this.m_angularMass = 1 / this.m_angularMass;
                    }
                    if (data.step.warmStarting) {
                        this.m_linearImpulse.SelfMul(data.step.dtRatio);
                        this.m_angularImpulse *= data.step.dtRatio;
                        const P = this.m_linearImpulse;
                        vA.SelfMulSub(mA, P);
                        wA -= iA * (b2Math_15.b2Vec2.CrossVV(this.m_rA, P) + this.m_angularImpulse);
                        vB.SelfMulAdd(mB, P);
                        wB += iB * (b2Math_15.b2Vec2.CrossVV(this.m_rB, P) + this.m_angularImpulse);
                    }
                    else {
                        this.m_linearImpulse.SetZero();
                        this.m_angularImpulse = 0;
                    }
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolveVelocityConstraints(data) {
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const mA = this.m_invMassA, mB = this.m_invMassB;
                    const iA = this.m_invIA, iB = this.m_invIB;
                    const h = data.step.dt;
                    {
                        const Cdot = wB - wA;
                        let impulse = (-this.m_angularMass * Cdot);
                        const oldImpulse = this.m_angularImpulse;
                        const maxImpulse = h * this.m_maxTorque;
                        this.m_angularImpulse = b2Math_15.b2Clamp(this.m_angularImpulse + impulse, (-maxImpulse), maxImpulse);
                        impulse = this.m_angularImpulse - oldImpulse;
                        wA -= iA * impulse;
                        wB += iB * impulse;
                    }
                    {
                        const Cdot_v2 = b2Math_15.b2Vec2.SubVV(b2Math_15.b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2Math_15.b2Vec2.s_t0), b2Math_15.b2Vec2.AddVCrossSV(vA, wA, this.m_rA, b2Math_15.b2Vec2.s_t1), b2FrictionJoint.SolveVelocityConstraints_s_Cdot_v2);
                        const impulseV = b2Math_15.b2Mat22.MulMV(this.m_linearMass, Cdot_v2, b2FrictionJoint.SolveVelocityConstraints_s_impulseV).SelfNeg();
                        const oldImpulseV = b2FrictionJoint.SolveVelocityConstraints_s_oldImpulseV.Copy(this.m_linearImpulse);
                        this.m_linearImpulse.SelfAdd(impulseV);
                        const maxImpulse = h * this.m_maxForce;
                        if (this.m_linearImpulse.LengthSquared() > maxImpulse * maxImpulse) {
                            this.m_linearImpulse.Normalize();
                            this.m_linearImpulse.SelfMul(maxImpulse);
                        }
                        b2Math_15.b2Vec2.SubVV(this.m_linearImpulse, oldImpulseV, impulseV);
                        vA.SelfMulSub(mA, impulseV);
                        wA -= iA * b2Math_15.b2Vec2.CrossVV(this.m_rA, impulseV);
                        vB.SelfMulAdd(mB, impulseV);
                        wB += iB * b2Math_15.b2Vec2.CrossVV(this.m_rB, impulseV);
                    }
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolvePositionConstraints(data) {
                    return true;
                }
                GetAnchorA(out) {
                    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
                }
                GetAnchorB(out) {
                    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
                }
                GetReactionForce(inv_dt, out) {
                    out.x = inv_dt * this.m_linearImpulse.x;
                    out.y = inv_dt * this.m_linearImpulse.y;
                    return out;
                }
                GetReactionTorque(inv_dt) {
                    return inv_dt * this.m_angularImpulse;
                }
                GetLocalAnchorA() { return this.m_localAnchorA; }
                GetLocalAnchorB() { return this.m_localAnchorB; }
                SetMaxForce(force) {
                    this.m_maxForce = force;
                }
                GetMaxForce() {
                    return this.m_maxForce;
                }
                SetMaxTorque(torque) {
                    this.m_maxTorque = torque;
                }
                GetMaxTorque() {
                    return this.m_maxTorque;
                }
                Dump(log) {
                    const indexA = this.m_bodyA.m_islandIndex;
                    const indexB = this.m_bodyB.m_islandIndex;
                    log("  const jd: b2FrictionJointDef = new b2FrictionJointDef();\n");
                    log("  jd.bodyA = bodies[%d];\n", indexA);
                    log("  jd.bodyB = bodies[%d];\n", indexB);
                    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
                    log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
                    log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
                    log("  jd.maxForce = %.15f;\n", this.m_maxForce);
                    log("  jd.maxTorque = %.15f;\n", this.m_maxTorque);
                    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
                }
            };
            b2FrictionJoint.SolveVelocityConstraints_s_Cdot_v2 = new b2Math_15.b2Vec2();
            b2FrictionJoint.SolveVelocityConstraints_s_impulseV = new b2Math_15.b2Vec2();
            b2FrictionJoint.SolveVelocityConstraints_s_oldImpulseV = new b2Math_15.b2Vec2();
            exports_22("b2FrictionJoint", b2FrictionJoint);
        }
    };
});
System.register("Dynamics/Joints/b2PrismaticJoint", ["Common/b2Settings", "Common/b2Math", "Dynamics/Joints/b2Joint"], function (exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    var b2Settings_17, b2Math_16, b2Joint_4, b2PrismaticJointDef, b2PrismaticJoint;
    return {
        setters: [
            function (b2Settings_17_1) {
                b2Settings_17 = b2Settings_17_1;
            },
            function (b2Math_16_1) {
                b2Math_16 = b2Math_16_1;
            },
            function (b2Joint_4_1) {
                b2Joint_4 = b2Joint_4_1;
            }
        ],
        execute: function () {
            b2PrismaticJointDef = class b2PrismaticJointDef extends b2Joint_4.b2JointDef {
                constructor() {
                    super(b2Joint_4.b2JointType.e_prismaticJoint);
                    this.localAnchorA = new b2Math_16.b2Vec2();
                    this.localAnchorB = new b2Math_16.b2Vec2();
                    this.localAxisA = new b2Math_16.b2Vec2(1, 0);
                    this.referenceAngle = 0;
                    this.enableLimit = false;
                    this.lowerTranslation = 0;
                    this.upperTranslation = 0;
                    this.enableMotor = false;
                    this.maxMotorForce = 0;
                    this.motorSpeed = 0;
                }
                Initialize(bA, bB, anchor, axis) {
                    this.bodyA = bA;
                    this.bodyB = bB;
                    this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
                    this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
                    this.bodyA.GetLocalVector(axis, this.localAxisA);
                    this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
                }
            };
            exports_23("b2PrismaticJointDef", b2PrismaticJointDef);
            b2PrismaticJoint = class b2PrismaticJoint extends b2Joint_4.b2Joint {
                constructor(def) {
                    super(def);
                    this.m_localAnchorA = new b2Math_16.b2Vec2();
                    this.m_localAnchorB = new b2Math_16.b2Vec2();
                    this.m_localXAxisA = new b2Math_16.b2Vec2();
                    this.m_localYAxisA = new b2Math_16.b2Vec2();
                    this.m_referenceAngle = 0;
                    this.m_impulse = new b2Math_16.b2Vec3(0, 0, 0);
                    this.m_motorImpulse = 0;
                    this.m_lowerTranslation = 0;
                    this.m_upperTranslation = 0;
                    this.m_maxMotorForce = 0;
                    this.m_motorSpeed = 0;
                    this.m_enableLimit = false;
                    this.m_enableMotor = false;
                    this.m_limitState = b2Joint_4.b2LimitState.e_inactiveLimit;
                    this.m_indexA = 0;
                    this.m_indexB = 0;
                    this.m_localCenterA = new b2Math_16.b2Vec2();
                    this.m_localCenterB = new b2Math_16.b2Vec2();
                    this.m_invMassA = 0;
                    this.m_invMassB = 0;
                    this.m_invIA = 0;
                    this.m_invIB = 0;
                    this.m_axis = new b2Math_16.b2Vec2(0, 0);
                    this.m_perp = new b2Math_16.b2Vec2(0, 0);
                    this.m_s1 = 0;
                    this.m_s2 = 0;
                    this.m_a1 = 0;
                    this.m_a2 = 0;
                    this.m_K = new b2Math_16.b2Mat33();
                    this.m_K3 = new b2Math_16.b2Mat33();
                    this.m_K2 = new b2Math_16.b2Mat22();
                    this.m_motorMass = 0;
                    this.m_qA = new b2Math_16.b2Rot();
                    this.m_qB = new b2Math_16.b2Rot();
                    this.m_lalcA = new b2Math_16.b2Vec2();
                    this.m_lalcB = new b2Math_16.b2Vec2();
                    this.m_rA = new b2Math_16.b2Vec2();
                    this.m_rB = new b2Math_16.b2Vec2();
                    this.m_localAnchorA.Copy(b2Settings_17.b2Maybe(def.localAnchorA, b2Math_16.b2Vec2.ZERO));
                    this.m_localAnchorB.Copy(b2Settings_17.b2Maybe(def.localAnchorB, b2Math_16.b2Vec2.ZERO));
                    this.m_localXAxisA.Copy(b2Settings_17.b2Maybe(def.localAxisA, new b2Math_16.b2Vec2(1, 0))).SelfNormalize();
                    b2Math_16.b2Vec2.CrossOneV(this.m_localXAxisA, this.m_localYAxisA);
                    this.m_referenceAngle = b2Settings_17.b2Maybe(def.referenceAngle, 0);
                    this.m_lowerTranslation = b2Settings_17.b2Maybe(def.lowerTranslation, 0);
                    this.m_upperTranslation = b2Settings_17.b2Maybe(def.upperTranslation, 0);
                    this.m_maxMotorForce = b2Settings_17.b2Maybe(def.maxMotorForce, 0);
                    this.m_motorSpeed = b2Settings_17.b2Maybe(def.motorSpeed, 0);
                    this.m_enableLimit = b2Settings_17.b2Maybe(def.enableLimit, false);
                    this.m_enableMotor = b2Settings_17.b2Maybe(def.enableMotor, false);
                }
                InitVelocityConstraints(data) {
                    this.m_indexA = this.m_bodyA.m_islandIndex;
                    this.m_indexB = this.m_bodyB.m_islandIndex;
                    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
                    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
                    this.m_invMassA = this.m_bodyA.m_invMass;
                    this.m_invMassB = this.m_bodyB.m_invMass;
                    this.m_invIA = this.m_bodyA.m_invI;
                    this.m_invIB = this.m_bodyB.m_invI;
                    const cA = data.positions[this.m_indexA].c;
                    const aA = data.positions[this.m_indexA].a;
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const cB = data.positions[this.m_indexB].c;
                    const aB = data.positions[this.m_indexB].a;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB);
                    b2Math_16.b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
                    const rA = b2Math_16.b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
                    b2Math_16.b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
                    const rB = b2Math_16.b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
                    const d = b2Math_16.b2Vec2.AddVV(b2Math_16.b2Vec2.SubVV(cB, cA, b2Math_16.b2Vec2.s_t0), b2Math_16.b2Vec2.SubVV(rB, rA, b2Math_16.b2Vec2.s_t1), b2PrismaticJoint.InitVelocityConstraints_s_d);
                    const mA = this.m_invMassA, mB = this.m_invMassB;
                    const iA = this.m_invIA, iB = this.m_invIB;
                    {
                        b2Math_16.b2Rot.MulRV(qA, this.m_localXAxisA, this.m_axis);
                        this.m_a1 = b2Math_16.b2Vec2.CrossVV(b2Math_16.b2Vec2.AddVV(d, rA, b2Math_16.b2Vec2.s_t0), this.m_axis);
                        this.m_a2 = b2Math_16.b2Vec2.CrossVV(rB, this.m_axis);
                        this.m_motorMass = mA + mB + iA * this.m_a1 * this.m_a1 + iB * this.m_a2 * this.m_a2;
                        if (this.m_motorMass > 0) {
                            this.m_motorMass = 1 / this.m_motorMass;
                        }
                    }
                    {
                        b2Math_16.b2Rot.MulRV(qA, this.m_localYAxisA, this.m_perp);
                        this.m_s1 = b2Math_16.b2Vec2.CrossVV(b2Math_16.b2Vec2.AddVV(d, rA, b2Math_16.b2Vec2.s_t0), this.m_perp);
                        this.m_s2 = b2Math_16.b2Vec2.CrossVV(rB, this.m_perp);
                        this.m_K.ex.x = mA + mB + iA * this.m_s1 * this.m_s1 + iB * this.m_s2 * this.m_s2;
                        this.m_K.ex.y = iA * this.m_s1 + iB * this.m_s2;
                        this.m_K.ex.z = iA * this.m_s1 * this.m_a1 + iB * this.m_s2 * this.m_a2;
                        this.m_K.ey.x = this.m_K.ex.y;
                        this.m_K.ey.y = iA + iB;
                        if (this.m_K.ey.y === 0) {
                            this.m_K.ey.y = 1;
                        }
                        this.m_K.ey.z = iA * this.m_a1 + iB * this.m_a2;
                        this.m_K.ez.x = this.m_K.ex.z;
                        this.m_K.ez.y = this.m_K.ey.z;
                        this.m_K.ez.z = mA + mB + iA * this.m_a1 * this.m_a1 + iB * this.m_a2 * this.m_a2;
                    }
                    if (this.m_enableLimit) {
                        const jointTranslation = b2Math_16.b2Vec2.DotVV(this.m_axis, d);
                        if (b2Math_16.b2Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b2Settings_17.b2_linearSlop) {
                            this.m_limitState = b2Joint_4.b2LimitState.e_equalLimits;
                        }
                        else if (jointTranslation <= this.m_lowerTranslation) {
                            if (this.m_limitState !== b2Joint_4.b2LimitState.e_atLowerLimit) {
                                this.m_limitState = b2Joint_4.b2LimitState.e_atLowerLimit;
                                this.m_impulse.z = 0;
                            }
                        }
                        else if (jointTranslation >= this.m_upperTranslation) {
                            if (this.m_limitState !== b2Joint_4.b2LimitState.e_atUpperLimit) {
                                this.m_limitState = b2Joint_4.b2LimitState.e_atUpperLimit;
                                this.m_impulse.z = 0;
                            }
                        }
                        else {
                            this.m_limitState = b2Joint_4.b2LimitState.e_inactiveLimit;
                            this.m_impulse.z = 0;
                        }
                    }
                    else {
                        this.m_limitState = b2Joint_4.b2LimitState.e_inactiveLimit;
                        this.m_impulse.z = 0;
                    }
                    if (!this.m_enableMotor) {
                        this.m_motorImpulse = 0;
                    }
                    if (data.step.warmStarting) {
                        this.m_impulse.SelfMul(data.step.dtRatio);
                        this.m_motorImpulse *= data.step.dtRatio;
                        const P = b2Math_16.b2Vec2.AddVV(b2Math_16.b2Vec2.MulSV(this.m_impulse.x, this.m_perp, b2Math_16.b2Vec2.s_t0), b2Math_16.b2Vec2.MulSV((this.m_motorImpulse + this.m_impulse.z), this.m_axis, b2Math_16.b2Vec2.s_t1), b2PrismaticJoint.InitVelocityConstraints_s_P);
                        const LA = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1;
                        const LB = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;
                        vA.SelfMulSub(mA, P);
                        wA -= iA * LA;
                        vB.SelfMulAdd(mB, P);
                        wB += iB * LB;
                    }
                    else {
                        this.m_impulse.SetZero();
                        this.m_motorImpulse = 0;
                    }
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolveVelocityConstraints(data) {
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const mA = this.m_invMassA, mB = this.m_invMassB;
                    const iA = this.m_invIA, iB = this.m_invIB;
                    if (this.m_enableMotor && this.m_limitState !== b2Joint_4.b2LimitState.e_equalLimits) {
                        const Cdot = b2Math_16.b2Vec2.DotVV(this.m_axis, b2Math_16.b2Vec2.SubVV(vB, vA, b2Math_16.b2Vec2.s_t0)) + this.m_a2 * wB - this.m_a1 * wA;
                        let impulse = this.m_motorMass * (this.m_motorSpeed - Cdot);
                        const oldImpulse = this.m_motorImpulse;
                        const maxImpulse = data.step.dt * this.m_maxMotorForce;
                        this.m_motorImpulse = b2Math_16.b2Clamp(this.m_motorImpulse + impulse, (-maxImpulse), maxImpulse);
                        impulse = this.m_motorImpulse - oldImpulse;
                        const P = b2Math_16.b2Vec2.MulSV(impulse, this.m_axis, b2PrismaticJoint.SolveVelocityConstraints_s_P);
                        const LA = impulse * this.m_a1;
                        const LB = impulse * this.m_a2;
                        vA.SelfMulSub(mA, P);
                        wA -= iA * LA;
                        vB.SelfMulAdd(mB, P);
                        wB += iB * LB;
                    }
                    const Cdot1_x = b2Math_16.b2Vec2.DotVV(this.m_perp, b2Math_16.b2Vec2.SubVV(vB, vA, b2Math_16.b2Vec2.s_t0)) + this.m_s2 * wB - this.m_s1 * wA;
                    const Cdot1_y = wB - wA;
                    if (this.m_enableLimit && this.m_limitState !== b2Joint_4.b2LimitState.e_inactiveLimit) {
                        const Cdot2 = b2Math_16.b2Vec2.DotVV(this.m_axis, b2Math_16.b2Vec2.SubVV(vB, vA, b2Math_16.b2Vec2.s_t0)) + this.m_a2 * wB - this.m_a1 * wA;
                        const f1 = b2PrismaticJoint.SolveVelocityConstraints_s_f1.Copy(this.m_impulse);
                        const df3 = this.m_K.Solve33((-Cdot1_x), (-Cdot1_y), (-Cdot2), b2PrismaticJoint.SolveVelocityConstraints_s_df3);
                        this.m_impulse.SelfAdd(df3);
                        if (this.m_limitState === b2Joint_4.b2LimitState.e_atLowerLimit) {
                            this.m_impulse.z = b2Math_16.b2Max(this.m_impulse.z, 0);
                        }
                        else if (this.m_limitState === b2Joint_4.b2LimitState.e_atUpperLimit) {
                            this.m_impulse.z = b2Math_16.b2Min(this.m_impulse.z, 0);
                        }
                        const b_x = (-Cdot1_x) - (this.m_impulse.z - f1.z) * this.m_K.ez.x;
                        const b_y = (-Cdot1_y) - (this.m_impulse.z - f1.z) * this.m_K.ez.y;
                        const f2r = this.m_K.Solve22(b_x, b_y, b2PrismaticJoint.SolveVelocityConstraints_s_f2r);
                        f2r.x += f1.x;
                        f2r.y += f1.y;
                        this.m_impulse.x = f2r.x;
                        this.m_impulse.y = f2r.y;
                        df3.x = this.m_impulse.x - f1.x;
                        df3.y = this.m_impulse.y - f1.y;
                        df3.z = this.m_impulse.z - f1.z;
                        const P = b2Math_16.b2Vec2.AddVV(b2Math_16.b2Vec2.MulSV(df3.x, this.m_perp, b2Math_16.b2Vec2.s_t0), b2Math_16.b2Vec2.MulSV(df3.z, this.m_axis, b2Math_16.b2Vec2.s_t1), b2PrismaticJoint.SolveVelocityConstraints_s_P);
                        const LA = df3.x * this.m_s1 + df3.y + df3.z * this.m_a1;
                        const LB = df3.x * this.m_s2 + df3.y + df3.z * this.m_a2;
                        vA.SelfMulSub(mA, P);
                        wA -= iA * LA;
                        vB.SelfMulAdd(mB, P);
                        wB += iB * LB;
                    }
                    else {
                        const df2 = this.m_K.Solve22((-Cdot1_x), (-Cdot1_y), b2PrismaticJoint.SolveVelocityConstraints_s_df2);
                        this.m_impulse.x += df2.x;
                        this.m_impulse.y += df2.y;
                        const P = b2Math_16.b2Vec2.MulSV(df2.x, this.m_perp, b2PrismaticJoint.SolveVelocityConstraints_s_P);
                        const LA = df2.x * this.m_s1 + df2.y;
                        const LB = df2.x * this.m_s2 + df2.y;
                        vA.SelfMulSub(mA, P);
                        wA -= iA * LA;
                        vB.SelfMulAdd(mB, P);
                        wB += iB * LB;
                    }
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolvePositionConstraints(data) {
                    const cA = data.positions[this.m_indexA].c;
                    let aA = data.positions[this.m_indexA].a;
                    const cB = data.positions[this.m_indexB].c;
                    let aB = data.positions[this.m_indexB].a;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB);
                    const mA = this.m_invMassA, mB = this.m_invMassB;
                    const iA = this.m_invIA, iB = this.m_invIB;
                    const rA = b2Math_16.b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
                    const rB = b2Math_16.b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
                    const d = b2Math_16.b2Vec2.SubVV(b2Math_16.b2Vec2.AddVV(cB, rB, b2Math_16.b2Vec2.s_t0), b2Math_16.b2Vec2.AddVV(cA, rA, b2Math_16.b2Vec2.s_t1), b2PrismaticJoint.SolvePositionConstraints_s_d);
                    const axis = b2Math_16.b2Rot.MulRV(qA, this.m_localXAxisA, this.m_axis);
                    const a1 = b2Math_16.b2Vec2.CrossVV(b2Math_16.b2Vec2.AddVV(d, rA, b2Math_16.b2Vec2.s_t0), axis);
                    const a2 = b2Math_16.b2Vec2.CrossVV(rB, axis);
                    const perp = b2Math_16.b2Rot.MulRV(qA, this.m_localYAxisA, this.m_perp);
                    const s1 = b2Math_16.b2Vec2.CrossVV(b2Math_16.b2Vec2.AddVV(d, rA, b2Math_16.b2Vec2.s_t0), perp);
                    const s2 = b2Math_16.b2Vec2.CrossVV(rB, perp);
                    let impulse = b2PrismaticJoint.SolvePositionConstraints_s_impulse;
                    const C1_x = b2Math_16.b2Vec2.DotVV(perp, d);
                    const C1_y = aB - aA - this.m_referenceAngle;
                    let linearError = b2Math_16.b2Abs(C1_x);
                    const angularError = b2Math_16.b2Abs(C1_y);
                    let active = false;
                    let C2 = 0;
                    if (this.m_enableLimit) {
                        const translation = b2Math_16.b2Vec2.DotVV(axis, d);
                        if (b2Math_16.b2Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b2Settings_17.b2_linearSlop) {
                            C2 = b2Math_16.b2Clamp(translation, (-b2Settings_17.b2_maxLinearCorrection), b2Settings_17.b2_maxLinearCorrection);
                            linearError = b2Math_16.b2Max(linearError, b2Math_16.b2Abs(translation));
                            active = true;
                        }
                        else if (translation <= this.m_lowerTranslation) {
                            C2 = b2Math_16.b2Clamp(translation - this.m_lowerTranslation + b2Settings_17.b2_linearSlop, (-b2Settings_17.b2_maxLinearCorrection), 0);
                            linearError = b2Math_16.b2Max(linearError, this.m_lowerTranslation - translation);
                            active = true;
                        }
                        else if (translation >= this.m_upperTranslation) {
                            C2 = b2Math_16.b2Clamp(translation - this.m_upperTranslation - b2Settings_17.b2_linearSlop, 0, b2Settings_17.b2_maxLinearCorrection);
                            linearError = b2Math_16.b2Max(linearError, translation - this.m_upperTranslation);
                            active = true;
                        }
                    }
                    if (active) {
                        const k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
                        const k12 = iA * s1 + iB * s2;
                        const k13 = iA * s1 * a1 + iB * s2 * a2;
                        let k22 = iA + iB;
                        if (k22 === 0) {
                            k22 = 1;
                        }
                        const k23 = iA * a1 + iB * a2;
                        const k33 = mA + mB + iA * a1 * a1 + iB * a2 * a2;
                        const K = this.m_K3;
                        K.ex.SetXYZ(k11, k12, k13);
                        K.ey.SetXYZ(k12, k22, k23);
                        K.ez.SetXYZ(k13, k23, k33);
                        impulse = K.Solve33((-C1_x), (-C1_y), (-C2), impulse);
                    }
                    else {
                        const k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
                        const k12 = iA * s1 + iB * s2;
                        let k22 = iA + iB;
                        if (k22 === 0) {
                            k22 = 1;
                        }
                        const K2 = this.m_K2;
                        K2.ex.Set(k11, k12);
                        K2.ey.Set(k12, k22);
                        const impulse1 = K2.Solve((-C1_x), (-C1_y), b2PrismaticJoint.SolvePositionConstraints_s_impulse1);
                        impulse.x = impulse1.x;
                        impulse.y = impulse1.y;
                        impulse.z = 0;
                    }
                    const P = b2Math_16.b2Vec2.AddVV(b2Math_16.b2Vec2.MulSV(impulse.x, perp, b2Math_16.b2Vec2.s_t0), b2Math_16.b2Vec2.MulSV(impulse.z, axis, b2Math_16.b2Vec2.s_t1), b2PrismaticJoint.SolvePositionConstraints_s_P);
                    const LA = impulse.x * s1 + impulse.y + impulse.z * a1;
                    const LB = impulse.x * s2 + impulse.y + impulse.z * a2;
                    cA.SelfMulSub(mA, P);
                    aA -= iA * LA;
                    cB.SelfMulAdd(mB, P);
                    aB += iB * LB;
                    data.positions[this.m_indexA].a = aA;
                    data.positions[this.m_indexB].a = aB;
                    return linearError <= b2Settings_17.b2_linearSlop && angularError <= b2Settings_17.b2_angularSlop;
                }
                GetAnchorA(out) {
                    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
                }
                GetAnchorB(out) {
                    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
                }
                GetReactionForce(inv_dt, out) {
                    out.x = inv_dt * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x);
                    out.y = inv_dt * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y);
                    return out;
                }
                GetReactionTorque(inv_dt) {
                    return inv_dt * this.m_impulse.y;
                }
                GetLocalAnchorA() { return this.m_localAnchorA; }
                GetLocalAnchorB() { return this.m_localAnchorB; }
                GetLocalAxisA() { return this.m_localXAxisA; }
                GetReferenceAngle() { return this.m_referenceAngle; }
                GetJointTranslation() {
                    const pA = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, b2PrismaticJoint.GetJointTranslation_s_pA);
                    const pB = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, b2PrismaticJoint.GetJointTranslation_s_pB);
                    const d = b2Math_16.b2Vec2.SubVV(pB, pA, b2PrismaticJoint.GetJointTranslation_s_d);
                    const axis = this.m_bodyA.GetWorldVector(this.m_localXAxisA, b2PrismaticJoint.GetJointTranslation_s_axis);
                    const translation = b2Math_16.b2Vec2.DotVV(d, axis);
                    return translation;
                }
                GetJointSpeed() {
                    const bA = this.m_bodyA;
                    const bB = this.m_bodyB;
                    b2Math_16.b2Vec2.SubVV(this.m_localAnchorA, bA.m_sweep.localCenter, this.m_lalcA);
                    const rA = b2Math_16.b2Rot.MulRV(bA.m_xf.q, this.m_lalcA, this.m_rA);
                    b2Math_16.b2Vec2.SubVV(this.m_localAnchorB, bB.m_sweep.localCenter, this.m_lalcB);
                    const rB = b2Math_16.b2Rot.MulRV(bB.m_xf.q, this.m_lalcB, this.m_rB);
                    const pA = b2Math_16.b2Vec2.AddVV(bA.m_sweep.c, rA, b2Math_16.b2Vec2.s_t0);
                    const pB = b2Math_16.b2Vec2.AddVV(bB.m_sweep.c, rB, b2Math_16.b2Vec2.s_t1);
                    const d = b2Math_16.b2Vec2.SubVV(pB, pA, b2Math_16.b2Vec2.s_t2);
                    const axis = bA.GetWorldVector(this.m_localXAxisA, this.m_axis);
                    const vA = bA.m_linearVelocity;
                    const vB = bB.m_linearVelocity;
                    const wA = bA.m_angularVelocity;
                    const wB = bB.m_angularVelocity;
                    const speed = b2Math_16.b2Vec2.DotVV(d, b2Math_16.b2Vec2.CrossSV(wA, axis, b2Math_16.b2Vec2.s_t0)) +
                        b2Math_16.b2Vec2.DotVV(axis, b2Math_16.b2Vec2.SubVV(b2Math_16.b2Vec2.AddVCrossSV(vB, wB, rB, b2Math_16.b2Vec2.s_t0), b2Math_16.b2Vec2.AddVCrossSV(vA, wA, rA, b2Math_16.b2Vec2.s_t1), b2Math_16.b2Vec2.s_t0));
                    return speed;
                }
                IsLimitEnabled() {
                    return this.m_enableLimit;
                }
                EnableLimit(flag) {
                    if (flag !== this.m_enableLimit) {
                        this.m_bodyA.SetAwake(true);
                        this.m_bodyB.SetAwake(true);
                        this.m_enableLimit = flag;
                        this.m_impulse.z = 0;
                    }
                }
                GetLowerLimit() {
                    return this.m_lowerTranslation;
                }
                GetUpperLimit() {
                    return this.m_upperTranslation;
                }
                SetLimits(lower, upper) {
                    if (lower !== this.m_lowerTranslation || upper !== this.m_upperTranslation) {
                        this.m_bodyA.SetAwake(true);
                        this.m_bodyB.SetAwake(true);
                        this.m_lowerTranslation = lower;
                        this.m_upperTranslation = upper;
                        this.m_impulse.z = 0;
                    }
                }
                IsMotorEnabled() {
                    return this.m_enableMotor;
                }
                EnableMotor(flag) {
                    this.m_bodyA.SetAwake(true);
                    this.m_bodyB.SetAwake(true);
                    this.m_enableMotor = flag;
                }
                SetMotorSpeed(speed) {
                    this.m_bodyA.SetAwake(true);
                    this.m_bodyB.SetAwake(true);
                    this.m_motorSpeed = speed;
                }
                GetMotorSpeed() {
                    return this.m_motorSpeed;
                }
                SetMaxMotorForce(force) {
                    this.m_bodyA.SetAwake(true);
                    this.m_bodyB.SetAwake(true);
                    this.m_maxMotorForce = force;
                }
                GetMaxMotorForce() { return this.m_maxMotorForce; }
                GetMotorForce(inv_dt) {
                    return inv_dt * this.m_motorImpulse;
                }
                Dump(log) {
                    const indexA = this.m_bodyA.m_islandIndex;
                    const indexB = this.m_bodyB.m_islandIndex;
                    log("  const jd: b2PrismaticJointDef = new b2PrismaticJointDef();\n");
                    log("  jd.bodyA = bodies[%d];\n", indexA);
                    log("  jd.bodyB = bodies[%d];\n", indexB);
                    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
                    log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
                    log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
                    log("  jd.localAxisA.Set(%.15f, %.15f);\n", this.m_localXAxisA.x, this.m_localXAxisA.y);
                    log("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle);
                    log("  jd.enableLimit = %s;\n", (this.m_enableLimit) ? ("true") : ("false"));
                    log("  jd.lowerTranslation = %.15f;\n", this.m_lowerTranslation);
                    log("  jd.upperTranslation = %.15f;\n", this.m_upperTranslation);
                    log("  jd.enableMotor = %s;\n", (this.m_enableMotor) ? ("true") : ("false"));
                    log("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed);
                    log("  jd.maxMotorForce = %.15f;\n", this.m_maxMotorForce);
                    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
                }
            };
            b2PrismaticJoint.InitVelocityConstraints_s_d = new b2Math_16.b2Vec2();
            b2PrismaticJoint.InitVelocityConstraints_s_P = new b2Math_16.b2Vec2();
            b2PrismaticJoint.SolveVelocityConstraints_s_P = new b2Math_16.b2Vec2();
            b2PrismaticJoint.SolveVelocityConstraints_s_f2r = new b2Math_16.b2Vec2();
            b2PrismaticJoint.SolveVelocityConstraints_s_f1 = new b2Math_16.b2Vec3();
            b2PrismaticJoint.SolveVelocityConstraints_s_df3 = new b2Math_16.b2Vec3();
            b2PrismaticJoint.SolveVelocityConstraints_s_df2 = new b2Math_16.b2Vec2();
            b2PrismaticJoint.SolvePositionConstraints_s_d = new b2Math_16.b2Vec2();
            b2PrismaticJoint.SolvePositionConstraints_s_impulse = new b2Math_16.b2Vec3();
            b2PrismaticJoint.SolvePositionConstraints_s_impulse1 = new b2Math_16.b2Vec2();
            b2PrismaticJoint.SolvePositionConstraints_s_P = new b2Math_16.b2Vec2();
            b2PrismaticJoint.GetJointTranslation_s_pA = new b2Math_16.b2Vec2();
            b2PrismaticJoint.GetJointTranslation_s_pB = new b2Math_16.b2Vec2();
            b2PrismaticJoint.GetJointTranslation_s_d = new b2Math_16.b2Vec2();
            b2PrismaticJoint.GetJointTranslation_s_axis = new b2Math_16.b2Vec2();
            exports_23("b2PrismaticJoint", b2PrismaticJoint);
        }
    };
});
System.register("Dynamics/Joints/b2RevoluteJoint", ["Common/b2Settings", "Common/b2Math", "Dynamics/Joints/b2Joint"], function (exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    var b2Settings_18, b2Math_17, b2Joint_5, b2RevoluteJointDef, b2RevoluteJoint;
    return {
        setters: [
            function (b2Settings_18_1) {
                b2Settings_18 = b2Settings_18_1;
            },
            function (b2Math_17_1) {
                b2Math_17 = b2Math_17_1;
            },
            function (b2Joint_5_1) {
                b2Joint_5 = b2Joint_5_1;
            }
        ],
        execute: function () {
            b2RevoluteJointDef = class b2RevoluteJointDef extends b2Joint_5.b2JointDef {
                constructor() {
                    super(b2Joint_5.b2JointType.e_revoluteJoint);
                    this.localAnchorA = new b2Math_17.b2Vec2(0, 0);
                    this.localAnchorB = new b2Math_17.b2Vec2(0, 0);
                    this.referenceAngle = 0;
                    this.enableLimit = false;
                    this.lowerAngle = 0;
                    this.upperAngle = 0;
                    this.enableMotor = false;
                    this.motorSpeed = 0;
                    this.maxMotorTorque = 0;
                }
                Initialize(bA, bB, anchor) {
                    this.bodyA = bA;
                    this.bodyB = bB;
                    this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
                    this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
                    this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
                }
            };
            exports_24("b2RevoluteJointDef", b2RevoluteJointDef);
            b2RevoluteJoint = class b2RevoluteJoint extends b2Joint_5.b2Joint {
                constructor(def) {
                    super(def);
                    this.m_localAnchorA = new b2Math_17.b2Vec2();
                    this.m_localAnchorB = new b2Math_17.b2Vec2();
                    this.m_impulse = new b2Math_17.b2Vec3();
                    this.m_motorImpulse = 0;
                    this.m_enableMotor = false;
                    this.m_maxMotorTorque = 0;
                    this.m_motorSpeed = 0;
                    this.m_enableLimit = false;
                    this.m_referenceAngle = 0;
                    this.m_lowerAngle = 0;
                    this.m_upperAngle = 0;
                    this.m_indexA = 0;
                    this.m_indexB = 0;
                    this.m_rA = new b2Math_17.b2Vec2();
                    this.m_rB = new b2Math_17.b2Vec2();
                    this.m_localCenterA = new b2Math_17.b2Vec2();
                    this.m_localCenterB = new b2Math_17.b2Vec2();
                    this.m_invMassA = 0;
                    this.m_invMassB = 0;
                    this.m_invIA = 0;
                    this.m_invIB = 0;
                    this.m_mass = new b2Math_17.b2Mat33();
                    this.m_motorMass = 0;
                    this.m_limitState = b2Joint_5.b2LimitState.e_inactiveLimit;
                    this.m_qA = new b2Math_17.b2Rot();
                    this.m_qB = new b2Math_17.b2Rot();
                    this.m_lalcA = new b2Math_17.b2Vec2();
                    this.m_lalcB = new b2Math_17.b2Vec2();
                    this.m_K = new b2Math_17.b2Mat22();
                    this.m_localAnchorA.Copy(b2Settings_18.b2Maybe(def.localAnchorA, b2Math_17.b2Vec2.ZERO));
                    this.m_localAnchorB.Copy(b2Settings_18.b2Maybe(def.localAnchorB, b2Math_17.b2Vec2.ZERO));
                    this.m_referenceAngle = b2Settings_18.b2Maybe(def.referenceAngle, 0);
                    this.m_impulse.SetZero();
                    this.m_motorImpulse = 0;
                    this.m_lowerAngle = b2Settings_18.b2Maybe(def.lowerAngle, 0);
                    this.m_upperAngle = b2Settings_18.b2Maybe(def.upperAngle, 0);
                    this.m_maxMotorTorque = b2Settings_18.b2Maybe(def.maxMotorTorque, 0);
                    this.m_motorSpeed = b2Settings_18.b2Maybe(def.motorSpeed, 0);
                    this.m_enableLimit = b2Settings_18.b2Maybe(def.enableLimit, false);
                    this.m_enableMotor = b2Settings_18.b2Maybe(def.enableMotor, false);
                    this.m_limitState = b2Joint_5.b2LimitState.e_inactiveLimit;
                }
                InitVelocityConstraints(data) {
                    this.m_indexA = this.m_bodyA.m_islandIndex;
                    this.m_indexB = this.m_bodyB.m_islandIndex;
                    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
                    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
                    this.m_invMassA = this.m_bodyA.m_invMass;
                    this.m_invMassB = this.m_bodyB.m_invMass;
                    this.m_invIA = this.m_bodyA.m_invI;
                    this.m_invIB = this.m_bodyB.m_invI;
                    const aA = data.positions[this.m_indexA].a;
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const aB = data.positions[this.m_indexB].a;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB);
                    b2Math_17.b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
                    b2Math_17.b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
                    b2Math_17.b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
                    b2Math_17.b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
                    const mA = this.m_invMassA, mB = this.m_invMassB;
                    const iA = this.m_invIA, iB = this.m_invIB;
                    const fixedRotation = (iA + iB === 0);
                    this.m_mass.ex.x = mA + mB + this.m_rA.y * this.m_rA.y * iA + this.m_rB.y * this.m_rB.y * iB;
                    this.m_mass.ey.x = -this.m_rA.y * this.m_rA.x * iA - this.m_rB.y * this.m_rB.x * iB;
                    this.m_mass.ez.x = -this.m_rA.y * iA - this.m_rB.y * iB;
                    this.m_mass.ex.y = this.m_mass.ey.x;
                    this.m_mass.ey.y = mA + mB + this.m_rA.x * this.m_rA.x * iA + this.m_rB.x * this.m_rB.x * iB;
                    this.m_mass.ez.y = this.m_rA.x * iA + this.m_rB.x * iB;
                    this.m_mass.ex.z = this.m_mass.ez.x;
                    this.m_mass.ey.z = this.m_mass.ez.y;
                    this.m_mass.ez.z = iA + iB;
                    this.m_motorMass = iA + iB;
                    if (this.m_motorMass > 0) {
                        this.m_motorMass = 1 / this.m_motorMass;
                    }
                    if (!this.m_enableMotor || fixedRotation) {
                        this.m_motorImpulse = 0;
                    }
                    if (this.m_enableLimit && !fixedRotation) {
                        const jointAngle = aB - aA - this.m_referenceAngle;
                        if (b2Math_17.b2Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * b2Settings_18.b2_angularSlop) {
                            this.m_limitState = b2Joint_5.b2LimitState.e_equalLimits;
                        }
                        else if (jointAngle <= this.m_lowerAngle) {
                            if (this.m_limitState !== b2Joint_5.b2LimitState.e_atLowerLimit) {
                                this.m_impulse.z = 0;
                            }
                            this.m_limitState = b2Joint_5.b2LimitState.e_atLowerLimit;
                        }
                        else if (jointAngle >= this.m_upperAngle) {
                            if (this.m_limitState !== b2Joint_5.b2LimitState.e_atUpperLimit) {
                                this.m_impulse.z = 0;
                            }
                            this.m_limitState = b2Joint_5.b2LimitState.e_atUpperLimit;
                        }
                        else {
                            this.m_limitState = b2Joint_5.b2LimitState.e_inactiveLimit;
                            this.m_impulse.z = 0;
                        }
                    }
                    else {
                        this.m_limitState = b2Joint_5.b2LimitState.e_inactiveLimit;
                    }
                    if (data.step.warmStarting) {
                        this.m_impulse.SelfMul(data.step.dtRatio);
                        this.m_motorImpulse *= data.step.dtRatio;
                        const P = b2RevoluteJoint.InitVelocityConstraints_s_P.Set(this.m_impulse.x, this.m_impulse.y);
                        vA.SelfMulSub(mA, P);
                        wA -= iA * (b2Math_17.b2Vec2.CrossVV(this.m_rA, P) + this.m_motorImpulse + this.m_impulse.z);
                        vB.SelfMulAdd(mB, P);
                        wB += iB * (b2Math_17.b2Vec2.CrossVV(this.m_rB, P) + this.m_motorImpulse + this.m_impulse.z);
                    }
                    else {
                        this.m_impulse.SetZero();
                        this.m_motorImpulse = 0;
                    }
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolveVelocityConstraints(data) {
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const mA = this.m_invMassA, mB = this.m_invMassB;
                    const iA = this.m_invIA, iB = this.m_invIB;
                    const fixedRotation = (iA + iB === 0);
                    if (this.m_enableMotor && this.m_limitState !== b2Joint_5.b2LimitState.e_equalLimits && !fixedRotation) {
                        const Cdot = wB - wA - this.m_motorSpeed;
                        let impulse = -this.m_motorMass * Cdot;
                        const oldImpulse = this.m_motorImpulse;
                        const maxImpulse = data.step.dt * this.m_maxMotorTorque;
                        this.m_motorImpulse = b2Math_17.b2Clamp(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);
                        impulse = this.m_motorImpulse - oldImpulse;
                        wA -= iA * impulse;
                        wB += iB * impulse;
                    }
                    if (this.m_enableLimit && this.m_limitState !== b2Joint_5.b2LimitState.e_inactiveLimit && !fixedRotation) {
                        const Cdot1 = b2Math_17.b2Vec2.SubVV(b2Math_17.b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2Math_17.b2Vec2.s_t0), b2Math_17.b2Vec2.AddVCrossSV(vA, wA, this.m_rA, b2Math_17.b2Vec2.s_t1), b2RevoluteJoint.SolveVelocityConstraints_s_Cdot1);
                        const Cdot2 = wB - wA;
                        const impulse_v3 = this.m_mass.Solve33(Cdot1.x, Cdot1.y, Cdot2, b2RevoluteJoint.SolveVelocityConstraints_s_impulse_v3).SelfNeg();
                        if (this.m_limitState === b2Joint_5.b2LimitState.e_equalLimits) {
                            this.m_impulse.SelfAdd(impulse_v3);
                        }
                        else if (this.m_limitState === b2Joint_5.b2LimitState.e_atLowerLimit) {
                            const newImpulse = this.m_impulse.z + impulse_v3.z;
                            if (newImpulse < 0) {
                                const rhs_x = -Cdot1.x + this.m_impulse.z * this.m_mass.ez.x;
                                const rhs_y = -Cdot1.y + this.m_impulse.z * this.m_mass.ez.y;
                                const reduced_v2 = this.m_mass.Solve22(rhs_x, rhs_y, b2RevoluteJoint.SolveVelocityConstraints_s_reduced_v2);
                                impulse_v3.x = reduced_v2.x;
                                impulse_v3.y = reduced_v2.y;
                                impulse_v3.z = -this.m_impulse.z;
                                this.m_impulse.x += reduced_v2.x;
                                this.m_impulse.y += reduced_v2.y;
                                this.m_impulse.z = 0;
                            }
                            else {
                                this.m_impulse.SelfAdd(impulse_v3);
                            }
                        }
                        else if (this.m_limitState === b2Joint_5.b2LimitState.e_atUpperLimit) {
                            const newImpulse = this.m_impulse.z + impulse_v3.z;
                            if (newImpulse > 0) {
                                const rhs_x = -Cdot1.x + this.m_impulse.z * this.m_mass.ez.x;
                                const rhs_y = -Cdot1.y + this.m_impulse.z * this.m_mass.ez.y;
                                const reduced_v2 = this.m_mass.Solve22(rhs_x, rhs_y, b2RevoluteJoint.SolveVelocityConstraints_s_reduced_v2);
                                impulse_v3.x = reduced_v2.x;
                                impulse_v3.y = reduced_v2.y;
                                impulse_v3.z = -this.m_impulse.z;
                                this.m_impulse.x += reduced_v2.x;
                                this.m_impulse.y += reduced_v2.y;
                                this.m_impulse.z = 0;
                            }
                            else {
                                this.m_impulse.SelfAdd(impulse_v3);
                            }
                        }
                        const P = b2RevoluteJoint.SolveVelocityConstraints_s_P.Set(impulse_v3.x, impulse_v3.y);
                        vA.SelfMulSub(mA, P);
                        wA -= iA * (b2Math_17.b2Vec2.CrossVV(this.m_rA, P) + impulse_v3.z);
                        vB.SelfMulAdd(mB, P);
                        wB += iB * (b2Math_17.b2Vec2.CrossVV(this.m_rB, P) + impulse_v3.z);
                    }
                    else {
                        const Cdot_v2 = b2Math_17.b2Vec2.SubVV(b2Math_17.b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2Math_17.b2Vec2.s_t0), b2Math_17.b2Vec2.AddVCrossSV(vA, wA, this.m_rA, b2Math_17.b2Vec2.s_t1), b2RevoluteJoint.SolveVelocityConstraints_s_Cdot_v2);
                        const impulse_v2 = this.m_mass.Solve22(-Cdot_v2.x, -Cdot_v2.y, b2RevoluteJoint.SolveVelocityConstraints_s_impulse_v2);
                        this.m_impulse.x += impulse_v2.x;
                        this.m_impulse.y += impulse_v2.y;
                        vA.SelfMulSub(mA, impulse_v2);
                        wA -= iA * b2Math_17.b2Vec2.CrossVV(this.m_rA, impulse_v2);
                        vB.SelfMulAdd(mB, impulse_v2);
                        wB += iB * b2Math_17.b2Vec2.CrossVV(this.m_rB, impulse_v2);
                    }
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolvePositionConstraints(data) {
                    const cA = data.positions[this.m_indexA].c;
                    let aA = data.positions[this.m_indexA].a;
                    const cB = data.positions[this.m_indexB].c;
                    let aB = data.positions[this.m_indexB].a;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB);
                    let angularError = 0;
                    let positionError = 0;
                    const fixedRotation = (this.m_invIA + this.m_invIB === 0);
                    if (this.m_enableLimit && this.m_limitState !== b2Joint_5.b2LimitState.e_inactiveLimit && !fixedRotation) {
                        const angle = aB - aA - this.m_referenceAngle;
                        let limitImpulse = 0;
                        if (this.m_limitState === b2Joint_5.b2LimitState.e_equalLimits) {
                            const C = b2Math_17.b2Clamp(angle - this.m_lowerAngle, -b2Settings_18.b2_maxAngularCorrection, b2Settings_18.b2_maxAngularCorrection);
                            limitImpulse = -this.m_motorMass * C;
                            angularError = b2Math_17.b2Abs(C);
                        }
                        else if (this.m_limitState === b2Joint_5.b2LimitState.e_atLowerLimit) {
                            let C = angle - this.m_lowerAngle;
                            angularError = -C;
                            C = b2Math_17.b2Clamp(C + b2Settings_18.b2_angularSlop, -b2Settings_18.b2_maxAngularCorrection, 0);
                            limitImpulse = -this.m_motorMass * C;
                        }
                        else if (this.m_limitState === b2Joint_5.b2LimitState.e_atUpperLimit) {
                            let C = angle - this.m_upperAngle;
                            angularError = C;
                            C = b2Math_17.b2Clamp(C - b2Settings_18.b2_angularSlop, 0, b2Settings_18.b2_maxAngularCorrection);
                            limitImpulse = -this.m_motorMass * C;
                        }
                        aA -= this.m_invIA * limitImpulse;
                        aB += this.m_invIB * limitImpulse;
                    }
                    {
                        qA.SetAngle(aA);
                        qB.SetAngle(aB);
                        b2Math_17.b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
                        const rA = b2Math_17.b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
                        b2Math_17.b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
                        const rB = b2Math_17.b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
                        const C_v2 = b2Math_17.b2Vec2.SubVV(b2Math_17.b2Vec2.AddVV(cB, rB, b2Math_17.b2Vec2.s_t0), b2Math_17.b2Vec2.AddVV(cA, rA, b2Math_17.b2Vec2.s_t1), b2RevoluteJoint.SolvePositionConstraints_s_C_v2);
                        positionError = C_v2.Length();
                        const mA = this.m_invMassA, mB = this.m_invMassB;
                        const iA = this.m_invIA, iB = this.m_invIB;
                        const K = this.m_K;
                        K.ex.x = mA + mB + iA * rA.y * rA.y + iB * rB.y * rB.y;
                        K.ex.y = -iA * rA.x * rA.y - iB * rB.x * rB.y;
                        K.ey.x = K.ex.y;
                        K.ey.y = mA + mB + iA * rA.x * rA.x + iB * rB.x * rB.x;
                        const impulse = K.Solve(C_v2.x, C_v2.y, b2RevoluteJoint.SolvePositionConstraints_s_impulse).SelfNeg();
                        cA.SelfMulSub(mA, impulse);
                        aA -= iA * b2Math_17.b2Vec2.CrossVV(rA, impulse);
                        cB.SelfMulAdd(mB, impulse);
                        aB += iB * b2Math_17.b2Vec2.CrossVV(rB, impulse);
                    }
                    data.positions[this.m_indexA].a = aA;
                    data.positions[this.m_indexB].a = aB;
                    return positionError <= b2Settings_18.b2_linearSlop && angularError <= b2Settings_18.b2_angularSlop;
                }
                GetAnchorA(out) {
                    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
                }
                GetAnchorB(out) {
                    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
                }
                GetReactionForce(inv_dt, out) {
                    out.x = inv_dt * this.m_impulse.x;
                    out.y = inv_dt * this.m_impulse.y;
                    return out;
                }
                GetReactionTorque(inv_dt) {
                    return inv_dt * this.m_impulse.z;
                }
                GetLocalAnchorA() { return this.m_localAnchorA; }
                GetLocalAnchorB() { return this.m_localAnchorB; }
                GetReferenceAngle() { return this.m_referenceAngle; }
                GetJointAngle() {
                    return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle;
                }
                GetJointSpeed() {
                    return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity;
                }
                IsMotorEnabled() {
                    return this.m_enableMotor;
                }
                EnableMotor(flag) {
                    if (this.m_enableMotor !== flag) {
                        this.m_bodyA.SetAwake(true);
                        this.m_bodyB.SetAwake(true);
                        this.m_enableMotor = flag;
                    }
                }
                GetMotorTorque(inv_dt) {
                    return inv_dt * this.m_motorImpulse;
                }
                GetMotorSpeed() {
                    return this.m_motorSpeed;
                }
                SetMaxMotorTorque(torque) {
                    this.m_maxMotorTorque = torque;
                }
                GetMaxMotorTorque() { return this.m_maxMotorTorque; }
                IsLimitEnabled() {
                    return this.m_enableLimit;
                }
                EnableLimit(flag) {
                    if (flag !== this.m_enableLimit) {
                        this.m_bodyA.SetAwake(true);
                        this.m_bodyB.SetAwake(true);
                        this.m_enableLimit = flag;
                        this.m_impulse.z = 0;
                    }
                }
                GetLowerLimit() {
                    return this.m_lowerAngle;
                }
                GetUpperLimit() {
                    return this.m_upperAngle;
                }
                SetLimits(lower, upper) {
                    if (lower !== this.m_lowerAngle || upper !== this.m_upperAngle) {
                        this.m_bodyA.SetAwake(true);
                        this.m_bodyB.SetAwake(true);
                        this.m_impulse.z = 0;
                        this.m_lowerAngle = lower;
                        this.m_upperAngle = upper;
                    }
                }
                SetMotorSpeed(speed) {
                    if (this.m_motorSpeed !== speed) {
                        this.m_bodyA.SetAwake(true);
                        this.m_bodyB.SetAwake(true);
                        this.m_motorSpeed = speed;
                    }
                }
                Dump(log) {
                    const indexA = this.m_bodyA.m_islandIndex;
                    const indexB = this.m_bodyB.m_islandIndex;
                    log("  const jd: b2RevoluteJointDef = new b2RevoluteJointDef();\n");
                    log("  jd.bodyA = bodies[%d];\n", indexA);
                    log("  jd.bodyB = bodies[%d];\n", indexB);
                    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
                    log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
                    log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
                    log("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle);
                    log("  jd.enableLimit = %s;\n", (this.m_enableLimit) ? ("true") : ("false"));
                    log("  jd.lowerAngle = %.15f;\n", this.m_lowerAngle);
                    log("  jd.upperAngle = %.15f;\n", this.m_upperAngle);
                    log("  jd.enableMotor = %s;\n", (this.m_enableMotor) ? ("true") : ("false"));
                    log("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed);
                    log("  jd.maxMotorTorque = %.15f;\n", this.m_maxMotorTorque);
                    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
                }
            };
            b2RevoluteJoint.InitVelocityConstraints_s_P = new b2Math_17.b2Vec2();
            b2RevoluteJoint.SolveVelocityConstraints_s_P = new b2Math_17.b2Vec2();
            b2RevoluteJoint.SolveVelocityConstraints_s_Cdot_v2 = new b2Math_17.b2Vec2();
            b2RevoluteJoint.SolveVelocityConstraints_s_Cdot1 = new b2Math_17.b2Vec2();
            b2RevoluteJoint.SolveVelocityConstraints_s_impulse_v3 = new b2Math_17.b2Vec3();
            b2RevoluteJoint.SolveVelocityConstraints_s_reduced_v2 = new b2Math_17.b2Vec2();
            b2RevoluteJoint.SolveVelocityConstraints_s_impulse_v2 = new b2Math_17.b2Vec2();
            b2RevoluteJoint.SolvePositionConstraints_s_C_v2 = new b2Math_17.b2Vec2();
            b2RevoluteJoint.SolvePositionConstraints_s_impulse = new b2Math_17.b2Vec2();
            exports_24("b2RevoluteJoint", b2RevoluteJoint);
        }
    };
});
System.register("Dynamics/Joints/b2GearJoint", ["Common/b2Settings", "Common/b2Math", "Dynamics/Joints/b2Joint"], function (exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    var b2Settings_19, b2Math_18, b2Joint_6, b2GearJointDef, b2GearJoint;
    return {
        setters: [
            function (b2Settings_19_1) {
                b2Settings_19 = b2Settings_19_1;
            },
            function (b2Math_18_1) {
                b2Math_18 = b2Math_18_1;
            },
            function (b2Joint_6_1) {
                b2Joint_6 = b2Joint_6_1;
            }
        ],
        execute: function () {
            b2GearJointDef = class b2GearJointDef extends b2Joint_6.b2JointDef {
                constructor() {
                    super(b2Joint_6.b2JointType.e_gearJoint);
                    this.ratio = 1;
                }
            };
            exports_25("b2GearJointDef", b2GearJointDef);
            b2GearJoint = class b2GearJoint extends b2Joint_6.b2Joint {
                constructor(def) {
                    super(def);
                    this.m_typeA = b2Joint_6.b2JointType.e_unknownJoint;
                    this.m_typeB = b2Joint_6.b2JointType.e_unknownJoint;
                    this.m_localAnchorA = new b2Math_18.b2Vec2();
                    this.m_localAnchorB = new b2Math_18.b2Vec2();
                    this.m_localAnchorC = new b2Math_18.b2Vec2();
                    this.m_localAnchorD = new b2Math_18.b2Vec2();
                    this.m_localAxisC = new b2Math_18.b2Vec2();
                    this.m_localAxisD = new b2Math_18.b2Vec2();
                    this.m_referenceAngleA = 0;
                    this.m_referenceAngleB = 0;
                    this.m_constant = 0;
                    this.m_ratio = 0;
                    this.m_impulse = 0;
                    this.m_indexA = 0;
                    this.m_indexB = 0;
                    this.m_indexC = 0;
                    this.m_indexD = 0;
                    this.m_lcA = new b2Math_18.b2Vec2();
                    this.m_lcB = new b2Math_18.b2Vec2();
                    this.m_lcC = new b2Math_18.b2Vec2();
                    this.m_lcD = new b2Math_18.b2Vec2();
                    this.m_mA = 0;
                    this.m_mB = 0;
                    this.m_mC = 0;
                    this.m_mD = 0;
                    this.m_iA = 0;
                    this.m_iB = 0;
                    this.m_iC = 0;
                    this.m_iD = 0;
                    this.m_JvAC = new b2Math_18.b2Vec2();
                    this.m_JvBD = new b2Math_18.b2Vec2();
                    this.m_JwA = 0;
                    this.m_JwB = 0;
                    this.m_JwC = 0;
                    this.m_JwD = 0;
                    this.m_mass = 0;
                    this.m_qA = new b2Math_18.b2Rot();
                    this.m_qB = new b2Math_18.b2Rot();
                    this.m_qC = new b2Math_18.b2Rot();
                    this.m_qD = new b2Math_18.b2Rot();
                    this.m_lalcA = new b2Math_18.b2Vec2();
                    this.m_lalcB = new b2Math_18.b2Vec2();
                    this.m_lalcC = new b2Math_18.b2Vec2();
                    this.m_lalcD = new b2Math_18.b2Vec2();
                    this.m_joint1 = def.joint1;
                    this.m_joint2 = def.joint2;
                    this.m_typeA = this.m_joint1.GetType();
                    this.m_typeB = this.m_joint2.GetType();
                    let coordinateA, coordinateB;
                    this.m_bodyC = this.m_joint1.GetBodyA();
                    this.m_bodyA = this.m_joint1.GetBodyB();
                    const xfA = this.m_bodyA.m_xf;
                    const aA = this.m_bodyA.m_sweep.a;
                    const xfC = this.m_bodyC.m_xf;
                    const aC = this.m_bodyC.m_sweep.a;
                    if (this.m_typeA === b2Joint_6.b2JointType.e_revoluteJoint) {
                        const revolute = def.joint1;
                        this.m_localAnchorC.Copy(revolute.m_localAnchorA);
                        this.m_localAnchorA.Copy(revolute.m_localAnchorB);
                        this.m_referenceAngleA = revolute.m_referenceAngle;
                        this.m_localAxisC.SetZero();
                        coordinateA = aA - aC - this.m_referenceAngleA;
                    }
                    else {
                        const prismatic = def.joint1;
                        this.m_localAnchorC.Copy(prismatic.m_localAnchorA);
                        this.m_localAnchorA.Copy(prismatic.m_localAnchorB);
                        this.m_referenceAngleA = prismatic.m_referenceAngle;
                        this.m_localAxisC.Copy(prismatic.m_localXAxisA);
                        const pC = this.m_localAnchorC;
                        const pA = b2Math_18.b2Rot.MulTRV(xfC.q, b2Math_18.b2Vec2.AddVV(b2Math_18.b2Rot.MulRV(xfA.q, this.m_localAnchorA, b2Math_18.b2Vec2.s_t0), b2Math_18.b2Vec2.SubVV(xfA.p, xfC.p, b2Math_18.b2Vec2.s_t1), b2Math_18.b2Vec2.s_t0), b2Math_18.b2Vec2.s_t0);
                        coordinateA = b2Math_18.b2Vec2.DotVV(b2Math_18.b2Vec2.SubVV(pA, pC, b2Math_18.b2Vec2.s_t0), this.m_localAxisC);
                    }
                    this.m_bodyD = this.m_joint2.GetBodyA();
                    this.m_bodyB = this.m_joint2.GetBodyB();
                    const xfB = this.m_bodyB.m_xf;
                    const aB = this.m_bodyB.m_sweep.a;
                    const xfD = this.m_bodyD.m_xf;
                    const aD = this.m_bodyD.m_sweep.a;
                    if (this.m_typeB === b2Joint_6.b2JointType.e_revoluteJoint) {
                        const revolute = def.joint2;
                        this.m_localAnchorD.Copy(revolute.m_localAnchorA);
                        this.m_localAnchorB.Copy(revolute.m_localAnchorB);
                        this.m_referenceAngleB = revolute.m_referenceAngle;
                        this.m_localAxisD.SetZero();
                        coordinateB = aB - aD - this.m_referenceAngleB;
                    }
                    else {
                        const prismatic = def.joint2;
                        this.m_localAnchorD.Copy(prismatic.m_localAnchorA);
                        this.m_localAnchorB.Copy(prismatic.m_localAnchorB);
                        this.m_referenceAngleB = prismatic.m_referenceAngle;
                        this.m_localAxisD.Copy(prismatic.m_localXAxisA);
                        const pD = this.m_localAnchorD;
                        const pB = b2Math_18.b2Rot.MulTRV(xfD.q, b2Math_18.b2Vec2.AddVV(b2Math_18.b2Rot.MulRV(xfB.q, this.m_localAnchorB, b2Math_18.b2Vec2.s_t0), b2Math_18.b2Vec2.SubVV(xfB.p, xfD.p, b2Math_18.b2Vec2.s_t1), b2Math_18.b2Vec2.s_t0), b2Math_18.b2Vec2.s_t0);
                        coordinateB = b2Math_18.b2Vec2.DotVV(b2Math_18.b2Vec2.SubVV(pB, pD, b2Math_18.b2Vec2.s_t0), this.m_localAxisD);
                    }
                    this.m_ratio = b2Settings_19.b2Maybe(def.ratio, 1);
                    this.m_constant = coordinateA + this.m_ratio * coordinateB;
                    this.m_impulse = 0;
                }
                InitVelocityConstraints(data) {
                    this.m_indexA = this.m_bodyA.m_islandIndex;
                    this.m_indexB = this.m_bodyB.m_islandIndex;
                    this.m_indexC = this.m_bodyC.m_islandIndex;
                    this.m_indexD = this.m_bodyD.m_islandIndex;
                    this.m_lcA.Copy(this.m_bodyA.m_sweep.localCenter);
                    this.m_lcB.Copy(this.m_bodyB.m_sweep.localCenter);
                    this.m_lcC.Copy(this.m_bodyC.m_sweep.localCenter);
                    this.m_lcD.Copy(this.m_bodyD.m_sweep.localCenter);
                    this.m_mA = this.m_bodyA.m_invMass;
                    this.m_mB = this.m_bodyB.m_invMass;
                    this.m_mC = this.m_bodyC.m_invMass;
                    this.m_mD = this.m_bodyD.m_invMass;
                    this.m_iA = this.m_bodyA.m_invI;
                    this.m_iB = this.m_bodyB.m_invI;
                    this.m_iC = this.m_bodyC.m_invI;
                    this.m_iD = this.m_bodyD.m_invI;
                    const aA = data.positions[this.m_indexA].a;
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const aB = data.positions[this.m_indexB].a;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const aC = data.positions[this.m_indexC].a;
                    const vC = data.velocities[this.m_indexC].v;
                    let wC = data.velocities[this.m_indexC].w;
                    const aD = data.positions[this.m_indexD].a;
                    const vD = data.velocities[this.m_indexD].v;
                    let wD = data.velocities[this.m_indexD].w;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB), qC = this.m_qC.SetAngle(aC), qD = this.m_qD.SetAngle(aD);
                    this.m_mass = 0;
                    if (this.m_typeA === b2Joint_6.b2JointType.e_revoluteJoint) {
                        this.m_JvAC.SetZero();
                        this.m_JwA = 1;
                        this.m_JwC = 1;
                        this.m_mass += this.m_iA + this.m_iC;
                    }
                    else {
                        const u = b2Math_18.b2Rot.MulRV(qC, this.m_localAxisC, b2GearJoint.InitVelocityConstraints_s_u);
                        b2Math_18.b2Vec2.SubVV(this.m_localAnchorC, this.m_lcC, this.m_lalcC);
                        const rC = b2Math_18.b2Rot.MulRV(qC, this.m_lalcC, b2GearJoint.InitVelocityConstraints_s_rC);
                        b2Math_18.b2Vec2.SubVV(this.m_localAnchorA, this.m_lcA, this.m_lalcA);
                        const rA = b2Math_18.b2Rot.MulRV(qA, this.m_lalcA, b2GearJoint.InitVelocityConstraints_s_rA);
                        this.m_JvAC.Copy(u);
                        this.m_JwC = b2Math_18.b2Vec2.CrossVV(rC, u);
                        this.m_JwA = b2Math_18.b2Vec2.CrossVV(rA, u);
                        this.m_mass += this.m_mC + this.m_mA + this.m_iC * this.m_JwC * this.m_JwC + this.m_iA * this.m_JwA * this.m_JwA;
                    }
                    if (this.m_typeB === b2Joint_6.b2JointType.e_revoluteJoint) {
                        this.m_JvBD.SetZero();
                        this.m_JwB = this.m_ratio;
                        this.m_JwD = this.m_ratio;
                        this.m_mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD);
                    }
                    else {
                        const u = b2Math_18.b2Rot.MulRV(qD, this.m_localAxisD, b2GearJoint.InitVelocityConstraints_s_u);
                        b2Math_18.b2Vec2.SubVV(this.m_localAnchorD, this.m_lcD, this.m_lalcD);
                        const rD = b2Math_18.b2Rot.MulRV(qD, this.m_lalcD, b2GearJoint.InitVelocityConstraints_s_rD);
                        b2Math_18.b2Vec2.SubVV(this.m_localAnchorB, this.m_lcB, this.m_lalcB);
                        const rB = b2Math_18.b2Rot.MulRV(qB, this.m_lalcB, b2GearJoint.InitVelocityConstraints_s_rB);
                        b2Math_18.b2Vec2.MulSV(this.m_ratio, u, this.m_JvBD);
                        this.m_JwD = this.m_ratio * b2Math_18.b2Vec2.CrossVV(rD, u);
                        this.m_JwB = this.m_ratio * b2Math_18.b2Vec2.CrossVV(rB, u);
                        this.m_mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * this.m_JwD * this.m_JwD + this.m_iB * this.m_JwB * this.m_JwB;
                    }
                    this.m_mass = this.m_mass > 0 ? 1 / this.m_mass : 0;
                    if (data.step.warmStarting) {
                        vA.SelfMulAdd(this.m_mA * this.m_impulse, this.m_JvAC);
                        wA += this.m_iA * this.m_impulse * this.m_JwA;
                        vB.SelfMulAdd(this.m_mB * this.m_impulse, this.m_JvBD);
                        wB += this.m_iB * this.m_impulse * this.m_JwB;
                        vC.SelfMulSub(this.m_mC * this.m_impulse, this.m_JvAC);
                        wC -= this.m_iC * this.m_impulse * this.m_JwC;
                        vD.SelfMulSub(this.m_mD * this.m_impulse, this.m_JvBD);
                        wD -= this.m_iD * this.m_impulse * this.m_JwD;
                    }
                    else {
                        this.m_impulse = 0;
                    }
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                    data.velocities[this.m_indexC].w = wC;
                    data.velocities[this.m_indexD].w = wD;
                }
                SolveVelocityConstraints(data) {
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const vC = data.velocities[this.m_indexC].v;
                    let wC = data.velocities[this.m_indexC].w;
                    const vD = data.velocities[this.m_indexD].v;
                    let wD = data.velocities[this.m_indexD].w;
                    let Cdot = b2Math_18.b2Vec2.DotVV(this.m_JvAC, b2Math_18.b2Vec2.SubVV(vA, vC, b2Math_18.b2Vec2.s_t0)) +
                        b2Math_18.b2Vec2.DotVV(this.m_JvBD, b2Math_18.b2Vec2.SubVV(vB, vD, b2Math_18.b2Vec2.s_t0));
                    Cdot += (this.m_JwA * wA - this.m_JwC * wC) + (this.m_JwB * wB - this.m_JwD * wD);
                    const impulse = -this.m_mass * Cdot;
                    this.m_impulse += impulse;
                    vA.SelfMulAdd((this.m_mA * impulse), this.m_JvAC);
                    wA += this.m_iA * impulse * this.m_JwA;
                    vB.SelfMulAdd((this.m_mB * impulse), this.m_JvBD);
                    wB += this.m_iB * impulse * this.m_JwB;
                    vC.SelfMulSub((this.m_mC * impulse), this.m_JvAC);
                    wC -= this.m_iC * impulse * this.m_JwC;
                    vD.SelfMulSub((this.m_mD * impulse), this.m_JvBD);
                    wD -= this.m_iD * impulse * this.m_JwD;
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                    data.velocities[this.m_indexC].w = wC;
                    data.velocities[this.m_indexD].w = wD;
                }
                SolvePositionConstraints(data) {
                    const cA = data.positions[this.m_indexA].c;
                    let aA = data.positions[this.m_indexA].a;
                    const cB = data.positions[this.m_indexB].c;
                    let aB = data.positions[this.m_indexB].a;
                    const cC = data.positions[this.m_indexC].c;
                    let aC = data.positions[this.m_indexC].a;
                    const cD = data.positions[this.m_indexD].c;
                    let aD = data.positions[this.m_indexD].a;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB), qC = this.m_qC.SetAngle(aC), qD = this.m_qD.SetAngle(aD);
                    const linearError = 0;
                    let coordinateA, coordinateB;
                    const JvAC = this.m_JvAC, JvBD = this.m_JvBD;
                    let JwA, JwB, JwC, JwD;
                    let mass = 0;
                    if (this.m_typeA === b2Joint_6.b2JointType.e_revoluteJoint) {
                        JvAC.SetZero();
                        JwA = 1;
                        JwC = 1;
                        mass += this.m_iA + this.m_iC;
                        coordinateA = aA - aC - this.m_referenceAngleA;
                    }
                    else {
                        const u = b2Math_18.b2Rot.MulRV(qC, this.m_localAxisC, b2GearJoint.SolvePositionConstraints_s_u);
                        const rC = b2Math_18.b2Rot.MulRV(qC, this.m_lalcC, b2GearJoint.SolvePositionConstraints_s_rC);
                        const rA = b2Math_18.b2Rot.MulRV(qA, this.m_lalcA, b2GearJoint.SolvePositionConstraints_s_rA);
                        JvAC.Copy(u);
                        JwC = b2Math_18.b2Vec2.CrossVV(rC, u);
                        JwA = b2Math_18.b2Vec2.CrossVV(rA, u);
                        mass += this.m_mC + this.m_mA + this.m_iC * JwC * JwC + this.m_iA * JwA * JwA;
                        const pC = this.m_lalcC;
                        const pA = b2Math_18.b2Rot.MulTRV(qC, b2Math_18.b2Vec2.AddVV(rA, b2Math_18.b2Vec2.SubVV(cA, cC, b2Math_18.b2Vec2.s_t0), b2Math_18.b2Vec2.s_t0), b2Math_18.b2Vec2.s_t0);
                        coordinateA = b2Math_18.b2Vec2.DotVV(b2Math_18.b2Vec2.SubVV(pA, pC, b2Math_18.b2Vec2.s_t0), this.m_localAxisC);
                    }
                    if (this.m_typeB === b2Joint_6.b2JointType.e_revoluteJoint) {
                        JvBD.SetZero();
                        JwB = this.m_ratio;
                        JwD = this.m_ratio;
                        mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD);
                        coordinateB = aB - aD - this.m_referenceAngleB;
                    }
                    else {
                        const u = b2Math_18.b2Rot.MulRV(qD, this.m_localAxisD, b2GearJoint.SolvePositionConstraints_s_u);
                        const rD = b2Math_18.b2Rot.MulRV(qD, this.m_lalcD, b2GearJoint.SolvePositionConstraints_s_rD);
                        const rB = b2Math_18.b2Rot.MulRV(qB, this.m_lalcB, b2GearJoint.SolvePositionConstraints_s_rB);
                        b2Math_18.b2Vec2.MulSV(this.m_ratio, u, JvBD);
                        JwD = this.m_ratio * b2Math_18.b2Vec2.CrossVV(rD, u);
                        JwB = this.m_ratio * b2Math_18.b2Vec2.CrossVV(rB, u);
                        mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * JwD * JwD + this.m_iB * JwB * JwB;
                        const pD = this.m_lalcD;
                        const pB = b2Math_18.b2Rot.MulTRV(qD, b2Math_18.b2Vec2.AddVV(rB, b2Math_18.b2Vec2.SubVV(cB, cD, b2Math_18.b2Vec2.s_t0), b2Math_18.b2Vec2.s_t0), b2Math_18.b2Vec2.s_t0);
                        coordinateB = b2Math_18.b2Vec2.DotVV(b2Math_18.b2Vec2.SubVV(pB, pD, b2Math_18.b2Vec2.s_t0), this.m_localAxisD);
                    }
                    const C = (coordinateA + this.m_ratio * coordinateB) - this.m_constant;
                    let impulse = 0;
                    if (mass > 0) {
                        impulse = -C / mass;
                    }
                    cA.SelfMulAdd(this.m_mA * impulse, JvAC);
                    aA += this.m_iA * impulse * JwA;
                    cB.SelfMulAdd(this.m_mB * impulse, JvBD);
                    aB += this.m_iB * impulse * JwB;
                    cC.SelfMulSub(this.m_mC * impulse, JvAC);
                    aC -= this.m_iC * impulse * JwC;
                    cD.SelfMulSub(this.m_mD * impulse, JvBD);
                    aD -= this.m_iD * impulse * JwD;
                    data.positions[this.m_indexA].a = aA;
                    data.positions[this.m_indexB].a = aB;
                    data.positions[this.m_indexC].a = aC;
                    data.positions[this.m_indexD].a = aD;
                    return linearError < b2Settings_19.b2_linearSlop;
                }
                GetAnchorA(out) {
                    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
                }
                GetAnchorB(out) {
                    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
                }
                GetReactionForce(inv_dt, out) {
                    return b2Math_18.b2Vec2.MulSV(inv_dt * this.m_impulse, this.m_JvAC, out);
                }
                GetReactionTorque(inv_dt) {
                    return inv_dt * this.m_impulse * this.m_JwA;
                }
                GetJoint1() { return this.m_joint1; }
                GetJoint2() { return this.m_joint2; }
                GetRatio() {
                    return this.m_ratio;
                }
                SetRatio(ratio) {
                    this.m_ratio = ratio;
                }
                Dump(log) {
                    const indexA = this.m_bodyA.m_islandIndex;
                    const indexB = this.m_bodyB.m_islandIndex;
                    const index1 = this.m_joint1.m_index;
                    const index2 = this.m_joint2.m_index;
                    log("  const jd: b2GearJointDef = new b2GearJointDef();\n");
                    log("  jd.bodyA = bodies[%d];\n", indexA);
                    log("  jd.bodyB = bodies[%d];\n", indexB);
                    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
                    log("  jd.joint1 = joints[%d];\n", index1);
                    log("  jd.joint2 = joints[%d];\n", index2);
                    log("  jd.ratio = %.15f;\n", this.m_ratio);
                    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
                }
            };
            b2GearJoint.InitVelocityConstraints_s_u = new b2Math_18.b2Vec2();
            b2GearJoint.InitVelocityConstraints_s_rA = new b2Math_18.b2Vec2();
            b2GearJoint.InitVelocityConstraints_s_rB = new b2Math_18.b2Vec2();
            b2GearJoint.InitVelocityConstraints_s_rC = new b2Math_18.b2Vec2();
            b2GearJoint.InitVelocityConstraints_s_rD = new b2Math_18.b2Vec2();
            b2GearJoint.SolvePositionConstraints_s_u = new b2Math_18.b2Vec2();
            b2GearJoint.SolvePositionConstraints_s_rA = new b2Math_18.b2Vec2();
            b2GearJoint.SolvePositionConstraints_s_rB = new b2Math_18.b2Vec2();
            b2GearJoint.SolvePositionConstraints_s_rC = new b2Math_18.b2Vec2();
            b2GearJoint.SolvePositionConstraints_s_rD = new b2Math_18.b2Vec2();
            exports_25("b2GearJoint", b2GearJoint);
        }
    };
});
System.register("Dynamics/Joints/b2MotorJoint", ["Common/b2Settings", "Common/b2Math", "Dynamics/Joints/b2Joint"], function (exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
    var b2Settings_20, b2Math_19, b2Joint_7, b2MotorJointDef, b2MotorJoint;
    return {
        setters: [
            function (b2Settings_20_1) {
                b2Settings_20 = b2Settings_20_1;
            },
            function (b2Math_19_1) {
                b2Math_19 = b2Math_19_1;
            },
            function (b2Joint_7_1) {
                b2Joint_7 = b2Joint_7_1;
            }
        ],
        execute: function () {
            b2MotorJointDef = class b2MotorJointDef extends b2Joint_7.b2JointDef {
                constructor() {
                    super(b2Joint_7.b2JointType.e_motorJoint);
                    this.linearOffset = new b2Math_19.b2Vec2(0, 0);
                    this.angularOffset = 0;
                    this.maxForce = 1;
                    this.maxTorque = 1;
                    this.correctionFactor = 0.3;
                }
                Initialize(bA, bB) {
                    this.bodyA = bA;
                    this.bodyB = bB;
                    this.bodyA.GetLocalPoint(this.bodyB.GetPosition(), this.linearOffset);
                    const angleA = this.bodyA.GetAngle();
                    const angleB = this.bodyB.GetAngle();
                    this.angularOffset = angleB - angleA;
                }
            };
            exports_26("b2MotorJointDef", b2MotorJointDef);
            b2MotorJoint = class b2MotorJoint extends b2Joint_7.b2Joint {
                constructor(def) {
                    super(def);
                    this.m_linearOffset = new b2Math_19.b2Vec2();
                    this.m_angularOffset = 0;
                    this.m_linearImpulse = new b2Math_19.b2Vec2();
                    this.m_angularImpulse = 0;
                    this.m_maxForce = 0;
                    this.m_maxTorque = 0;
                    this.m_correctionFactor = 0.3;
                    this.m_indexA = 0;
                    this.m_indexB = 0;
                    this.m_rA = new b2Math_19.b2Vec2();
                    this.m_rB = new b2Math_19.b2Vec2();
                    this.m_localCenterA = new b2Math_19.b2Vec2();
                    this.m_localCenterB = new b2Math_19.b2Vec2();
                    this.m_linearError = new b2Math_19.b2Vec2();
                    this.m_angularError = 0;
                    this.m_invMassA = 0;
                    this.m_invMassB = 0;
                    this.m_invIA = 0;
                    this.m_invIB = 0;
                    this.m_linearMass = new b2Math_19.b2Mat22();
                    this.m_angularMass = 0;
                    this.m_qA = new b2Math_19.b2Rot();
                    this.m_qB = new b2Math_19.b2Rot();
                    this.m_K = new b2Math_19.b2Mat22();
                    this.m_linearOffset.Copy(b2Settings_20.b2Maybe(def.linearOffset, b2Math_19.b2Vec2.ZERO));
                    this.m_linearImpulse.SetZero();
                    this.m_maxForce = b2Settings_20.b2Maybe(def.maxForce, 0);
                    this.m_maxTorque = b2Settings_20.b2Maybe(def.maxTorque, 0);
                    this.m_correctionFactor = b2Settings_20.b2Maybe(def.correctionFactor, 0.3);
                }
                GetAnchorA(out) {
                    const pos = this.m_bodyA.GetPosition();
                    out.x = pos.x;
                    out.y = pos.y;
                    return out;
                }
                GetAnchorB(out) {
                    const pos = this.m_bodyB.GetPosition();
                    out.x = pos.x;
                    out.y = pos.y;
                    return out;
                }
                GetReactionForce(inv_dt, out) {
                    return b2Math_19.b2Vec2.MulSV(inv_dt, this.m_linearImpulse, out);
                }
                GetReactionTorque(inv_dt) {
                    return inv_dt * this.m_angularImpulse;
                }
                SetLinearOffset(linearOffset) {
                    if (!b2Math_19.b2Vec2.IsEqualToV(linearOffset, this.m_linearOffset)) {
                        this.m_bodyA.SetAwake(true);
                        this.m_bodyB.SetAwake(true);
                        this.m_linearOffset.Copy(linearOffset);
                    }
                }
                GetLinearOffset() {
                    return this.m_linearOffset;
                }
                SetAngularOffset(angularOffset) {
                    if (angularOffset !== this.m_angularOffset) {
                        this.m_bodyA.SetAwake(true);
                        this.m_bodyB.SetAwake(true);
                        this.m_angularOffset = angularOffset;
                    }
                }
                GetAngularOffset() {
                    return this.m_angularOffset;
                }
                SetMaxForce(force) {
                    this.m_maxForce = force;
                }
                GetMaxForce() {
                    return this.m_maxForce;
                }
                SetMaxTorque(torque) {
                    this.m_maxTorque = torque;
                }
                GetMaxTorque() {
                    return this.m_maxTorque;
                }
                InitVelocityConstraints(data) {
                    this.m_indexA = this.m_bodyA.m_islandIndex;
                    this.m_indexB = this.m_bodyB.m_islandIndex;
                    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
                    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
                    this.m_invMassA = this.m_bodyA.m_invMass;
                    this.m_invMassB = this.m_bodyB.m_invMass;
                    this.m_invIA = this.m_bodyA.m_invI;
                    this.m_invIB = this.m_bodyB.m_invI;
                    const cA = data.positions[this.m_indexA].c;
                    const aA = data.positions[this.m_indexA].a;
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const cB = data.positions[this.m_indexB].c;
                    const aB = data.positions[this.m_indexB].a;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB);
                    const rA = b2Math_19.b2Rot.MulRV(qA, b2Math_19.b2Vec2.SubVV(this.m_linearOffset, this.m_localCenterA, b2Math_19.b2Vec2.s_t0), this.m_rA);
                    const rB = b2Math_19.b2Rot.MulRV(qB, b2Math_19.b2Vec2.NegV(this.m_localCenterB, b2Math_19.b2Vec2.s_t0), this.m_rB);
                    const mA = this.m_invMassA, mB = this.m_invMassB;
                    const iA = this.m_invIA, iB = this.m_invIB;
                    const K = this.m_K;
                    K.ex.x = mA + mB + iA * rA.y * rA.y + iB * rB.y * rB.y;
                    K.ex.y = -iA * rA.x * rA.y - iB * rB.x * rB.y;
                    K.ey.x = K.ex.y;
                    K.ey.y = mA + mB + iA * rA.x * rA.x + iB * rB.x * rB.x;
                    K.GetInverse(this.m_linearMass);
                    this.m_angularMass = iA + iB;
                    if (this.m_angularMass > 0) {
                        this.m_angularMass = 1 / this.m_angularMass;
                    }
                    b2Math_19.b2Vec2.SubVV(b2Math_19.b2Vec2.AddVV(cB, rB, b2Math_19.b2Vec2.s_t0), b2Math_19.b2Vec2.AddVV(cA, rA, b2Math_19.b2Vec2.s_t1), this.m_linearError);
                    this.m_angularError = aB - aA - this.m_angularOffset;
                    if (data.step.warmStarting) {
                        this.m_linearImpulse.SelfMul(data.step.dtRatio);
                        this.m_angularImpulse *= data.step.dtRatio;
                        const P = this.m_linearImpulse;
                        vA.SelfMulSub(mA, P);
                        wA -= iA * (b2Math_19.b2Vec2.CrossVV(rA, P) + this.m_angularImpulse);
                        vB.SelfMulAdd(mB, P);
                        wB += iB * (b2Math_19.b2Vec2.CrossVV(rB, P) + this.m_angularImpulse);
                    }
                    else {
                        this.m_linearImpulse.SetZero();
                        this.m_angularImpulse = 0;
                    }
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolveVelocityConstraints(data) {
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const mA = this.m_invMassA, mB = this.m_invMassB;
                    const iA = this.m_invIA, iB = this.m_invIB;
                    const h = data.step.dt;
                    const inv_h = data.step.inv_dt;
                    {
                        const Cdot = wB - wA + inv_h * this.m_correctionFactor * this.m_angularError;
                        let impulse = -this.m_angularMass * Cdot;
                        const oldImpulse = this.m_angularImpulse;
                        const maxImpulse = h * this.m_maxTorque;
                        this.m_angularImpulse = b2Math_19.b2Clamp(this.m_angularImpulse + impulse, -maxImpulse, maxImpulse);
                        impulse = this.m_angularImpulse - oldImpulse;
                        wA -= iA * impulse;
                        wB += iB * impulse;
                    }
                    {
                        const rA = this.m_rA;
                        const rB = this.m_rB;
                        const Cdot_v2 = b2Math_19.b2Vec2.AddVV(b2Math_19.b2Vec2.SubVV(b2Math_19.b2Vec2.AddVV(vB, b2Math_19.b2Vec2.CrossSV(wB, rB, b2Math_19.b2Vec2.s_t0), b2Math_19.b2Vec2.s_t0), b2Math_19.b2Vec2.AddVV(vA, b2Math_19.b2Vec2.CrossSV(wA, rA, b2Math_19.b2Vec2.s_t1), b2Math_19.b2Vec2.s_t1), b2Math_19.b2Vec2.s_t2), b2Math_19.b2Vec2.MulSV(inv_h * this.m_correctionFactor, this.m_linearError, b2Math_19.b2Vec2.s_t3), b2MotorJoint.SolveVelocityConstraints_s_Cdot_v2);
                        const impulse_v2 = b2Math_19.b2Mat22.MulMV(this.m_linearMass, Cdot_v2, b2MotorJoint.SolveVelocityConstraints_s_impulse_v2).SelfNeg();
                        const oldImpulse_v2 = b2MotorJoint.SolveVelocityConstraints_s_oldImpulse_v2.Copy(this.m_linearImpulse);
                        this.m_linearImpulse.SelfAdd(impulse_v2);
                        const maxImpulse = h * this.m_maxForce;
                        if (this.m_linearImpulse.LengthSquared() > maxImpulse * maxImpulse) {
                            this.m_linearImpulse.Normalize();
                            this.m_linearImpulse.SelfMul(maxImpulse);
                        }
                        b2Math_19.b2Vec2.SubVV(this.m_linearImpulse, oldImpulse_v2, impulse_v2);
                        vA.SelfMulSub(mA, impulse_v2);
                        wA -= iA * b2Math_19.b2Vec2.CrossVV(rA, impulse_v2);
                        vB.SelfMulAdd(mB, impulse_v2);
                        wB += iB * b2Math_19.b2Vec2.CrossVV(rB, impulse_v2);
                    }
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolvePositionConstraints(data) {
                    return true;
                }
                Dump(log) {
                    const indexA = this.m_bodyA.m_islandIndex;
                    const indexB = this.m_bodyB.m_islandIndex;
                    log("  const jd: b2MotorJointDef = new b2MotorJointDef();\n");
                    log("  jd.bodyA = bodies[%d];\n", indexA);
                    log("  jd.bodyB = bodies[%d];\n", indexB);
                    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
                    log("  jd.linearOffset.Set(%.15f, %.15f);\n", this.m_linearOffset.x, this.m_linearOffset.y);
                    log("  jd.angularOffset = %.15f;\n", this.m_angularOffset);
                    log("  jd.maxForce = %.15f;\n", this.m_maxForce);
                    log("  jd.maxTorque = %.15f;\n", this.m_maxTorque);
                    log("  jd.correctionFactor = %.15f;\n", this.m_correctionFactor);
                    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
                }
            };
            b2MotorJoint.SolveVelocityConstraints_s_Cdot_v2 = new b2Math_19.b2Vec2();
            b2MotorJoint.SolveVelocityConstraints_s_impulse_v2 = new b2Math_19.b2Vec2();
            b2MotorJoint.SolveVelocityConstraints_s_oldImpulse_v2 = new b2Math_19.b2Vec2();
            exports_26("b2MotorJoint", b2MotorJoint);
        }
    };
});
System.register("Dynamics/Joints/b2MouseJoint", ["Common/b2Settings", "Common/b2Math", "Dynamics/Joints/b2Joint"], function (exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    var b2Settings_21, b2Math_20, b2Joint_8, b2MouseJointDef, b2MouseJoint;
    return {
        setters: [
            function (b2Settings_21_1) {
                b2Settings_21 = b2Settings_21_1;
            },
            function (b2Math_20_1) {
                b2Math_20 = b2Math_20_1;
            },
            function (b2Joint_8_1) {
                b2Joint_8 = b2Joint_8_1;
            }
        ],
        execute: function () {
            b2MouseJointDef = class b2MouseJointDef extends b2Joint_8.b2JointDef {
                constructor() {
                    super(b2Joint_8.b2JointType.e_mouseJoint);
                    this.target = new b2Math_20.b2Vec2();
                    this.maxForce = 0;
                    this.frequencyHz = 5;
                    this.dampingRatio = 0.7;
                }
            };
            exports_27("b2MouseJointDef", b2MouseJointDef);
            b2MouseJoint = class b2MouseJoint extends b2Joint_8.b2Joint {
                constructor(def) {
                    super(def);
                    this.m_localAnchorB = new b2Math_20.b2Vec2();
                    this.m_targetA = new b2Math_20.b2Vec2();
                    this.m_frequencyHz = 0;
                    this.m_dampingRatio = 0;
                    this.m_beta = 0;
                    this.m_impulse = new b2Math_20.b2Vec2();
                    this.m_maxForce = 0;
                    this.m_gamma = 0;
                    this.m_indexA = 0;
                    this.m_indexB = 0;
                    this.m_rB = new b2Math_20.b2Vec2();
                    this.m_localCenterB = new b2Math_20.b2Vec2();
                    this.m_invMassB = 0;
                    this.m_invIB = 0;
                    this.m_mass = new b2Math_20.b2Mat22();
                    this.m_C = new b2Math_20.b2Vec2();
                    this.m_qB = new b2Math_20.b2Rot();
                    this.m_lalcB = new b2Math_20.b2Vec2();
                    this.m_K = new b2Math_20.b2Mat22();
                    this.m_targetA.Copy(b2Settings_21.b2Maybe(def.target, b2Math_20.b2Vec2.ZERO));
                    b2Math_20.b2Transform.MulTXV(this.m_bodyB.GetTransform(), this.m_targetA, this.m_localAnchorB);
                    this.m_maxForce = b2Settings_21.b2Maybe(def.maxForce, 0);
                    this.m_impulse.SetZero();
                    this.m_frequencyHz = b2Settings_21.b2Maybe(def.frequencyHz, 0);
                    this.m_dampingRatio = b2Settings_21.b2Maybe(def.dampingRatio, 0);
                    this.m_beta = 0;
                    this.m_gamma = 0;
                }
                SetTarget(target) {
                    if (!this.m_bodyB.IsAwake()) {
                        this.m_bodyB.SetAwake(true);
                    }
                    this.m_targetA.Copy(target);
                }
                GetTarget() {
                    return this.m_targetA;
                }
                SetMaxForce(maxForce) {
                    this.m_maxForce = maxForce;
                }
                GetMaxForce() {
                    return this.m_maxForce;
                }
                SetFrequency(hz) {
                    this.m_frequencyHz = hz;
                }
                GetFrequency() {
                    return this.m_frequencyHz;
                }
                SetDampingRatio(ratio) {
                    this.m_dampingRatio = ratio;
                }
                GetDampingRatio() {
                    return this.m_dampingRatio;
                }
                InitVelocityConstraints(data) {
                    this.m_indexB = this.m_bodyB.m_islandIndex;
                    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
                    this.m_invMassB = this.m_bodyB.m_invMass;
                    this.m_invIB = this.m_bodyB.m_invI;
                    const cB = data.positions[this.m_indexB].c;
                    const aB = data.positions[this.m_indexB].a;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const qB = this.m_qB.SetAngle(aB);
                    const mass = this.m_bodyB.GetMass();
                    const omega = 2 * b2Settings_21.b2_pi * this.m_frequencyHz;
                    const d = 2 * mass * this.m_dampingRatio * omega;
                    const k = mass * (omega * omega);
                    const h = data.step.dt;
                    this.m_gamma = h * (d + h * k);
                    if (this.m_gamma !== 0) {
                        this.m_gamma = 1 / this.m_gamma;
                    }
                    this.m_beta = h * k * this.m_gamma;
                    b2Math_20.b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
                    b2Math_20.b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
                    const K = this.m_K;
                    K.ex.x = this.m_invMassB + this.m_invIB * this.m_rB.y * this.m_rB.y + this.m_gamma;
                    K.ex.y = -this.m_invIB * this.m_rB.x * this.m_rB.y;
                    K.ey.x = K.ex.y;
                    K.ey.y = this.m_invMassB + this.m_invIB * this.m_rB.x * this.m_rB.x + this.m_gamma;
                    K.GetInverse(this.m_mass);
                    this.m_C.x = cB.x + this.m_rB.x - this.m_targetA.x;
                    this.m_C.y = cB.y + this.m_rB.y - this.m_targetA.y;
                    this.m_C.SelfMul(this.m_beta);
                    wB *= 0.98;
                    if (data.step.warmStarting) {
                        this.m_impulse.SelfMul(data.step.dtRatio);
                        vB.x += this.m_invMassB * this.m_impulse.x;
                        vB.y += this.m_invMassB * this.m_impulse.y;
                        wB += this.m_invIB * b2Math_20.b2Vec2.CrossVV(this.m_rB, this.m_impulse);
                    }
                    else {
                        this.m_impulse.SetZero();
                    }
                    data.velocities[this.m_indexB].w = wB;
                }
                SolveVelocityConstraints(data) {
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const Cdot = b2Math_20.b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2MouseJoint.SolveVelocityConstraints_s_Cdot);
                    const impulse = b2Math_20.b2Mat22.MulMV(this.m_mass, b2Math_20.b2Vec2.AddVV(Cdot, b2Math_20.b2Vec2.AddVV(this.m_C, b2Math_20.b2Vec2.MulSV(this.m_gamma, this.m_impulse, b2Math_20.b2Vec2.s_t0), b2Math_20.b2Vec2.s_t0), b2Math_20.b2Vec2.s_t0).SelfNeg(), b2MouseJoint.SolveVelocityConstraints_s_impulse);
                    const oldImpulse = b2MouseJoint.SolveVelocityConstraints_s_oldImpulse.Copy(this.m_impulse);
                    this.m_impulse.SelfAdd(impulse);
                    const maxImpulse = data.step.dt * this.m_maxForce;
                    if (this.m_impulse.LengthSquared() > maxImpulse * maxImpulse) {
                        this.m_impulse.SelfMul(maxImpulse / this.m_impulse.Length());
                    }
                    b2Math_20.b2Vec2.SubVV(this.m_impulse, oldImpulse, impulse);
                    vB.SelfMulAdd(this.m_invMassB, impulse);
                    wB += this.m_invIB * b2Math_20.b2Vec2.CrossVV(this.m_rB, impulse);
                    data.velocities[this.m_indexB].w = wB;
                }
                SolvePositionConstraints(data) {
                    return true;
                }
                GetAnchorA(out) {
                    out.x = this.m_targetA.x;
                    out.y = this.m_targetA.y;
                    return out;
                }
                GetAnchorB(out) {
                    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
                }
                GetReactionForce(inv_dt, out) {
                    return b2Math_20.b2Vec2.MulSV(inv_dt, this.m_impulse, out);
                }
                GetReactionTorque(inv_dt) {
                    return 0;
                }
                Dump(log) {
                    log("Mouse joint dumping is not supported.\n");
                }
                ShiftOrigin(newOrigin) {
                    this.m_targetA.SelfSub(newOrigin);
                }
            };
            b2MouseJoint.SolveVelocityConstraints_s_Cdot = new b2Math_20.b2Vec2();
            b2MouseJoint.SolveVelocityConstraints_s_impulse = new b2Math_20.b2Vec2();
            b2MouseJoint.SolveVelocityConstraints_s_oldImpulse = new b2Math_20.b2Vec2();
            exports_27("b2MouseJoint", b2MouseJoint);
        }
    };
});
System.register("Dynamics/Joints/b2PulleyJoint", ["Common/b2Settings", "Common/b2Math", "Dynamics/Joints/b2Joint"], function (exports_28, context_28) {
    "use strict";
    var __moduleName = context_28 && context_28.id;
    var b2Settings_22, b2Math_21, b2Joint_9, b2_minPulleyLength, b2PulleyJointDef, b2PulleyJoint;
    return {
        setters: [
            function (b2Settings_22_1) {
                b2Settings_22 = b2Settings_22_1;
            },
            function (b2Math_21_1) {
                b2Math_21 = b2Math_21_1;
            },
            function (b2Joint_9_1) {
                b2Joint_9 = b2Joint_9_1;
            }
        ],
        execute: function () {
            exports_28("b2_minPulleyLength", b2_minPulleyLength = 2);
            b2PulleyJointDef = class b2PulleyJointDef extends b2Joint_9.b2JointDef {
                constructor() {
                    super(b2Joint_9.b2JointType.e_pulleyJoint);
                    this.groundAnchorA = new b2Math_21.b2Vec2(-1, 1);
                    this.groundAnchorB = new b2Math_21.b2Vec2(1, 1);
                    this.localAnchorA = new b2Math_21.b2Vec2(-1, 0);
                    this.localAnchorB = new b2Math_21.b2Vec2(1, 0);
                    this.lengthA = 0;
                    this.lengthB = 0;
                    this.ratio = 1;
                    this.collideConnected = true;
                }
                Initialize(bA, bB, groundA, groundB, anchorA, anchorB, r) {
                    this.bodyA = bA;
                    this.bodyB = bB;
                    this.groundAnchorA.Copy(groundA);
                    this.groundAnchorB.Copy(groundB);
                    this.bodyA.GetLocalPoint(anchorA, this.localAnchorA);
                    this.bodyB.GetLocalPoint(anchorB, this.localAnchorB);
                    this.lengthA = b2Math_21.b2Vec2.DistanceVV(anchorA, groundA);
                    this.lengthB = b2Math_21.b2Vec2.DistanceVV(anchorB, groundB);
                    this.ratio = r;
                }
            };
            exports_28("b2PulleyJointDef", b2PulleyJointDef);
            b2PulleyJoint = class b2PulleyJoint extends b2Joint_9.b2Joint {
                constructor(def) {
                    super(def);
                    this.m_groundAnchorA = new b2Math_21.b2Vec2();
                    this.m_groundAnchorB = new b2Math_21.b2Vec2();
                    this.m_lengthA = 0;
                    this.m_lengthB = 0;
                    this.m_localAnchorA = new b2Math_21.b2Vec2();
                    this.m_localAnchorB = new b2Math_21.b2Vec2();
                    this.m_constant = 0;
                    this.m_ratio = 0;
                    this.m_impulse = 0;
                    this.m_indexA = 0;
                    this.m_indexB = 0;
                    this.m_uA = new b2Math_21.b2Vec2();
                    this.m_uB = new b2Math_21.b2Vec2();
                    this.m_rA = new b2Math_21.b2Vec2();
                    this.m_rB = new b2Math_21.b2Vec2();
                    this.m_localCenterA = new b2Math_21.b2Vec2();
                    this.m_localCenterB = new b2Math_21.b2Vec2();
                    this.m_invMassA = 0;
                    this.m_invMassB = 0;
                    this.m_invIA = 0;
                    this.m_invIB = 0;
                    this.m_mass = 0;
                    this.m_qA = new b2Math_21.b2Rot();
                    this.m_qB = new b2Math_21.b2Rot();
                    this.m_lalcA = new b2Math_21.b2Vec2();
                    this.m_lalcB = new b2Math_21.b2Vec2();
                    this.m_groundAnchorA.Copy(b2Settings_22.b2Maybe(def.groundAnchorA, new b2Math_21.b2Vec2(-1, 1)));
                    this.m_groundAnchorB.Copy(b2Settings_22.b2Maybe(def.groundAnchorB, new b2Math_21.b2Vec2(1, 0)));
                    this.m_localAnchorA.Copy(b2Settings_22.b2Maybe(def.localAnchorA, new b2Math_21.b2Vec2(-1, 0)));
                    this.m_localAnchorB.Copy(b2Settings_22.b2Maybe(def.localAnchorB, new b2Math_21.b2Vec2(1, 0)));
                    this.m_lengthA = b2Settings_22.b2Maybe(def.lengthA, 0);
                    this.m_lengthB = b2Settings_22.b2Maybe(def.lengthB, 0);
                    this.m_ratio = b2Settings_22.b2Maybe(def.ratio, 1);
                    this.m_constant = b2Settings_22.b2Maybe(def.lengthA, 0) + this.m_ratio * b2Settings_22.b2Maybe(def.lengthB, 0);
                    this.m_impulse = 0;
                }
                InitVelocityConstraints(data) {
                    this.m_indexA = this.m_bodyA.m_islandIndex;
                    this.m_indexB = this.m_bodyB.m_islandIndex;
                    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
                    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
                    this.m_invMassA = this.m_bodyA.m_invMass;
                    this.m_invMassB = this.m_bodyB.m_invMass;
                    this.m_invIA = this.m_bodyA.m_invI;
                    this.m_invIB = this.m_bodyB.m_invI;
                    const cA = data.positions[this.m_indexA].c;
                    const aA = data.positions[this.m_indexA].a;
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const cB = data.positions[this.m_indexB].c;
                    const aB = data.positions[this.m_indexB].a;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB);
                    b2Math_21.b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
                    b2Math_21.b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
                    b2Math_21.b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
                    b2Math_21.b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
                    this.m_uA.Copy(cA).SelfAdd(this.m_rA).SelfSub(this.m_groundAnchorA);
                    this.m_uB.Copy(cB).SelfAdd(this.m_rB).SelfSub(this.m_groundAnchorB);
                    const lengthA = this.m_uA.Length();
                    const lengthB = this.m_uB.Length();
                    if (lengthA > 10 * b2Settings_22.b2_linearSlop) {
                        this.m_uA.SelfMul(1 / lengthA);
                    }
                    else {
                        this.m_uA.SetZero();
                    }
                    if (lengthB > 10 * b2Settings_22.b2_linearSlop) {
                        this.m_uB.SelfMul(1 / lengthB);
                    }
                    else {
                        this.m_uB.SetZero();
                    }
                    const ruA = b2Math_21.b2Vec2.CrossVV(this.m_rA, this.m_uA);
                    const ruB = b2Math_21.b2Vec2.CrossVV(this.m_rB, this.m_uB);
                    const mA = this.m_invMassA + this.m_invIA * ruA * ruA;
                    const mB = this.m_invMassB + this.m_invIB * ruB * ruB;
                    this.m_mass = mA + this.m_ratio * this.m_ratio * mB;
                    if (this.m_mass > 0) {
                        this.m_mass = 1 / this.m_mass;
                    }
                    if (data.step.warmStarting) {
                        this.m_impulse *= data.step.dtRatio;
                        const PA = b2Math_21.b2Vec2.MulSV(-(this.m_impulse), this.m_uA, b2PulleyJoint.InitVelocityConstraints_s_PA);
                        const PB = b2Math_21.b2Vec2.MulSV((-this.m_ratio * this.m_impulse), this.m_uB, b2PulleyJoint.InitVelocityConstraints_s_PB);
                        vA.SelfMulAdd(this.m_invMassA, PA);
                        wA += this.m_invIA * b2Math_21.b2Vec2.CrossVV(this.m_rA, PA);
                        vB.SelfMulAdd(this.m_invMassB, PB);
                        wB += this.m_invIB * b2Math_21.b2Vec2.CrossVV(this.m_rB, PB);
                    }
                    else {
                        this.m_impulse = 0;
                    }
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolveVelocityConstraints(data) {
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const vpA = b2Math_21.b2Vec2.AddVCrossSV(vA, wA, this.m_rA, b2PulleyJoint.SolveVelocityConstraints_s_vpA);
                    const vpB = b2Math_21.b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2PulleyJoint.SolveVelocityConstraints_s_vpB);
                    const Cdot = -b2Math_21.b2Vec2.DotVV(this.m_uA, vpA) - this.m_ratio * b2Math_21.b2Vec2.DotVV(this.m_uB, vpB);
                    const impulse = -this.m_mass * Cdot;
                    this.m_impulse += impulse;
                    const PA = b2Math_21.b2Vec2.MulSV(-impulse, this.m_uA, b2PulleyJoint.SolveVelocityConstraints_s_PA);
                    const PB = b2Math_21.b2Vec2.MulSV(-this.m_ratio * impulse, this.m_uB, b2PulleyJoint.SolveVelocityConstraints_s_PB);
                    vA.SelfMulAdd(this.m_invMassA, PA);
                    wA += this.m_invIA * b2Math_21.b2Vec2.CrossVV(this.m_rA, PA);
                    vB.SelfMulAdd(this.m_invMassB, PB);
                    wB += this.m_invIB * b2Math_21.b2Vec2.CrossVV(this.m_rB, PB);
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolvePositionConstraints(data) {
                    const cA = data.positions[this.m_indexA].c;
                    let aA = data.positions[this.m_indexA].a;
                    const cB = data.positions[this.m_indexB].c;
                    let aB = data.positions[this.m_indexB].a;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB);
                    b2Math_21.b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
                    const rA = b2Math_21.b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
                    b2Math_21.b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
                    const rB = b2Math_21.b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
                    const uA = this.m_uA.Copy(cA).SelfAdd(rA).SelfSub(this.m_groundAnchorA);
                    const uB = this.m_uB.Copy(cB).SelfAdd(rB).SelfSub(this.m_groundAnchorB);
                    const lengthA = uA.Length();
                    const lengthB = uB.Length();
                    if (lengthA > 10 * b2Settings_22.b2_linearSlop) {
                        uA.SelfMul(1 / lengthA);
                    }
                    else {
                        uA.SetZero();
                    }
                    if (lengthB > 10 * b2Settings_22.b2_linearSlop) {
                        uB.SelfMul(1 / lengthB);
                    }
                    else {
                        uB.SetZero();
                    }
                    const ruA = b2Math_21.b2Vec2.CrossVV(rA, uA);
                    const ruB = b2Math_21.b2Vec2.CrossVV(rB, uB);
                    const mA = this.m_invMassA + this.m_invIA * ruA * ruA;
                    const mB = this.m_invMassB + this.m_invIB * ruB * ruB;
                    let mass = mA + this.m_ratio * this.m_ratio * mB;
                    if (mass > 0) {
                        mass = 1 / mass;
                    }
                    const C = this.m_constant - lengthA - this.m_ratio * lengthB;
                    const linearError = b2Math_21.b2Abs(C);
                    const impulse = -mass * C;
                    const PA = b2Math_21.b2Vec2.MulSV(-impulse, uA, b2PulleyJoint.SolvePositionConstraints_s_PA);
                    const PB = b2Math_21.b2Vec2.MulSV(-this.m_ratio * impulse, uB, b2PulleyJoint.SolvePositionConstraints_s_PB);
                    cA.SelfMulAdd(this.m_invMassA, PA);
                    aA += this.m_invIA * b2Math_21.b2Vec2.CrossVV(rA, PA);
                    cB.SelfMulAdd(this.m_invMassB, PB);
                    aB += this.m_invIB * b2Math_21.b2Vec2.CrossVV(rB, PB);
                    data.positions[this.m_indexA].a = aA;
                    data.positions[this.m_indexB].a = aB;
                    return linearError < b2Settings_22.b2_linearSlop;
                }
                GetAnchorA(out) {
                    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
                }
                GetAnchorB(out) {
                    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
                }
                GetReactionForce(inv_dt, out) {
                    out.x = inv_dt * this.m_impulse * this.m_uB.x;
                    out.y = inv_dt * this.m_impulse * this.m_uB.y;
                    return out;
                }
                GetReactionTorque(inv_dt) {
                    return 0;
                }
                GetGroundAnchorA() {
                    return this.m_groundAnchorA;
                }
                GetGroundAnchorB() {
                    return this.m_groundAnchorB;
                }
                GetLengthA() {
                    return this.m_lengthA;
                }
                GetLengthB() {
                    return this.m_lengthB;
                }
                GetRatio() {
                    return this.m_ratio;
                }
                GetCurrentLengthA() {
                    const p = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, b2PulleyJoint.GetCurrentLengthA_s_p);
                    const s = this.m_groundAnchorA;
                    return b2Math_21.b2Vec2.DistanceVV(p, s);
                }
                GetCurrentLengthB() {
                    const p = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, b2PulleyJoint.GetCurrentLengthB_s_p);
                    const s = this.m_groundAnchorB;
                    return b2Math_21.b2Vec2.DistanceVV(p, s);
                }
                Dump(log) {
                    const indexA = this.m_bodyA.m_islandIndex;
                    const indexB = this.m_bodyB.m_islandIndex;
                    log("  const jd: b2PulleyJointDef = new b2PulleyJointDef();\n");
                    log("  jd.bodyA = bodies[%d];\n", indexA);
                    log("  jd.bodyB = bodies[%d];\n", indexB);
                    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
                    log("  jd.groundAnchorA.Set(%.15f, %.15f);\n", this.m_groundAnchorA.x, this.m_groundAnchorA.y);
                    log("  jd.groundAnchorB.Set(%.15f, %.15f);\n", this.m_groundAnchorB.x, this.m_groundAnchorB.y);
                    log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
                    log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
                    log("  jd.lengthA = %.15f;\n", this.m_lengthA);
                    log("  jd.lengthB = %.15f;\n", this.m_lengthB);
                    log("  jd.ratio = %.15f;\n", this.m_ratio);
                    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
                }
                ShiftOrigin(newOrigin) {
                    this.m_groundAnchorA.SelfSub(newOrigin);
                    this.m_groundAnchorB.SelfSub(newOrigin);
                }
            };
            b2PulleyJoint.InitVelocityConstraints_s_PA = new b2Math_21.b2Vec2();
            b2PulleyJoint.InitVelocityConstraints_s_PB = new b2Math_21.b2Vec2();
            b2PulleyJoint.SolveVelocityConstraints_s_vpA = new b2Math_21.b2Vec2();
            b2PulleyJoint.SolveVelocityConstraints_s_vpB = new b2Math_21.b2Vec2();
            b2PulleyJoint.SolveVelocityConstraints_s_PA = new b2Math_21.b2Vec2();
            b2PulleyJoint.SolveVelocityConstraints_s_PB = new b2Math_21.b2Vec2();
            b2PulleyJoint.SolvePositionConstraints_s_PA = new b2Math_21.b2Vec2();
            b2PulleyJoint.SolvePositionConstraints_s_PB = new b2Math_21.b2Vec2();
            b2PulleyJoint.GetCurrentLengthA_s_p = new b2Math_21.b2Vec2();
            b2PulleyJoint.GetCurrentLengthB_s_p = new b2Math_21.b2Vec2();
            exports_28("b2PulleyJoint", b2PulleyJoint);
        }
    };
});
System.register("Dynamics/Joints/b2RopeJoint", ["Common/b2Settings", "Common/b2Math", "Dynamics/Joints/b2Joint"], function (exports_29, context_29) {
    "use strict";
    var __moduleName = context_29 && context_29.id;
    var b2Settings_23, b2Math_22, b2Joint_10, b2RopeJointDef, b2RopeJoint;
    return {
        setters: [
            function (b2Settings_23_1) {
                b2Settings_23 = b2Settings_23_1;
            },
            function (b2Math_22_1) {
                b2Math_22 = b2Math_22_1;
            },
            function (b2Joint_10_1) {
                b2Joint_10 = b2Joint_10_1;
            }
        ],
        execute: function () {
            b2RopeJointDef = class b2RopeJointDef extends b2Joint_10.b2JointDef {
                constructor() {
                    super(b2Joint_10.b2JointType.e_ropeJoint);
                    this.localAnchorA = new b2Math_22.b2Vec2(-1, 0);
                    this.localAnchorB = new b2Math_22.b2Vec2(1, 0);
                    this.maxLength = 0;
                }
            };
            exports_29("b2RopeJointDef", b2RopeJointDef);
            b2RopeJoint = class b2RopeJoint extends b2Joint_10.b2Joint {
                constructor(def) {
                    super(def);
                    this.m_localAnchorA = new b2Math_22.b2Vec2();
                    this.m_localAnchorB = new b2Math_22.b2Vec2();
                    this.m_maxLength = 0;
                    this.m_length = 0;
                    this.m_impulse = 0;
                    this.m_indexA = 0;
                    this.m_indexB = 0;
                    this.m_u = new b2Math_22.b2Vec2();
                    this.m_rA = new b2Math_22.b2Vec2();
                    this.m_rB = new b2Math_22.b2Vec2();
                    this.m_localCenterA = new b2Math_22.b2Vec2();
                    this.m_localCenterB = new b2Math_22.b2Vec2();
                    this.m_invMassA = 0;
                    this.m_invMassB = 0;
                    this.m_invIA = 0;
                    this.m_invIB = 0;
                    this.m_mass = 0;
                    this.m_state = b2Joint_10.b2LimitState.e_inactiveLimit;
                    this.m_qA = new b2Math_22.b2Rot();
                    this.m_qB = new b2Math_22.b2Rot();
                    this.m_lalcA = new b2Math_22.b2Vec2();
                    this.m_lalcB = new b2Math_22.b2Vec2();
                    this.m_localAnchorA.Copy(b2Settings_23.b2Maybe(def.localAnchorA, new b2Math_22.b2Vec2(-1, 0)));
                    this.m_localAnchorB.Copy(b2Settings_23.b2Maybe(def.localAnchorB, new b2Math_22.b2Vec2(1, 0)));
                    this.m_maxLength = b2Settings_23.b2Maybe(def.maxLength, 0);
                }
                InitVelocityConstraints(data) {
                    this.m_indexA = this.m_bodyA.m_islandIndex;
                    this.m_indexB = this.m_bodyB.m_islandIndex;
                    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
                    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
                    this.m_invMassA = this.m_bodyA.m_invMass;
                    this.m_invMassB = this.m_bodyB.m_invMass;
                    this.m_invIA = this.m_bodyA.m_invI;
                    this.m_invIB = this.m_bodyB.m_invI;
                    const cA = data.positions[this.m_indexA].c;
                    const aA = data.positions[this.m_indexA].a;
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const cB = data.positions[this.m_indexB].c;
                    const aB = data.positions[this.m_indexB].a;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB);
                    b2Math_22.b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
                    b2Math_22.b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
                    b2Math_22.b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
                    b2Math_22.b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
                    this.m_u.Copy(cB).SelfAdd(this.m_rB).SelfSub(cA).SelfSub(this.m_rA);
                    this.m_length = this.m_u.Length();
                    const C = this.m_length - this.m_maxLength;
                    if (C > 0) {
                        this.m_state = b2Joint_10.b2LimitState.e_atUpperLimit;
                    }
                    else {
                        this.m_state = b2Joint_10.b2LimitState.e_inactiveLimit;
                    }
                    if (this.m_length > b2Settings_23.b2_linearSlop) {
                        this.m_u.SelfMul(1 / this.m_length);
                    }
                    else {
                        this.m_u.SetZero();
                        this.m_mass = 0;
                        this.m_impulse = 0;
                        return;
                    }
                    const crA = b2Math_22.b2Vec2.CrossVV(this.m_rA, this.m_u);
                    const crB = b2Math_22.b2Vec2.CrossVV(this.m_rB, this.m_u);
                    const invMass = this.m_invMassA + this.m_invIA * crA * crA + this.m_invMassB + this.m_invIB * crB * crB;
                    this.m_mass = invMass !== 0 ? 1 / invMass : 0;
                    if (data.step.warmStarting) {
                        this.m_impulse *= data.step.dtRatio;
                        const P = b2Math_22.b2Vec2.MulSV(this.m_impulse, this.m_u, b2RopeJoint.InitVelocityConstraints_s_P);
                        vA.SelfMulSub(this.m_invMassA, P);
                        wA -= this.m_invIA * b2Math_22.b2Vec2.CrossVV(this.m_rA, P);
                        vB.SelfMulAdd(this.m_invMassB, P);
                        wB += this.m_invIB * b2Math_22.b2Vec2.CrossVV(this.m_rB, P);
                    }
                    else {
                        this.m_impulse = 0;
                    }
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolveVelocityConstraints(data) {
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const vpA = b2Math_22.b2Vec2.AddVCrossSV(vA, wA, this.m_rA, b2RopeJoint.SolveVelocityConstraints_s_vpA);
                    const vpB = b2Math_22.b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2RopeJoint.SolveVelocityConstraints_s_vpB);
                    const C = this.m_length - this.m_maxLength;
                    let Cdot = b2Math_22.b2Vec2.DotVV(this.m_u, b2Math_22.b2Vec2.SubVV(vpB, vpA, b2Math_22.b2Vec2.s_t0));
                    if (C < 0) {
                        Cdot += data.step.inv_dt * C;
                    }
                    let impulse = -this.m_mass * Cdot;
                    const oldImpulse = this.m_impulse;
                    this.m_impulse = b2Math_22.b2Min(0, this.m_impulse + impulse);
                    impulse = this.m_impulse - oldImpulse;
                    const P = b2Math_22.b2Vec2.MulSV(impulse, this.m_u, b2RopeJoint.SolveVelocityConstraints_s_P);
                    vA.SelfMulSub(this.m_invMassA, P);
                    wA -= this.m_invIA * b2Math_22.b2Vec2.CrossVV(this.m_rA, P);
                    vB.SelfMulAdd(this.m_invMassB, P);
                    wB += this.m_invIB * b2Math_22.b2Vec2.CrossVV(this.m_rB, P);
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolvePositionConstraints(data) {
                    const cA = data.positions[this.m_indexA].c;
                    let aA = data.positions[this.m_indexA].a;
                    const cB = data.positions[this.m_indexB].c;
                    let aB = data.positions[this.m_indexB].a;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB);
                    b2Math_22.b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
                    const rA = b2Math_22.b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
                    b2Math_22.b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
                    const rB = b2Math_22.b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
                    const u = this.m_u.Copy(cB).SelfAdd(rB).SelfSub(cA).SelfSub(rA);
                    const length = u.Normalize();
                    let C = length - this.m_maxLength;
                    C = b2Math_22.b2Clamp(C, 0, b2Settings_23.b2_maxLinearCorrection);
                    const impulse = -this.m_mass * C;
                    const P = b2Math_22.b2Vec2.MulSV(impulse, u, b2RopeJoint.SolvePositionConstraints_s_P);
                    cA.SelfMulSub(this.m_invMassA, P);
                    aA -= this.m_invIA * b2Math_22.b2Vec2.CrossVV(rA, P);
                    cB.SelfMulAdd(this.m_invMassB, P);
                    aB += this.m_invIB * b2Math_22.b2Vec2.CrossVV(rB, P);
                    data.positions[this.m_indexA].a = aA;
                    data.positions[this.m_indexB].a = aB;
                    return length - this.m_maxLength < b2Settings_23.b2_linearSlop;
                }
                GetAnchorA(out) {
                    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
                }
                GetAnchorB(out) {
                    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
                }
                GetReactionForce(inv_dt, out) {
                    return b2Math_22.b2Vec2.MulSV((inv_dt * this.m_impulse), this.m_u, out);
                }
                GetReactionTorque(inv_dt) {
                    return 0;
                }
                GetLocalAnchorA() { return this.m_localAnchorA; }
                GetLocalAnchorB() { return this.m_localAnchorB; }
                SetMaxLength(length) { this.m_maxLength = length; }
                GetMaxLength() {
                    return this.m_maxLength;
                }
                GetLimitState() {
                    return this.m_state;
                }
                Dump(log) {
                    const indexA = this.m_bodyA.m_islandIndex;
                    const indexB = this.m_bodyB.m_islandIndex;
                    log("  const jd: b2RopeJointDef = new b2RopeJointDef();\n");
                    log("  jd.bodyA = bodies[%d];\n", indexA);
                    log("  jd.bodyB = bodies[%d];\n", indexB);
                    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
                    log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
                    log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
                    log("  jd.maxLength = %.15f;\n", this.m_maxLength);
                    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
                }
            };
            b2RopeJoint.InitVelocityConstraints_s_P = new b2Math_22.b2Vec2();
            b2RopeJoint.SolveVelocityConstraints_s_vpA = new b2Math_22.b2Vec2();
            b2RopeJoint.SolveVelocityConstraints_s_vpB = new b2Math_22.b2Vec2();
            b2RopeJoint.SolveVelocityConstraints_s_P = new b2Math_22.b2Vec2();
            b2RopeJoint.SolvePositionConstraints_s_P = new b2Math_22.b2Vec2();
            exports_29("b2RopeJoint", b2RopeJoint);
        }
    };
});
System.register("Dynamics/Joints/b2WeldJoint", ["Common/b2Settings", "Common/b2Math", "Dynamics/Joints/b2Joint"], function (exports_30, context_30) {
    "use strict";
    var __moduleName = context_30 && context_30.id;
    var b2Settings_24, b2Math_23, b2Joint_11, b2WeldJointDef, b2WeldJoint;
    return {
        setters: [
            function (b2Settings_24_1) {
                b2Settings_24 = b2Settings_24_1;
            },
            function (b2Math_23_1) {
                b2Math_23 = b2Math_23_1;
            },
            function (b2Joint_11_1) {
                b2Joint_11 = b2Joint_11_1;
            }
        ],
        execute: function () {
            b2WeldJointDef = class b2WeldJointDef extends b2Joint_11.b2JointDef {
                constructor() {
                    super(b2Joint_11.b2JointType.e_weldJoint);
                    this.localAnchorA = new b2Math_23.b2Vec2();
                    this.localAnchorB = new b2Math_23.b2Vec2();
                    this.referenceAngle = 0;
                    this.frequencyHz = 0;
                    this.dampingRatio = 0;
                }
                Initialize(bA, bB, anchor) {
                    this.bodyA = bA;
                    this.bodyB = bB;
                    this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
                    this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
                    this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
                }
            };
            exports_30("b2WeldJointDef", b2WeldJointDef);
            b2WeldJoint = class b2WeldJoint extends b2Joint_11.b2Joint {
                constructor(def) {
                    super(def);
                    this.m_frequencyHz = 0;
                    this.m_dampingRatio = 0;
                    this.m_bias = 0;
                    this.m_localAnchorA = new b2Math_23.b2Vec2();
                    this.m_localAnchorB = new b2Math_23.b2Vec2();
                    this.m_referenceAngle = 0;
                    this.m_gamma = 0;
                    this.m_impulse = new b2Math_23.b2Vec3(0, 0, 0);
                    this.m_indexA = 0;
                    this.m_indexB = 0;
                    this.m_rA = new b2Math_23.b2Vec2();
                    this.m_rB = new b2Math_23.b2Vec2();
                    this.m_localCenterA = new b2Math_23.b2Vec2();
                    this.m_localCenterB = new b2Math_23.b2Vec2();
                    this.m_invMassA = 0;
                    this.m_invMassB = 0;
                    this.m_invIA = 0;
                    this.m_invIB = 0;
                    this.m_mass = new b2Math_23.b2Mat33();
                    this.m_qA = new b2Math_23.b2Rot();
                    this.m_qB = new b2Math_23.b2Rot();
                    this.m_lalcA = new b2Math_23.b2Vec2();
                    this.m_lalcB = new b2Math_23.b2Vec2();
                    this.m_K = new b2Math_23.b2Mat33();
                    this.m_frequencyHz = b2Settings_24.b2Maybe(def.frequencyHz, 0);
                    this.m_dampingRatio = b2Settings_24.b2Maybe(def.dampingRatio, 0);
                    this.m_localAnchorA.Copy(b2Settings_24.b2Maybe(def.localAnchorA, b2Math_23.b2Vec2.ZERO));
                    this.m_localAnchorB.Copy(b2Settings_24.b2Maybe(def.localAnchorB, b2Math_23.b2Vec2.ZERO));
                    this.m_referenceAngle = b2Settings_24.b2Maybe(def.referenceAngle, 0);
                    this.m_impulse.SetZero();
                }
                InitVelocityConstraints(data) {
                    this.m_indexA = this.m_bodyA.m_islandIndex;
                    this.m_indexB = this.m_bodyB.m_islandIndex;
                    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
                    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
                    this.m_invMassA = this.m_bodyA.m_invMass;
                    this.m_invMassB = this.m_bodyB.m_invMass;
                    this.m_invIA = this.m_bodyA.m_invI;
                    this.m_invIB = this.m_bodyB.m_invI;
                    const aA = data.positions[this.m_indexA].a;
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const aB = data.positions[this.m_indexB].a;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB);
                    b2Math_23.b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
                    b2Math_23.b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
                    b2Math_23.b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
                    b2Math_23.b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
                    const mA = this.m_invMassA, mB = this.m_invMassB;
                    const iA = this.m_invIA, iB = this.m_invIB;
                    const K = this.m_K;
                    K.ex.x = mA + mB + this.m_rA.y * this.m_rA.y * iA + this.m_rB.y * this.m_rB.y * iB;
                    K.ey.x = -this.m_rA.y * this.m_rA.x * iA - this.m_rB.y * this.m_rB.x * iB;
                    K.ez.x = -this.m_rA.y * iA - this.m_rB.y * iB;
                    K.ex.y = K.ey.x;
                    K.ey.y = mA + mB + this.m_rA.x * this.m_rA.x * iA + this.m_rB.x * this.m_rB.x * iB;
                    K.ez.y = this.m_rA.x * iA + this.m_rB.x * iB;
                    K.ex.z = K.ez.x;
                    K.ey.z = K.ez.y;
                    K.ez.z = iA + iB;
                    if (this.m_frequencyHz > 0) {
                        K.GetInverse22(this.m_mass);
                        let invM = iA + iB;
                        const m = invM > 0 ? 1 / invM : 0;
                        const C = aB - aA - this.m_referenceAngle;
                        const omega = 2 * b2Settings_24.b2_pi * this.m_frequencyHz;
                        const d = 2 * m * this.m_dampingRatio * omega;
                        const k = m * omega * omega;
                        const h = data.step.dt;
                        this.m_gamma = h * (d + h * k);
                        this.m_gamma = this.m_gamma !== 0 ? 1 / this.m_gamma : 0;
                        this.m_bias = C * h * k * this.m_gamma;
                        invM += this.m_gamma;
                        this.m_mass.ez.z = invM !== 0 ? 1 / invM : 0;
                    }
                    else {
                        K.GetSymInverse33(this.m_mass);
                        this.m_gamma = 0;
                        this.m_bias = 0;
                    }
                    if (data.step.warmStarting) {
                        this.m_impulse.SelfMul(data.step.dtRatio);
                        const P = b2WeldJoint.InitVelocityConstraints_s_P.Set(this.m_impulse.x, this.m_impulse.y);
                        vA.SelfMulSub(mA, P);
                        wA -= iA * (b2Math_23.b2Vec2.CrossVV(this.m_rA, P) + this.m_impulse.z);
                        vB.SelfMulAdd(mB, P);
                        wB += iB * (b2Math_23.b2Vec2.CrossVV(this.m_rB, P) + this.m_impulse.z);
                    }
                    else {
                        this.m_impulse.SetZero();
                    }
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolveVelocityConstraints(data) {
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const mA = this.m_invMassA, mB = this.m_invMassB;
                    const iA = this.m_invIA, iB = this.m_invIB;
                    if (this.m_frequencyHz > 0) {
                        const Cdot2 = wB - wA;
                        const impulse2 = -this.m_mass.ez.z * (Cdot2 + this.m_bias + this.m_gamma * this.m_impulse.z);
                        this.m_impulse.z += impulse2;
                        wA -= iA * impulse2;
                        wB += iB * impulse2;
                        const Cdot1 = b2Math_23.b2Vec2.SubVV(b2Math_23.b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2Math_23.b2Vec2.s_t0), b2Math_23.b2Vec2.AddVCrossSV(vA, wA, this.m_rA, b2Math_23.b2Vec2.s_t1), b2WeldJoint.SolveVelocityConstraints_s_Cdot1);
                        const impulse1 = b2Math_23.b2Mat33.MulM33XY(this.m_mass, Cdot1.x, Cdot1.y, b2WeldJoint.SolveVelocityConstraints_s_impulse1).SelfNeg();
                        this.m_impulse.x += impulse1.x;
                        this.m_impulse.y += impulse1.y;
                        const P = impulse1;
                        vA.SelfMulSub(mA, P);
                        wA -= iA * b2Math_23.b2Vec2.CrossVV(this.m_rA, P);
                        vB.SelfMulAdd(mB, P);
                        wB += iB * b2Math_23.b2Vec2.CrossVV(this.m_rB, P);
                    }
                    else {
                        const Cdot1 = b2Math_23.b2Vec2.SubVV(b2Math_23.b2Vec2.AddVCrossSV(vB, wB, this.m_rB, b2Math_23.b2Vec2.s_t0), b2Math_23.b2Vec2.AddVCrossSV(vA, wA, this.m_rA, b2Math_23.b2Vec2.s_t1), b2WeldJoint.SolveVelocityConstraints_s_Cdot1);
                        const Cdot2 = wB - wA;
                        const impulse = b2Math_23.b2Mat33.MulM33XYZ(this.m_mass, Cdot1.x, Cdot1.y, Cdot2, b2WeldJoint.SolveVelocityConstraints_s_impulse).SelfNeg();
                        this.m_impulse.SelfAdd(impulse);
                        const P = b2WeldJoint.SolveVelocityConstraints_s_P.Set(impulse.x, impulse.y);
                        vA.SelfMulSub(mA, P);
                        wA -= iA * (b2Math_23.b2Vec2.CrossVV(this.m_rA, P) + impulse.z);
                        vB.SelfMulAdd(mB, P);
                        wB += iB * (b2Math_23.b2Vec2.CrossVV(this.m_rB, P) + impulse.z);
                    }
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolvePositionConstraints(data) {
                    const cA = data.positions[this.m_indexA].c;
                    let aA = data.positions[this.m_indexA].a;
                    const cB = data.positions[this.m_indexB].c;
                    let aB = data.positions[this.m_indexB].a;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB);
                    const mA = this.m_invMassA, mB = this.m_invMassB;
                    const iA = this.m_invIA, iB = this.m_invIB;
                    b2Math_23.b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
                    const rA = b2Math_23.b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
                    b2Math_23.b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
                    const rB = b2Math_23.b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
                    let positionError, angularError;
                    const K = this.m_K;
                    K.ex.x = mA + mB + rA.y * rA.y * iA + rB.y * rB.y * iB;
                    K.ey.x = -rA.y * rA.x * iA - rB.y * rB.x * iB;
                    K.ez.x = -rA.y * iA - rB.y * iB;
                    K.ex.y = K.ey.x;
                    K.ey.y = mA + mB + rA.x * rA.x * iA + rB.x * rB.x * iB;
                    K.ez.y = rA.x * iA + rB.x * iB;
                    K.ex.z = K.ez.x;
                    K.ey.z = K.ez.y;
                    K.ez.z = iA + iB;
                    if (this.m_frequencyHz > 0) {
                        const C1 = b2Math_23.b2Vec2.SubVV(b2Math_23.b2Vec2.AddVV(cB, rB, b2Math_23.b2Vec2.s_t0), b2Math_23.b2Vec2.AddVV(cA, rA, b2Math_23.b2Vec2.s_t1), b2WeldJoint.SolvePositionConstraints_s_C1);
                        positionError = C1.Length();
                        angularError = 0;
                        const P = K.Solve22(C1.x, C1.y, b2WeldJoint.SolvePositionConstraints_s_P).SelfNeg();
                        cA.SelfMulSub(mA, P);
                        aA -= iA * b2Math_23.b2Vec2.CrossVV(rA, P);
                        cB.SelfMulAdd(mB, P);
                        aB += iB * b2Math_23.b2Vec2.CrossVV(rB, P);
                    }
                    else {
                        const C1 = b2Math_23.b2Vec2.SubVV(b2Math_23.b2Vec2.AddVV(cB, rB, b2Math_23.b2Vec2.s_t0), b2Math_23.b2Vec2.AddVV(cA, rA, b2Math_23.b2Vec2.s_t1), b2WeldJoint.SolvePositionConstraints_s_C1);
                        const C2 = aB - aA - this.m_referenceAngle;
                        positionError = C1.Length();
                        angularError = b2Math_23.b2Abs(C2);
                        const impulse = K.Solve33(C1.x, C1.y, C2, b2WeldJoint.SolvePositionConstraints_s_impulse).SelfNeg();
                        const P = b2WeldJoint.SolvePositionConstraints_s_P.Set(impulse.x, impulse.y);
                        cA.SelfMulSub(mA, P);
                        aA -= iA * (b2Math_23.b2Vec2.CrossVV(this.m_rA, P) + impulse.z);
                        cB.SelfMulAdd(mB, P);
                        aB += iB * (b2Math_23.b2Vec2.CrossVV(this.m_rB, P) + impulse.z);
                    }
                    data.positions[this.m_indexA].a = aA;
                    data.positions[this.m_indexB].a = aB;
                    return positionError <= b2Settings_24.b2_linearSlop && angularError <= b2Settings_24.b2_angularSlop;
                }
                GetAnchorA(out) {
                    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
                }
                GetAnchorB(out) {
                    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
                }
                GetReactionForce(inv_dt, out) {
                    out.x = inv_dt * this.m_impulse.x;
                    out.y = inv_dt * this.m_impulse.y;
                    return out;
                }
                GetReactionTorque(inv_dt) {
                    return inv_dt * this.m_impulse.z;
                }
                GetLocalAnchorA() { return this.m_localAnchorA; }
                GetLocalAnchorB() { return this.m_localAnchorB; }
                GetReferenceAngle() { return this.m_referenceAngle; }
                SetFrequency(hz) { this.m_frequencyHz = hz; }
                GetFrequency() { return this.m_frequencyHz; }
                SetDampingRatio(ratio) { this.m_dampingRatio = ratio; }
                GetDampingRatio() { return this.m_dampingRatio; }
                Dump(log) {
                    const indexA = this.m_bodyA.m_islandIndex;
                    const indexB = this.m_bodyB.m_islandIndex;
                    log("  const jd: b2WeldJointDef = new b2WeldJointDef();\n");
                    log("  jd.bodyA = bodies[%d];\n", indexA);
                    log("  jd.bodyB = bodies[%d];\n", indexB);
                    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
                    log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
                    log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
                    log("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle);
                    log("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz);
                    log("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio);
                    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
                }
            };
            b2WeldJoint.InitVelocityConstraints_s_P = new b2Math_23.b2Vec2();
            b2WeldJoint.SolveVelocityConstraints_s_Cdot1 = new b2Math_23.b2Vec2();
            b2WeldJoint.SolveVelocityConstraints_s_impulse1 = new b2Math_23.b2Vec2();
            b2WeldJoint.SolveVelocityConstraints_s_impulse = new b2Math_23.b2Vec3();
            b2WeldJoint.SolveVelocityConstraints_s_P = new b2Math_23.b2Vec2();
            b2WeldJoint.SolvePositionConstraints_s_C1 = new b2Math_23.b2Vec2();
            b2WeldJoint.SolvePositionConstraints_s_P = new b2Math_23.b2Vec2();
            b2WeldJoint.SolvePositionConstraints_s_impulse = new b2Math_23.b2Vec3();
            exports_30("b2WeldJoint", b2WeldJoint);
        }
    };
});
System.register("Dynamics/Joints/b2WheelJoint", ["Common/b2Settings", "Common/b2Math", "Dynamics/Joints/b2Joint"], function (exports_31, context_31) {
    "use strict";
    var __moduleName = context_31 && context_31.id;
    var b2Settings_25, b2Math_24, b2Joint_12, b2WheelJointDef, b2WheelJoint;
    return {
        setters: [
            function (b2Settings_25_1) {
                b2Settings_25 = b2Settings_25_1;
            },
            function (b2Math_24_1) {
                b2Math_24 = b2Math_24_1;
            },
            function (b2Joint_12_1) {
                b2Joint_12 = b2Joint_12_1;
            }
        ],
        execute: function () {
            b2WheelJointDef = class b2WheelJointDef extends b2Joint_12.b2JointDef {
                constructor() {
                    super(b2Joint_12.b2JointType.e_wheelJoint);
                    this.localAnchorA = new b2Math_24.b2Vec2(0, 0);
                    this.localAnchorB = new b2Math_24.b2Vec2(0, 0);
                    this.localAxisA = new b2Math_24.b2Vec2(1, 0);
                    this.enableMotor = false;
                    this.maxMotorTorque = 0;
                    this.motorSpeed = 0;
                    this.frequencyHz = 2;
                    this.dampingRatio = 0.7;
                }
                Initialize(bA, bB, anchor, axis) {
                    this.bodyA = bA;
                    this.bodyB = bB;
                    this.bodyA.GetLocalPoint(anchor, this.localAnchorA);
                    this.bodyB.GetLocalPoint(anchor, this.localAnchorB);
                    this.bodyA.GetLocalVector(axis, this.localAxisA);
                }
            };
            exports_31("b2WheelJointDef", b2WheelJointDef);
            b2WheelJoint = class b2WheelJoint extends b2Joint_12.b2Joint {
                constructor(def) {
                    super(def);
                    this.m_frequencyHz = 0;
                    this.m_dampingRatio = 0;
                    this.m_localAnchorA = new b2Math_24.b2Vec2();
                    this.m_localAnchorB = new b2Math_24.b2Vec2();
                    this.m_localXAxisA = new b2Math_24.b2Vec2();
                    this.m_localYAxisA = new b2Math_24.b2Vec2();
                    this.m_impulse = 0;
                    this.m_motorImpulse = 0;
                    this.m_springImpulse = 0;
                    this.m_maxMotorTorque = 0;
                    this.m_motorSpeed = 0;
                    this.m_enableMotor = false;
                    this.m_indexA = 0;
                    this.m_indexB = 0;
                    this.m_localCenterA = new b2Math_24.b2Vec2();
                    this.m_localCenterB = new b2Math_24.b2Vec2();
                    this.m_invMassA = 0;
                    this.m_invMassB = 0;
                    this.m_invIA = 0;
                    this.m_invIB = 0;
                    this.m_ax = new b2Math_24.b2Vec2();
                    this.m_ay = new b2Math_24.b2Vec2();
                    this.m_sAx = 0;
                    this.m_sBx = 0;
                    this.m_sAy = 0;
                    this.m_sBy = 0;
                    this.m_mass = 0;
                    this.m_motorMass = 0;
                    this.m_springMass = 0;
                    this.m_bias = 0;
                    this.m_gamma = 0;
                    this.m_qA = new b2Math_24.b2Rot();
                    this.m_qB = new b2Math_24.b2Rot();
                    this.m_lalcA = new b2Math_24.b2Vec2();
                    this.m_lalcB = new b2Math_24.b2Vec2();
                    this.m_rA = new b2Math_24.b2Vec2();
                    this.m_rB = new b2Math_24.b2Vec2();
                    this.m_frequencyHz = b2Settings_25.b2Maybe(def.frequencyHz, 2);
                    this.m_dampingRatio = b2Settings_25.b2Maybe(def.dampingRatio, 0.7);
                    this.m_localAnchorA.Copy(b2Settings_25.b2Maybe(def.localAnchorA, b2Math_24.b2Vec2.ZERO));
                    this.m_localAnchorB.Copy(b2Settings_25.b2Maybe(def.localAnchorB, b2Math_24.b2Vec2.ZERO));
                    this.m_localXAxisA.Copy(b2Settings_25.b2Maybe(def.localAxisA, b2Math_24.b2Vec2.UNITX));
                    b2Math_24.b2Vec2.CrossOneV(this.m_localXAxisA, this.m_localYAxisA);
                    this.m_maxMotorTorque = b2Settings_25.b2Maybe(def.maxMotorTorque, 0);
                    this.m_motorSpeed = b2Settings_25.b2Maybe(def.motorSpeed, 0);
                    this.m_enableMotor = b2Settings_25.b2Maybe(def.enableMotor, false);
                    this.m_ax.SetZero();
                    this.m_ay.SetZero();
                }
                GetMotorSpeed() {
                    return this.m_motorSpeed;
                }
                GetMaxMotorTorque() {
                    return this.m_maxMotorTorque;
                }
                SetSpringFrequencyHz(hz) {
                    this.m_frequencyHz = hz;
                }
                GetSpringFrequencyHz() {
                    return this.m_frequencyHz;
                }
                SetSpringDampingRatio(ratio) {
                    this.m_dampingRatio = ratio;
                }
                GetSpringDampingRatio() {
                    return this.m_dampingRatio;
                }
                InitVelocityConstraints(data) {
                    this.m_indexA = this.m_bodyA.m_islandIndex;
                    this.m_indexB = this.m_bodyB.m_islandIndex;
                    this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter);
                    this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter);
                    this.m_invMassA = this.m_bodyA.m_invMass;
                    this.m_invMassB = this.m_bodyB.m_invMass;
                    this.m_invIA = this.m_bodyA.m_invI;
                    this.m_invIB = this.m_bodyB.m_invI;
                    const mA = this.m_invMassA, mB = this.m_invMassB;
                    const iA = this.m_invIA, iB = this.m_invIB;
                    const cA = data.positions[this.m_indexA].c;
                    const aA = data.positions[this.m_indexA].a;
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const cB = data.positions[this.m_indexB].c;
                    const aB = data.positions[this.m_indexB].a;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB);
                    b2Math_24.b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
                    const rA = b2Math_24.b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
                    b2Math_24.b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
                    const rB = b2Math_24.b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
                    const d = b2Math_24.b2Vec2.SubVV(b2Math_24.b2Vec2.AddVV(cB, rB, b2Math_24.b2Vec2.s_t0), b2Math_24.b2Vec2.AddVV(cA, rA, b2Math_24.b2Vec2.s_t1), b2WheelJoint.InitVelocityConstraints_s_d);
                    {
                        b2Math_24.b2Rot.MulRV(qA, this.m_localYAxisA, this.m_ay);
                        this.m_sAy = b2Math_24.b2Vec2.CrossVV(b2Math_24.b2Vec2.AddVV(d, rA, b2Math_24.b2Vec2.s_t0), this.m_ay);
                        this.m_sBy = b2Math_24.b2Vec2.CrossVV(rB, this.m_ay);
                        this.m_mass = mA + mB + iA * this.m_sAy * this.m_sAy + iB * this.m_sBy * this.m_sBy;
                        if (this.m_mass > 0) {
                            this.m_mass = 1 / this.m_mass;
                        }
                    }
                    this.m_springMass = 0;
                    this.m_bias = 0;
                    this.m_gamma = 0;
                    if (this.m_frequencyHz > 0) {
                        b2Math_24.b2Rot.MulRV(qA, this.m_localXAxisA, this.m_ax);
                        this.m_sAx = b2Math_24.b2Vec2.CrossVV(b2Math_24.b2Vec2.AddVV(d, rA, b2Math_24.b2Vec2.s_t0), this.m_ax);
                        this.m_sBx = b2Math_24.b2Vec2.CrossVV(rB, this.m_ax);
                        const invMass = mA + mB + iA * this.m_sAx * this.m_sAx + iB * this.m_sBx * this.m_sBx;
                        if (invMass > 0) {
                            this.m_springMass = 1 / invMass;
                            const C = b2Math_24.b2Vec2.DotVV(d, this.m_ax);
                            const omega = 2 * b2Settings_25.b2_pi * this.m_frequencyHz;
                            const dc = 2 * this.m_springMass * this.m_dampingRatio * omega;
                            const k = this.m_springMass * omega * omega;
                            const h = data.step.dt;
                            this.m_gamma = h * (dc + h * k);
                            if (this.m_gamma > 0) {
                                this.m_gamma = 1 / this.m_gamma;
                            }
                            this.m_bias = C * h * k * this.m_gamma;
                            this.m_springMass = invMass + this.m_gamma;
                            if (this.m_springMass > 0) {
                                this.m_springMass = 1 / this.m_springMass;
                            }
                        }
                    }
                    else {
                        this.m_springImpulse = 0;
                    }
                    if (this.m_enableMotor) {
                        this.m_motorMass = iA + iB;
                        if (this.m_motorMass > 0) {
                            this.m_motorMass = 1 / this.m_motorMass;
                        }
                    }
                    else {
                        this.m_motorMass = 0;
                        this.m_motorImpulse = 0;
                    }
                    if (data.step.warmStarting) {
                        this.m_impulse *= data.step.dtRatio;
                        this.m_springImpulse *= data.step.dtRatio;
                        this.m_motorImpulse *= data.step.dtRatio;
                        const P = b2Math_24.b2Vec2.AddVV(b2Math_24.b2Vec2.MulSV(this.m_impulse, this.m_ay, b2Math_24.b2Vec2.s_t0), b2Math_24.b2Vec2.MulSV(this.m_springImpulse, this.m_ax, b2Math_24.b2Vec2.s_t1), b2WheelJoint.InitVelocityConstraints_s_P);
                        const LA = this.m_impulse * this.m_sAy + this.m_springImpulse * this.m_sAx + this.m_motorImpulse;
                        const LB = this.m_impulse * this.m_sBy + this.m_springImpulse * this.m_sBx + this.m_motorImpulse;
                        vA.SelfMulSub(this.m_invMassA, P);
                        wA -= this.m_invIA * LA;
                        vB.SelfMulAdd(this.m_invMassB, P);
                        wB += this.m_invIB * LB;
                    }
                    else {
                        this.m_impulse = 0;
                        this.m_springImpulse = 0;
                        this.m_motorImpulse = 0;
                    }
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolveVelocityConstraints(data) {
                    const mA = this.m_invMassA, mB = this.m_invMassB;
                    const iA = this.m_invIA, iB = this.m_invIB;
                    const vA = data.velocities[this.m_indexA].v;
                    let wA = data.velocities[this.m_indexA].w;
                    const vB = data.velocities[this.m_indexB].v;
                    let wB = data.velocities[this.m_indexB].w;
                    {
                        const Cdot = b2Math_24.b2Vec2.DotVV(this.m_ax, b2Math_24.b2Vec2.SubVV(vB, vA, b2Math_24.b2Vec2.s_t0)) + this.m_sBx * wB - this.m_sAx * wA;
                        const impulse = -this.m_springMass * (Cdot + this.m_bias + this.m_gamma * this.m_springImpulse);
                        this.m_springImpulse += impulse;
                        const P = b2Math_24.b2Vec2.MulSV(impulse, this.m_ax, b2WheelJoint.SolveVelocityConstraints_s_P);
                        const LA = impulse * this.m_sAx;
                        const LB = impulse * this.m_sBx;
                        vA.SelfMulSub(mA, P);
                        wA -= iA * LA;
                        vB.SelfMulAdd(mB, P);
                        wB += iB * LB;
                    }
                    {
                        const Cdot = wB - wA - this.m_motorSpeed;
                        let impulse = -this.m_motorMass * Cdot;
                        const oldImpulse = this.m_motorImpulse;
                        const maxImpulse = data.step.dt * this.m_maxMotorTorque;
                        this.m_motorImpulse = b2Math_24.b2Clamp(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);
                        impulse = this.m_motorImpulse - oldImpulse;
                        wA -= iA * impulse;
                        wB += iB * impulse;
                    }
                    {
                        const Cdot = b2Math_24.b2Vec2.DotVV(this.m_ay, b2Math_24.b2Vec2.SubVV(vB, vA, b2Math_24.b2Vec2.s_t0)) + this.m_sBy * wB - this.m_sAy * wA;
                        const impulse = -this.m_mass * Cdot;
                        this.m_impulse += impulse;
                        const P = b2Math_24.b2Vec2.MulSV(impulse, this.m_ay, b2WheelJoint.SolveVelocityConstraints_s_P);
                        const LA = impulse * this.m_sAy;
                        const LB = impulse * this.m_sBy;
                        vA.SelfMulSub(mA, P);
                        wA -= iA * LA;
                        vB.SelfMulAdd(mB, P);
                        wB += iB * LB;
                    }
                    data.velocities[this.m_indexA].w = wA;
                    data.velocities[this.m_indexB].w = wB;
                }
                SolvePositionConstraints(data) {
                    const cA = data.positions[this.m_indexA].c;
                    let aA = data.positions[this.m_indexA].a;
                    const cB = data.positions[this.m_indexB].c;
                    let aB = data.positions[this.m_indexB].a;
                    const qA = this.m_qA.SetAngle(aA), qB = this.m_qB.SetAngle(aB);
                    b2Math_24.b2Vec2.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA);
                    const rA = b2Math_24.b2Rot.MulRV(qA, this.m_lalcA, this.m_rA);
                    b2Math_24.b2Vec2.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB);
                    const rB = b2Math_24.b2Rot.MulRV(qB, this.m_lalcB, this.m_rB);
                    const d = b2Math_24.b2Vec2.AddVV(b2Math_24.b2Vec2.SubVV(cB, cA, b2Math_24.b2Vec2.s_t0), b2Math_24.b2Vec2.SubVV(rB, rA, b2Math_24.b2Vec2.s_t1), b2WheelJoint.SolvePositionConstraints_s_d);
                    const ay = b2Math_24.b2Rot.MulRV(qA, this.m_localYAxisA, this.m_ay);
                    const sAy = b2Math_24.b2Vec2.CrossVV(b2Math_24.b2Vec2.AddVV(d, rA, b2Math_24.b2Vec2.s_t0), ay);
                    const sBy = b2Math_24.b2Vec2.CrossVV(rB, ay);
                    const C = b2Math_24.b2Vec2.DotVV(d, this.m_ay);
                    const k = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_sAy * this.m_sAy + this.m_invIB * this.m_sBy * this.m_sBy;
                    let impulse;
                    if (k !== 0) {
                        impulse = -C / k;
                    }
                    else {
                        impulse = 0;
                    }
                    const P = b2Math_24.b2Vec2.MulSV(impulse, ay, b2WheelJoint.SolvePositionConstraints_s_P);
                    const LA = impulse * sAy;
                    const LB = impulse * sBy;
                    cA.SelfMulSub(this.m_invMassA, P);
                    aA -= this.m_invIA * LA;
                    cB.SelfMulAdd(this.m_invMassB, P);
                    aB += this.m_invIB * LB;
                    data.positions[this.m_indexA].a = aA;
                    data.positions[this.m_indexB].a = aB;
                    return b2Math_24.b2Abs(C) <= b2Settings_25.b2_linearSlop;
                }
                GetDefinition(def) {
                    return def;
                }
                GetAnchorA(out) {
                    return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, out);
                }
                GetAnchorB(out) {
                    return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, out);
                }
                GetReactionForce(inv_dt, out) {
                    out.x = inv_dt * (this.m_impulse * this.m_ay.x + this.m_springImpulse * this.m_ax.x);
                    out.y = inv_dt * (this.m_impulse * this.m_ay.y + this.m_springImpulse * this.m_ax.y);
                    return out;
                }
                GetReactionTorque(inv_dt) {
                    return inv_dt * this.m_motorImpulse;
                }
                GetLocalAnchorA() { return this.m_localAnchorA; }
                GetLocalAnchorB() { return this.m_localAnchorB; }
                GetLocalAxisA() { return this.m_localXAxisA; }
                GetJointTranslation() {
                    return this.GetPrismaticJointTranslation();
                }
                GetJointSpeed() {
                    return this.GetRevoluteJointSpeed();
                }
                GetPrismaticJointTranslation() {
                    const bA = this.m_bodyA;
                    const bB = this.m_bodyB;
                    const pA = bA.GetWorldPoint(this.m_localAnchorA, new b2Math_24.b2Vec2());
                    const pB = bB.GetWorldPoint(this.m_localAnchorB, new b2Math_24.b2Vec2());
                    const d = b2Math_24.b2Vec2.SubVV(pB, pA, new b2Math_24.b2Vec2());
                    const axis = bA.GetWorldVector(this.m_localXAxisA, new b2Math_24.b2Vec2());
                    const translation = b2Math_24.b2Vec2.DotVV(d, axis);
                    return translation;
                }
                GetPrismaticJointSpeed() {
                    const bA = this.m_bodyA;
                    const bB = this.m_bodyB;
                    b2Math_24.b2Vec2.SubVV(this.m_localAnchorA, bA.m_sweep.localCenter, this.m_lalcA);
                    const rA = b2Math_24.b2Rot.MulRV(bA.m_xf.q, this.m_lalcA, this.m_rA);
                    b2Math_24.b2Vec2.SubVV(this.m_localAnchorB, bB.m_sweep.localCenter, this.m_lalcB);
                    const rB = b2Math_24.b2Rot.MulRV(bB.m_xf.q, this.m_lalcB, this.m_rB);
                    const pA = b2Math_24.b2Vec2.AddVV(bA.m_sweep.c, rA, b2Math_24.b2Vec2.s_t0);
                    const pB = b2Math_24.b2Vec2.AddVV(bB.m_sweep.c, rB, b2Math_24.b2Vec2.s_t1);
                    const d = b2Math_24.b2Vec2.SubVV(pB, pA, b2Math_24.b2Vec2.s_t2);
                    const axis = bA.GetWorldVector(this.m_localXAxisA, new b2Math_24.b2Vec2());
                    const vA = bA.m_linearVelocity;
                    const vB = bB.m_linearVelocity;
                    const wA = bA.m_angularVelocity;
                    const wB = bB.m_angularVelocity;
                    const speed = b2Math_24.b2Vec2.DotVV(d, b2Math_24.b2Vec2.CrossSV(wA, axis, b2Math_24.b2Vec2.s_t0)) +
                        b2Math_24.b2Vec2.DotVV(axis, b2Math_24.b2Vec2.SubVV(b2Math_24.b2Vec2.AddVCrossSV(vB, wB, rB, b2Math_24.b2Vec2.s_t0), b2Math_24.b2Vec2.AddVCrossSV(vA, wA, rA, b2Math_24.b2Vec2.s_t1), b2Math_24.b2Vec2.s_t0));
                    return speed;
                }
                GetRevoluteJointAngle() {
                    return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a;
                }
                GetRevoluteJointSpeed() {
                    const wA = this.m_bodyA.m_angularVelocity;
                    const wB = this.m_bodyB.m_angularVelocity;
                    return wB - wA;
                }
                IsMotorEnabled() {
                    return this.m_enableMotor;
                }
                EnableMotor(flag) {
                    this.m_bodyA.SetAwake(true);
                    this.m_bodyB.SetAwake(true);
                    this.m_enableMotor = flag;
                }
                SetMotorSpeed(speed) {
                    this.m_bodyA.SetAwake(true);
                    this.m_bodyB.SetAwake(true);
                    this.m_motorSpeed = speed;
                }
                SetMaxMotorTorque(force) {
                    this.m_bodyA.SetAwake(true);
                    this.m_bodyB.SetAwake(true);
                    this.m_maxMotorTorque = force;
                }
                GetMotorTorque(inv_dt) {
                    return inv_dt * this.m_motorImpulse;
                }
                Dump(log) {
                    const indexA = this.m_bodyA.m_islandIndex;
                    const indexB = this.m_bodyB.m_islandIndex;
                    log("  const jd: b2WheelJointDef = new b2WheelJointDef();\n");
                    log("  jd.bodyA = bodies[%d];\n", indexA);
                    log("  jd.bodyB = bodies[%d];\n", indexB);
                    log("  jd.collideConnected = %s;\n", (this.m_collideConnected) ? ("true") : ("false"));
                    log("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y);
                    log("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y);
                    log("  jd.localAxisA.Set(%.15f, %.15f);\n", this.m_localXAxisA.x, this.m_localXAxisA.y);
                    log("  jd.enableMotor = %s;\n", (this.m_enableMotor) ? ("true") : ("false"));
                    log("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed);
                    log("  jd.maxMotorTorque = %.15f;\n", this.m_maxMotorTorque);
                    log("  jd.frequencyHz = %.15f;\n", this.m_frequencyHz);
                    log("  jd.dampingRatio = %.15f;\n", this.m_dampingRatio);
                    log("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index);
                }
            };
            b2WheelJoint.InitVelocityConstraints_s_d = new b2Math_24.b2Vec2();
            b2WheelJoint.InitVelocityConstraints_s_P = new b2Math_24.b2Vec2();
            b2WheelJoint.SolveVelocityConstraints_s_P = new b2Math_24.b2Vec2();
            b2WheelJoint.SolvePositionConstraints_s_d = new b2Math_24.b2Vec2();
            b2WheelJoint.SolvePositionConstraints_s_P = new b2Math_24.b2Vec2();
            exports_31("b2WheelJoint", b2WheelJoint);
        }
    };
});
System.register("Dynamics/Joints/b2JointFactory", ["Dynamics/Joints/b2Joint", "Dynamics/Joints/b2AreaJoint", "Dynamics/Joints/b2DistanceJoint", "Dynamics/Joints/b2FrictionJoint", "Dynamics/Joints/b2GearJoint", "Dynamics/Joints/b2MotorJoint", "Dynamics/Joints/b2MouseJoint", "Dynamics/Joints/b2PrismaticJoint", "Dynamics/Joints/b2PulleyJoint", "Dynamics/Joints/b2RevoluteJoint", "Dynamics/Joints/b2RopeJoint", "Dynamics/Joints/b2WeldJoint", "Dynamics/Joints/b2WheelJoint"], function (exports_32, context_32) {
    "use strict";
    var __moduleName = context_32 && context_32.id;
    var b2Joint_13, b2AreaJoint_1, b2DistanceJoint_2, b2FrictionJoint_1, b2GearJoint_1, b2MotorJoint_1, b2MouseJoint_1, b2PrismaticJoint_1, b2PulleyJoint_1, b2RevoluteJoint_1, b2RopeJoint_1, b2WeldJoint_1, b2WheelJoint_1, b2JointFactory;
    return {
        setters: [
            function (b2Joint_13_1) {
                b2Joint_13 = b2Joint_13_1;
            },
            function (b2AreaJoint_1_1) {
                b2AreaJoint_1 = b2AreaJoint_1_1;
            },
            function (b2DistanceJoint_2_1) {
                b2DistanceJoint_2 = b2DistanceJoint_2_1;
            },
            function (b2FrictionJoint_1_1) {
                b2FrictionJoint_1 = b2FrictionJoint_1_1;
            },
            function (b2GearJoint_1_1) {
                b2GearJoint_1 = b2GearJoint_1_1;
            },
            function (b2MotorJoint_1_1) {
                b2MotorJoint_1 = b2MotorJoint_1_1;
            },
            function (b2MouseJoint_1_1) {
                b2MouseJoint_1 = b2MouseJoint_1_1;
            },
            function (b2PrismaticJoint_1_1) {
                b2PrismaticJoint_1 = b2PrismaticJoint_1_1;
            },
            function (b2PulleyJoint_1_1) {
                b2PulleyJoint_1 = b2PulleyJoint_1_1;
            },
            function (b2RevoluteJoint_1_1) {
                b2RevoluteJoint_1 = b2RevoluteJoint_1_1;
            },
            function (b2RopeJoint_1_1) {
                b2RopeJoint_1 = b2RopeJoint_1_1;
            },
            function (b2WeldJoint_1_1) {
                b2WeldJoint_1 = b2WeldJoint_1_1;
            },
            function (b2WheelJoint_1_1) {
                b2WheelJoint_1 = b2WheelJoint_1_1;
            }
        ],
        execute: function () {
            b2JointFactory = class b2JointFactory {
                static Create(def, allocator) {
                    switch (def.type) {
                        case b2Joint_13.b2JointType.e_distanceJoint: return new b2DistanceJoint_2.b2DistanceJoint(def);
                        case b2Joint_13.b2JointType.e_mouseJoint: return new b2MouseJoint_1.b2MouseJoint(def);
                        case b2Joint_13.b2JointType.e_prismaticJoint: return new b2PrismaticJoint_1.b2PrismaticJoint(def);
                        case b2Joint_13.b2JointType.e_revoluteJoint: return new b2RevoluteJoint_1.b2RevoluteJoint(def);
                        case b2Joint_13.b2JointType.e_pulleyJoint: return new b2PulleyJoint_1.b2PulleyJoint(def);
                        case b2Joint_13.b2JointType.e_gearJoint: return new b2GearJoint_1.b2GearJoint(def);
                        case b2Joint_13.b2JointType.e_wheelJoint: return new b2WheelJoint_1.b2WheelJoint(def);
                        case b2Joint_13.b2JointType.e_weldJoint: return new b2WeldJoint_1.b2WeldJoint(def);
                        case b2Joint_13.b2JointType.e_frictionJoint: return new b2FrictionJoint_1.b2FrictionJoint(def);
                        case b2Joint_13.b2JointType.e_ropeJoint: return new b2RopeJoint_1.b2RopeJoint(def);
                        case b2Joint_13.b2JointType.e_motorJoint: return new b2MotorJoint_1.b2MotorJoint(def);
                        case b2Joint_13.b2JointType.e_areaJoint: return new b2AreaJoint_1.b2AreaJoint(def);
                    }
                    throw new Error();
                }
                static Destroy(joint, allocator) {
                }
            };
            exports_32("b2JointFactory", b2JointFactory);
        }
    };
});
System.register("Dynamics/Contacts/b2ContactSolver", ["Common/b2Settings", "Common/b2Math", "Collision/b2Collision", "Dynamics/b2TimeStep"], function (exports_33, context_33) {
    "use strict";
    var __moduleName = context_33 && context_33.id;
    var b2Settings_26, b2Math_25, b2Collision_3, b2Collision_4, b2TimeStep_1, b2VelocityConstraintPoint, b2ContactVelocityConstraint, b2ContactPositionConstraint, b2ContactSolverDef, b2PositionSolverManifold, b2ContactSolver;
    return {
        setters: [
            function (b2Settings_26_1) {
                b2Settings_26 = b2Settings_26_1;
            },
            function (b2Math_25_1) {
                b2Math_25 = b2Math_25_1;
            },
            function (b2Collision_3_1) {
                b2Collision_3 = b2Collision_3_1;
                b2Collision_4 = b2Collision_3_1;
            },
            function (b2TimeStep_1_1) {
                b2TimeStep_1 = b2TimeStep_1_1;
            }
        ],
        execute: function () {
            b2VelocityConstraintPoint = class b2VelocityConstraintPoint {
                constructor() {
                    this.rA = new b2Math_25.b2Vec2();
                    this.rB = new b2Math_25.b2Vec2();
                    this.normalImpulse = 0;
                    this.tangentImpulse = 0;
                    this.normalMass = 0;
                    this.tangentMass = 0;
                    this.velocityBias = 0;
                }
                static MakeArray(length) {
                    return b2Settings_26.b2MakeArray(length, (i) => new b2VelocityConstraintPoint());
                }
            };
            exports_33("b2VelocityConstraintPoint", b2VelocityConstraintPoint);
            b2ContactVelocityConstraint = class b2ContactVelocityConstraint {
                constructor() {
                    this.points = b2VelocityConstraintPoint.MakeArray(b2Settings_26.b2_maxManifoldPoints);
                    this.normal = new b2Math_25.b2Vec2();
                    this.tangent = new b2Math_25.b2Vec2();
                    this.normalMass = new b2Math_25.b2Mat22();
                    this.K = new b2Math_25.b2Mat22();
                    this.indexA = 0;
                    this.indexB = 0;
                    this.invMassA = 0;
                    this.invMassB = 0;
                    this.invIA = 0;
                    this.invIB = 0;
                    this.friction = 0;
                    this.restitution = 0;
                    this.tangentSpeed = 0;
                    this.pointCount = 0;
                    this.contactIndex = 0;
                }
                static MakeArray(length) {
                    return b2Settings_26.b2MakeArray(length, (i) => new b2ContactVelocityConstraint());
                }
            };
            exports_33("b2ContactVelocityConstraint", b2ContactVelocityConstraint);
            b2ContactPositionConstraint = class b2ContactPositionConstraint {
                constructor() {
                    this.localPoints = b2Math_25.b2Vec2.MakeArray(b2Settings_26.b2_maxManifoldPoints);
                    this.localNormal = new b2Math_25.b2Vec2();
                    this.localPoint = new b2Math_25.b2Vec2();
                    this.indexA = 0;
                    this.indexB = 0;
                    this.invMassA = 0;
                    this.invMassB = 0;
                    this.localCenterA = new b2Math_25.b2Vec2();
                    this.localCenterB = new b2Math_25.b2Vec2();
                    this.invIA = 0;
                    this.invIB = 0;
                    this.type = b2Collision_4.b2ManifoldType.e_unknown;
                    this.radiusA = 0;
                    this.radiusB = 0;
                    this.pointCount = 0;
                }
                static MakeArray(length) {
                    return b2Settings_26.b2MakeArray(length, (i) => new b2ContactPositionConstraint());
                }
            };
            exports_33("b2ContactPositionConstraint", b2ContactPositionConstraint);
            b2ContactSolverDef = class b2ContactSolverDef {
                constructor() {
                    this.step = new b2TimeStep_1.b2TimeStep();
                    this.count = 0;
                    this.allocator = null;
                }
            };
            exports_33("b2ContactSolverDef", b2ContactSolverDef);
            b2PositionSolverManifold = class b2PositionSolverManifold {
                constructor() {
                    this.normal = new b2Math_25.b2Vec2();
                    this.point = new b2Math_25.b2Vec2();
                    this.separation = 0;
                }
                Initialize(pc, xfA, xfB, index) {
                    const pointA = b2PositionSolverManifold.Initialize_s_pointA;
                    const pointB = b2PositionSolverManifold.Initialize_s_pointB;
                    const planePoint = b2PositionSolverManifold.Initialize_s_planePoint;
                    const clipPoint = b2PositionSolverManifold.Initialize_s_clipPoint;
                    switch (pc.type) {
                        case b2Collision_4.b2ManifoldType.e_circles: {
                            b2Math_25.b2Transform.MulXV(xfA, pc.localPoint, pointA);
                            b2Math_25.b2Transform.MulXV(xfB, pc.localPoints[0], pointB);
                            b2Math_25.b2Vec2.SubVV(pointB, pointA, this.normal).SelfNormalize();
                            b2Math_25.b2Vec2.MidVV(pointA, pointB, this.point);
                            this.separation = b2Math_25.b2Vec2.DotVV(b2Math_25.b2Vec2.SubVV(pointB, pointA, b2Math_25.b2Vec2.s_t0), this.normal) - pc.radiusA - pc.radiusB;
                            break;
                        }
                        case b2Collision_4.b2ManifoldType.e_faceA: {
                            b2Math_25.b2Rot.MulRV(xfA.q, pc.localNormal, this.normal);
                            b2Math_25.b2Transform.MulXV(xfA, pc.localPoint, planePoint);
                            b2Math_25.b2Transform.MulXV(xfB, pc.localPoints[index], clipPoint);
                            this.separation = b2Math_25.b2Vec2.DotVV(b2Math_25.b2Vec2.SubVV(clipPoint, planePoint, b2Math_25.b2Vec2.s_t0), this.normal) - pc.radiusA - pc.radiusB;
                            this.point.Copy(clipPoint);
                            break;
                        }
                        case b2Collision_4.b2ManifoldType.e_faceB: {
                            b2Math_25.b2Rot.MulRV(xfB.q, pc.localNormal, this.normal);
                            b2Math_25.b2Transform.MulXV(xfB, pc.localPoint, planePoint);
                            b2Math_25.b2Transform.MulXV(xfA, pc.localPoints[index], clipPoint);
                            this.separation = b2Math_25.b2Vec2.DotVV(b2Math_25.b2Vec2.SubVV(clipPoint, planePoint, b2Math_25.b2Vec2.s_t0), this.normal) - pc.radiusA - pc.radiusB;
                            this.point.Copy(clipPoint);
                            this.normal.SelfNeg();
                            break;
                        }
                    }
                }
            };
            b2PositionSolverManifold.Initialize_s_pointA = new b2Math_25.b2Vec2();
            b2PositionSolverManifold.Initialize_s_pointB = new b2Math_25.b2Vec2();
            b2PositionSolverManifold.Initialize_s_planePoint = new b2Math_25.b2Vec2();
            b2PositionSolverManifold.Initialize_s_clipPoint = new b2Math_25.b2Vec2();
            exports_33("b2PositionSolverManifold", b2PositionSolverManifold);
            b2ContactSolver = class b2ContactSolver {
                constructor() {
                    this.m_step = new b2TimeStep_1.b2TimeStep();
                    this.m_allocator = null;
                    this.m_positionConstraints = b2ContactPositionConstraint.MakeArray(1024);
                    this.m_velocityConstraints = b2ContactVelocityConstraint.MakeArray(1024);
                    this.m_count = 0;
                }
                Initialize(def) {
                    this.m_step.Copy(def.step);
                    this.m_allocator = def.allocator;
                    this.m_count = def.count;
                    if (this.m_positionConstraints.length < this.m_count) {
                        const new_length = b2Math_25.b2Max(this.m_positionConstraints.length * 2, this.m_count);
                        while (this.m_positionConstraints.length < new_length) {
                            this.m_positionConstraints[this.m_positionConstraints.length] = new b2ContactPositionConstraint();
                        }
                    }
                    if (this.m_velocityConstraints.length < this.m_count) {
                        const new_length = b2Math_25.b2Max(this.m_velocityConstraints.length * 2, this.m_count);
                        while (this.m_velocityConstraints.length < new_length) {
                            this.m_velocityConstraints[this.m_velocityConstraints.length] = new b2ContactVelocityConstraint();
                        }
                    }
                    this.m_positions = def.positions;
                    this.m_velocities = def.velocities;
                    this.m_contacts = def.contacts;
                    for (let i = 0; i < this.m_count; ++i) {
                        const contact = this.m_contacts[i];
                        const fixtureA = contact.m_fixtureA;
                        const fixtureB = contact.m_fixtureB;
                        const shapeA = fixtureA.GetShape();
                        const shapeB = fixtureB.GetShape();
                        const radiusA = shapeA.m_radius;
                        const radiusB = shapeB.m_radius;
                        const bodyA = fixtureA.GetBody();
                        const bodyB = fixtureB.GetBody();
                        const manifold = contact.GetManifold();
                        const pointCount = manifold.pointCount;
                        const vc = this.m_velocityConstraints[i];
                        vc.friction = contact.m_friction;
                        vc.restitution = contact.m_restitution;
                        vc.tangentSpeed = contact.m_tangentSpeed;
                        vc.indexA = bodyA.m_islandIndex;
                        vc.indexB = bodyB.m_islandIndex;
                        vc.invMassA = bodyA.m_invMass;
                        vc.invMassB = bodyB.m_invMass;
                        vc.invIA = bodyA.m_invI;
                        vc.invIB = bodyB.m_invI;
                        vc.contactIndex = i;
                        vc.pointCount = pointCount;
                        vc.K.SetZero();
                        vc.normalMass.SetZero();
                        const pc = this.m_positionConstraints[i];
                        pc.indexA = bodyA.m_islandIndex;
                        pc.indexB = bodyB.m_islandIndex;
                        pc.invMassA = bodyA.m_invMass;
                        pc.invMassB = bodyB.m_invMass;
                        pc.localCenterA.Copy(bodyA.m_sweep.localCenter);
                        pc.localCenterB.Copy(bodyB.m_sweep.localCenter);
                        pc.invIA = bodyA.m_invI;
                        pc.invIB = bodyB.m_invI;
                        pc.localNormal.Copy(manifold.localNormal);
                        pc.localPoint.Copy(manifold.localPoint);
                        pc.pointCount = pointCount;
                        pc.radiusA = radiusA;
                        pc.radiusB = radiusB;
                        pc.type = manifold.type;
                        for (let j = 0; j < pointCount; ++j) {
                            const cp = manifold.points[j];
                            const vcp = vc.points[j];
                            if (this.m_step.warmStarting) {
                                vcp.normalImpulse = this.m_step.dtRatio * cp.normalImpulse;
                                vcp.tangentImpulse = this.m_step.dtRatio * cp.tangentImpulse;
                            }
                            else {
                                vcp.normalImpulse = 0;
                                vcp.tangentImpulse = 0;
                            }
                            vcp.rA.SetZero();
                            vcp.rB.SetZero();
                            vcp.normalMass = 0;
                            vcp.tangentMass = 0;
                            vcp.velocityBias = 0;
                            pc.localPoints[j].Copy(cp.localPoint);
                        }
                    }
                    return this;
                }
                InitializeVelocityConstraints() {
                    const xfA = b2ContactSolver.InitializeVelocityConstraints_s_xfA;
                    const xfB = b2ContactSolver.InitializeVelocityConstraints_s_xfB;
                    const worldManifold = b2ContactSolver.InitializeVelocityConstraints_s_worldManifold;
                    const k_maxConditionNumber = 1000;
                    for (let i = 0; i < this.m_count; ++i) {
                        const vc = this.m_velocityConstraints[i];
                        const pc = this.m_positionConstraints[i];
                        const radiusA = pc.radiusA;
                        const radiusB = pc.radiusB;
                        const manifold = this.m_contacts[vc.contactIndex].GetManifold();
                        const indexA = vc.indexA;
                        const indexB = vc.indexB;
                        const mA = vc.invMassA;
                        const mB = vc.invMassB;
                        const iA = vc.invIA;
                        const iB = vc.invIB;
                        const localCenterA = pc.localCenterA;
                        const localCenterB = pc.localCenterB;
                        const cA = this.m_positions[indexA].c;
                        const aA = this.m_positions[indexA].a;
                        const vA = this.m_velocities[indexA].v;
                        const wA = this.m_velocities[indexA].w;
                        const cB = this.m_positions[indexB].c;
                        const aB = this.m_positions[indexB].a;
                        const vB = this.m_velocities[indexB].v;
                        const wB = this.m_velocities[indexB].w;
                        xfA.q.SetAngle(aA);
                        xfB.q.SetAngle(aB);
                        b2Math_25.b2Vec2.SubVV(cA, b2Math_25.b2Rot.MulRV(xfA.q, localCenterA, b2Math_25.b2Vec2.s_t0), xfA.p);
                        b2Math_25.b2Vec2.SubVV(cB, b2Math_25.b2Rot.MulRV(xfB.q, localCenterB, b2Math_25.b2Vec2.s_t0), xfB.p);
                        worldManifold.Initialize(manifold, xfA, radiusA, xfB, radiusB);
                        vc.normal.Copy(worldManifold.normal);
                        b2Math_25.b2Vec2.CrossVOne(vc.normal, vc.tangent);
                        const pointCount = vc.pointCount;
                        for (let j = 0; j < pointCount; ++j) {
                            const vcp = vc.points[j];
                            b2Math_25.b2Vec2.SubVV(worldManifold.points[j], cA, vcp.rA);
                            b2Math_25.b2Vec2.SubVV(worldManifold.points[j], cB, vcp.rB);
                            const rnA = b2Math_25.b2Vec2.CrossVV(vcp.rA, vc.normal);
                            const rnB = b2Math_25.b2Vec2.CrossVV(vcp.rB, vc.normal);
                            const kNormal = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
                            vcp.normalMass = kNormal > 0 ? 1 / kNormal : 0;
                            const tangent = vc.tangent;
                            const rtA = b2Math_25.b2Vec2.CrossVV(vcp.rA, tangent);
                            const rtB = b2Math_25.b2Vec2.CrossVV(vcp.rB, tangent);
                            const kTangent = mA + mB + iA * rtA * rtA + iB * rtB * rtB;
                            vcp.tangentMass = kTangent > 0 ? 1 / kTangent : 0;
                            vcp.velocityBias = 0;
                            const vRel = b2Math_25.b2Vec2.DotVV(vc.normal, b2Math_25.b2Vec2.SubVV(b2Math_25.b2Vec2.AddVCrossSV(vB, wB, vcp.rB, b2Math_25.b2Vec2.s_t0), b2Math_25.b2Vec2.AddVCrossSV(vA, wA, vcp.rA, b2Math_25.b2Vec2.s_t1), b2Math_25.b2Vec2.s_t0));
                            if (vRel < (-b2Settings_26.b2_velocityThreshold)) {
                                vcp.velocityBias += (-vc.restitution * vRel);
                            }
                        }
                        if (vc.pointCount === 2) {
                            const vcp1 = vc.points[0];
                            const vcp2 = vc.points[1];
                            const rn1A = b2Math_25.b2Vec2.CrossVV(vcp1.rA, vc.normal);
                            const rn1B = b2Math_25.b2Vec2.CrossVV(vcp1.rB, vc.normal);
                            const rn2A = b2Math_25.b2Vec2.CrossVV(vcp2.rA, vc.normal);
                            const rn2B = b2Math_25.b2Vec2.CrossVV(vcp2.rB, vc.normal);
                            const k11 = mA + mB + iA * rn1A * rn1A + iB * rn1B * rn1B;
                            const k22 = mA + mB + iA * rn2A * rn2A + iB * rn2B * rn2B;
                            const k12 = mA + mB + iA * rn1A * rn2A + iB * rn1B * rn2B;
                            if (k11 * k11 < k_maxConditionNumber * (k11 * k22 - k12 * k12)) {
                                vc.K.ex.Set(k11, k12);
                                vc.K.ey.Set(k12, k22);
                                vc.K.GetInverse(vc.normalMass);
                            }
                            else {
                                vc.pointCount = 1;
                            }
                        }
                    }
                }
                WarmStart() {
                    const P = b2ContactSolver.WarmStart_s_P;
                    for (let i = 0; i < this.m_count; ++i) {
                        const vc = this.m_velocityConstraints[i];
                        const indexA = vc.indexA;
                        const indexB = vc.indexB;
                        const mA = vc.invMassA;
                        const iA = vc.invIA;
                        const mB = vc.invMassB;
                        const iB = vc.invIB;
                        const pointCount = vc.pointCount;
                        const vA = this.m_velocities[indexA].v;
                        let wA = this.m_velocities[indexA].w;
                        const vB = this.m_velocities[indexB].v;
                        let wB = this.m_velocities[indexB].w;
                        const normal = vc.normal;
                        const tangent = vc.tangent;
                        for (let j = 0; j < pointCount; ++j) {
                            const vcp = vc.points[j];
                            b2Math_25.b2Vec2.AddVV(b2Math_25.b2Vec2.MulSV(vcp.normalImpulse, normal, b2Math_25.b2Vec2.s_t0), b2Math_25.b2Vec2.MulSV(vcp.tangentImpulse, tangent, b2Math_25.b2Vec2.s_t1), P);
                            wA -= iA * b2Math_25.b2Vec2.CrossVV(vcp.rA, P);
                            vA.SelfMulSub(mA, P);
                            wB += iB * b2Math_25.b2Vec2.CrossVV(vcp.rB, P);
                            vB.SelfMulAdd(mB, P);
                        }
                        this.m_velocities[indexA].w = wA;
                        this.m_velocities[indexB].w = wB;
                    }
                }
                SolveVelocityConstraints() {
                    const dv = b2ContactSolver.SolveVelocityConstraints_s_dv;
                    const dv1 = b2ContactSolver.SolveVelocityConstraints_s_dv1;
                    const dv2 = b2ContactSolver.SolveVelocityConstraints_s_dv2;
                    const P = b2ContactSolver.SolveVelocityConstraints_s_P;
                    const a = b2ContactSolver.SolveVelocityConstraints_s_a;
                    const b = b2ContactSolver.SolveVelocityConstraints_s_b;
                    const x = b2ContactSolver.SolveVelocityConstraints_s_x;
                    const d = b2ContactSolver.SolveVelocityConstraints_s_d;
                    const P1 = b2ContactSolver.SolveVelocityConstraints_s_P1;
                    const P2 = b2ContactSolver.SolveVelocityConstraints_s_P2;
                    const P1P2 = b2ContactSolver.SolveVelocityConstraints_s_P1P2;
                    for (let i = 0; i < this.m_count; ++i) {
                        const vc = this.m_velocityConstraints[i];
                        const indexA = vc.indexA;
                        const indexB = vc.indexB;
                        const mA = vc.invMassA;
                        const iA = vc.invIA;
                        const mB = vc.invMassB;
                        const iB = vc.invIB;
                        const pointCount = vc.pointCount;
                        const vA = this.m_velocities[indexA].v;
                        let wA = this.m_velocities[indexA].w;
                        const vB = this.m_velocities[indexB].v;
                        let wB = this.m_velocities[indexB].w;
                        const normal = vc.normal;
                        const tangent = vc.tangent;
                        const friction = vc.friction;
                        for (let j = 0; j < pointCount; ++j) {
                            const vcp = vc.points[j];
                            b2Math_25.b2Vec2.SubVV(b2Math_25.b2Vec2.AddVCrossSV(vB, wB, vcp.rB, b2Math_25.b2Vec2.s_t0), b2Math_25.b2Vec2.AddVCrossSV(vA, wA, vcp.rA, b2Math_25.b2Vec2.s_t1), dv);
                            const vt = b2Math_25.b2Vec2.DotVV(dv, tangent) - vc.tangentSpeed;
                            let lambda = vcp.tangentMass * (-vt);
                            const maxFriction = friction * vcp.normalImpulse;
                            const newImpulse = b2Math_25.b2Clamp(vcp.tangentImpulse + lambda, (-maxFriction), maxFriction);
                            lambda = newImpulse - vcp.tangentImpulse;
                            vcp.tangentImpulse = newImpulse;
                            b2Math_25.b2Vec2.MulSV(lambda, tangent, P);
                            vA.SelfMulSub(mA, P);
                            wA -= iA * b2Math_25.b2Vec2.CrossVV(vcp.rA, P);
                            vB.SelfMulAdd(mB, P);
                            wB += iB * b2Math_25.b2Vec2.CrossVV(vcp.rB, P);
                        }
                        if (vc.pointCount === 1) {
                            const vcp = vc.points[0];
                            b2Math_25.b2Vec2.SubVV(b2Math_25.b2Vec2.AddVCrossSV(vB, wB, vcp.rB, b2Math_25.b2Vec2.s_t0), b2Math_25.b2Vec2.AddVCrossSV(vA, wA, vcp.rA, b2Math_25.b2Vec2.s_t1), dv);
                            const vn = b2Math_25.b2Vec2.DotVV(dv, normal);
                            let lambda = (-vcp.normalMass * (vn - vcp.velocityBias));
                            const newImpulse = b2Math_25.b2Max(vcp.normalImpulse + lambda, 0);
                            lambda = newImpulse - vcp.normalImpulse;
                            vcp.normalImpulse = newImpulse;
                            b2Math_25.b2Vec2.MulSV(lambda, normal, P);
                            vA.SelfMulSub(mA, P);
                            wA -= iA * b2Math_25.b2Vec2.CrossVV(vcp.rA, P);
                            vB.SelfMulAdd(mB, P);
                            wB += iB * b2Math_25.b2Vec2.CrossVV(vcp.rB, P);
                        }
                        else {
                            const cp1 = vc.points[0];
                            const cp2 = vc.points[1];
                            a.Set(cp1.normalImpulse, cp2.normalImpulse);
                            b2Math_25.b2Vec2.SubVV(b2Math_25.b2Vec2.AddVCrossSV(vB, wB, cp1.rB, b2Math_25.b2Vec2.s_t0), b2Math_25.b2Vec2.AddVCrossSV(vA, wA, cp1.rA, b2Math_25.b2Vec2.s_t1), dv1);
                            b2Math_25.b2Vec2.SubVV(b2Math_25.b2Vec2.AddVCrossSV(vB, wB, cp2.rB, b2Math_25.b2Vec2.s_t0), b2Math_25.b2Vec2.AddVCrossSV(vA, wA, cp2.rA, b2Math_25.b2Vec2.s_t1), dv2);
                            let vn1 = b2Math_25.b2Vec2.DotVV(dv1, normal);
                            let vn2 = b2Math_25.b2Vec2.DotVV(dv2, normal);
                            b.x = vn1 - cp1.velocityBias;
                            b.y = vn2 - cp2.velocityBias;
                            b.SelfSub(b2Math_25.b2Mat22.MulMV(vc.K, a, b2Math_25.b2Vec2.s_t0));
                            for (;;) {
                                b2Math_25.b2Mat22.MulMV(vc.normalMass, b, x).SelfNeg();
                                if (x.x >= 0 && x.y >= 0) {
                                    b2Math_25.b2Vec2.SubVV(x, a, d);
                                    b2Math_25.b2Vec2.MulSV(d.x, normal, P1);
                                    b2Math_25.b2Vec2.MulSV(d.y, normal, P2);
                                    b2Math_25.b2Vec2.AddVV(P1, P2, P1P2);
                                    vA.SelfMulSub(mA, P1P2);
                                    wA -= iA * (b2Math_25.b2Vec2.CrossVV(cp1.rA, P1) + b2Math_25.b2Vec2.CrossVV(cp2.rA, P2));
                                    vB.SelfMulAdd(mB, P1P2);
                                    wB += iB * (b2Math_25.b2Vec2.CrossVV(cp1.rB, P1) + b2Math_25.b2Vec2.CrossVV(cp2.rB, P2));
                                    cp1.normalImpulse = x.x;
                                    cp2.normalImpulse = x.y;
                                    break;
                                }
                                x.x = (-cp1.normalMass * b.x);
                                x.y = 0;
                                vn1 = 0;
                                vn2 = vc.K.ex.y * x.x + b.y;
                                if (x.x >= 0 && vn2 >= 0) {
                                    b2Math_25.b2Vec2.SubVV(x, a, d);
                                    b2Math_25.b2Vec2.MulSV(d.x, normal, P1);
                                    b2Math_25.b2Vec2.MulSV(d.y, normal, P2);
                                    b2Math_25.b2Vec2.AddVV(P1, P2, P1P2);
                                    vA.SelfMulSub(mA, P1P2);
                                    wA -= iA * (b2Math_25.b2Vec2.CrossVV(cp1.rA, P1) + b2Math_25.b2Vec2.CrossVV(cp2.rA, P2));
                                    vB.SelfMulAdd(mB, P1P2);
                                    wB += iB * (b2Math_25.b2Vec2.CrossVV(cp1.rB, P1) + b2Math_25.b2Vec2.CrossVV(cp2.rB, P2));
                                    cp1.normalImpulse = x.x;
                                    cp2.normalImpulse = x.y;
                                    break;
                                }
                                x.x = 0;
                                x.y = (-cp2.normalMass * b.y);
                                vn1 = vc.K.ey.x * x.y + b.x;
                                vn2 = 0;
                                if (x.y >= 0 && vn1 >= 0) {
                                    b2Math_25.b2Vec2.SubVV(x, a, d);
                                    b2Math_25.b2Vec2.MulSV(d.x, normal, P1);
                                    b2Math_25.b2Vec2.MulSV(d.y, normal, P2);
                                    b2Math_25.b2Vec2.AddVV(P1, P2, P1P2);
                                    vA.SelfMulSub(mA, P1P2);
                                    wA -= iA * (b2Math_25.b2Vec2.CrossVV(cp1.rA, P1) + b2Math_25.b2Vec2.CrossVV(cp2.rA, P2));
                                    vB.SelfMulAdd(mB, P1P2);
                                    wB += iB * (b2Math_25.b2Vec2.CrossVV(cp1.rB, P1) + b2Math_25.b2Vec2.CrossVV(cp2.rB, P2));
                                    cp1.normalImpulse = x.x;
                                    cp2.normalImpulse = x.y;
                                    break;
                                }
                                x.x = 0;
                                x.y = 0;
                                vn1 = b.x;
                                vn2 = b.y;
                                if (vn1 >= 0 && vn2 >= 0) {
                                    b2Math_25.b2Vec2.SubVV(x, a, d);
                                    b2Math_25.b2Vec2.MulSV(d.x, normal, P1);
                                    b2Math_25.b2Vec2.MulSV(d.y, normal, P2);
                                    b2Math_25.b2Vec2.AddVV(P1, P2, P1P2);
                                    vA.SelfMulSub(mA, P1P2);
                                    wA -= iA * (b2Math_25.b2Vec2.CrossVV(cp1.rA, P1) + b2Math_25.b2Vec2.CrossVV(cp2.rA, P2));
                                    vB.SelfMulAdd(mB, P1P2);
                                    wB += iB * (b2Math_25.b2Vec2.CrossVV(cp1.rB, P1) + b2Math_25.b2Vec2.CrossVV(cp2.rB, P2));
                                    cp1.normalImpulse = x.x;
                                    cp2.normalImpulse = x.y;
                                    break;
                                }
                                break;
                            }
                        }
                        this.m_velocities[indexA].w = wA;
                        this.m_velocities[indexB].w = wB;
                    }
                }
                StoreImpulses() {
                    for (let i = 0; i < this.m_count; ++i) {
                        const vc = this.m_velocityConstraints[i];
                        const manifold = this.m_contacts[vc.contactIndex].GetManifold();
                        for (let j = 0; j < vc.pointCount; ++j) {
                            manifold.points[j].normalImpulse = vc.points[j].normalImpulse;
                            manifold.points[j].tangentImpulse = vc.points[j].tangentImpulse;
                        }
                    }
                }
                SolvePositionConstraints() {
                    const xfA = b2ContactSolver.SolvePositionConstraints_s_xfA;
                    const xfB = b2ContactSolver.SolvePositionConstraints_s_xfB;
                    const psm = b2ContactSolver.SolvePositionConstraints_s_psm;
                    const rA = b2ContactSolver.SolvePositionConstraints_s_rA;
                    const rB = b2ContactSolver.SolvePositionConstraints_s_rB;
                    const P = b2ContactSolver.SolvePositionConstraints_s_P;
                    let minSeparation = 0;
                    for (let i = 0; i < this.m_count; ++i) {
                        const pc = this.m_positionConstraints[i];
                        const indexA = pc.indexA;
                        const indexB = pc.indexB;
                        const localCenterA = pc.localCenterA;
                        const mA = pc.invMassA;
                        const iA = pc.invIA;
                        const localCenterB = pc.localCenterB;
                        const mB = pc.invMassB;
                        const iB = pc.invIB;
                        const pointCount = pc.pointCount;
                        const cA = this.m_positions[indexA].c;
                        let aA = this.m_positions[indexA].a;
                        const cB = this.m_positions[indexB].c;
                        let aB = this.m_positions[indexB].a;
                        for (let j = 0; j < pointCount; ++j) {
                            xfA.q.SetAngle(aA);
                            xfB.q.SetAngle(aB);
                            b2Math_25.b2Vec2.SubVV(cA, b2Math_25.b2Rot.MulRV(xfA.q, localCenterA, b2Math_25.b2Vec2.s_t0), xfA.p);
                            b2Math_25.b2Vec2.SubVV(cB, b2Math_25.b2Rot.MulRV(xfB.q, localCenterB, b2Math_25.b2Vec2.s_t0), xfB.p);
                            psm.Initialize(pc, xfA, xfB, j);
                            const normal = psm.normal;
                            const point = psm.point;
                            const separation = psm.separation;
                            b2Math_25.b2Vec2.SubVV(point, cA, rA);
                            b2Math_25.b2Vec2.SubVV(point, cB, rB);
                            minSeparation = b2Math_25.b2Min(minSeparation, separation);
                            const C = b2Math_25.b2Clamp(b2Settings_26.b2_baumgarte * (separation + b2Settings_26.b2_linearSlop), (-b2Settings_26.b2_maxLinearCorrection), 0);
                            const rnA = b2Math_25.b2Vec2.CrossVV(rA, normal);
                            const rnB = b2Math_25.b2Vec2.CrossVV(rB, normal);
                            const K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
                            const impulse = K > 0 ? -C / K : 0;
                            b2Math_25.b2Vec2.MulSV(impulse, normal, P);
                            cA.SelfMulSub(mA, P);
                            aA -= iA * b2Math_25.b2Vec2.CrossVV(rA, P);
                            cB.SelfMulAdd(mB, P);
                            aB += iB * b2Math_25.b2Vec2.CrossVV(rB, P);
                        }
                        this.m_positions[indexA].a = aA;
                        this.m_positions[indexB].a = aB;
                    }
                    return minSeparation > (-3 * b2Settings_26.b2_linearSlop);
                }
                SolveTOIPositionConstraints(toiIndexA, toiIndexB) {
                    const xfA = b2ContactSolver.SolveTOIPositionConstraints_s_xfA;
                    const xfB = b2ContactSolver.SolveTOIPositionConstraints_s_xfB;
                    const psm = b2ContactSolver.SolveTOIPositionConstraints_s_psm;
                    const rA = b2ContactSolver.SolveTOIPositionConstraints_s_rA;
                    const rB = b2ContactSolver.SolveTOIPositionConstraints_s_rB;
                    const P = b2ContactSolver.SolveTOIPositionConstraints_s_P;
                    let minSeparation = 0;
                    for (let i = 0; i < this.m_count; ++i) {
                        const pc = this.m_positionConstraints[i];
                        const indexA = pc.indexA;
                        const indexB = pc.indexB;
                        const localCenterA = pc.localCenterA;
                        const localCenterB = pc.localCenterB;
                        const pointCount = pc.pointCount;
                        let mA = 0;
                        let iA = 0;
                        if (indexA === toiIndexA || indexA === toiIndexB) {
                            mA = pc.invMassA;
                            iA = pc.invIA;
                        }
                        let mB = 0;
                        let iB = 0;
                        if (indexB === toiIndexA || indexB === toiIndexB) {
                            mB = pc.invMassB;
                            iB = pc.invIB;
                        }
                        const cA = this.m_positions[indexA].c;
                        let aA = this.m_positions[indexA].a;
                        const cB = this.m_positions[indexB].c;
                        let aB = this.m_positions[indexB].a;
                        for (let j = 0; j < pointCount; ++j) {
                            xfA.q.SetAngle(aA);
                            xfB.q.SetAngle(aB);
                            b2Math_25.b2Vec2.SubVV(cA, b2Math_25.b2Rot.MulRV(xfA.q, localCenterA, b2Math_25.b2Vec2.s_t0), xfA.p);
                            b2Math_25.b2Vec2.SubVV(cB, b2Math_25.b2Rot.MulRV(xfB.q, localCenterB, b2Math_25.b2Vec2.s_t0), xfB.p);
                            psm.Initialize(pc, xfA, xfB, j);
                            const normal = psm.normal;
                            const point = psm.point;
                            const separation = psm.separation;
                            b2Math_25.b2Vec2.SubVV(point, cA, rA);
                            b2Math_25.b2Vec2.SubVV(point, cB, rB);
                            minSeparation = b2Math_25.b2Min(minSeparation, separation);
                            const C = b2Math_25.b2Clamp(b2Settings_26.b2_toiBaumgarte * (separation + b2Settings_26.b2_linearSlop), (-b2Settings_26.b2_maxLinearCorrection), 0);
                            const rnA = b2Math_25.b2Vec2.CrossVV(rA, normal);
                            const rnB = b2Math_25.b2Vec2.CrossVV(rB, normal);
                            const K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
                            const impulse = K > 0 ? -C / K : 0;
                            b2Math_25.b2Vec2.MulSV(impulse, normal, P);
                            cA.SelfMulSub(mA, P);
                            aA -= iA * b2Math_25.b2Vec2.CrossVV(rA, P);
                            cB.SelfMulAdd(mB, P);
                            aB += iB * b2Math_25.b2Vec2.CrossVV(rB, P);
                        }
                        this.m_positions[indexA].a = aA;
                        this.m_positions[indexB].a = aB;
                    }
                    return minSeparation >= -1.5 * b2Settings_26.b2_linearSlop;
                }
            };
            b2ContactSolver.InitializeVelocityConstraints_s_xfA = new b2Math_25.b2Transform();
            b2ContactSolver.InitializeVelocityConstraints_s_xfB = new b2Math_25.b2Transform();
            b2ContactSolver.InitializeVelocityConstraints_s_worldManifold = new b2Collision_3.b2WorldManifold();
            b2ContactSolver.WarmStart_s_P = new b2Math_25.b2Vec2();
            b2ContactSolver.SolveVelocityConstraints_s_dv = new b2Math_25.b2Vec2();
            b2ContactSolver.SolveVelocityConstraints_s_dv1 = new b2Math_25.b2Vec2();
            b2ContactSolver.SolveVelocityConstraints_s_dv2 = new b2Math_25.b2Vec2();
            b2ContactSolver.SolveVelocityConstraints_s_P = new b2Math_25.b2Vec2();
            b2ContactSolver.SolveVelocityConstraints_s_a = new b2Math_25.b2Vec2();
            b2ContactSolver.SolveVelocityConstraints_s_b = new b2Math_25.b2Vec2();
            b2ContactSolver.SolveVelocityConstraints_s_x = new b2Math_25.b2Vec2();
            b2ContactSolver.SolveVelocityConstraints_s_d = new b2Math_25.b2Vec2();
            b2ContactSolver.SolveVelocityConstraints_s_P1 = new b2Math_25.b2Vec2();
            b2ContactSolver.SolveVelocityConstraints_s_P2 = new b2Math_25.b2Vec2();
            b2ContactSolver.SolveVelocityConstraints_s_P1P2 = new b2Math_25.b2Vec2();
            b2ContactSolver.SolvePositionConstraints_s_xfA = new b2Math_25.b2Transform();
            b2ContactSolver.SolvePositionConstraints_s_xfB = new b2Math_25.b2Transform();
            b2ContactSolver.SolvePositionConstraints_s_psm = new b2PositionSolverManifold();
            b2ContactSolver.SolvePositionConstraints_s_rA = new b2Math_25.b2Vec2();
            b2ContactSolver.SolvePositionConstraints_s_rB = new b2Math_25.b2Vec2();
            b2ContactSolver.SolvePositionConstraints_s_P = new b2Math_25.b2Vec2();
            b2ContactSolver.SolveTOIPositionConstraints_s_xfA = new b2Math_25.b2Transform();
            b2ContactSolver.SolveTOIPositionConstraints_s_xfB = new b2Math_25.b2Transform();
            b2ContactSolver.SolveTOIPositionConstraints_s_psm = new b2PositionSolverManifold();
            b2ContactSolver.SolveTOIPositionConstraints_s_rA = new b2Math_25.b2Vec2();
            b2ContactSolver.SolveTOIPositionConstraints_s_rB = new b2Math_25.b2Vec2();
            b2ContactSolver.SolveTOIPositionConstraints_s_P = new b2Math_25.b2Vec2();
            exports_33("b2ContactSolver", b2ContactSolver);
        }
    };
});
System.register("Particle/b2Particle", ["Common/b2Settings", "Common/b2Math", "Common/b2Draw"], function (exports_34, context_34) {
    "use strict";
    var __moduleName = context_34 && context_34.id;
    function b2CalculateParticleIterations(gravity, radius, timeStep) {
        const B2_MAX_RECOMMENDED_PARTICLE_ITERATIONS = 8;
        const B2_RADIUS_THRESHOLD = 0.01;
        const iterations = Math.ceil(Math.sqrt(gravity / (B2_RADIUS_THRESHOLD * radius)) * timeStep);
        return b2Math_26.b2Clamp(iterations, 1, B2_MAX_RECOMMENDED_PARTICLE_ITERATIONS);
    }
    exports_34("b2CalculateParticleIterations", b2CalculateParticleIterations);
    var b2Settings_27, b2Math_26, b2Draw_1, b2ParticleFlag, b2ParticleDef, b2ParticleHandle;
    return {
        setters: [
            function (b2Settings_27_1) {
                b2Settings_27 = b2Settings_27_1;
            },
            function (b2Math_26_1) {
                b2Math_26 = b2Math_26_1;
            },
            function (b2Draw_1_1) {
                b2Draw_1 = b2Draw_1_1;
            }
        ],
        execute: function () {
            (function (b2ParticleFlag) {
                b2ParticleFlag[b2ParticleFlag["b2_waterParticle"] = 0] = "b2_waterParticle";
                b2ParticleFlag[b2ParticleFlag["b2_zombieParticle"] = 2] = "b2_zombieParticle";
                b2ParticleFlag[b2ParticleFlag["b2_wallParticle"] = 4] = "b2_wallParticle";
                b2ParticleFlag[b2ParticleFlag["b2_springParticle"] = 8] = "b2_springParticle";
                b2ParticleFlag[b2ParticleFlag["b2_elasticParticle"] = 16] = "b2_elasticParticle";
                b2ParticleFlag[b2ParticleFlag["b2_viscousParticle"] = 32] = "b2_viscousParticle";
                b2ParticleFlag[b2ParticleFlag["b2_powderParticle"] = 64] = "b2_powderParticle";
                b2ParticleFlag[b2ParticleFlag["b2_tensileParticle"] = 128] = "b2_tensileParticle";
                b2ParticleFlag[b2ParticleFlag["b2_colorMixingParticle"] = 256] = "b2_colorMixingParticle";
                b2ParticleFlag[b2ParticleFlag["b2_destructionListenerParticle"] = 512] = "b2_destructionListenerParticle";
                b2ParticleFlag[b2ParticleFlag["b2_barrierParticle"] = 1024] = "b2_barrierParticle";
                b2ParticleFlag[b2ParticleFlag["b2_staticPressureParticle"] = 2048] = "b2_staticPressureParticle";
                b2ParticleFlag[b2ParticleFlag["b2_reactiveParticle"] = 4096] = "b2_reactiveParticle";
                b2ParticleFlag[b2ParticleFlag["b2_repulsiveParticle"] = 8192] = "b2_repulsiveParticle";
                b2ParticleFlag[b2ParticleFlag["b2_fixtureContactListenerParticle"] = 16384] = "b2_fixtureContactListenerParticle";
                b2ParticleFlag[b2ParticleFlag["b2_particleContactListenerParticle"] = 32768] = "b2_particleContactListenerParticle";
                b2ParticleFlag[b2ParticleFlag["b2_fixtureContactFilterParticle"] = 65536] = "b2_fixtureContactFilterParticle";
                b2ParticleFlag[b2ParticleFlag["b2_particleContactFilterParticle"] = 131072] = "b2_particleContactFilterParticle";
            })(b2ParticleFlag || (b2ParticleFlag = {}));
            exports_34("b2ParticleFlag", b2ParticleFlag);
            b2ParticleDef = class b2ParticleDef {
                constructor() {
                    this.flags = 0;
                    this.position = new b2Math_26.b2Vec2();
                    this.velocity = new b2Math_26.b2Vec2();
                    this.color = new b2Draw_1.b2Color(0, 0, 0, 0);
                    this.lifetime = 0.0;
                    this.userData = null;
                    this.group = null;
                }
            };
            exports_34("b2ParticleDef", b2ParticleDef);
            b2ParticleHandle = class b2ParticleHandle {
                constructor() {
                    this.m_index = b2Settings_27.b2_invalidParticleIndex;
                }
                GetIndex() { return this.m_index; }
                SetIndex(index) { this.m_index = index; }
            };
            exports_34("b2ParticleHandle", b2ParticleHandle);
        }
    };
});
System.register("Particle/b2StackQueue", ["Common/b2Settings"], function (exports_35, context_35) {
    "use strict";
    var __moduleName = context_35 && context_35.id;
    var b2Settings_28, b2StackQueue;
    return {
        setters: [
            function (b2Settings_28_1) {
                b2Settings_28 = b2Settings_28_1;
            }
        ],
        execute: function () {
            b2StackQueue = class b2StackQueue {
                constructor(capacity) {
                    this.m_front = 0;
                    this.m_back = 0;
                    this.m_capacity = 0;
                    this.m_buffer = b2Settings_28.b2MakeArray(capacity, (index) => null);
                    this.m_capacity = capacity;
                }
                Push(item) {
                    if (this.m_back >= this.m_capacity) {
                        for (let i = this.m_front; i < this.m_back; i++) {
                            this.m_buffer[i - this.m_front] = this.m_buffer[i];
                        }
                        this.m_back -= this.m_front;
                        this.m_front = 0;
                        if (this.m_back >= this.m_capacity) {
                            if (this.m_capacity > 0) {
                                this.m_buffer.concat(b2Settings_28.b2MakeArray(this.m_capacity, (index) => null));
                                this.m_capacity *= 2;
                            }
                            else {
                                this.m_buffer.concat(b2Settings_28.b2MakeArray(1, (index) => null));
                                this.m_capacity = 1;
                            }
                        }
                    }
                    this.m_buffer[this.m_back] = item;
                    this.m_back++;
                }
                Pop() {
                    this.m_buffer[this.m_front] = null;
                    this.m_front++;
                }
                Empty() {
                    return this.m_front === this.m_back;
                }
                Front() {
                    const item = this.m_buffer[this.m_front];
                    if (!item) {
                        throw new Error();
                    }
                    return item;
                }
            };
            exports_35("b2StackQueue", b2StackQueue);
        }
    };
});
System.register("Particle/b2VoronoiDiagram", ["Common/b2Settings", "Common/b2Math", "Particle/b2StackQueue"], function (exports_36, context_36) {
    "use strict";
    var __moduleName = context_36 && context_36.id;
    var b2Settings_29, b2Math_27, b2StackQueue_1, b2VoronoiDiagram;
    return {
        setters: [
            function (b2Settings_29_1) {
                b2Settings_29 = b2Settings_29_1;
            },
            function (b2Math_27_1) {
                b2Math_27 = b2Math_27_1;
            },
            function (b2StackQueue_1_1) {
                b2StackQueue_1 = b2StackQueue_1_1;
            }
        ],
        execute: function () {
            b2VoronoiDiagram = class b2VoronoiDiagram {
                constructor(generatorCapacity) {
                    this.m_generatorCapacity = 0;
                    this.m_generatorCount = 0;
                    this.m_countX = 0;
                    this.m_countY = 0;
                    this.m_diagram = [];
                    this.m_generatorBuffer = b2Settings_29.b2MakeArray(generatorCapacity, (index) => new b2VoronoiDiagram.Generator());
                    this.m_generatorCapacity = generatorCapacity;
                }
                AddGenerator(center, tag, necessary) {
                    const g = this.m_generatorBuffer[this.m_generatorCount++];
                    g.center.Copy(center);
                    g.tag = tag;
                    g.necessary = necessary;
                }
                Generate(radius, margin) {
                    const inverseRadius = 1 / radius;
                    const lower = new b2Math_27.b2Vec2(+b2Settings_29.b2_maxFloat, +b2Settings_29.b2_maxFloat);
                    const upper = new b2Math_27.b2Vec2(-b2Settings_29.b2_maxFloat, -b2Settings_29.b2_maxFloat);
                    let necessary_count = 0;
                    for (let k = 0; k < this.m_generatorCount; k++) {
                        const g = this.m_generatorBuffer[k];
                        if (g.necessary) {
                            b2Math_27.b2Vec2.MinV(lower, g.center, lower);
                            b2Math_27.b2Vec2.MaxV(upper, g.center, upper);
                            ++necessary_count;
                        }
                    }
                    if (necessary_count === 0) {
                        this.m_countX = 0;
                        this.m_countY = 0;
                        return;
                    }
                    lower.x -= margin;
                    lower.y -= margin;
                    upper.x += margin;
                    upper.y += margin;
                    this.m_countX = 1 + Math.floor(inverseRadius * (upper.x - lower.x));
                    this.m_countY = 1 + Math.floor(inverseRadius * (upper.y - lower.y));
                    this.m_diagram = [];
                    const queue = new b2StackQueue_1.b2StackQueue(4 * this.m_countX * this.m_countY);
                    for (let k = 0; k < this.m_generatorCount; k++) {
                        const g = this.m_generatorBuffer[k];
                        g.center.SelfSub(lower).SelfMul(inverseRadius);
                        const x = Math.floor(g.center.x);
                        const y = Math.floor(g.center.y);
                        if (x >= 0 && y >= 0 && x < this.m_countX && y < this.m_countY) {
                            queue.Push(new b2VoronoiDiagram.Task(x, y, x + y * this.m_countX, g));
                        }
                    }
                    while (!queue.Empty()) {
                        const task = queue.Front();
                        const x = task.m_x;
                        const y = task.m_y;
                        const i = task.m_i;
                        const g = task.m_generator;
                        queue.Pop();
                        if (!this.m_diagram[i]) {
                            this.m_diagram[i] = g;
                            if (x > 0) {
                                queue.Push(new b2VoronoiDiagram.Task(x - 1, y, i - 1, g));
                            }
                            if (y > 0) {
                                queue.Push(new b2VoronoiDiagram.Task(x, y - 1, i - this.m_countX, g));
                            }
                            if (x < this.m_countX - 1) {
                                queue.Push(new b2VoronoiDiagram.Task(x + 1, y, i + 1, g));
                            }
                            if (y < this.m_countY - 1) {
                                queue.Push(new b2VoronoiDiagram.Task(x, y + 1, i + this.m_countX, g));
                            }
                        }
                    }
                    for (let y = 0; y < this.m_countY; y++) {
                        for (let x = 0; x < this.m_countX - 1; x++) {
                            const i = x + y * this.m_countX;
                            const a = this.m_diagram[i];
                            const b = this.m_diagram[i + 1];
                            if (a !== b) {
                                queue.Push(new b2VoronoiDiagram.Task(x, y, i, b));
                                queue.Push(new b2VoronoiDiagram.Task(x + 1, y, i + 1, a));
                            }
                        }
                    }
                    for (let y = 0; y < this.m_countY - 1; y++) {
                        for (let x = 0; x < this.m_countX; x++) {
                            const i = x + y * this.m_countX;
                            const a = this.m_diagram[i];
                            const b = this.m_diagram[i + this.m_countX];
                            if (a !== b) {
                                queue.Push(new b2VoronoiDiagram.Task(x, y, i, b));
                                queue.Push(new b2VoronoiDiagram.Task(x, y + 1, i + this.m_countX, a));
                            }
                        }
                    }
                    while (!queue.Empty()) {
                        const task = queue.Front();
                        const x = task.m_x;
                        const y = task.m_y;
                        const i = task.m_i;
                        const k = task.m_generator;
                        queue.Pop();
                        const a = this.m_diagram[i];
                        const b = k;
                        if (a !== b) {
                            const ax = a.center.x - x;
                            const ay = a.center.y - y;
                            const bx = b.center.x - x;
                            const by = b.center.y - y;
                            const a2 = ax * ax + ay * ay;
                            const b2 = bx * bx + by * by;
                            if (a2 > b2) {
                                this.m_diagram[i] = b;
                                if (x > 0) {
                                    queue.Push(new b2VoronoiDiagram.Task(x - 1, y, i - 1, b));
                                }
                                if (y > 0) {
                                    queue.Push(new b2VoronoiDiagram.Task(x, y - 1, i - this.m_countX, b));
                                }
                                if (x < this.m_countX - 1) {
                                    queue.Push(new b2VoronoiDiagram.Task(x + 1, y, i + 1, b));
                                }
                                if (y < this.m_countY - 1) {
                                    queue.Push(new b2VoronoiDiagram.Task(x, y + 1, i + this.m_countX, b));
                                }
                            }
                        }
                    }
                }
                GetNodes(callback) {
                    for (let y = 0; y < this.m_countY - 1; y++) {
                        for (let x = 0; x < this.m_countX - 1; x++) {
                            const i = x + y * this.m_countX;
                            const a = this.m_diagram[i];
                            const b = this.m_diagram[i + 1];
                            const c = this.m_diagram[i + this.m_countX];
                            const d = this.m_diagram[i + 1 + this.m_countX];
                            if (b !== c) {
                                if (a !== b && a !== c &&
                                    (a.necessary || b.necessary || c.necessary)) {
                                    callback(a.tag, b.tag, c.tag);
                                }
                                if (d !== b && d !== c &&
                                    (a.necessary || b.necessary || c.necessary)) {
                                    callback(b.tag, d.tag, c.tag);
                                }
                            }
                        }
                    }
                }
            };
            exports_36("b2VoronoiDiagram", b2VoronoiDiagram);
            (function (b2VoronoiDiagram) {
                class Generator {
                    constructor() {
                        this.center = new b2Math_27.b2Vec2();
                        this.tag = 0;
                        this.necessary = false;
                    }
                }
                b2VoronoiDiagram.Generator = Generator;
                class Task {
                    constructor(x, y, i, g) {
                        this.m_x = x;
                        this.m_y = y;
                        this.m_i = i;
                        this.m_generator = g;
                    }
                }
                b2VoronoiDiagram.Task = Task;
            })(b2VoronoiDiagram || (b2VoronoiDiagram = {}));
            exports_36("b2VoronoiDiagram", b2VoronoiDiagram);
        }
    };
});
System.register("Particle/b2ParticleSystem", ["Common/b2Settings", "Common/b2Math", "Common/b2Draw", "Collision/b2Collision", "Collision/Shapes/b2Shape", "Collision/Shapes/b2EdgeShape", "Dynamics/b2TimeStep", "Dynamics/b2WorldCallbacks", "Particle/b2Particle", "Particle/b2ParticleGroup", "Particle/b2VoronoiDiagram"], function (exports_37, context_37) {
    "use strict";
    var __moduleName = context_37 && context_37.id;
    function std_iter_swap(array, a, b) {
        const tmp = array[a];
        array[a] = array[b];
        array[b] = tmp;
    }
    function default_compare(a, b) { return a < b; }
    function std_sort(array, first = 0, len = array.length - first, cmp = default_compare) {
        let left = first;
        const stack = [];
        let pos = 0;
        for (;;) {
            for (; left + 1 < len; len++) {
                const pivot = array[left + Math.floor(Math.random() * (len - left))];
                stack[pos++] = len;
                for (let right = left - 1;;) {
                    while (cmp(array[++right], pivot)) { }
                    while (cmp(pivot, array[--len])) { }
                    if (right >= len) {
                        break;
                    }
                    std_iter_swap(array, right, len);
                }
            }
            if (pos === 0) {
                break;
            }
            left = len;
            len = stack[--pos];
        }
        return array;
    }
    function std_stable_sort(array, first = 0, len = array.length - first, cmp = default_compare) {
        return std_sort(array, first, len, cmp);
    }
    function std_remove_if(array, predicate, length = array.length) {
        let l = 0;
        for (let c = 0; c < length; ++c) {
            if (predicate(array[c])) {
                continue;
            }
            if (c === l) {
                ++l;
                continue;
            }
            std_iter_swap(array, l++, c);
        }
        return l;
    }
    function std_lower_bound(array, first, last, val, cmp = default_compare) {
        let count = last - first;
        while (count > 0) {
            const step = Math.floor(count / 2);
            let it = first + step;
            if (cmp(array[it], val)) {
                first = ++it;
                count -= step + 1;
            }
            else {
                count = step;
            }
        }
        return first;
    }
    function std_upper_bound(array, first, last, val, cmp = default_compare) {
        let count = last - first;
        while (count > 0) {
            const step = Math.floor(count / 2);
            let it = first + step;
            if (!cmp(val, array[it])) {
                first = ++it;
                count -= step + 1;
            }
            else {
                count = step;
            }
        }
        return first;
    }
    function std_rotate(array, first, n_first, last) {
        let next = n_first;
        while (first !== next) {
            std_iter_swap(array, first++, next++);
            if (next === last) {
                next = n_first;
            }
            else if (first === n_first) {
                n_first = next;
            }
        }
    }
    function std_unique(array, first, last, cmp) {
        if (first === last) {
            return last;
        }
        let result = first;
        while (++first !== last) {
            if (!cmp(array[result], array[first])) {
                std_iter_swap(array, ++result, first);
            }
        }
        return ++result;
    }
    var b2Settings_30, b2Settings_31, b2Math_28, b2Draw_2, b2Collision_5, b2Shape_7, b2EdgeShape_2, b2TimeStep_2, b2WorldCallbacks_1, b2Particle_1, b2ParticleGroup_1, b2VoronoiDiagram_1, b2GrowableBuffer, b2FixtureParticleQueryCallback, b2ParticleContact, b2ParticleBodyContact, b2ParticlePair, b2ParticleTriad, b2ParticleSystemDef, b2ParticleSystem;
    return {
        setters: [
            function (b2Settings_30_1) {
                b2Settings_30 = b2Settings_30_1;
                b2Settings_31 = b2Settings_30_1;
            },
            function (b2Math_28_1) {
                b2Math_28 = b2Math_28_1;
            },
            function (b2Draw_2_1) {
                b2Draw_2 = b2Draw_2_1;
            },
            function (b2Collision_5_1) {
                b2Collision_5 = b2Collision_5_1;
            },
            function (b2Shape_7_1) {
                b2Shape_7 = b2Shape_7_1;
            },
            function (b2EdgeShape_2_1) {
                b2EdgeShape_2 = b2EdgeShape_2_1;
            },
            function (b2TimeStep_2_1) {
                b2TimeStep_2 = b2TimeStep_2_1;
            },
            function (b2WorldCallbacks_1_1) {
                b2WorldCallbacks_1 = b2WorldCallbacks_1_1;
            },
            function (b2Particle_1_1) {
                b2Particle_1 = b2Particle_1_1;
            },
            function (b2ParticleGroup_1_1) {
                b2ParticleGroup_1 = b2ParticleGroup_1_1;
            },
            function (b2VoronoiDiagram_1_1) {
                b2VoronoiDiagram_1 = b2VoronoiDiagram_1_1;
            }
        ],
        execute: function () {
            b2GrowableBuffer = class b2GrowableBuffer {
                constructor(allocator) {
                    this.data = [];
                    this.count = 0;
                    this.capacity = 0;
                    this.allocator = allocator;
                }
                Append() {
                    if (this.count >= this.capacity) {
                        this.Grow();
                    }
                    return this.count++;
                }
                Reserve(newCapacity) {
                    if (this.capacity >= newCapacity) {
                        return;
                    }
                    for (let i = this.capacity; i < newCapacity; ++i) {
                        this.data[i] = this.allocator();
                    }
                    this.capacity = newCapacity;
                }
                Grow() {
                    const newCapacity = this.capacity ? 2 * this.capacity : b2Settings_30.b2_minParticleSystemBufferCapacity;
                    this.Reserve(newCapacity);
                }
                Free() {
                    if (this.data.length === 0) {
                        return;
                    }
                    this.data = [];
                    this.capacity = 0;
                    this.count = 0;
                }
                Shorten(newEnd) {
                }
                Data() {
                    return this.data;
                }
                GetCount() {
                    return this.count;
                }
                SetCount(newCount) {
                    this.count = newCount;
                }
                GetCapacity() {
                    return this.capacity;
                }
                RemoveIf(pred) {
                    this.count = std_remove_if(this.data, pred, this.count);
                }
                Unique(pred) {
                    this.count = std_unique(this.data, 0, this.count, pred);
                }
            };
            exports_37("b2GrowableBuffer", b2GrowableBuffer);
            b2FixtureParticleQueryCallback = class b2FixtureParticleQueryCallback extends b2WorldCallbacks_1.b2QueryCallback {
                constructor(system) {
                    super();
                    this.m_system = system;
                }
                ShouldQueryParticleSystem(system) {
                    return false;
                }
                ReportFixture(fixture) {
                    if (fixture.IsSensor()) {
                        return true;
                    }
                    const shape = fixture.GetShape();
                    const childCount = shape.GetChildCount();
                    for (let childIndex = 0; childIndex < childCount; childIndex++) {
                        const aabb = fixture.GetAABB(childIndex);
                        const enumerator = this.m_system.GetInsideBoundsEnumerator(aabb);
                        let index;
                        while ((index = enumerator.GetNext()) >= 0) {
                            this.ReportFixtureAndParticle(fixture, childIndex, index);
                        }
                    }
                    return true;
                }
                ReportParticle(system, index) {
                    return false;
                }
                ReportFixtureAndParticle(fixture, childIndex, index) {
                }
            };
            exports_37("b2FixtureParticleQueryCallback", b2FixtureParticleQueryCallback);
            b2ParticleContact = class b2ParticleContact {
                constructor() {
                    this.indexA = 0;
                    this.indexB = 0;
                    this.weight = 0;
                    this.normal = new b2Math_28.b2Vec2();
                    this.flags = 0;
                }
                SetIndices(a, b) {
                    this.indexA = a;
                    this.indexB = b;
                }
                SetWeight(w) {
                    this.weight = w;
                }
                SetNormal(n) {
                    this.normal.Copy(n);
                }
                SetFlags(f) {
                    this.flags = f;
                }
                GetIndexA() {
                    return this.indexA;
                }
                GetIndexB() {
                    return this.indexB;
                }
                GetWeight() {
                    return this.weight;
                }
                GetNormal() {
                    return this.normal;
                }
                GetFlags() {
                    return this.flags;
                }
                IsEqual(rhs) {
                    return this.indexA === rhs.indexA && this.indexB === rhs.indexB && this.flags === rhs.flags && this.weight === rhs.weight && this.normal.x === rhs.normal.x && this.normal.y === rhs.normal.y;
                }
                IsNotEqual(rhs) {
                    return !this.IsEqual(rhs);
                }
                ApproximatelyEqual(rhs) {
                    const MAX_WEIGHT_DIFF = 0.01;
                    const MAX_NORMAL_DIFF_SQ = 0.01 * 0.01;
                    return this.indexA === rhs.indexA && this.indexB === rhs.indexB && this.flags === rhs.flags && b2Math_28.b2Abs(this.weight - rhs.weight) < MAX_WEIGHT_DIFF && b2Math_28.b2Vec2.DistanceSquaredVV(this.normal, rhs.normal) < MAX_NORMAL_DIFF_SQ;
                }
            };
            exports_37("b2ParticleContact", b2ParticleContact);
            b2ParticleBodyContact = class b2ParticleBodyContact {
                constructor() {
                    this.index = 0;
                    this.weight = 0.0;
                    this.normal = new b2Math_28.b2Vec2();
                    this.mass = 0.0;
                }
            };
            exports_37("b2ParticleBodyContact", b2ParticleBodyContact);
            b2ParticlePair = class b2ParticlePair {
                constructor() {
                    this.indexA = 0;
                    this.indexB = 0;
                    this.flags = 0;
                    this.strength = 0.0;
                    this.distance = 0.0;
                }
            };
            exports_37("b2ParticlePair", b2ParticlePair);
            b2ParticleTriad = class b2ParticleTriad {
                constructor() {
                    this.indexA = 0;
                    this.indexB = 0;
                    this.indexC = 0;
                    this.flags = 0;
                    this.strength = 0.0;
                    this.pa = new b2Math_28.b2Vec2(0.0, 0.0);
                    this.pb = new b2Math_28.b2Vec2(0.0, 0.0);
                    this.pc = new b2Math_28.b2Vec2(0.0, 0.0);
                    this.ka = 0.0;
                    this.kb = 0.0;
                    this.kc = 0.0;
                    this.s = 0.0;
                }
            };
            exports_37("b2ParticleTriad", b2ParticleTriad);
            b2ParticleSystemDef = class b2ParticleSystemDef {
                constructor() {
                    this.strictContactCheck = false;
                    this.density = 1.0;
                    this.gravityScale = 1.0;
                    this.radius = 1.0;
                    this.maxCount = 0;
                    this.pressureStrength = 0.005;
                    this.dampingStrength = 1.0;
                    this.elasticStrength = 0.25;
                    this.springStrength = 0.25;
                    this.viscousStrength = 0.25;
                    this.surfaceTensionPressureStrength = 0.2;
                    this.surfaceTensionNormalStrength = 0.2;
                    this.repulsiveStrength = 1.0;
                    this.powderStrength = 0.5;
                    this.ejectionStrength = 0.5;
                    this.staticPressureStrength = 0.2;
                    this.staticPressureRelaxation = 0.2;
                    this.staticPressureIterations = 8;
                    this.colorMixingStrength = 0.5;
                    this.destroyByAge = true;
                    this.lifetimeGranularity = 1.0 / 60.0;
                }
                Copy(def) {
                    this.strictContactCheck = def.strictContactCheck;
                    this.density = def.density;
                    this.gravityScale = def.gravityScale;
                    this.radius = def.radius;
                    this.maxCount = def.maxCount;
                    this.pressureStrength = def.pressureStrength;
                    this.dampingStrength = def.dampingStrength;
                    this.elasticStrength = def.elasticStrength;
                    this.springStrength = def.springStrength;
                    this.viscousStrength = def.viscousStrength;
                    this.surfaceTensionPressureStrength = def.surfaceTensionPressureStrength;
                    this.surfaceTensionNormalStrength = def.surfaceTensionNormalStrength;
                    this.repulsiveStrength = def.repulsiveStrength;
                    this.powderStrength = def.powderStrength;
                    this.ejectionStrength = def.ejectionStrength;
                    this.staticPressureStrength = def.staticPressureStrength;
                    this.staticPressureRelaxation = def.staticPressureRelaxation;
                    this.staticPressureIterations = def.staticPressureIterations;
                    this.colorMixingStrength = def.colorMixingStrength;
                    this.destroyByAge = def.destroyByAge;
                    this.lifetimeGranularity = def.lifetimeGranularity;
                    return this;
                }
                Clone() {
                    return new b2ParticleSystemDef().Copy(this);
                }
            };
            exports_37("b2ParticleSystemDef", b2ParticleSystemDef);
            b2ParticleSystem = class b2ParticleSystem {
                constructor(def, world) {
                    this.m_paused = false;
                    this.m_timestamp = 0;
                    this.m_allParticleFlags = 0;
                    this.m_needsUpdateAllParticleFlags = false;
                    this.m_allGroupFlags = 0;
                    this.m_needsUpdateAllGroupFlags = false;
                    this.m_hasForce = false;
                    this.m_iterationIndex = 0;
                    this.m_inverseDensity = 0.0;
                    this.m_particleDiameter = 0.0;
                    this.m_inverseDiameter = 0.0;
                    this.m_squaredDiameter = 0.0;
                    this.m_count = 0;
                    this.m_internalAllocatedCapacity = 0;
                    this.m_handleIndexBuffer = new b2ParticleSystem.UserOverridableBuffer();
                    this.m_flagsBuffer = new b2ParticleSystem.UserOverridableBuffer();
                    this.m_positionBuffer = new b2ParticleSystem.UserOverridableBuffer();
                    this.m_velocityBuffer = new b2ParticleSystem.UserOverridableBuffer();
                    this.m_forceBuffer = [];
                    this.m_weightBuffer = [];
                    this.m_staticPressureBuffer = [];
                    this.m_accumulationBuffer = [];
                    this.m_accumulation2Buffer = [];
                    this.m_depthBuffer = [];
                    this.m_colorBuffer = new b2ParticleSystem.UserOverridableBuffer();
                    this.m_groupBuffer = [];
                    this.m_userDataBuffer = new b2ParticleSystem.UserOverridableBuffer();
                    this.m_stuckThreshold = 0;
                    this.m_lastBodyContactStepBuffer = new b2ParticleSystem.UserOverridableBuffer();
                    this.m_bodyContactCountBuffer = new b2ParticleSystem.UserOverridableBuffer();
                    this.m_consecutiveContactStepsBuffer = new b2ParticleSystem.UserOverridableBuffer();
                    this.m_stuckParticleBuffer = new b2GrowableBuffer(() => 0);
                    this.m_proxyBuffer = new b2GrowableBuffer(() => new b2ParticleSystem.Proxy());
                    this.m_contactBuffer = new b2GrowableBuffer(() => new b2ParticleContact());
                    this.m_bodyContactBuffer = new b2GrowableBuffer(() => new b2ParticleBodyContact());
                    this.m_pairBuffer = new b2GrowableBuffer(() => new b2ParticlePair());
                    this.m_triadBuffer = new b2GrowableBuffer(() => new b2ParticleTriad());
                    this.m_expirationTimeBuffer = new b2ParticleSystem.UserOverridableBuffer();
                    this.m_indexByExpirationTimeBuffer = new b2ParticleSystem.UserOverridableBuffer();
                    this.m_timeElapsed = 0;
                    this.m_expirationTimeBufferRequiresSorting = false;
                    this.m_groupList = new Set();
                    this.m_def = new b2ParticleSystemDef();
                    this.SetStrictContactCheck(def.strictContactCheck);
                    this.SetDensity(def.density);
                    this.SetGravityScale(def.gravityScale);
                    this.SetRadius(def.radius);
                    this.SetMaxParticleCount(def.maxCount);
                    this.m_def = def.Clone();
                    this.m_world = world;
                    this.SetDestructionByAge(this.m_def.destroyByAge);
                }
                static computeTag(x, y) {
                    return ((((y + b2ParticleSystem.yOffset) >>> 0) << b2ParticleSystem.yShift) + ((b2ParticleSystem.xScale * x + b2ParticleSystem.xOffset) >>> 0)) >>> 0;
                }
                static computeRelativeTag(tag, x, y) {
                    return (tag + (y << b2ParticleSystem.yShift) + (x << b2ParticleSystem.xShift)) >>> 0;
                }
                Drop() {
                    for (const group of this.m_groupList) {
                        this.DestroyParticleGroup(group);
                    }
                    this.FreeUserOverridableBuffer(this.m_handleIndexBuffer);
                    this.FreeUserOverridableBuffer(this.m_flagsBuffer);
                    this.FreeUserOverridableBuffer(this.m_lastBodyContactStepBuffer);
                    this.FreeUserOverridableBuffer(this.m_bodyContactCountBuffer);
                    this.FreeUserOverridableBuffer(this.m_consecutiveContactStepsBuffer);
                    this.FreeUserOverridableBuffer(this.m_positionBuffer);
                    this.FreeUserOverridableBuffer(this.m_velocityBuffer);
                    this.FreeUserOverridableBuffer(this.m_colorBuffer);
                    this.FreeUserOverridableBuffer(this.m_userDataBuffer);
                    this.FreeUserOverridableBuffer(this.m_expirationTimeBuffer);
                    this.FreeUserOverridableBuffer(this.m_indexByExpirationTimeBuffer);
                    this.FreeBuffer(this.m_forceBuffer, this.m_internalAllocatedCapacity);
                    this.FreeBuffer(this.m_weightBuffer, this.m_internalAllocatedCapacity);
                    this.FreeBuffer(this.m_staticPressureBuffer, this.m_internalAllocatedCapacity);
                    this.FreeBuffer(this.m_accumulationBuffer, this.m_internalAllocatedCapacity);
                    this.FreeBuffer(this.m_accumulation2Buffer, this.m_internalAllocatedCapacity);
                    this.FreeBuffer(this.m_depthBuffer, this.m_internalAllocatedCapacity);
                    this.FreeBuffer(this.m_groupBuffer, this.m_internalAllocatedCapacity);
                }
                CreateParticle(def) {
                    if (this.m_world.IsLocked()) {
                        throw new Error();
                    }
                    if (this.m_count >= this.m_internalAllocatedCapacity) {
                        const capacity = this.m_count ? 2 * this.m_count : b2Settings_30.b2_minParticleSystemBufferCapacity;
                        this.ReallocateInternalAllocatedBuffers(capacity);
                    }
                    if (this.m_count >= this.m_internalAllocatedCapacity) {
                        if (this.m_def.destroyByAge) {
                            this.DestroyOldestParticle(0, false);
                            this.SolveZombie();
                        }
                        else {
                            return b2Settings_30.b2_invalidParticleIndex;
                        }
                    }
                    const index = this.m_count++;
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    this.m_flagsBuffer.data[index] = 0;
                    if (this.m_lastBodyContactStepBuffer.data) {
                        this.m_lastBodyContactStepBuffer.data[index] = 0;
                    }
                    if (this.m_bodyContactCountBuffer.data) {
                        this.m_bodyContactCountBuffer.data[index] = 0;
                    }
                    if (this.m_consecutiveContactStepsBuffer.data) {
                        this.m_consecutiveContactStepsBuffer.data[index] = 0;
                    }
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    this.m_positionBuffer.data[index] = (this.m_positionBuffer.data[index] || new b2Math_28.b2Vec2()).Copy(b2Settings_30.b2Maybe(def.position, b2Math_28.b2Vec2.ZERO));
                    this.m_velocityBuffer.data[index] = (this.m_velocityBuffer.data[index] || new b2Math_28.b2Vec2()).Copy(b2Settings_30.b2Maybe(def.velocity, b2Math_28.b2Vec2.ZERO));
                    this.m_weightBuffer[index] = 0;
                    this.m_forceBuffer[index] = (this.m_forceBuffer[index] || new b2Math_28.b2Vec2()).SetZero();
                    if (this.m_staticPressureBuffer) {
                        this.m_staticPressureBuffer[index] = 0;
                    }
                    if (this.m_depthBuffer) {
                        this.m_depthBuffer[index] = 0;
                    }
                    const color = new b2Draw_2.b2Color().Copy(b2Settings_30.b2Maybe(def.color, b2Draw_2.b2Color.ZERO));
                    if (this.m_colorBuffer.data || !color.IsZero()) {
                        this.m_colorBuffer.data = this.RequestBuffer(this.m_colorBuffer.data);
                        this.m_colorBuffer.data[index] = (this.m_colorBuffer.data[index] || new b2Draw_2.b2Color()).Copy(color);
                    }
                    if (this.m_userDataBuffer.data || def.userData) {
                        this.m_userDataBuffer.data = this.RequestBuffer(this.m_userDataBuffer.data);
                        this.m_userDataBuffer.data[index] = def.userData;
                    }
                    if (this.m_handleIndexBuffer.data) {
                        this.m_handleIndexBuffer.data[index] = null;
                    }
                    const proxy = this.m_proxyBuffer.data[this.m_proxyBuffer.Append()];
                    const lifetime = b2Settings_30.b2Maybe(def.lifetime, 0.0);
                    const finiteLifetime = lifetime > 0.0;
                    if (this.m_expirationTimeBuffer.data || finiteLifetime) {
                        this.SetParticleLifetime(index, finiteLifetime ? lifetime :
                            this.ExpirationTimeToLifetime(-this.GetQuantizedTimeElapsed()));
                        if (!this.m_indexByExpirationTimeBuffer.data) {
                            throw new Error();
                        }
                        this.m_indexByExpirationTimeBuffer.data[index] = index;
                    }
                    proxy.index = index;
                    const group = b2Settings_30.b2Maybe(def.group, null);
                    this.m_groupBuffer[index] = group;
                    if (group) {
                        if (group.m_firstIndex < group.m_lastIndex) {
                            this.RotateBuffer(group.m_firstIndex, group.m_lastIndex, index);
                            group.m_lastIndex = index + 1;
                        }
                        else {
                            group.m_firstIndex = index;
                            group.m_lastIndex = index + 1;
                        }
                    }
                    this.SetParticleFlags(index, b2Settings_30.b2Maybe(def.flags, 0));
                    return index;
                }
                GetParticleHandleFromIndex(index) {
                    this.m_handleIndexBuffer.data = this.RequestBuffer(this.m_handleIndexBuffer.data);
                    let handle = this.m_handleIndexBuffer.data[index];
                    if (handle) {
                        return handle;
                    }
                    handle = new b2Particle_1.b2ParticleHandle();
                    handle.SetIndex(index);
                    this.m_handleIndexBuffer.data[index] = handle;
                    return handle;
                }
                DestroyParticle(index, callDestructionListener = false) {
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    let flags = b2Particle_1.b2ParticleFlag.b2_zombieParticle;
                    if (callDestructionListener) {
                        flags |= b2Particle_1.b2ParticleFlag.b2_destructionListenerParticle;
                    }
                    this.SetParticleFlags(index, this.m_flagsBuffer.data[index] | flags);
                }
                DestroyOldestParticle(index, callDestructionListener = false) {
                    const particleCount = this.GetParticleCount();
                    if (!this.m_indexByExpirationTimeBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_expirationTimeBuffer.data) {
                        throw new Error();
                    }
                    const oldestFiniteLifetimeParticle = this.m_indexByExpirationTimeBuffer.data[particleCount - (index + 1)];
                    const oldestInfiniteLifetimeParticle = this.m_indexByExpirationTimeBuffer.data[index];
                    this.DestroyParticle(this.m_expirationTimeBuffer.data[oldestFiniteLifetimeParticle] > 0.0 ?
                        oldestFiniteLifetimeParticle : oldestInfiniteLifetimeParticle, callDestructionListener);
                }
                DestroyParticlesInShape(shape, xf, callDestructionListener = false) {
                    const s_aabb = b2ParticleSystem.DestroyParticlesInShape_s_aabb;
                    if (this.m_world.IsLocked()) {
                        throw new Error();
                    }
                    const callback = new b2ParticleSystem.DestroyParticlesInShapeCallback(this, shape, xf, callDestructionListener);
                    const aabb = s_aabb;
                    shape.ComputeAABB(aabb, xf, 0);
                    this.m_world.QueryAABB(callback, aabb);
                    return callback.Destroyed();
                }
                CreateParticleGroup(groupDef) {
                    const s_transform = b2ParticleSystem.CreateParticleGroup_s_transform;
                    if (this.m_world.IsLocked()) {
                        throw new Error();
                    }
                    const transform = s_transform;
                    transform.SetPositionAngle(b2Settings_30.b2Maybe(groupDef.position, b2Math_28.b2Vec2.ZERO), b2Settings_30.b2Maybe(groupDef.angle, 0));
                    const firstIndex = this.m_count;
                    if (groupDef.shape) {
                        this.CreateParticlesWithShapeForGroup(groupDef.shape, groupDef, transform);
                    }
                    if (groupDef.shapes) {
                        this.CreateParticlesWithShapesForGroup(groupDef.shapes, b2Settings_30.b2Maybe(groupDef.shapeCount, groupDef.shapes.length), groupDef, transform);
                    }
                    if (groupDef.positionData) {
                        const count = b2Settings_30.b2Maybe(groupDef.particleCount, groupDef.positionData.length);
                        for (let i = 0; i < count; i++) {
                            const p = groupDef.positionData[i];
                            this.CreateParticleForGroup(groupDef, transform, p);
                        }
                    }
                    const lastIndex = this.m_count;
                    let group = new b2ParticleGroup_1.b2ParticleGroup(this);
                    group.m_firstIndex = firstIndex;
                    group.m_lastIndex = lastIndex;
                    group.m_strength = b2Settings_30.b2Maybe(groupDef.strength, 1);
                    group.m_userData = groupDef.userData;
                    group.m_transform.Copy(transform);
                    this.m_groupList.add(group);
                    for (let i = firstIndex; i < lastIndex; i++) {
                        this.m_groupBuffer[i] = group;
                    }
                    this.SetGroupFlags(group, b2Settings_30.b2Maybe(groupDef.groupFlags, 0));
                    const filter = new b2ParticleSystem.ConnectionFilter();
                    this.UpdateContacts(true);
                    this.UpdatePairsAndTriads(firstIndex, lastIndex, filter);
                    if (groupDef.group) {
                        this.JoinParticleGroups(groupDef.group, group);
                        group = groupDef.group;
                    }
                    return group;
                }
                JoinParticleGroups(groupA, groupB) {
                    if (this.m_world.IsLocked()) {
                        throw new Error();
                    }
                    this.RotateBuffer(groupB.m_firstIndex, groupB.m_lastIndex, this.m_count);
                    this.RotateBuffer(groupA.m_firstIndex, groupA.m_lastIndex, groupB.m_firstIndex);
                    const filter = new b2ParticleSystem.JoinParticleGroupsFilter(groupB.m_firstIndex);
                    this.UpdateContacts(true);
                    this.UpdatePairsAndTriads(groupA.m_firstIndex, groupB.m_lastIndex, filter);
                    for (let i = groupB.m_firstIndex; i < groupB.m_lastIndex; i++) {
                        this.m_groupBuffer[i] = groupA;
                    }
                    const groupFlags = groupA.m_groupFlags | groupB.m_groupFlags;
                    this.SetGroupFlags(groupA, groupFlags);
                    groupA.m_lastIndex = groupB.m_lastIndex;
                    groupB.m_firstIndex = groupB.m_lastIndex;
                    this.DestroyParticleGroup(groupB);
                }
                SplitParticleGroup(group) {
                    this.UpdateContacts(true);
                    const particleCount = group.GetParticleCount();
                    const nodeBuffer = b2Settings_30.b2MakeArray(particleCount, (index) => new b2ParticleSystem.ParticleListNode());
                    b2ParticleSystem.InitializeParticleLists(group, nodeBuffer);
                    this.MergeParticleListsInContact(group, nodeBuffer);
                    const survivingList = b2ParticleSystem.FindLongestParticleList(group, nodeBuffer);
                    this.MergeZombieParticleListNodes(group, nodeBuffer, survivingList);
                    this.CreateParticleGroupsFromParticleList(group, nodeBuffer, survivingList);
                    this.UpdatePairsAndTriadsWithParticleList(group, nodeBuffer);
                }
                GetParticleGroupList() {
                    return this.m_groupList;
                }
                GetParticleGroupCount() {
                    return this.m_groupList.size;
                }
                GetParticleCount() {
                    return this.m_count;
                }
                GetMaxParticleCount() {
                    return this.m_def.maxCount;
                }
                SetMaxParticleCount(count) {
                    this.m_def.maxCount = count;
                }
                GetAllParticleFlags() {
                    return this.m_allParticleFlags;
                }
                GetAllGroupFlags() {
                    return this.m_allGroupFlags;
                }
                SetPaused(paused) {
                    this.m_paused = paused;
                }
                GetPaused() {
                    return this.m_paused;
                }
                SetDensity(density) {
                    this.m_def.density = density;
                    this.m_inverseDensity = 1 / this.m_def.density;
                }
                GetDensity() {
                    return this.m_def.density;
                }
                SetGravityScale(gravityScale) {
                    this.m_def.gravityScale = gravityScale;
                }
                GetGravityScale() {
                    return this.m_def.gravityScale;
                }
                SetDamping(damping) {
                    this.m_def.dampingStrength = damping;
                }
                GetDamping() {
                    return this.m_def.dampingStrength;
                }
                SetStaticPressureIterations(iterations) {
                    this.m_def.staticPressureIterations = iterations;
                }
                GetStaticPressureIterations() {
                    return this.m_def.staticPressureIterations;
                }
                SetRadius(radius) {
                    this.m_particleDiameter = 2 * radius;
                    this.m_squaredDiameter = this.m_particleDiameter * this.m_particleDiameter;
                    this.m_inverseDiameter = 1 / this.m_particleDiameter;
                }
                GetRadius() {
                    return this.m_particleDiameter / 2;
                }
                GetPositionBuffer() {
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    return this.m_positionBuffer.data;
                }
                GetVelocityBuffer() {
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    return this.m_velocityBuffer.data;
                }
                GetColorBuffer() {
                    this.m_colorBuffer.data = this.RequestBuffer(this.m_colorBuffer.data);
                    return this.m_colorBuffer.data;
                }
                GetGroupBuffer() {
                    return this.m_groupBuffer;
                }
                GetWeightBuffer() {
                    return this.m_weightBuffer;
                }
                GetUserDataBuffer() {
                    this.m_userDataBuffer.data = this.RequestBuffer(this.m_userDataBuffer.data);
                    return this.m_userDataBuffer.data;
                }
                GetFlagsBuffer() {
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    return this.m_flagsBuffer.data;
                }
                SetParticleFlags(index, newFlags) {
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    const oldFlags = this.m_flagsBuffer.data[index];
                    if (oldFlags & ~newFlags) {
                        this.m_needsUpdateAllParticleFlags = true;
                    }
                    if (~this.m_allParticleFlags & newFlags) {
                        if (newFlags & b2Particle_1.b2ParticleFlag.b2_tensileParticle) {
                            this.m_accumulation2Buffer = this.RequestBuffer(this.m_accumulation2Buffer);
                        }
                        if (newFlags & b2Particle_1.b2ParticleFlag.b2_colorMixingParticle) {
                            this.m_colorBuffer.data = this.RequestBuffer(this.m_colorBuffer.data);
                        }
                        this.m_allParticleFlags |= newFlags;
                    }
                    this.m_flagsBuffer.data[index] = newFlags;
                }
                GetParticleFlags(index) {
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    return this.m_flagsBuffer.data[index];
                }
                SetFlagsBuffer(buffer, capacity) {
                    this.SetUserOverridableBuffer(this.m_flagsBuffer, buffer, capacity);
                }
                SetPositionBuffer(buffer, capacity) {
                    this.SetUserOverridableBuffer(this.m_positionBuffer, buffer, capacity);
                }
                SetVelocityBuffer(buffer, capacity) {
                    this.SetUserOverridableBuffer(this.m_velocityBuffer, buffer, capacity);
                }
                SetColorBuffer(buffer, capacity) {
                    this.SetUserOverridableBuffer(this.m_colorBuffer, buffer, capacity);
                }
                SetUserDataBuffer(buffer, capacity) {
                    this.SetUserOverridableBuffer(this.m_userDataBuffer, buffer, capacity);
                }
                GetContacts() {
                    return this.m_contactBuffer.data;
                }
                GetContactCount() {
                    return this.m_contactBuffer.count;
                }
                GetBodyContacts() {
                    return this.m_bodyContactBuffer.data;
                }
                GetBodyContactCount() {
                    return this.m_bodyContactBuffer.count;
                }
                GetPairs() {
                    return this.m_pairBuffer.data;
                }
                GetPairCount() {
                    return this.m_pairBuffer.count;
                }
                GetTriads() {
                    return this.m_triadBuffer.data;
                }
                GetTriadCount() {
                    return this.m_triadBuffer.count;
                }
                SetStuckThreshold(steps) {
                    this.m_stuckThreshold = steps;
                    if (steps > 0) {
                        this.m_lastBodyContactStepBuffer.data = this.RequestBuffer(this.m_lastBodyContactStepBuffer.data);
                        this.m_bodyContactCountBuffer.data = this.RequestBuffer(this.m_bodyContactCountBuffer.data);
                        this.m_consecutiveContactStepsBuffer.data = this.RequestBuffer(this.m_consecutiveContactStepsBuffer.data);
                    }
                }
                GetStuckCandidates() {
                    return this.m_stuckParticleBuffer.Data();
                }
                GetStuckCandidateCount() {
                    return this.m_stuckParticleBuffer.GetCount();
                }
                ComputeCollisionEnergy() {
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const s_v = b2ParticleSystem.ComputeCollisionEnergy_s_v;
                    const vel_data = this.m_velocityBuffer.data;
                    let sum_v2 = 0;
                    for (let k = 0; k < this.m_contactBuffer.count; k++) {
                        const contact = this.m_contactBuffer.data[k];
                        const a = contact.indexA;
                        const b = contact.indexB;
                        const n = contact.normal;
                        const v = b2Math_28.b2Vec2.SubVV(vel_data[b], vel_data[a], s_v);
                        const vn = b2Math_28.b2Vec2.DotVV(v, n);
                        if (vn < 0) {
                            sum_v2 += vn * vn;
                        }
                    }
                    return 0.5 * this.GetParticleMass() * sum_v2;
                }
                SetStrictContactCheck(enabled) {
                    this.m_def.strictContactCheck = enabled;
                }
                GetStrictContactCheck() {
                    return this.m_def.strictContactCheck;
                }
                SetParticleLifetime(index, lifetime) {
                    const initializeExpirationTimes = this.m_indexByExpirationTimeBuffer.data === null;
                    this.m_expirationTimeBuffer.data = this.RequestBuffer(this.m_expirationTimeBuffer.data);
                    this.m_indexByExpirationTimeBuffer.data = this.RequestBuffer(this.m_indexByExpirationTimeBuffer.data);
                    if (initializeExpirationTimes) {
                        const particleCount = this.GetParticleCount();
                        for (let i = 0; i < particleCount; ++i) {
                            this.m_indexByExpirationTimeBuffer.data[i] = i;
                        }
                    }
                    const quantizedLifetime = lifetime / this.m_def.lifetimeGranularity;
                    const newExpirationTime = quantizedLifetime > 0.0 ? this.GetQuantizedTimeElapsed() + quantizedLifetime : quantizedLifetime;
                    if (newExpirationTime !== this.m_expirationTimeBuffer.data[index]) {
                        this.m_expirationTimeBuffer.data[index] = newExpirationTime;
                        this.m_expirationTimeBufferRequiresSorting = true;
                    }
                }
                GetParticleLifetime(index) {
                    return this.ExpirationTimeToLifetime(this.GetExpirationTimeBuffer()[index]);
                }
                SetDestructionByAge(enable) {
                    if (enable) {
                        this.GetExpirationTimeBuffer();
                    }
                    this.m_def.destroyByAge = enable;
                }
                GetDestructionByAge() {
                    return this.m_def.destroyByAge;
                }
                GetExpirationTimeBuffer() {
                    this.m_expirationTimeBuffer.data = this.RequestBuffer(this.m_expirationTimeBuffer.data);
                    return this.m_expirationTimeBuffer.data;
                }
                ExpirationTimeToLifetime(expirationTime) {
                    return (expirationTime > 0 ?
                        expirationTime - this.GetQuantizedTimeElapsed() :
                        expirationTime) * this.m_def.lifetimeGranularity;
                }
                GetIndexByExpirationTimeBuffer() {
                    if (this.GetParticleCount()) {
                        this.SetParticleLifetime(0, this.GetParticleLifetime(0));
                    }
                    else {
                        this.m_indexByExpirationTimeBuffer.data = this.RequestBuffer(this.m_indexByExpirationTimeBuffer.data);
                    }
                    if (!this.m_indexByExpirationTimeBuffer.data) {
                        throw new Error();
                    }
                    return this.m_indexByExpirationTimeBuffer.data;
                }
                ParticleApplyLinearImpulse(index, impulse) {
                    this.ApplyLinearImpulse(index, index + 1, impulse);
                }
                ApplyLinearImpulse(firstIndex, lastIndex, impulse) {
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const vel_data = this.m_velocityBuffer.data;
                    const numParticles = (lastIndex - firstIndex);
                    const totalMass = numParticles * this.GetParticleMass();
                    const velocityDelta = new b2Math_28.b2Vec2().Copy(impulse).SelfMul(1 / totalMass);
                    for (let i = firstIndex; i < lastIndex; i++) {
                        vel_data[i].SelfAdd(velocityDelta);
                    }
                }
                static IsSignificantForce(force) {
                    return force.x !== 0 || force.y !== 0;
                }
                ParticleApplyForce(index, force) {
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    if (b2ParticleSystem.IsSignificantForce(force) &&
                        this.ForceCanBeApplied(this.m_flagsBuffer.data[index])) {
                        this.PrepareForceBuffer();
                        this.m_forceBuffer[index].SelfAdd(force);
                    }
                }
                ApplyForce(firstIndex, lastIndex, force) {
                    const distributedForce = new b2Math_28.b2Vec2().Copy(force).SelfMul(1 / (lastIndex - firstIndex));
                    if (b2ParticleSystem.IsSignificantForce(distributedForce)) {
                        this.PrepareForceBuffer();
                        for (let i = firstIndex; i < lastIndex; i++) {
                            this.m_forceBuffer[i].SelfAdd(distributedForce);
                        }
                    }
                }
                QueryAABB(callback, aabb) {
                    if (this.m_proxyBuffer.count === 0) {
                        return;
                    }
                    const beginProxy = 0;
                    const endProxy = this.m_proxyBuffer.count;
                    const firstProxy = std_lower_bound(this.m_proxyBuffer.data, beginProxy, endProxy, b2ParticleSystem.computeTag(this.m_inverseDiameter * aabb.lowerBound.x, this.m_inverseDiameter * aabb.lowerBound.y), b2ParticleSystem.Proxy.CompareProxyTag);
                    const lastProxy = std_upper_bound(this.m_proxyBuffer.data, firstProxy, endProxy, b2ParticleSystem.computeTag(this.m_inverseDiameter * aabb.upperBound.x, this.m_inverseDiameter * aabb.upperBound.y), b2ParticleSystem.Proxy.CompareTagProxy);
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    const pos_data = this.m_positionBuffer.data;
                    for (let k = firstProxy; k < lastProxy; ++k) {
                        const proxy = this.m_proxyBuffer.data[k];
                        const i = proxy.index;
                        const p = pos_data[i];
                        if (aabb.lowerBound.x < p.x && p.x < aabb.upperBound.x &&
                            aabb.lowerBound.y < p.y && p.y < aabb.upperBound.y) {
                            if (!callback.ReportParticle(this, i)) {
                                break;
                            }
                        }
                    }
                }
                QueryShapeAABB(callback, shape, xf, childIndex = 0) {
                    const s_aabb = b2ParticleSystem.QueryShapeAABB_s_aabb;
                    const aabb = s_aabb;
                    shape.ComputeAABB(aabb, xf, childIndex);
                    this.QueryAABB(callback, aabb);
                }
                QueryPointAABB(callback, point, slop = b2Settings_30.b2_linearSlop) {
                    const s_aabb = b2ParticleSystem.QueryPointAABB_s_aabb;
                    const aabb = s_aabb;
                    aabb.lowerBound.Set(point.x - slop, point.y - slop);
                    aabb.upperBound.Set(point.x + slop, point.y + slop);
                    this.QueryAABB(callback, aabb);
                }
                RayCast(callback, point1, point2) {
                    const s_aabb = b2ParticleSystem.RayCast_s_aabb;
                    const s_p = b2ParticleSystem.RayCast_s_p;
                    const s_v = b2ParticleSystem.RayCast_s_v;
                    const s_n = b2ParticleSystem.RayCast_s_n;
                    const s_point = b2ParticleSystem.RayCast_s_point;
                    if (this.m_proxyBuffer.count === 0) {
                        return;
                    }
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    const pos_data = this.m_positionBuffer.data;
                    const aabb = s_aabb;
                    b2Math_28.b2Vec2.MinV(point1, point2, aabb.lowerBound);
                    b2Math_28.b2Vec2.MaxV(point1, point2, aabb.upperBound);
                    let fraction = 1;
                    const v = b2Math_28.b2Vec2.SubVV(point2, point1, s_v);
                    const v2 = b2Math_28.b2Vec2.DotVV(v, v);
                    const enumerator = this.GetInsideBoundsEnumerator(aabb);
                    let i;
                    while ((i = enumerator.GetNext()) >= 0) {
                        const p = b2Math_28.b2Vec2.SubVV(point1, pos_data[i], s_p);
                        const pv = b2Math_28.b2Vec2.DotVV(p, v);
                        const p2 = b2Math_28.b2Vec2.DotVV(p, p);
                        const determinant = pv * pv - v2 * (p2 - this.m_squaredDiameter);
                        if (determinant >= 0) {
                            const sqrtDeterminant = b2Math_28.b2Sqrt(determinant);
                            let t = (-pv - sqrtDeterminant) / v2;
                            if (t > fraction) {
                                continue;
                            }
                            if (t < 0) {
                                t = (-pv + sqrtDeterminant) / v2;
                                if (t < 0 || t > fraction) {
                                    continue;
                                }
                            }
                            const n = b2Math_28.b2Vec2.AddVMulSV(p, t, v, s_n);
                            n.Normalize();
                            const f = callback.ReportParticle(this, i, b2Math_28.b2Vec2.AddVMulSV(point1, t, v, s_point), n, t);
                            fraction = b2Math_28.b2Min(fraction, f);
                            if (fraction <= 0) {
                                break;
                            }
                        }
                    }
                }
                ComputeAABB(aabb) {
                    const particleCount = this.GetParticleCount();
                    aabb.lowerBound.x = +b2Settings_30.b2_maxFloat;
                    aabb.lowerBound.y = +b2Settings_30.b2_maxFloat;
                    aabb.upperBound.x = -b2Settings_30.b2_maxFloat;
                    aabb.upperBound.y = -b2Settings_30.b2_maxFloat;
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    const pos_data = this.m_positionBuffer.data;
                    for (let i = 0; i < particleCount; i++) {
                        const p = pos_data[i];
                        b2Math_28.b2Vec2.MinV(aabb.lowerBound, p, aabb.lowerBound);
                        b2Math_28.b2Vec2.MaxV(aabb.upperBound, p, aabb.upperBound);
                    }
                    aabb.lowerBound.x -= this.m_particleDiameter;
                    aabb.lowerBound.y -= this.m_particleDiameter;
                    aabb.upperBound.x += this.m_particleDiameter;
                    aabb.upperBound.y += this.m_particleDiameter;
                }
                FreeBuffer(b, capacity) {
                    if (b === null) {
                        return;
                    }
                    b.length = 0;
                }
                FreeUserOverridableBuffer(b) {
                    if (b.userSuppliedCapacity === 0) {
                        this.FreeBuffer(b.data, this.m_internalAllocatedCapacity);
                    }
                }
                ReallocateBuffer3(oldBuffer, oldCapacity, newCapacity) {
                    if (newCapacity <= oldCapacity) {
                        throw new Error();
                    }
                    const newBuffer = (oldBuffer) ? oldBuffer.slice() : [];
                    newBuffer.length = newCapacity;
                    return newBuffer;
                }
                ReallocateBuffer5(buffer, userSuppliedCapacity, oldCapacity, newCapacity, deferred) {
                    if (newCapacity <= oldCapacity) {
                        throw new Error();
                    }
                    if (!(!userSuppliedCapacity || newCapacity <= userSuppliedCapacity)) {
                        throw new Error();
                    }
                    if ((!deferred || buffer) && !userSuppliedCapacity) {
                        buffer = this.ReallocateBuffer3(buffer, oldCapacity, newCapacity);
                    }
                    return buffer;
                }
                ReallocateBuffer4(buffer, oldCapacity, newCapacity, deferred) {
                    return this.ReallocateBuffer5(buffer.data, buffer.userSuppliedCapacity, oldCapacity, newCapacity, deferred);
                }
                RequestBuffer(buffer) {
                    if (!buffer) {
                        if (this.m_internalAllocatedCapacity === 0) {
                            this.ReallocateInternalAllocatedBuffers(b2Settings_30.b2_minParticleSystemBufferCapacity);
                        }
                        buffer = [];
                        buffer.length = this.m_internalAllocatedCapacity;
                    }
                    return buffer;
                }
                ReallocateHandleBuffers(newCapacity) {
                    this.m_handleIndexBuffer.data = this.ReallocateBuffer4(this.m_handleIndexBuffer, this.m_internalAllocatedCapacity, newCapacity, true);
                }
                ReallocateInternalAllocatedBuffers(capacity) {
                    function LimitCapacity(capacity, maxCount) {
                        return maxCount && capacity > maxCount ? maxCount : capacity;
                    }
                    capacity = LimitCapacity(capacity, this.m_def.maxCount);
                    capacity = LimitCapacity(capacity, this.m_flagsBuffer.userSuppliedCapacity);
                    capacity = LimitCapacity(capacity, this.m_positionBuffer.userSuppliedCapacity);
                    capacity = LimitCapacity(capacity, this.m_velocityBuffer.userSuppliedCapacity);
                    capacity = LimitCapacity(capacity, this.m_colorBuffer.userSuppliedCapacity);
                    capacity = LimitCapacity(capacity, this.m_userDataBuffer.userSuppliedCapacity);
                    if (this.m_internalAllocatedCapacity < capacity) {
                        this.ReallocateHandleBuffers(capacity);
                        this.m_flagsBuffer.data = this.ReallocateBuffer4(this.m_flagsBuffer, this.m_internalAllocatedCapacity, capacity, false);
                        const stuck = this.m_stuckThreshold > 0;
                        this.m_lastBodyContactStepBuffer.data = this.ReallocateBuffer4(this.m_lastBodyContactStepBuffer, this.m_internalAllocatedCapacity, capacity, stuck);
                        this.m_bodyContactCountBuffer.data = this.ReallocateBuffer4(this.m_bodyContactCountBuffer, this.m_internalAllocatedCapacity, capacity, stuck);
                        this.m_consecutiveContactStepsBuffer.data = this.ReallocateBuffer4(this.m_consecutiveContactStepsBuffer, this.m_internalAllocatedCapacity, capacity, stuck);
                        this.m_positionBuffer.data = this.ReallocateBuffer4(this.m_positionBuffer, this.m_internalAllocatedCapacity, capacity, false);
                        this.m_velocityBuffer.data = this.ReallocateBuffer4(this.m_velocityBuffer, this.m_internalAllocatedCapacity, capacity, false);
                        this.m_forceBuffer = this.ReallocateBuffer5(this.m_forceBuffer, 0, this.m_internalAllocatedCapacity, capacity, false);
                        this.m_weightBuffer = this.ReallocateBuffer5(this.m_weightBuffer, 0, this.m_internalAllocatedCapacity, capacity, false);
                        this.m_staticPressureBuffer = this.ReallocateBuffer5(this.m_staticPressureBuffer, 0, this.m_internalAllocatedCapacity, capacity, true);
                        this.m_accumulationBuffer = this.ReallocateBuffer5(this.m_accumulationBuffer, 0, this.m_internalAllocatedCapacity, capacity, false);
                        this.m_accumulation2Buffer = this.ReallocateBuffer5(this.m_accumulation2Buffer, 0, this.m_internalAllocatedCapacity, capacity, true);
                        this.m_depthBuffer = this.ReallocateBuffer5(this.m_depthBuffer, 0, this.m_internalAllocatedCapacity, capacity, true);
                        this.m_colorBuffer.data = this.ReallocateBuffer4(this.m_colorBuffer, this.m_internalAllocatedCapacity, capacity, true);
                        this.m_groupBuffer = this.ReallocateBuffer5(this.m_groupBuffer, 0, this.m_internalAllocatedCapacity, capacity, false);
                        this.m_userDataBuffer.data = this.ReallocateBuffer4(this.m_userDataBuffer, this.m_internalAllocatedCapacity, capacity, true);
                        this.m_expirationTimeBuffer.data = this.ReallocateBuffer4(this.m_expirationTimeBuffer, this.m_internalAllocatedCapacity, capacity, true);
                        this.m_indexByExpirationTimeBuffer.data = this.ReallocateBuffer4(this.m_indexByExpirationTimeBuffer, this.m_internalAllocatedCapacity, capacity, false);
                        this.m_internalAllocatedCapacity = capacity;
                    }
                }
                CreateParticleForGroup(groupDef, xf, p) {
                    const particleDef = new b2Particle_1.b2ParticleDef();
                    particleDef.flags = b2Settings_30.b2Maybe(groupDef.flags, 0);
                    b2Math_28.b2Transform.MulXV(xf, p, particleDef.position);
                    b2Math_28.b2Vec2.AddVV(b2Settings_30.b2Maybe(groupDef.linearVelocity, b2Math_28.b2Vec2.ZERO), b2Math_28.b2Vec2.CrossSV(b2Settings_30.b2Maybe(groupDef.angularVelocity, 0), b2Math_28.b2Vec2.SubVV(particleDef.position, b2Settings_30.b2Maybe(groupDef.position, b2Math_28.b2Vec2.ZERO), b2Math_28.b2Vec2.s_t0), b2Math_28.b2Vec2.s_t0), particleDef.velocity);
                    particleDef.color.Copy(b2Settings_30.b2Maybe(groupDef.color, b2Draw_2.b2Color.ZERO));
                    particleDef.lifetime = b2Settings_30.b2Maybe(groupDef.lifetime, 0);
                    particleDef.userData = groupDef.userData;
                    this.CreateParticle(particleDef);
                }
                CreateParticlesStrokeShapeForGroup(shape, groupDef, xf) {
                    const s_edge = b2ParticleSystem.CreateParticlesStrokeShapeForGroup_s_edge;
                    const s_d = b2ParticleSystem.CreateParticlesStrokeShapeForGroup_s_d;
                    const s_p = b2ParticleSystem.CreateParticlesStrokeShapeForGroup_s_p;
                    let stride = b2Settings_30.b2Maybe(groupDef.stride, 0);
                    if (stride === 0) {
                        stride = this.GetParticleStride();
                    }
                    let positionOnEdge = 0;
                    const childCount = shape.GetChildCount();
                    for (let childIndex = 0; childIndex < childCount; childIndex++) {
                        let edge = null;
                        if (shape.GetType() === b2Shape_7.b2ShapeType.e_edgeShape) {
                            edge = shape;
                        }
                        else {
                            edge = s_edge;
                            shape.GetChildEdge(edge, childIndex);
                        }
                        const d = b2Math_28.b2Vec2.SubVV(edge.m_vertex2, edge.m_vertex1, s_d);
                        const edgeLength = d.Length();
                        while (positionOnEdge < edgeLength) {
                            const p = b2Math_28.b2Vec2.AddVMulSV(edge.m_vertex1, positionOnEdge / edgeLength, d, s_p);
                            this.CreateParticleForGroup(groupDef, xf, p);
                            positionOnEdge += stride;
                        }
                        positionOnEdge -= edgeLength;
                    }
                }
                CreateParticlesFillShapeForGroup(shape, groupDef, xf) {
                    const s_aabb = b2ParticleSystem.CreateParticlesFillShapeForGroup_s_aabb;
                    const s_p = b2ParticleSystem.CreateParticlesFillShapeForGroup_s_p;
                    let stride = b2Settings_30.b2Maybe(groupDef.stride, 0);
                    if (stride === 0) {
                        stride = this.GetParticleStride();
                    }
                    const identity = b2Math_28.b2Transform.IDENTITY;
                    const aabb = s_aabb;
                    shape.ComputeAABB(aabb, identity, 0);
                    for (let y = Math.floor(aabb.lowerBound.y / stride) * stride; y < aabb.upperBound.y; y += stride) {
                        for (let x = Math.floor(aabb.lowerBound.x / stride) * stride; x < aabb.upperBound.x; x += stride) {
                            const p = s_p.Set(x, y);
                            if (shape.TestPoint(identity, p)) {
                                this.CreateParticleForGroup(groupDef, xf, p);
                            }
                        }
                    }
                }
                CreateParticlesWithShapeForGroup(shape, groupDef, xf) {
                    switch (shape.GetType()) {
                        case b2Shape_7.b2ShapeType.e_edgeShape:
                        case b2Shape_7.b2ShapeType.e_chainShape:
                            this.CreateParticlesStrokeShapeForGroup(shape, groupDef, xf);
                            break;
                        case b2Shape_7.b2ShapeType.e_polygonShape:
                        case b2Shape_7.b2ShapeType.e_circleShape:
                            this.CreateParticlesFillShapeForGroup(shape, groupDef, xf);
                            break;
                        default:
                            break;
                    }
                }
                CreateParticlesWithShapesForGroup(shapes, shapeCount, groupDef, xf) {
                    const compositeShape = new b2ParticleSystem.CompositeShape(shapes, shapeCount);
                    this.CreateParticlesFillShapeForGroup(compositeShape, groupDef, xf);
                }
                CloneParticle(oldIndex, group) {
                    const def = new b2Particle_1.b2ParticleDef();
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    def.flags = this.m_flagsBuffer.data[oldIndex];
                    def.position.Copy(this.m_positionBuffer.data[oldIndex]);
                    def.velocity.Copy(this.m_velocityBuffer.data[oldIndex]);
                    if (this.m_colorBuffer.data) {
                        def.color.Copy(this.m_colorBuffer.data[oldIndex]);
                    }
                    if (this.m_userDataBuffer.data) {
                        def.userData = this.m_userDataBuffer.data[oldIndex];
                    }
                    def.group = group;
                    const newIndex = this.CreateParticle(def);
                    if (this.m_handleIndexBuffer.data) {
                        const handle = this.m_handleIndexBuffer.data[oldIndex];
                        if (handle) {
                            handle.SetIndex(newIndex);
                        }
                        this.m_handleIndexBuffer.data[newIndex] = handle;
                        this.m_handleIndexBuffer.data[oldIndex] = null;
                    }
                    if (this.m_lastBodyContactStepBuffer.data) {
                        this.m_lastBodyContactStepBuffer.data[newIndex] =
                            this.m_lastBodyContactStepBuffer.data[oldIndex];
                    }
                    if (this.m_bodyContactCountBuffer.data) {
                        this.m_bodyContactCountBuffer.data[newIndex] =
                            this.m_bodyContactCountBuffer.data[oldIndex];
                    }
                    if (this.m_consecutiveContactStepsBuffer.data) {
                        this.m_consecutiveContactStepsBuffer.data[newIndex] =
                            this.m_consecutiveContactStepsBuffer.data[oldIndex];
                    }
                    if (this.m_hasForce) {
                        this.m_forceBuffer[newIndex].Copy(this.m_forceBuffer[oldIndex]);
                    }
                    if (this.m_staticPressureBuffer) {
                        this.m_staticPressureBuffer[newIndex] = this.m_staticPressureBuffer[oldIndex];
                    }
                    if (this.m_depthBuffer) {
                        this.m_depthBuffer[newIndex] = this.m_depthBuffer[oldIndex];
                    }
                    if (this.m_expirationTimeBuffer.data) {
                        this.m_expirationTimeBuffer.data[newIndex] =
                            this.m_expirationTimeBuffer.data[oldIndex];
                    }
                    return newIndex;
                }
                DestroyParticlesInGroup(group, callDestructionListener = false) {
                    for (let i = group.m_firstIndex; i < group.m_lastIndex; i++) {
                        this.DestroyParticle(i, callDestructionListener);
                    }
                }
                DestroyParticleGroup(group) {
                    if (this.m_world.m_destructionListener) {
                        this.m_world.m_destructionListener.SayGoodbyeParticleGroup(group);
                    }
                    this.SetGroupFlags(group, 0);
                    for (let i = group.m_firstIndex; i < group.m_lastIndex; i++) {
                        this.m_groupBuffer[i] = null;
                    }
                    this.m_groupList.delete(group);
                }
                static ParticleCanBeConnected(flags, group) {
                    return ((flags & (b2Particle_1.b2ParticleFlag.b2_wallParticle | b2Particle_1.b2ParticleFlag.b2_springParticle | b2Particle_1.b2ParticleFlag.b2_elasticParticle)) !== 0) ||
                        ((group !== null) && ((group.GetGroupFlags() & b2ParticleGroup_1.b2ParticleGroupFlag.b2_rigidParticleGroup) !== 0));
                }
                UpdatePairsAndTriads(firstIndex, lastIndex, filter) {
                    const s_dab = b2ParticleSystem.UpdatePairsAndTriads_s_dab;
                    const s_dbc = b2ParticleSystem.UpdatePairsAndTriads_s_dbc;
                    const s_dca = b2ParticleSystem.UpdatePairsAndTriads_s_dca;
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const pos_data = this.m_positionBuffer.data;
                    let particleFlags = 0;
                    for (let i = firstIndex; i < lastIndex; i++) {
                        particleFlags |= this.m_flagsBuffer.data[i];
                    }
                    if (particleFlags & b2ParticleSystem.k_pairFlags) {
                        for (let k = 0; k < this.m_contactBuffer.count; k++) {
                            const contact = this.m_contactBuffer.data[k];
                            const a = contact.indexA;
                            const b = contact.indexB;
                            const af = this.m_flagsBuffer.data[a];
                            const bf = this.m_flagsBuffer.data[b];
                            const groupA = this.m_groupBuffer[a];
                            const groupB = this.m_groupBuffer[b];
                            if (a >= firstIndex && a < lastIndex &&
                                b >= firstIndex && b < lastIndex &&
                                !((af | bf) & b2Particle_1.b2ParticleFlag.b2_zombieParticle) &&
                                ((af | bf) & b2ParticleSystem.k_pairFlags) &&
                                (filter.IsNecessary(a) || filter.IsNecessary(b)) &&
                                b2ParticleSystem.ParticleCanBeConnected(af, groupA) &&
                                b2ParticleSystem.ParticleCanBeConnected(bf, groupB) &&
                                filter.ShouldCreatePair(a, b)) {
                                const pair = this.m_pairBuffer.data[this.m_pairBuffer.Append()];
                                pair.indexA = a;
                                pair.indexB = b;
                                pair.flags = contact.flags;
                                pair.strength = b2Math_28.b2Min(groupA ? groupA.m_strength : 1, groupB ? groupB.m_strength : 1);
                                pair.distance = b2Math_28.b2Vec2.DistanceVV(pos_data[a], pos_data[b]);
                            }
                            std_stable_sort(this.m_pairBuffer.data, 0, this.m_pairBuffer.count, b2ParticleSystem.ComparePairIndices);
                            this.m_pairBuffer.Unique(b2ParticleSystem.MatchPairIndices);
                        }
                    }
                    if (particleFlags & b2ParticleSystem.k_triadFlags) {
                        const diagram = new b2VoronoiDiagram_1.b2VoronoiDiagram(lastIndex - firstIndex);
                        for (let i = firstIndex; i < lastIndex; i++) {
                            const flags = this.m_flagsBuffer.data[i];
                            const group = this.m_groupBuffer[i];
                            if (!(flags & b2Particle_1.b2ParticleFlag.b2_zombieParticle) &&
                                b2ParticleSystem.ParticleCanBeConnected(flags, group)) {
                                diagram.AddGenerator(pos_data[i], i, filter.IsNecessary(i));
                            }
                        }
                        const stride = this.GetParticleStride();
                        diagram.Generate(stride / 2, stride * 2);
                        const system = this;
                        const callback = (a, b, c) => {
                            if (!system.m_flagsBuffer.data) {
                                throw new Error();
                            }
                            const af = system.m_flagsBuffer.data[a];
                            const bf = system.m_flagsBuffer.data[b];
                            const cf = system.m_flagsBuffer.data[c];
                            if (((af | bf | cf) & b2ParticleSystem.k_triadFlags) &&
                                filter.ShouldCreateTriad(a, b, c)) {
                                const pa = pos_data[a];
                                const pb = pos_data[b];
                                const pc = pos_data[c];
                                const dab = b2Math_28.b2Vec2.SubVV(pa, pb, s_dab);
                                const dbc = b2Math_28.b2Vec2.SubVV(pb, pc, s_dbc);
                                const dca = b2Math_28.b2Vec2.SubVV(pc, pa, s_dca);
                                const maxDistanceSquared = b2Settings_30.b2_maxTriadDistanceSquared * system.m_squaredDiameter;
                                if (b2Math_28.b2Vec2.DotVV(dab, dab) > maxDistanceSquared ||
                                    b2Math_28.b2Vec2.DotVV(dbc, dbc) > maxDistanceSquared ||
                                    b2Math_28.b2Vec2.DotVV(dca, dca) > maxDistanceSquared) {
                                    return;
                                }
                                const groupA = system.m_groupBuffer[a];
                                const groupB = system.m_groupBuffer[b];
                                const groupC = system.m_groupBuffer[c];
                                const triad = system.m_triadBuffer.data[system.m_triadBuffer.Append()];
                                triad.indexA = a;
                                triad.indexB = b;
                                triad.indexC = c;
                                triad.flags = af | bf | cf;
                                triad.strength = b2Math_28.b2Min(b2Math_28.b2Min(groupA ? groupA.m_strength : 1, groupB ? groupB.m_strength : 1), groupC ? groupC.m_strength : 1);
                                const midPoint_x = (pa.x + pb.x + pc.x) / 3.0;
                                const midPoint_y = (pa.y + pb.y + pc.y) / 3.0;
                                triad.pa.x = pa.x - midPoint_x;
                                triad.pa.y = pa.y - midPoint_y;
                                triad.pb.x = pb.x - midPoint_x;
                                triad.pb.y = pb.y - midPoint_y;
                                triad.pc.x = pc.x - midPoint_x;
                                triad.pc.y = pc.y - midPoint_y;
                                triad.ka = -b2Math_28.b2Vec2.DotVV(dca, dab);
                                triad.kb = -b2Math_28.b2Vec2.DotVV(dab, dbc);
                                triad.kc = -b2Math_28.b2Vec2.DotVV(dbc, dca);
                                triad.s = b2Math_28.b2Vec2.CrossVV(pa, pb) + b2Math_28.b2Vec2.CrossVV(pb, pc) + b2Math_28.b2Vec2.CrossVV(pc, pa);
                            }
                        };
                        diagram.GetNodes(callback);
                        std_stable_sort(this.m_triadBuffer.data, 0, this.m_triadBuffer.count, b2ParticleSystem.CompareTriadIndices);
                        this.m_triadBuffer.Unique(b2ParticleSystem.MatchTriadIndices);
                    }
                }
                UpdatePairsAndTriadsWithReactiveParticles() {
                    const filter = new b2ParticleSystem.ReactiveFilter(this.m_flagsBuffer);
                    this.UpdatePairsAndTriads(0, this.m_count, filter);
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    for (let i = 0; i < this.m_count; i++) {
                        this.m_flagsBuffer.data[i] &= ~b2Particle_1.b2ParticleFlag.b2_reactiveParticle;
                    }
                    this.m_allParticleFlags &= ~b2Particle_1.b2ParticleFlag.b2_reactiveParticle;
                }
                static ComparePairIndices(a, b) {
                    const diffA = a.indexA - b.indexA;
                    if (diffA !== 0) {
                        return diffA < 0;
                    }
                    return a.indexB < b.indexB;
                }
                static MatchPairIndices(a, b) {
                    return a.indexA === b.indexA && a.indexB === b.indexB;
                }
                static CompareTriadIndices(a, b) {
                    const diffA = a.indexA - b.indexA;
                    if (diffA !== 0) {
                        return diffA < 0;
                    }
                    const diffB = a.indexB - b.indexB;
                    if (diffB !== 0) {
                        return diffB < 0;
                    }
                    return a.indexC < b.indexC;
                }
                static MatchTriadIndices(a, b) {
                    return a.indexA === b.indexA && a.indexB === b.indexB && a.indexC === b.indexC;
                }
                static InitializeParticleLists(group, nodeBuffer) {
                    const bufferIndex = group.GetBufferIndex();
                    const particleCount = group.GetParticleCount();
                    for (let i = 0; i < particleCount; i++) {
                        const node = nodeBuffer[i];
                        node.list = node;
                        node.next = null;
                        node.count = 1;
                        node.index = i + bufferIndex;
                    }
                }
                MergeParticleListsInContact(group, nodeBuffer) {
                    const bufferIndex = group.GetBufferIndex();
                    for (let k = 0; k < this.m_contactBuffer.count; k++) {
                        const contact = this.m_contactBuffer.data[k];
                        const a = contact.indexA;
                        const b = contact.indexB;
                        if (!group.ContainsParticle(a) || !group.ContainsParticle(b)) {
                            continue;
                        }
                        let listA = nodeBuffer[a - bufferIndex].list;
                        let listB = nodeBuffer[b - bufferIndex].list;
                        if (listA === listB) {
                            continue;
                        }
                        if (listA.count < listB.count) {
                            const _tmp = listA;
                            listA = listB;
                            listB = _tmp;
                        }
                        b2ParticleSystem.MergeParticleLists(listA, listB);
                    }
                }
                static MergeParticleLists(listA, listB) {
                    for (let b = listB;;) {
                        b.list = listA;
                        const nextB = b.next;
                        if (nextB) {
                            b = nextB;
                        }
                        else {
                            b.next = listA.next;
                            break;
                        }
                    }
                    listA.next = listB;
                    listA.count += listB.count;
                    listB.count = 0;
                }
                static FindLongestParticleList(group, nodeBuffer) {
                    const particleCount = group.GetParticleCount();
                    let result = nodeBuffer[0];
                    for (let i = 0; i < particleCount; i++) {
                        const node = nodeBuffer[i];
                        if (result.count < node.count) {
                            result = node;
                        }
                    }
                    return result;
                }
                MergeZombieParticleListNodes(group, nodeBuffer, survivingList) {
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    const particleCount = group.GetParticleCount();
                    for (let i = 0; i < particleCount; i++) {
                        const node = nodeBuffer[i];
                        if (node !== survivingList &&
                            (this.m_flagsBuffer.data[node.index] & b2Particle_1.b2ParticleFlag.b2_zombieParticle)) {
                            b2ParticleSystem.MergeParticleListAndNode(survivingList, node);
                        }
                    }
                }
                static MergeParticleListAndNode(list, node) {
                    node.list = list;
                    node.next = list.next;
                    list.next = node;
                    list.count++;
                    node.count = 0;
                }
                CreateParticleGroupsFromParticleList(group, nodeBuffer, survivingList) {
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    const particleCount = group.GetParticleCount();
                    const def = new b2ParticleGroup_1.b2ParticleGroupDef();
                    def.groupFlags = group.GetGroupFlags();
                    def.userData = group.GetUserData();
                    for (let i = 0; i < particleCount; i++) {
                        const list = nodeBuffer[i];
                        if (!list.count || list === survivingList) {
                            continue;
                        }
                        const newGroup = this.CreateParticleGroup(def);
                        for (let node = list; node; node = node.next) {
                            const oldIndex = node.index;
                            const newIndex = this.CloneParticle(oldIndex, newGroup);
                            this.m_flagsBuffer.data[oldIndex] |= b2Particle_1.b2ParticleFlag.b2_zombieParticle;
                            node.index = newIndex;
                        }
                    }
                }
                UpdatePairsAndTriadsWithParticleList(group, nodeBuffer) {
                    const bufferIndex = group.GetBufferIndex();
                    for (let k = 0; k < this.m_pairBuffer.count; k++) {
                        const pair = this.m_pairBuffer.data[k];
                        const a = pair.indexA;
                        const b = pair.indexB;
                        if (group.ContainsParticle(a)) {
                            pair.indexA = nodeBuffer[a - bufferIndex].index;
                        }
                        if (group.ContainsParticle(b)) {
                            pair.indexB = nodeBuffer[b - bufferIndex].index;
                        }
                    }
                    for (let k = 0; k < this.m_triadBuffer.count; k++) {
                        const triad = this.m_triadBuffer.data[k];
                        const a = triad.indexA;
                        const b = triad.indexB;
                        const c = triad.indexC;
                        if (group.ContainsParticle(a)) {
                            triad.indexA = nodeBuffer[a - bufferIndex].index;
                        }
                        if (group.ContainsParticle(b)) {
                            triad.indexB = nodeBuffer[b - bufferIndex].index;
                        }
                        if (group.ContainsParticle(c)) {
                            triad.indexC = nodeBuffer[c - bufferIndex].index;
                        }
                    }
                }
                ComputeDepth() {
                    const contactGroups = [];
                    let contactGroupsCount = 0;
                    for (let k = 0; k < this.m_contactBuffer.count; k++) {
                        const contact = this.m_contactBuffer.data[k];
                        const a = contact.indexA;
                        const b = contact.indexB;
                        const groupA = this.m_groupBuffer[a];
                        const groupB = this.m_groupBuffer[b];
                        if (groupA && groupA === groupB &&
                            (groupA.m_groupFlags & b2ParticleGroup_1.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth)) {
                            contactGroups[contactGroupsCount++] = contact;
                        }
                    }
                    const groupsToUpdate = [];
                    let groupsToUpdateCount = 0;
                    for (const group of this.m_groupList) {
                        if (group.m_groupFlags & b2ParticleGroup_1.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth) {
                            groupsToUpdate[groupsToUpdateCount++] = group;
                            this.SetGroupFlags(group, group.m_groupFlags &
                                ~b2ParticleGroup_1.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth);
                            for (let i = group.m_firstIndex; i < group.m_lastIndex; i++) {
                                this.m_accumulationBuffer[i] = 0;
                            }
                        }
                    }
                    for (let k = 0; k < contactGroupsCount; k++) {
                        const contact = contactGroups[k];
                        const a = contact.indexA;
                        const b = contact.indexB;
                        const w = contact.weight;
                        this.m_accumulationBuffer[a] += w;
                        this.m_accumulationBuffer[b] += w;
                    }
                    for (let i = 0; i < groupsToUpdateCount; i++) {
                        const group = groupsToUpdate[i];
                        for (let i = group.m_firstIndex; i < group.m_lastIndex; i++) {
                            const w = this.m_accumulationBuffer[i];
                            this.m_depthBuffer[i] = w < 0.8 ? 0 : b2Settings_30.b2_maxFloat;
                        }
                    }
                    const iterationCount = b2Math_28.b2Sqrt(this.m_count) >> 0;
                    for (let t = 0; t < iterationCount; t++) {
                        let updated = false;
                        for (let k = 0; k < contactGroupsCount; k++) {
                            const contact = contactGroups[k];
                            const a = contact.indexA;
                            const b = contact.indexB;
                            const r = 1 - contact.weight;
                            const ap0 = this.m_depthBuffer[a];
                            const bp0 = this.m_depthBuffer[b];
                            const ap1 = bp0 + r;
                            const bp1 = ap0 + r;
                            if (ap0 > ap1) {
                                this.m_depthBuffer[a] = ap1;
                                updated = true;
                            }
                            if (bp0 > bp1) {
                                this.m_depthBuffer[b] = bp1;
                                updated = true;
                            }
                        }
                        if (!updated) {
                            break;
                        }
                    }
                    for (let i = 0; i < groupsToUpdateCount; i++) {
                        const group = groupsToUpdate[i];
                        for (let i = group.m_firstIndex; i < group.m_lastIndex; i++) {
                            if (this.m_depthBuffer[i] < b2Settings_30.b2_maxFloat) {
                                this.m_depthBuffer[i] *= this.m_particleDiameter;
                            }
                            else {
                                this.m_depthBuffer[i] = 0;
                            }
                        }
                    }
                }
                GetInsideBoundsEnumerator(aabb) {
                    const lowerTag = b2ParticleSystem.computeTag(this.m_inverseDiameter * aabb.lowerBound.x - 1, this.m_inverseDiameter * aabb.lowerBound.y - 1);
                    const upperTag = b2ParticleSystem.computeTag(this.m_inverseDiameter * aabb.upperBound.x + 1, this.m_inverseDiameter * aabb.upperBound.y + 1);
                    const beginProxy = 0;
                    const endProxy = this.m_proxyBuffer.count;
                    const firstProxy = std_lower_bound(this.m_proxyBuffer.data, beginProxy, endProxy, lowerTag, b2ParticleSystem.Proxy.CompareProxyTag);
                    const lastProxy = std_upper_bound(this.m_proxyBuffer.data, beginProxy, endProxy, upperTag, b2ParticleSystem.Proxy.CompareTagProxy);
                    return new b2ParticleSystem.InsideBoundsEnumerator(this, lowerTag, upperTag, firstProxy, lastProxy);
                }
                UpdateAllParticleFlags() {
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    this.m_allParticleFlags = 0;
                    for (let i = 0; i < this.m_count; i++) {
                        this.m_allParticleFlags |= this.m_flagsBuffer.data[i];
                    }
                    this.m_needsUpdateAllParticleFlags = false;
                }
                UpdateAllGroupFlags() {
                    this.m_allGroupFlags = 0;
                    for (const group of this.m_groupList) {
                        this.m_allGroupFlags |= group.m_groupFlags;
                    }
                    this.m_needsUpdateAllGroupFlags = false;
                }
                AddContact(a, b, contacts) {
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    const s_d = b2ParticleSystem.AddContact_s_d;
                    const pos_data = this.m_positionBuffer.data;
                    const d = b2Math_28.b2Vec2.SubVV(pos_data[b], pos_data[a], s_d);
                    const distBtParticlesSq = b2Math_28.b2Vec2.DotVV(d, d);
                    if (distBtParticlesSq < this.m_squaredDiameter) {
                        let invD = b2Math_28.b2InvSqrt(distBtParticlesSq);
                        if (!isFinite(invD)) {
                            invD = 1.98177537e+019;
                        }
                        const contact = this.m_contactBuffer.data[this.m_contactBuffer.Append()];
                        contact.indexA = a;
                        contact.indexB = b;
                        contact.flags = this.m_flagsBuffer.data[a] | this.m_flagsBuffer.data[b];
                        contact.weight = 1 - distBtParticlesSq * invD * this.m_inverseDiameter;
                        b2Math_28.b2Vec2.MulSV(invD, d, contact.normal);
                    }
                }
                FindContacts_Reference(contacts) {
                    const beginProxy = 0;
                    const endProxy = this.m_proxyBuffer.count;
                    this.m_contactBuffer.count = 0;
                    for (let a = beginProxy, c = beginProxy; a < endProxy; a++) {
                        const rightTag = b2ParticleSystem.computeRelativeTag(this.m_proxyBuffer.data[a].tag, 1, 0);
                        for (let b = a + 1; b < endProxy; b++) {
                            if (rightTag < this.m_proxyBuffer.data[b].tag) {
                                break;
                            }
                            this.AddContact(this.m_proxyBuffer.data[a].index, this.m_proxyBuffer.data[b].index, this.m_contactBuffer);
                        }
                        const bottomLeftTag = b2ParticleSystem.computeRelativeTag(this.m_proxyBuffer.data[a].tag, -1, 1);
                        for (; c < endProxy; c++) {
                            if (bottomLeftTag <= this.m_proxyBuffer.data[c].tag) {
                                break;
                            }
                        }
                        const bottomRightTag = b2ParticleSystem.computeRelativeTag(this.m_proxyBuffer.data[a].tag, 1, 1);
                        for (let b = c; b < endProxy; b++) {
                            if (bottomRightTag < this.m_proxyBuffer.data[b].tag) {
                                break;
                            }
                            this.AddContact(this.m_proxyBuffer.data[a].index, this.m_proxyBuffer.data[b].index, this.m_contactBuffer);
                        }
                    }
                }
                FindContacts(contacts) {
                    this.FindContacts_Reference(contacts);
                }
                UpdateProxies_Reference(proxies) {
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    const pos_data = this.m_positionBuffer.data;
                    const inv_diam = this.m_inverseDiameter;
                    for (let k = 0; k < this.m_proxyBuffer.count; ++k) {
                        const proxy = this.m_proxyBuffer.data[k];
                        const i = proxy.index;
                        const p = pos_data[i];
                        proxy.tag = b2ParticleSystem.computeTag(inv_diam * p.x, inv_diam * p.y);
                    }
                }
                UpdateProxies(proxies) {
                    this.UpdateProxies_Reference(proxies);
                }
                SortProxies(proxies) {
                    std_sort(this.m_proxyBuffer.data, 0, this.m_proxyBuffer.count, b2ParticleSystem.Proxy.CompareProxyProxy);
                }
                FilterContacts(contacts) {
                    const contactFilter = this.GetParticleContactFilter();
                    if (contactFilter === null) {
                        return;
                    }
                    const system = this;
                    const predicate = (contact) => {
                        return ((contact.flags & b2Particle_1.b2ParticleFlag.b2_particleContactFilterParticle) !== 0) && !contactFilter.ShouldCollideParticleParticle(system, contact.indexA, contact.indexB);
                    };
                    this.m_contactBuffer.RemoveIf(predicate);
                }
                NotifyContactListenerPreContact(particlePairs) {
                    const contactListener = this.GetParticleContactListener();
                    if (contactListener === null) {
                        return;
                    }
                    particlePairs.Initialize(this.m_contactBuffer, this.m_flagsBuffer);
                    throw new Error();
                }
                NotifyContactListenerPostContact(particlePairs) {
                    const contactListener = this.GetParticleContactListener();
                    if (contactListener === null) {
                        return;
                    }
                    for (let k = 0; k < this.m_contactBuffer.count; ++k) {
                        const contact = this.m_contactBuffer.data[k];
                        const itemIndex = -1;
                        if (itemIndex >= 0) {
                            particlePairs.Invalidate(itemIndex);
                        }
                        else {
                            contactListener.BeginContactParticleParticle(this, contact);
                        }
                    }
                    throw new Error();
                }
                static b2ParticleContactIsZombie(contact) {
                    return (contact.flags & b2Particle_1.b2ParticleFlag.b2_zombieParticle) === b2Particle_1.b2ParticleFlag.b2_zombieParticle;
                }
                UpdateContacts(exceptZombie) {
                    this.UpdateProxies(this.m_proxyBuffer);
                    this.SortProxies(this.m_proxyBuffer);
                    const particlePairs = new b2ParticleSystem.b2ParticlePairSet();
                    this.NotifyContactListenerPreContact(particlePairs);
                    this.FindContacts(this.m_contactBuffer);
                    this.FilterContacts(this.m_contactBuffer);
                    this.NotifyContactListenerPostContact(particlePairs);
                    if (exceptZombie) {
                        this.m_contactBuffer.RemoveIf(b2ParticleSystem.b2ParticleContactIsZombie);
                    }
                }
                NotifyBodyContactListenerPreContact(fixtureSet) {
                    const contactListener = this.GetFixtureContactListener();
                    if (contactListener === null) {
                        return;
                    }
                    fixtureSet.Initialize(this.m_bodyContactBuffer, this.m_flagsBuffer);
                    throw new Error();
                }
                NotifyBodyContactListenerPostContact(fixtureSet) {
                    const contactListener = this.GetFixtureContactListener();
                    if (contactListener === null) {
                        return;
                    }
                    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
                        const contact = this.m_bodyContactBuffer.data[k];
                        const index = -1;
                        if (index >= 0) {
                            fixtureSet.Invalidate(index);
                        }
                        else {
                            contactListener.BeginContactFixtureParticle(this, contact);
                        }
                    }
                    throw new Error();
                }
                UpdateBodyContacts() {
                    const s_aabb = b2ParticleSystem.UpdateBodyContacts_s_aabb;
                    const fixtureSet = new b2ParticleSystem.FixtureParticleSet();
                    this.NotifyBodyContactListenerPreContact(fixtureSet);
                    if (this.m_stuckThreshold > 0) {
                        if (!this.m_bodyContactCountBuffer.data) {
                            throw new Error();
                        }
                        if (!this.m_lastBodyContactStepBuffer.data) {
                            throw new Error();
                        }
                        if (!this.m_consecutiveContactStepsBuffer.data) {
                            throw new Error();
                        }
                        const particleCount = this.GetParticleCount();
                        for (let i = 0; i < particleCount; i++) {
                            this.m_bodyContactCountBuffer.data[i] = 0;
                            if (this.m_timestamp > (this.m_lastBodyContactStepBuffer.data[i] + 1)) {
                                this.m_consecutiveContactStepsBuffer.data[i] = 0;
                            }
                        }
                    }
                    this.m_bodyContactBuffer.SetCount(0);
                    this.m_stuckParticleBuffer.SetCount(0);
                    const aabb = s_aabb;
                    this.ComputeAABB(aabb);
                    const callback = new b2ParticleSystem.UpdateBodyContactsCallback(this, this.GetFixtureContactFilter());
                    this.m_world.QueryAABB(callback, aabb);
                    if (this.m_def.strictContactCheck) {
                        this.RemoveSpuriousBodyContacts();
                    }
                    this.NotifyBodyContactListenerPostContact(fixtureSet);
                }
                Solve(step) {
                    const s_subStep = b2ParticleSystem.Solve_s_subStep;
                    if (this.m_count === 0) {
                        return;
                    }
                    if (this.m_expirationTimeBuffer.data) {
                        this.SolveLifetimes(step);
                    }
                    if (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_zombieParticle) {
                        this.SolveZombie();
                    }
                    if (this.m_needsUpdateAllParticleFlags) {
                        this.UpdateAllParticleFlags();
                    }
                    if (this.m_needsUpdateAllGroupFlags) {
                        this.UpdateAllGroupFlags();
                    }
                    if (this.m_paused) {
                        return;
                    }
                    for (this.m_iterationIndex = 0; this.m_iterationIndex < step.particleIterations; this.m_iterationIndex++) {
                        ++this.m_timestamp;
                        const subStep = s_subStep.Copy(step);
                        subStep.dt /= step.particleIterations;
                        subStep.inv_dt *= step.particleIterations;
                        this.UpdateContacts(false);
                        this.UpdateBodyContacts();
                        this.ComputeWeight();
                        if (this.m_allGroupFlags & b2ParticleGroup_1.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth) {
                            this.ComputeDepth();
                        }
                        if (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_reactiveParticle) {
                            this.UpdatePairsAndTriadsWithReactiveParticles();
                        }
                        if (this.m_hasForce) {
                            this.SolveForce(subStep);
                        }
                        if (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_viscousParticle) {
                            this.SolveViscous();
                        }
                        if (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_repulsiveParticle) {
                            this.SolveRepulsive(subStep);
                        }
                        if (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_powderParticle) {
                            this.SolvePowder(subStep);
                        }
                        if (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_tensileParticle) {
                            this.SolveTensile(subStep);
                        }
                        if (this.m_allGroupFlags & b2ParticleGroup_1.b2ParticleGroupFlag.b2_solidParticleGroup) {
                            this.SolveSolid(subStep);
                        }
                        if (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_colorMixingParticle) {
                            this.SolveColorMixing();
                        }
                        this.SolveGravity(subStep);
                        if (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_staticPressureParticle) {
                            this.SolveStaticPressure(subStep);
                        }
                        this.SolvePressure(subStep);
                        this.SolveDamping(subStep);
                        if (this.m_allParticleFlags & b2ParticleSystem.k_extraDampingFlags) {
                            this.SolveExtraDamping();
                        }
                        if (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_elasticParticle) {
                            this.SolveElastic(subStep);
                        }
                        if (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_springParticle) {
                            this.SolveSpring(subStep);
                        }
                        this.LimitVelocity(subStep);
                        if (this.m_allGroupFlags & b2ParticleGroup_1.b2ParticleGroupFlag.b2_rigidParticleGroup) {
                            this.SolveRigidDamping();
                        }
                        if (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_barrierParticle) {
                            this.SolveBarrier(subStep);
                        }
                        this.SolveCollision(subStep);
                        if (this.m_allGroupFlags & b2ParticleGroup_1.b2ParticleGroupFlag.b2_rigidParticleGroup) {
                            this.SolveRigid(subStep);
                        }
                        if (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_wallParticle) {
                            this.SolveWall();
                        }
                        if (!this.m_positionBuffer.data) {
                            throw new Error();
                        }
                        if (!this.m_velocityBuffer.data) {
                            throw new Error();
                        }
                        for (let i = 0; i < this.m_count; i++) {
                            this.m_positionBuffer.data[i].SelfMulAdd(subStep.dt, this.m_velocityBuffer.data[i]);
                        }
                    }
                }
                SolveCollision(step) {
                    const s_aabb = b2ParticleSystem.SolveCollision_s_aabb;
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const pos_data = this.m_positionBuffer.data;
                    const vel_data = this.m_velocityBuffer.data;
                    const aabb = s_aabb;
                    aabb.lowerBound.x = +b2Settings_30.b2_maxFloat;
                    aabb.lowerBound.y = +b2Settings_30.b2_maxFloat;
                    aabb.upperBound.x = -b2Settings_30.b2_maxFloat;
                    aabb.upperBound.y = -b2Settings_30.b2_maxFloat;
                    for (let i = 0; i < this.m_count; i++) {
                        const v = vel_data[i];
                        const p1 = pos_data[i];
                        const p2_x = p1.x + step.dt * v.x;
                        const p2_y = p1.y + step.dt * v.y;
                        aabb.lowerBound.x = b2Math_28.b2Min(aabb.lowerBound.x, b2Math_28.b2Min(p1.x, p2_x));
                        aabb.lowerBound.y = b2Math_28.b2Min(aabb.lowerBound.y, b2Math_28.b2Min(p1.y, p2_y));
                        aabb.upperBound.x = b2Math_28.b2Max(aabb.upperBound.x, b2Math_28.b2Max(p1.x, p2_x));
                        aabb.upperBound.y = b2Math_28.b2Max(aabb.upperBound.y, b2Math_28.b2Max(p1.y, p2_y));
                    }
                    const callback = new b2ParticleSystem.SolveCollisionCallback(this, step);
                    this.m_world.QueryAABB(callback, aabb);
                }
                LimitVelocity(step) {
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const vel_data = this.m_velocityBuffer.data;
                    const criticalVelocitySquared = this.GetCriticalVelocitySquared(step);
                    for (let i = 0; i < this.m_count; i++) {
                        const v = vel_data[i];
                        const v2 = b2Math_28.b2Vec2.DotVV(v, v);
                        if (v2 > criticalVelocitySquared) {
                            v.SelfMul(b2Math_28.b2Sqrt(criticalVelocitySquared / v2));
                        }
                    }
                }
                SolveGravity(step) {
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const s_gravity = b2ParticleSystem.SolveGravity_s_gravity;
                    const vel_data = this.m_velocityBuffer.data;
                    const gravity = b2Math_28.b2Vec2.MulSV(step.dt * this.m_def.gravityScale, this.m_world.GetGravity(), s_gravity);
                    for (let i = 0; i < this.m_count; i++) {
                        vel_data[i].SelfAdd(gravity);
                    }
                }
                SolveBarrier(step) {
                    const s_aabb = b2ParticleSystem.SolveBarrier_s_aabb;
                    const s_va = b2ParticleSystem.SolveBarrier_s_va;
                    const s_vb = b2ParticleSystem.SolveBarrier_s_vb;
                    const s_pba = b2ParticleSystem.SolveBarrier_s_pba;
                    const s_vba = b2ParticleSystem.SolveBarrier_s_vba;
                    const s_vc = b2ParticleSystem.SolveBarrier_s_vc;
                    const s_pca = b2ParticleSystem.SolveBarrier_s_pca;
                    const s_vca = b2ParticleSystem.SolveBarrier_s_vca;
                    const s_qba = b2ParticleSystem.SolveBarrier_s_qba;
                    const s_qca = b2ParticleSystem.SolveBarrier_s_qca;
                    const s_dv = b2ParticleSystem.SolveBarrier_s_dv;
                    const s_f = b2ParticleSystem.SolveBarrier_s_f;
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const pos_data = this.m_positionBuffer.data;
                    const vel_data = this.m_velocityBuffer.data;
                    for (let i = 0; i < this.m_count; i++) {
                        const flags = this.m_flagsBuffer.data[i];
                        if ((flags & b2ParticleSystem.k_barrierWallFlags) !== 0) {
                            vel_data[i].SetZero();
                        }
                    }
                    const tmax = b2Settings_30.b2_barrierCollisionTime * step.dt;
                    const mass = this.GetParticleMass();
                    for (let k = 0; k < this.m_pairBuffer.count; k++) {
                        const pair = this.m_pairBuffer.data[k];
                        if (pair.flags & b2Particle_1.b2ParticleFlag.b2_barrierParticle) {
                            const a = pair.indexA;
                            const b = pair.indexB;
                            const pa = pos_data[a];
                            const pb = pos_data[b];
                            const aabb = s_aabb;
                            b2Math_28.b2Vec2.MinV(pa, pb, aabb.lowerBound);
                            b2Math_28.b2Vec2.MaxV(pa, pb, aabb.upperBound);
                            const aGroup = this.m_groupBuffer[a];
                            const bGroup = this.m_groupBuffer[b];
                            const va = this.GetLinearVelocity(aGroup, a, pa, s_va);
                            const vb = this.GetLinearVelocity(bGroup, b, pb, s_vb);
                            const pba = b2Math_28.b2Vec2.SubVV(pb, pa, s_pba);
                            const vba = b2Math_28.b2Vec2.SubVV(vb, va, s_vba);
                            const enumerator = this.GetInsideBoundsEnumerator(aabb);
                            let c;
                            while ((c = enumerator.GetNext()) >= 0) {
                                const pc = pos_data[c];
                                const cGroup = this.m_groupBuffer[c];
                                if (aGroup !== cGroup && bGroup !== cGroup) {
                                    const vc = this.GetLinearVelocity(cGroup, c, pc, s_vc);
                                    const pca = b2Math_28.b2Vec2.SubVV(pc, pa, s_pca);
                                    const vca = b2Math_28.b2Vec2.SubVV(vc, va, s_vca);
                                    const e2 = b2Math_28.b2Vec2.CrossVV(vba, vca);
                                    const e1 = b2Math_28.b2Vec2.CrossVV(pba, vca) - b2Math_28.b2Vec2.CrossVV(pca, vba);
                                    const e0 = b2Math_28.b2Vec2.CrossVV(pba, pca);
                                    let s, t;
                                    const qba = s_qba, qca = s_qca;
                                    if (e2 === 0) {
                                        if (e1 === 0) {
                                            continue;
                                        }
                                        t = -e0 / e1;
                                        if (!(t >= 0 && t < tmax)) {
                                            continue;
                                        }
                                        b2Math_28.b2Vec2.AddVMulSV(pba, t, vba, qba);
                                        b2Math_28.b2Vec2.AddVMulSV(pca, t, vca, qca);
                                        s = b2Math_28.b2Vec2.DotVV(qba, qca) / b2Math_28.b2Vec2.DotVV(qba, qba);
                                        if (!(s >= 0 && s <= 1)) {
                                            continue;
                                        }
                                    }
                                    else {
                                        const det = e1 * e1 - 4 * e0 * e2;
                                        if (det < 0) {
                                            continue;
                                        }
                                        const sqrtDet = b2Math_28.b2Sqrt(det);
                                        let t1 = (-e1 - sqrtDet) / (2 * e2);
                                        let t2 = (-e1 + sqrtDet) / (2 * e2);
                                        if (t1 > t2) {
                                            const tmp = t1;
                                            t1 = t2;
                                            t2 = tmp;
                                        }
                                        t = t1;
                                        b2Math_28.b2Vec2.AddVMulSV(pba, t, vba, qba);
                                        b2Math_28.b2Vec2.AddVMulSV(pca, t, vca, qca);
                                        s = b2Math_28.b2Vec2.DotVV(qba, qca) / b2Math_28.b2Vec2.DotVV(qba, qba);
                                        if (!(t >= 0 && t < tmax && s >= 0 && s <= 1)) {
                                            t = t2;
                                            if (!(t >= 0 && t < tmax)) {
                                                continue;
                                            }
                                            b2Math_28.b2Vec2.AddVMulSV(pba, t, vba, qba);
                                            b2Math_28.b2Vec2.AddVMulSV(pca, t, vca, qca);
                                            s = b2Math_28.b2Vec2.DotVV(qba, qca) / b2Math_28.b2Vec2.DotVV(qba, qba);
                                            if (!(s >= 0 && s <= 1)) {
                                                continue;
                                            }
                                        }
                                    }
                                    const dv = s_dv;
                                    dv.x = va.x + s * vba.x - vc.x;
                                    dv.y = va.y + s * vba.y - vc.y;
                                    const f = b2Math_28.b2Vec2.MulSV(mass, dv, s_f);
                                    if (cGroup && this.IsRigidGroup(cGroup)) {
                                        const mass = cGroup.GetMass();
                                        const inertia = cGroup.GetInertia();
                                        if (mass > 0) {
                                            cGroup.m_linearVelocity.SelfMulAdd(1 / mass, f);
                                        }
                                        if (inertia > 0) {
                                            cGroup.m_angularVelocity += b2Math_28.b2Vec2.CrossVV(b2Math_28.b2Vec2.SubVV(pc, cGroup.GetCenter(), b2Math_28.b2Vec2.s_t0), f) / inertia;
                                        }
                                    }
                                    else {
                                        vel_data[c].SelfAdd(dv);
                                    }
                                    this.ParticleApplyForce(c, f.SelfMul(-step.inv_dt));
                                }
                            }
                        }
                    }
                }
                SolveStaticPressure(step) {
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    this.m_staticPressureBuffer = this.RequestBuffer(this.m_staticPressureBuffer);
                    const criticalPressure = this.GetCriticalPressure(step);
                    const pressurePerWeight = this.m_def.staticPressureStrength * criticalPressure;
                    const maxPressure = b2Settings_31.b2_maxParticlePressure * criticalPressure;
                    const relaxation = this.m_def.staticPressureRelaxation;
                    for (let t = 0; t < this.m_def.staticPressureIterations; t++) {
                        for (let i = 0; i < this.m_count; i++) {
                            this.m_accumulationBuffer[i] = 0;
                        }
                        for (let k = 0; k < this.m_contactBuffer.count; k++) {
                            const contact = this.m_contactBuffer.data[k];
                            if (contact.flags & b2Particle_1.b2ParticleFlag.b2_staticPressureParticle) {
                                const a = contact.indexA;
                                const b = contact.indexB;
                                const w = contact.weight;
                                this.m_accumulationBuffer[a] += w * this.m_staticPressureBuffer[b];
                                this.m_accumulationBuffer[b] += w * this.m_staticPressureBuffer[a];
                            }
                        }
                        for (let i = 0; i < this.m_count; i++) {
                            const w = this.m_weightBuffer[i];
                            if (this.m_flagsBuffer.data[i] & b2Particle_1.b2ParticleFlag.b2_staticPressureParticle) {
                                const wh = this.m_accumulationBuffer[i];
                                const h = (wh + pressurePerWeight * (w - b2Settings_31.b2_minParticleWeight)) /
                                    (w + relaxation);
                                this.m_staticPressureBuffer[i] = b2Math_28.b2Clamp(h, 0.0, maxPressure);
                            }
                            else {
                                this.m_staticPressureBuffer[i] = 0;
                            }
                        }
                    }
                }
                ComputeWeight() {
                    for (let k = 0; k < this.m_count; k++) {
                        this.m_weightBuffer[k] = 0;
                    }
                    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
                        const contact = this.m_bodyContactBuffer.data[k];
                        const a = contact.index;
                        const w = contact.weight;
                        this.m_weightBuffer[a] += w;
                    }
                    for (let k = 0; k < this.m_contactBuffer.count; k++) {
                        const contact = this.m_contactBuffer.data[k];
                        const a = contact.indexA;
                        const b = contact.indexB;
                        const w = contact.weight;
                        this.m_weightBuffer[a] += w;
                        this.m_weightBuffer[b] += w;
                    }
                }
                SolvePressure(step) {
                    const s_f = b2ParticleSystem.SolvePressure_s_f;
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const pos_data = this.m_positionBuffer.data;
                    const vel_data = this.m_velocityBuffer.data;
                    const criticalPressure = this.GetCriticalPressure(step);
                    const pressurePerWeight = this.m_def.pressureStrength * criticalPressure;
                    const maxPressure = b2Settings_31.b2_maxParticlePressure * criticalPressure;
                    for (let i = 0; i < this.m_count; i++) {
                        const w = this.m_weightBuffer[i];
                        const h = pressurePerWeight * b2Math_28.b2Max(0.0, w - b2Settings_31.b2_minParticleWeight);
                        this.m_accumulationBuffer[i] = b2Math_28.b2Min(h, maxPressure);
                    }
                    if (this.m_allParticleFlags & b2ParticleSystem.k_noPressureFlags) {
                        for (let i = 0; i < this.m_count; i++) {
                            if (this.m_flagsBuffer.data[i] & b2ParticleSystem.k_noPressureFlags) {
                                this.m_accumulationBuffer[i] = 0;
                            }
                        }
                    }
                    if (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_staticPressureParticle) {
                        for (let i = 0; i < this.m_count; i++) {
                            if (this.m_flagsBuffer.data[i] & b2Particle_1.b2ParticleFlag.b2_staticPressureParticle) {
                                this.m_accumulationBuffer[i] += this.m_staticPressureBuffer[i];
                            }
                        }
                    }
                    const velocityPerPressure = step.dt / (this.m_def.density * this.m_particleDiameter);
                    const inv_mass = this.GetParticleInvMass();
                    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
                        const contact = this.m_bodyContactBuffer.data[k];
                        const a = contact.index;
                        const b = contact.body;
                        const w = contact.weight;
                        const m = contact.mass;
                        const n = contact.normal;
                        const p = pos_data[a];
                        const h = this.m_accumulationBuffer[a] + pressurePerWeight * w;
                        const f = b2Math_28.b2Vec2.MulSV(velocityPerPressure * w * m * h, n, s_f);
                        vel_data[a].SelfMulSub(inv_mass, f);
                        b.ApplyLinearImpulse(f, p, true);
                    }
                    for (let k = 0; k < this.m_contactBuffer.count; k++) {
                        const contact = this.m_contactBuffer.data[k];
                        const a = contact.indexA;
                        const b = contact.indexB;
                        const w = contact.weight;
                        const n = contact.normal;
                        const h = this.m_accumulationBuffer[a] + this.m_accumulationBuffer[b];
                        const f = b2Math_28.b2Vec2.MulSV(velocityPerPressure * w * h, n, s_f);
                        vel_data[a].SelfSub(f);
                        vel_data[b].SelfAdd(f);
                    }
                }
                SolveDamping(step) {
                    const s_v = b2ParticleSystem.SolveDamping_s_v;
                    const s_f = b2ParticleSystem.SolveDamping_s_f;
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const pos_data = this.m_positionBuffer.data;
                    const vel_data = this.m_velocityBuffer.data;
                    const linearDamping = this.m_def.dampingStrength;
                    const quadraticDamping = 1 / this.GetCriticalVelocity(step);
                    const inv_mass = this.GetParticleInvMass();
                    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
                        const contact = this.m_bodyContactBuffer.data[k];
                        const a = contact.index;
                        const b = contact.body;
                        const w = contact.weight;
                        const m = contact.mass;
                        const n = contact.normal;
                        const p = pos_data[a];
                        const v = b2Math_28.b2Vec2.SubVV(b.GetLinearVelocityFromWorldPoint(p, b2Math_28.b2Vec2.s_t0), vel_data[a], s_v);
                        const vn = b2Math_28.b2Vec2.DotVV(v, n);
                        if (vn < 0) {
                            const damping = b2Math_28.b2Max(linearDamping * w, b2Math_28.b2Min(-quadraticDamping * vn, 0.5));
                            const f = b2Math_28.b2Vec2.MulSV(damping * m * vn, n, s_f);
                            vel_data[a].SelfMulAdd(inv_mass, f);
                            b.ApplyLinearImpulse(f.SelfNeg(), p, true);
                        }
                    }
                    for (let k = 0; k < this.m_contactBuffer.count; k++) {
                        const contact = this.m_contactBuffer.data[k];
                        const a = contact.indexA;
                        const b = contact.indexB;
                        const w = contact.weight;
                        const n = contact.normal;
                        const v = b2Math_28.b2Vec2.SubVV(vel_data[b], vel_data[a], s_v);
                        const vn = b2Math_28.b2Vec2.DotVV(v, n);
                        if (vn < 0) {
                            const damping = b2Math_28.b2Max(linearDamping * w, b2Math_28.b2Min(-quadraticDamping * vn, 0.5));
                            const f = b2Math_28.b2Vec2.MulSV(damping * vn, n, s_f);
                            vel_data[a].SelfAdd(f);
                            vel_data[b].SelfSub(f);
                        }
                    }
                }
                SolveRigidDamping() {
                    const s_t0 = b2ParticleSystem.SolveRigidDamping_s_t0;
                    const s_t1 = b2ParticleSystem.SolveRigidDamping_s_t1;
                    const s_p = b2ParticleSystem.SolveRigidDamping_s_p;
                    const s_v = b2ParticleSystem.SolveRigidDamping_s_v;
                    const invMassA = [0.0], invInertiaA = [0.0], tangentDistanceA = [0.0];
                    const invMassB = [0.0], invInertiaB = [0.0], tangentDistanceB = [0.0];
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    const pos_data = this.m_positionBuffer.data;
                    const damping = this.m_def.dampingStrength;
                    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
                        const contact = this.m_bodyContactBuffer.data[k];
                        const a = contact.index;
                        const aGroup = this.m_groupBuffer[a];
                        if (aGroup && this.IsRigidGroup(aGroup)) {
                            const b = contact.body;
                            const n = contact.normal;
                            const w = contact.weight;
                            const p = pos_data[a];
                            const v = b2Math_28.b2Vec2.SubVV(b.GetLinearVelocityFromWorldPoint(p, s_t0), aGroup.GetLinearVelocityFromWorldPoint(p, s_t1), s_v);
                            const vn = b2Math_28.b2Vec2.DotVV(v, n);
                            if (vn < 0) {
                                this.InitDampingParameterWithRigidGroupOrParticle(invMassA, invInertiaA, tangentDistanceA, true, aGroup, a, p, n);
                                this.InitDampingParameter(invMassB, invInertiaB, tangentDistanceB, b.GetMass(), b.GetInertia() - b.GetMass() * b.GetLocalCenter().LengthSquared(), b.GetWorldCenter(), p, n);
                                const f = damping * b2Math_28.b2Min(w, 1.0) * this.ComputeDampingImpulse(invMassA[0], invInertiaA[0], tangentDistanceA[0], invMassB[0], invInertiaB[0], tangentDistanceB[0], vn);
                                this.ApplyDamping(invMassA[0], invInertiaA[0], tangentDistanceA[0], true, aGroup, a, f, n);
                                b.ApplyLinearImpulse(b2Math_28.b2Vec2.MulSV(-f, n, b2Math_28.b2Vec2.s_t0), p, true);
                            }
                        }
                    }
                    for (let k = 0; k < this.m_contactBuffer.count; k++) {
                        const contact = this.m_contactBuffer.data[k];
                        const a = contact.indexA;
                        const b = contact.indexB;
                        const n = contact.normal;
                        const w = contact.weight;
                        const aGroup = this.m_groupBuffer[a];
                        const bGroup = this.m_groupBuffer[b];
                        const aRigid = this.IsRigidGroup(aGroup);
                        const bRigid = this.IsRigidGroup(bGroup);
                        if (aGroup !== bGroup && (aRigid || bRigid)) {
                            const p = b2Math_28.b2Vec2.MidVV(pos_data[a], pos_data[b], s_p);
                            const v = b2Math_28.b2Vec2.SubVV(this.GetLinearVelocity(bGroup, b, p, s_t0), this.GetLinearVelocity(aGroup, a, p, s_t1), s_v);
                            const vn = b2Math_28.b2Vec2.DotVV(v, n);
                            if (vn < 0) {
                                this.InitDampingParameterWithRigidGroupOrParticle(invMassA, invInertiaA, tangentDistanceA, aRigid, aGroup, a, p, n);
                                this.InitDampingParameterWithRigidGroupOrParticle(invMassB, invInertiaB, tangentDistanceB, bRigid, bGroup, b, p, n);
                                const f = damping * w * this.ComputeDampingImpulse(invMassA[0], invInertiaA[0], tangentDistanceA[0], invMassB[0], invInertiaB[0], tangentDistanceB[0], vn);
                                this.ApplyDamping(invMassA[0], invInertiaA[0], tangentDistanceA[0], aRigid, aGroup, a, f, n);
                                this.ApplyDamping(invMassB[0], invInertiaB[0], tangentDistanceB[0], bRigid, bGroup, b, -f, n);
                            }
                        }
                    }
                }
                SolveExtraDamping() {
                    const s_v = b2ParticleSystem.SolveExtraDamping_s_v;
                    const s_f = b2ParticleSystem.SolveExtraDamping_s_f;
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const vel_data = this.m_velocityBuffer.data;
                    const pos_data = this.m_positionBuffer.data;
                    const inv_mass = this.GetParticleInvMass();
                    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
                        const contact = this.m_bodyContactBuffer.data[k];
                        const a = contact.index;
                        if (this.m_flagsBuffer.data[a] & b2ParticleSystem.k_extraDampingFlags) {
                            const b = contact.body;
                            const m = contact.mass;
                            const n = contact.normal;
                            const p = pos_data[a];
                            const v = b2Math_28.b2Vec2.SubVV(b.GetLinearVelocityFromWorldPoint(p, b2Math_28.b2Vec2.s_t0), vel_data[a], s_v);
                            const vn = b2Math_28.b2Vec2.DotVV(v, n);
                            if (vn < 0) {
                                const f = b2Math_28.b2Vec2.MulSV(0.5 * m * vn, n, s_f);
                                vel_data[a].SelfMulAdd(inv_mass, f);
                                b.ApplyLinearImpulse(f.SelfNeg(), p, true);
                            }
                        }
                    }
                }
                SolveWall() {
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const vel_data = this.m_velocityBuffer.data;
                    for (let i = 0; i < this.m_count; i++) {
                        if (this.m_flagsBuffer.data[i] & b2Particle_1.b2ParticleFlag.b2_wallParticle) {
                            vel_data[i].SetZero();
                        }
                    }
                }
                SolveRigid(step) {
                    const s_position = b2ParticleSystem.SolveRigid_s_position;
                    const s_rotation = b2ParticleSystem.SolveRigid_s_rotation;
                    const s_transform = b2ParticleSystem.SolveRigid_s_transform;
                    const s_velocityTransform = b2ParticleSystem.SolveRigid_s_velocityTransform;
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const pos_data = this.m_positionBuffer.data;
                    const vel_data = this.m_velocityBuffer.data;
                    for (const group of this.m_groupList) {
                        if (group.m_groupFlags & b2ParticleGroup_1.b2ParticleGroupFlag.b2_rigidParticleGroup) {
                            group.UpdateStatistics();
                            const rotation = s_rotation;
                            rotation.SetAngle(step.dt * group.m_angularVelocity);
                            const position = b2Math_28.b2Vec2.AddVV(group.m_center, b2Math_28.b2Vec2.SubVV(b2Math_28.b2Vec2.MulSV(step.dt, group.m_linearVelocity, b2Math_28.b2Vec2.s_t0), b2Math_28.b2Rot.MulRV(rotation, group.m_center, b2Math_28.b2Vec2.s_t1), b2Math_28.b2Vec2.s_t0), s_position);
                            const transform = s_transform;
                            transform.SetPositionRotation(position, rotation);
                            b2Math_28.b2Transform.MulXX(transform, group.m_transform, group.m_transform);
                            const velocityTransform = s_velocityTransform;
                            velocityTransform.p.x = step.inv_dt * transform.p.x;
                            velocityTransform.p.y = step.inv_dt * transform.p.y;
                            velocityTransform.q.s = step.inv_dt * transform.q.s;
                            velocityTransform.q.c = step.inv_dt * (transform.q.c - 1);
                            for (let i = group.m_firstIndex; i < group.m_lastIndex; i++) {
                                b2Math_28.b2Transform.MulXV(velocityTransform, pos_data[i], vel_data[i]);
                            }
                        }
                    }
                }
                SolveElastic(step) {
                    const s_pa = b2ParticleSystem.SolveElastic_s_pa;
                    const s_pb = b2ParticleSystem.SolveElastic_s_pb;
                    const s_pc = b2ParticleSystem.SolveElastic_s_pc;
                    const s_r = b2ParticleSystem.SolveElastic_s_r;
                    const s_t0 = b2ParticleSystem.SolveElastic_s_t0;
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const pos_data = this.m_positionBuffer.data;
                    const vel_data = this.m_velocityBuffer.data;
                    const elasticStrength = step.inv_dt * this.m_def.elasticStrength;
                    for (let k = 0; k < this.m_triadBuffer.count; k++) {
                        const triad = this.m_triadBuffer.data[k];
                        if (triad.flags & b2Particle_1.b2ParticleFlag.b2_elasticParticle) {
                            const a = triad.indexA;
                            const b = triad.indexB;
                            const c = triad.indexC;
                            const oa = triad.pa;
                            const ob = triad.pb;
                            const oc = triad.pc;
                            const pa = s_pa.Copy(pos_data[a]);
                            const pb = s_pb.Copy(pos_data[b]);
                            const pc = s_pc.Copy(pos_data[c]);
                            const va = vel_data[a];
                            const vb = vel_data[b];
                            const vc = vel_data[c];
                            pa.SelfMulAdd(step.dt, va);
                            pb.SelfMulAdd(step.dt, vb);
                            pc.SelfMulAdd(step.dt, vc);
                            const midPoint_x = (pa.x + pb.x + pc.x) / 3.0;
                            const midPoint_y = (pa.y + pb.y + pc.y) / 3.0;
                            pa.x -= midPoint_x;
                            pa.y -= midPoint_y;
                            pb.x -= midPoint_x;
                            pb.y -= midPoint_y;
                            pc.x -= midPoint_x;
                            pc.y -= midPoint_y;
                            const r = s_r;
                            r.s = b2Math_28.b2Vec2.CrossVV(oa, pa) + b2Math_28.b2Vec2.CrossVV(ob, pb) + b2Math_28.b2Vec2.CrossVV(oc, pc);
                            r.c = b2Math_28.b2Vec2.DotVV(oa, pa) + b2Math_28.b2Vec2.DotVV(ob, pb) + b2Math_28.b2Vec2.DotVV(oc, pc);
                            const r2 = r.s * r.s + r.c * r.c;
                            let invR = b2Math_28.b2InvSqrt(r2);
                            if (!isFinite(invR)) {
                                invR = 1.98177537e+019;
                            }
                            r.s *= invR;
                            r.c *= invR;
                            const strength = elasticStrength * triad.strength;
                            b2Math_28.b2Rot.MulRV(r, oa, s_t0);
                            b2Math_28.b2Vec2.SubVV(s_t0, pa, s_t0);
                            b2Math_28.b2Vec2.MulSV(strength, s_t0, s_t0);
                            va.SelfAdd(s_t0);
                            b2Math_28.b2Rot.MulRV(r, ob, s_t0);
                            b2Math_28.b2Vec2.SubVV(s_t0, pb, s_t0);
                            b2Math_28.b2Vec2.MulSV(strength, s_t0, s_t0);
                            vb.SelfAdd(s_t0);
                            b2Math_28.b2Rot.MulRV(r, oc, s_t0);
                            b2Math_28.b2Vec2.SubVV(s_t0, pc, s_t0);
                            b2Math_28.b2Vec2.MulSV(strength, s_t0, s_t0);
                            vc.SelfAdd(s_t0);
                        }
                    }
                }
                SolveSpring(step) {
                    const s_pa = b2ParticleSystem.SolveSpring_s_pa;
                    const s_pb = b2ParticleSystem.SolveSpring_s_pb;
                    const s_d = b2ParticleSystem.SolveSpring_s_d;
                    const s_f = b2ParticleSystem.SolveSpring_s_f;
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const pos_data = this.m_positionBuffer.data;
                    const vel_data = this.m_velocityBuffer.data;
                    const springStrength = step.inv_dt * this.m_def.springStrength;
                    for (let k = 0; k < this.m_pairBuffer.count; k++) {
                        const pair = this.m_pairBuffer.data[k];
                        if (pair.flags & b2Particle_1.b2ParticleFlag.b2_springParticle) {
                            const a = pair.indexA;
                            const b = pair.indexB;
                            const pa = s_pa.Copy(pos_data[a]);
                            const pb = s_pb.Copy(pos_data[b]);
                            const va = vel_data[a];
                            const vb = vel_data[b];
                            pa.SelfMulAdd(step.dt, va);
                            pb.SelfMulAdd(step.dt, vb);
                            const d = b2Math_28.b2Vec2.SubVV(pb, pa, s_d);
                            const r0 = pair.distance;
                            const r1 = d.Length();
                            const strength = springStrength * pair.strength;
                            const f = b2Math_28.b2Vec2.MulSV(strength * (r0 - r1) / r1, d, s_f);
                            va.SelfSub(f);
                            vb.SelfAdd(f);
                        }
                    }
                }
                SolveTensile(step) {
                    const s_weightedNormal = b2ParticleSystem.SolveTensile_s_weightedNormal;
                    const s_s = b2ParticleSystem.SolveTensile_s_s;
                    const s_f = b2ParticleSystem.SolveTensile_s_f;
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const vel_data = this.m_velocityBuffer.data;
                    for (let i = 0; i < this.m_count; i++) {
                        this.m_accumulation2Buffer[i] = new b2Math_28.b2Vec2();
                        this.m_accumulation2Buffer[i].SetZero();
                    }
                    for (let k = 0; k < this.m_contactBuffer.count; k++) {
                        const contact = this.m_contactBuffer.data[k];
                        if (contact.flags & b2Particle_1.b2ParticleFlag.b2_tensileParticle) {
                            const a = contact.indexA;
                            const b = contact.indexB;
                            const w = contact.weight;
                            const n = contact.normal;
                            const weightedNormal = b2Math_28.b2Vec2.MulSV((1 - w) * w, n, s_weightedNormal);
                            this.m_accumulation2Buffer[a].SelfSub(weightedNormal);
                            this.m_accumulation2Buffer[b].SelfAdd(weightedNormal);
                        }
                    }
                    const criticalVelocity = this.GetCriticalVelocity(step);
                    const pressureStrength = this.m_def.surfaceTensionPressureStrength * criticalVelocity;
                    const normalStrength = this.m_def.surfaceTensionNormalStrength * criticalVelocity;
                    const maxVelocityVariation = b2Settings_31.b2_maxParticleForce * criticalVelocity;
                    for (let k = 0; k < this.m_contactBuffer.count; k++) {
                        const contact = this.m_contactBuffer.data[k];
                        if (contact.flags & b2Particle_1.b2ParticleFlag.b2_tensileParticle) {
                            const a = contact.indexA;
                            const b = contact.indexB;
                            const w = contact.weight;
                            const n = contact.normal;
                            const h = this.m_weightBuffer[a] + this.m_weightBuffer[b];
                            const s = b2Math_28.b2Vec2.SubVV(this.m_accumulation2Buffer[b], this.m_accumulation2Buffer[a], s_s);
                            const fn = b2Math_28.b2Min(pressureStrength * (h - 2) + normalStrength * b2Math_28.b2Vec2.DotVV(s, n), maxVelocityVariation) * w;
                            const f = b2Math_28.b2Vec2.MulSV(fn, n, s_f);
                            vel_data[a].SelfSub(f);
                            vel_data[b].SelfAdd(f);
                        }
                    }
                }
                SolveViscous() {
                    const s_v = b2ParticleSystem.SolveViscous_s_v;
                    const s_f = b2ParticleSystem.SolveViscous_s_f;
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const pos_data = this.m_positionBuffer.data;
                    const vel_data = this.m_velocityBuffer.data;
                    const viscousStrength = this.m_def.viscousStrength;
                    const inv_mass = this.GetParticleInvMass();
                    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
                        const contact = this.m_bodyContactBuffer.data[k];
                        const a = contact.index;
                        if (this.m_flagsBuffer.data[a] & b2Particle_1.b2ParticleFlag.b2_viscousParticle) {
                            const b = contact.body;
                            const w = contact.weight;
                            const m = contact.mass;
                            const p = pos_data[a];
                            const v = b2Math_28.b2Vec2.SubVV(b.GetLinearVelocityFromWorldPoint(p, b2Math_28.b2Vec2.s_t0), vel_data[a], s_v);
                            const f = b2Math_28.b2Vec2.MulSV(viscousStrength * m * w, v, s_f);
                            vel_data[a].SelfMulAdd(inv_mass, f);
                            b.ApplyLinearImpulse(f.SelfNeg(), p, true);
                        }
                    }
                    for (let k = 0; k < this.m_contactBuffer.count; k++) {
                        const contact = this.m_contactBuffer.data[k];
                        if (contact.flags & b2Particle_1.b2ParticleFlag.b2_viscousParticle) {
                            const a = contact.indexA;
                            const b = contact.indexB;
                            const w = contact.weight;
                            const v = b2Math_28.b2Vec2.SubVV(vel_data[b], vel_data[a], s_v);
                            const f = b2Math_28.b2Vec2.MulSV(viscousStrength * w, v, s_f);
                            vel_data[a].SelfAdd(f);
                            vel_data[b].SelfSub(f);
                        }
                    }
                }
                SolveRepulsive(step) {
                    const s_f = b2ParticleSystem.SolveRepulsive_s_f;
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const vel_data = this.m_velocityBuffer.data;
                    const repulsiveStrength = this.m_def.repulsiveStrength * this.GetCriticalVelocity(step);
                    for (let k = 0; k < this.m_contactBuffer.count; k++) {
                        const contact = this.m_contactBuffer.data[k];
                        if (contact.flags & b2Particle_1.b2ParticleFlag.b2_repulsiveParticle) {
                            const a = contact.indexA;
                            const b = contact.indexB;
                            if (this.m_groupBuffer[a] !== this.m_groupBuffer[b]) {
                                const w = contact.weight;
                                const n = contact.normal;
                                const f = b2Math_28.b2Vec2.MulSV(repulsiveStrength * w, n, s_f);
                                vel_data[a].SelfSub(f);
                                vel_data[b].SelfAdd(f);
                            }
                        }
                    }
                }
                SolvePowder(step) {
                    const s_f = b2ParticleSystem.SolvePowder_s_f;
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const pos_data = this.m_positionBuffer.data;
                    const vel_data = this.m_velocityBuffer.data;
                    const powderStrength = this.m_def.powderStrength * this.GetCriticalVelocity(step);
                    const minWeight = 1.0 - b2Settings_31.b2_particleStride;
                    const inv_mass = this.GetParticleInvMass();
                    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
                        const contact = this.m_bodyContactBuffer.data[k];
                        const a = contact.index;
                        if (this.m_flagsBuffer.data[a] & b2Particle_1.b2ParticleFlag.b2_powderParticle) {
                            const w = contact.weight;
                            if (w > minWeight) {
                                const b = contact.body;
                                const m = contact.mass;
                                const p = pos_data[a];
                                const n = contact.normal;
                                const f = b2Math_28.b2Vec2.MulSV(powderStrength * m * (w - minWeight), n, s_f);
                                vel_data[a].SelfMulSub(inv_mass, f);
                                b.ApplyLinearImpulse(f, p, true);
                            }
                        }
                    }
                    for (let k = 0; k < this.m_contactBuffer.count; k++) {
                        const contact = this.m_contactBuffer.data[k];
                        if (contact.flags & b2Particle_1.b2ParticleFlag.b2_powderParticle) {
                            const w = contact.weight;
                            if (w > minWeight) {
                                const a = contact.indexA;
                                const b = contact.indexB;
                                const n = contact.normal;
                                const f = b2Math_28.b2Vec2.MulSV(powderStrength * (w - minWeight), n, s_f);
                                vel_data[a].SelfSub(f);
                                vel_data[b].SelfAdd(f);
                            }
                        }
                    }
                }
                SolveSolid(step) {
                    const s_f = b2ParticleSystem.SolveSolid_s_f;
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const vel_data = this.m_velocityBuffer.data;
                    this.m_depthBuffer = this.RequestBuffer(this.m_depthBuffer);
                    const ejectionStrength = step.inv_dt * this.m_def.ejectionStrength;
                    for (let k = 0; k < this.m_contactBuffer.count; k++) {
                        const contact = this.m_contactBuffer.data[k];
                        const a = contact.indexA;
                        const b = contact.indexB;
                        if (this.m_groupBuffer[a] !== this.m_groupBuffer[b]) {
                            const w = contact.weight;
                            const n = contact.normal;
                            const h = this.m_depthBuffer[a] + this.m_depthBuffer[b];
                            const f = b2Math_28.b2Vec2.MulSV(ejectionStrength * h * w, n, s_f);
                            vel_data[a].SelfSub(f);
                            vel_data[b].SelfAdd(f);
                        }
                    }
                }
                SolveForce(step) {
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const vel_data = this.m_velocityBuffer.data;
                    const velocityPerForce = step.dt * this.GetParticleInvMass();
                    for (let i = 0; i < this.m_count; i++) {
                        vel_data[i].SelfMulAdd(velocityPerForce, this.m_forceBuffer[i]);
                    }
                    this.m_hasForce = false;
                }
                SolveColorMixing() {
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_colorBuffer.data) {
                        throw new Error();
                    }
                    const colorMixing = 0.5 * this.m_def.colorMixingStrength;
                    if (colorMixing) {
                        for (let k = 0; k < this.m_contactBuffer.count; k++) {
                            const contact = this.m_contactBuffer.data[k];
                            const a = contact.indexA;
                            const b = contact.indexB;
                            if (this.m_flagsBuffer.data[a] & this.m_flagsBuffer.data[b] &
                                b2Particle_1.b2ParticleFlag.b2_colorMixingParticle) {
                                const colorA = this.m_colorBuffer.data[a];
                                const colorB = this.m_colorBuffer.data[b];
                                b2Draw_2.b2Color.MixColors(colorA, colorB, colorMixing);
                            }
                        }
                    }
                }
                SolveZombie() {
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    let newCount = 0;
                    const newIndices = [];
                    for (let i = 0; i < this.m_count; i++) {
                        newIndices[i] = b2Settings_30.b2_invalidParticleIndex;
                    }
                    let allParticleFlags = 0;
                    for (let i = 0; i < this.m_count; i++) {
                        const flags = this.m_flagsBuffer.data[i];
                        if (flags & b2Particle_1.b2ParticleFlag.b2_zombieParticle) {
                            const destructionListener = this.m_world.m_destructionListener;
                            if ((flags & b2Particle_1.b2ParticleFlag.b2_destructionListenerParticle) && destructionListener) {
                                destructionListener.SayGoodbyeParticle(this, i);
                            }
                            if (this.m_handleIndexBuffer.data) {
                                const handle = this.m_handleIndexBuffer.data[i];
                                if (handle) {
                                    handle.SetIndex(b2Settings_30.b2_invalidParticleIndex);
                                    this.m_handleIndexBuffer.data[i] = null;
                                }
                            }
                            newIndices[i] = b2Settings_30.b2_invalidParticleIndex;
                        }
                        else {
                            newIndices[i] = newCount;
                            if (i !== newCount) {
                                if (this.m_handleIndexBuffer.data) {
                                    const handle = this.m_handleIndexBuffer.data[i];
                                    if (handle) {
                                        handle.SetIndex(newCount);
                                    }
                                    this.m_handleIndexBuffer.data[newCount] = handle;
                                }
                                this.m_flagsBuffer.data[newCount] = this.m_flagsBuffer.data[i];
                                if (this.m_lastBodyContactStepBuffer.data) {
                                    this.m_lastBodyContactStepBuffer.data[newCount] = this.m_lastBodyContactStepBuffer.data[i];
                                }
                                if (this.m_bodyContactCountBuffer.data) {
                                    this.m_bodyContactCountBuffer.data[newCount] = this.m_bodyContactCountBuffer.data[i];
                                }
                                if (this.m_consecutiveContactStepsBuffer.data) {
                                    this.m_consecutiveContactStepsBuffer.data[newCount] = this.m_consecutiveContactStepsBuffer.data[i];
                                }
                                this.m_positionBuffer.data[newCount].Copy(this.m_positionBuffer.data[i]);
                                this.m_velocityBuffer.data[newCount].Copy(this.m_velocityBuffer.data[i]);
                                this.m_groupBuffer[newCount] = this.m_groupBuffer[i];
                                if (this.m_hasForce) {
                                    this.m_forceBuffer[newCount].Copy(this.m_forceBuffer[i]);
                                }
                                if (this.m_staticPressureBuffer) {
                                    this.m_staticPressureBuffer[newCount] = this.m_staticPressureBuffer[i];
                                }
                                if (this.m_depthBuffer) {
                                    this.m_depthBuffer[newCount] = this.m_depthBuffer[i];
                                }
                                if (this.m_colorBuffer.data) {
                                    this.m_colorBuffer.data[newCount].Copy(this.m_colorBuffer.data[i]);
                                }
                                if (this.m_userDataBuffer.data) {
                                    this.m_userDataBuffer.data[newCount] = this.m_userDataBuffer.data[i];
                                }
                                if (this.m_expirationTimeBuffer.data) {
                                    this.m_expirationTimeBuffer.data[newCount] = this.m_expirationTimeBuffer.data[i];
                                }
                            }
                            newCount++;
                            allParticleFlags |= flags;
                        }
                    }
                    const Test = {
                        IsProxyInvalid: (proxy) => {
                            return proxy.index < 0;
                        },
                        IsContactInvalid: (contact) => {
                            return contact.indexA < 0 || contact.indexB < 0;
                        },
                        IsBodyContactInvalid: (contact) => {
                            return contact.index < 0;
                        },
                        IsPairInvalid: (pair) => {
                            return pair.indexA < 0 || pair.indexB < 0;
                        },
                        IsTriadInvalid: (triad) => {
                            return triad.indexA < 0 || triad.indexB < 0 || triad.indexC < 0;
                        },
                    };
                    for (let k = 0; k < this.m_proxyBuffer.count; k++) {
                        const proxy = this.m_proxyBuffer.data[k];
                        proxy.index = newIndices[proxy.index];
                    }
                    this.m_proxyBuffer.RemoveIf(Test.IsProxyInvalid);
                    for (let k = 0; k < this.m_contactBuffer.count; k++) {
                        const contact = this.m_contactBuffer.data[k];
                        contact.indexA = newIndices[contact.indexA];
                        contact.indexB = newIndices[contact.indexB];
                    }
                    this.m_contactBuffer.RemoveIf(Test.IsContactInvalid);
                    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
                        const contact = this.m_bodyContactBuffer.data[k];
                        contact.index = newIndices[contact.index];
                    }
                    this.m_bodyContactBuffer.RemoveIf(Test.IsBodyContactInvalid);
                    for (let k = 0; k < this.m_pairBuffer.count; k++) {
                        const pair = this.m_pairBuffer.data[k];
                        pair.indexA = newIndices[pair.indexA];
                        pair.indexB = newIndices[pair.indexB];
                    }
                    this.m_pairBuffer.RemoveIf(Test.IsPairInvalid);
                    for (let k = 0; k < this.m_triadBuffer.count; k++) {
                        const triad = this.m_triadBuffer.data[k];
                        triad.indexA = newIndices[triad.indexA];
                        triad.indexB = newIndices[triad.indexB];
                        triad.indexC = newIndices[triad.indexC];
                    }
                    this.m_triadBuffer.RemoveIf(Test.IsTriadInvalid);
                    if (this.m_indexByExpirationTimeBuffer.data) {
                        let writeOffset = 0;
                        for (let readOffset = 0; readOffset < this.m_count; readOffset++) {
                            const newIndex = newIndices[this.m_indexByExpirationTimeBuffer.data[readOffset]];
                            if (newIndex !== b2Settings_30.b2_invalidParticleIndex) {
                                this.m_indexByExpirationTimeBuffer.data[writeOffset++] = newIndex;
                            }
                        }
                    }
                    for (const group of this.m_groupList) {
                        let firstIndex = newCount;
                        let lastIndex = 0;
                        let modified = false;
                        for (let i = group.m_firstIndex; i < group.m_lastIndex; i++) {
                            const j = newIndices[i];
                            if (j >= 0) {
                                firstIndex = b2Math_28.b2Min(firstIndex, j);
                                lastIndex = b2Math_28.b2Max(lastIndex, j + 1);
                            }
                            else {
                                modified = true;
                            }
                        }
                        if (firstIndex < lastIndex) {
                            group.m_firstIndex = firstIndex;
                            group.m_lastIndex = lastIndex;
                            if (modified) {
                                if (group.m_groupFlags & b2ParticleGroup_1.b2ParticleGroupFlag.b2_solidParticleGroup) {
                                    this.SetGroupFlags(group, group.m_groupFlags | b2ParticleGroup_1.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth);
                                }
                            }
                        }
                        else {
                            group.m_firstIndex = 0;
                            group.m_lastIndex = 0;
                            if (!(group.m_groupFlags & b2ParticleGroup_1.b2ParticleGroupFlag.b2_particleGroupCanBeEmpty)) {
                                this.SetGroupFlags(group, group.m_groupFlags | b2ParticleGroup_1.b2ParticleGroupFlag.b2_particleGroupWillBeDestroyed);
                            }
                        }
                    }
                    this.m_count = newCount;
                    this.m_allParticleFlags = allParticleFlags;
                    this.m_needsUpdateAllParticleFlags = false;
                    for (const group of this.m_groupList) {
                        if (group.m_groupFlags & b2ParticleGroup_1.b2ParticleGroupFlag.b2_particleGroupWillBeDestroyed) {
                            this.DestroyParticleGroup(group);
                        }
                    }
                }
                SolveLifetimes(step) {
                    if (!this.m_expirationTimeBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_indexByExpirationTimeBuffer.data) {
                        throw new Error();
                    }
                    this.m_timeElapsed = this.LifetimeToExpirationTime(step.dt);
                    const quantizedTimeElapsed = this.GetQuantizedTimeElapsed();
                    const expirationTimes = this.m_expirationTimeBuffer.data;
                    const expirationTimeIndices = this.m_indexByExpirationTimeBuffer.data;
                    const particleCount = this.GetParticleCount();
                    if (this.m_expirationTimeBufferRequiresSorting) {
                        const ExpirationTimeComparator = (particleIndexA, particleIndexB) => {
                            const expirationTimeA = expirationTimes[particleIndexA];
                            const expirationTimeB = expirationTimes[particleIndexB];
                            const infiniteExpirationTimeA = expirationTimeA <= 0.0;
                            const infiniteExpirationTimeB = expirationTimeB <= 0.0;
                            return infiniteExpirationTimeA === infiniteExpirationTimeB ?
                                expirationTimeA > expirationTimeB : infiniteExpirationTimeA;
                        };
                        std_sort(expirationTimeIndices, 0, particleCount, ExpirationTimeComparator);
                        this.m_expirationTimeBufferRequiresSorting = false;
                    }
                    for (let i = particleCount - 1; i >= 0; --i) {
                        const particleIndex = expirationTimeIndices[i];
                        const expirationTime = expirationTimes[particleIndex];
                        if (quantizedTimeElapsed < expirationTime || expirationTime <= 0) {
                            break;
                        }
                        this.DestroyParticle(particleIndex);
                    }
                }
                RotateBuffer(start, mid, end) {
                    if (start === mid || mid === end) {
                        return;
                    }
                    function newIndices(i) {
                        if (i < start) {
                            return i;
                        }
                        else if (i < mid) {
                            return i + end - mid;
                        }
                        else if (i < end) {
                            return i + start - mid;
                        }
                        else {
                            return i;
                        }
                    }
                    if (!this.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_positionBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    std_rotate(this.m_flagsBuffer.data, start, mid, end);
                    if (this.m_lastBodyContactStepBuffer.data) {
                        std_rotate(this.m_lastBodyContactStepBuffer.data, start, mid, end);
                    }
                    if (this.m_bodyContactCountBuffer.data) {
                        std_rotate(this.m_bodyContactCountBuffer.data, start, mid, end);
                    }
                    if (this.m_consecutiveContactStepsBuffer.data) {
                        std_rotate(this.m_consecutiveContactStepsBuffer.data, start, mid, end);
                    }
                    std_rotate(this.m_positionBuffer.data, start, mid, end);
                    std_rotate(this.m_velocityBuffer.data, start, mid, end);
                    std_rotate(this.m_groupBuffer, start, mid, end);
                    if (this.m_hasForce) {
                        std_rotate(this.m_forceBuffer, start, mid, end);
                    }
                    if (this.m_staticPressureBuffer) {
                        std_rotate(this.m_staticPressureBuffer, start, mid, end);
                    }
                    if (this.m_depthBuffer) {
                        std_rotate(this.m_depthBuffer, start, mid, end);
                    }
                    if (this.m_colorBuffer.data) {
                        std_rotate(this.m_colorBuffer.data, start, mid, end);
                    }
                    if (this.m_userDataBuffer.data) {
                        std_rotate(this.m_userDataBuffer.data, start, mid, end);
                    }
                    if (this.m_handleIndexBuffer.data) {
                        std_rotate(this.m_handleIndexBuffer.data, start, mid, end);
                        for (let i = start; i < end; ++i) {
                            const handle = this.m_handleIndexBuffer.data[i];
                            if (handle) {
                                handle.SetIndex(newIndices(handle.GetIndex()));
                            }
                        }
                    }
                    if (this.m_expirationTimeBuffer.data) {
                        std_rotate(this.m_expirationTimeBuffer.data, start, mid, end);
                        const particleCount = this.GetParticleCount();
                        if (!this.m_indexByExpirationTimeBuffer.data) {
                            throw new Error();
                        }
                        const indexByExpirationTime = this.m_indexByExpirationTimeBuffer.data;
                        for (let i = 0; i < particleCount; ++i) {
                            indexByExpirationTime[i] = newIndices(indexByExpirationTime[i]);
                        }
                    }
                    for (let k = 0; k < this.m_proxyBuffer.count; k++) {
                        const proxy = this.m_proxyBuffer.data[k];
                        proxy.index = newIndices(proxy.index);
                    }
                    for (let k = 0; k < this.m_contactBuffer.count; k++) {
                        const contact = this.m_contactBuffer.data[k];
                        contact.indexA = newIndices(contact.indexA);
                        contact.indexB = newIndices(contact.indexB);
                    }
                    for (let k = 0; k < this.m_bodyContactBuffer.count; k++) {
                        const contact = this.m_bodyContactBuffer.data[k];
                        contact.index = newIndices(contact.index);
                    }
                    for (let k = 0; k < this.m_pairBuffer.count; k++) {
                        const pair = this.m_pairBuffer.data[k];
                        pair.indexA = newIndices(pair.indexA);
                        pair.indexB = newIndices(pair.indexB);
                    }
                    for (let k = 0; k < this.m_triadBuffer.count; k++) {
                        const triad = this.m_triadBuffer.data[k];
                        triad.indexA = newIndices(triad.indexA);
                        triad.indexB = newIndices(triad.indexB);
                        triad.indexC = newIndices(triad.indexC);
                    }
                    for (const group of this.m_groupList) {
                        group.m_firstIndex = newIndices(group.m_firstIndex);
                        group.m_lastIndex = newIndices(group.m_lastIndex - 1) + 1;
                    }
                }
                GetCriticalVelocity(step) {
                    return this.m_particleDiameter * step.inv_dt;
                }
                GetCriticalVelocitySquared(step) {
                    const velocity = this.GetCriticalVelocity(step);
                    return velocity * velocity;
                }
                GetCriticalPressure(step) {
                    return this.m_def.density * this.GetCriticalVelocitySquared(step);
                }
                GetParticleStride() {
                    return b2Settings_31.b2_particleStride * this.m_particleDiameter;
                }
                GetParticleMass() {
                    const stride = this.GetParticleStride();
                    return this.m_def.density * stride * stride;
                }
                GetParticleInvMass() {
                    const inverseStride = this.m_inverseDiameter * (1.0 / b2Settings_31.b2_particleStride);
                    return this.m_inverseDensity * inverseStride * inverseStride;
                }
                GetFixtureContactFilter() {
                    return (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_fixtureContactFilterParticle) ?
                        this.m_world.m_contactManager.m_contactFilter : null;
                }
                GetParticleContactFilter() {
                    return (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_particleContactFilterParticle) ?
                        this.m_world.m_contactManager.m_contactFilter : null;
                }
                GetFixtureContactListener() {
                    return (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_fixtureContactListenerParticle) ?
                        this.m_world.m_contactManager.m_contactListener : null;
                }
                GetParticleContactListener() {
                    return (this.m_allParticleFlags & b2Particle_1.b2ParticleFlag.b2_particleContactListenerParticle) ?
                        this.m_world.m_contactManager.m_contactListener : null;
                }
                SetUserOverridableBuffer(buffer, newData, newCapacity) {
                    buffer.data = newData;
                    buffer.userSuppliedCapacity = newCapacity;
                }
                SetGroupFlags(group, newFlags) {
                    const oldFlags = group.m_groupFlags;
                    if ((oldFlags ^ newFlags) & b2ParticleGroup_1.b2ParticleGroupFlag.b2_solidParticleGroup) {
                        newFlags |= b2ParticleGroup_1.b2ParticleGroupFlag.b2_particleGroupNeedsUpdateDepth;
                    }
                    if (oldFlags & ~newFlags) {
                        this.m_needsUpdateAllGroupFlags = true;
                    }
                    if (~this.m_allGroupFlags & newFlags) {
                        if (newFlags & b2ParticleGroup_1.b2ParticleGroupFlag.b2_solidParticleGroup) {
                            this.m_depthBuffer = this.RequestBuffer(this.m_depthBuffer);
                        }
                        this.m_allGroupFlags |= newFlags;
                    }
                    group.m_groupFlags = newFlags;
                }
                static BodyContactCompare(lhs, rhs) {
                    if (lhs.index === rhs.index) {
                        return lhs.weight > rhs.weight;
                    }
                    return lhs.index < rhs.index;
                }
                RemoveSpuriousBodyContacts() {
                    std_sort(this.m_bodyContactBuffer.data, 0, this.m_bodyContactBuffer.count, b2ParticleSystem.BodyContactCompare);
                    const s_n = b2ParticleSystem.RemoveSpuriousBodyContacts_s_n;
                    const s_pos = b2ParticleSystem.RemoveSpuriousBodyContacts_s_pos;
                    const s_normal = b2ParticleSystem.RemoveSpuriousBodyContacts_s_normal;
                    const k_maxContactsPerPoint = 3;
                    const system = this;
                    let lastIndex = -1;
                    let currentContacts = 0;
                    const b2ParticleBodyContactRemovePredicate = (contact) => {
                        if (contact.index !== lastIndex) {
                            currentContacts = 0;
                            lastIndex = contact.index;
                        }
                        if (currentContacts++ > k_maxContactsPerPoint) {
                            return true;
                        }
                        const n = s_n.Copy(contact.normal);
                        n.SelfMul(system.m_particleDiameter * (1 - contact.weight));
                        if (!system.m_positionBuffer.data) {
                            throw new Error();
                        }
                        const pos = b2Math_28.b2Vec2.AddVV(system.m_positionBuffer.data[contact.index], n, s_pos);
                        if (!contact.fixture.TestPoint(pos)) {
                            const childCount = contact.fixture.GetShape().GetChildCount();
                            for (let childIndex = 0; childIndex < childCount; childIndex++) {
                                const normal = s_normal;
                                const distance = contact.fixture.ComputeDistance(pos, normal, childIndex);
                                if (distance < b2Settings_30.b2_linearSlop) {
                                    return false;
                                }
                            }
                            return true;
                        }
                        return false;
                    };
                    this.m_bodyContactBuffer.count = std_remove_if(this.m_bodyContactBuffer.data, b2ParticleBodyContactRemovePredicate, this.m_bodyContactBuffer.count);
                }
                DetectStuckParticle(particle) {
                    if (this.m_stuckThreshold <= 0) {
                        return;
                    }
                    if (!this.m_bodyContactCountBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_consecutiveContactStepsBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_lastBodyContactStepBuffer.data) {
                        throw new Error();
                    }
                    ++this.m_bodyContactCountBuffer.data[particle];
                    if (this.m_bodyContactCountBuffer.data[particle] === 2) {
                        ++this.m_consecutiveContactStepsBuffer.data[particle];
                        if (this.m_consecutiveContactStepsBuffer.data[particle] > this.m_stuckThreshold) {
                            this.m_stuckParticleBuffer.data[this.m_stuckParticleBuffer.Append()] = particle;
                        }
                    }
                    this.m_lastBodyContactStepBuffer.data[particle] = this.m_timestamp;
                }
                ValidateParticleIndex(index) {
                    return index >= 0 && index < this.GetParticleCount() &&
                        index !== b2Settings_30.b2_invalidParticleIndex;
                }
                GetQuantizedTimeElapsed() {
                    return Math.floor(this.m_timeElapsed / 0x100000000);
                }
                LifetimeToExpirationTime(lifetime) {
                    return this.m_timeElapsed + Math.floor(((lifetime / this.m_def.lifetimeGranularity) * 0x100000000));
                }
                ForceCanBeApplied(flags) {
                    return !(flags & b2Particle_1.b2ParticleFlag.b2_wallParticle);
                }
                PrepareForceBuffer() {
                    if (!this.m_hasForce) {
                        for (let i = 0; i < this.m_count; i++) {
                            this.m_forceBuffer[i].SetZero();
                        }
                        this.m_hasForce = true;
                    }
                }
                IsRigidGroup(group) {
                    return (group !== null) && ((group.m_groupFlags & b2ParticleGroup_1.b2ParticleGroupFlag.b2_rigidParticleGroup) !== 0);
                }
                GetLinearVelocity(group, particleIndex, point, out) {
                    if (group && this.IsRigidGroup(group)) {
                        return group.GetLinearVelocityFromWorldPoint(point, out);
                    }
                    else {
                        if (!this.m_velocityBuffer.data) {
                            throw new Error();
                        }
                        return out.Copy(this.m_velocityBuffer.data[particleIndex]);
                    }
                }
                InitDampingParameter(invMass, invInertia, tangentDistance, mass, inertia, center, point, normal) {
                    invMass[0] = mass > 0 ? 1 / mass : 0;
                    invInertia[0] = inertia > 0 ? 1 / inertia : 0;
                    tangentDistance[0] = b2Math_28.b2Vec2.CrossVV(b2Math_28.b2Vec2.SubVV(point, center, b2Math_28.b2Vec2.s_t0), normal);
                }
                InitDampingParameterWithRigidGroupOrParticle(invMass, invInertia, tangentDistance, isRigidGroup, group, particleIndex, point, normal) {
                    if (group && isRigidGroup) {
                        this.InitDampingParameter(invMass, invInertia, tangentDistance, group.GetMass(), group.GetInertia(), group.GetCenter(), point, normal);
                    }
                    else {
                        if (!this.m_flagsBuffer.data) {
                            throw new Error();
                        }
                        const flags = this.m_flagsBuffer.data[particleIndex];
                        this.InitDampingParameter(invMass, invInertia, tangentDistance, flags & b2Particle_1.b2ParticleFlag.b2_wallParticle ? 0 : this.GetParticleMass(), 0, point, point, normal);
                    }
                }
                ComputeDampingImpulse(invMassA, invInertiaA, tangentDistanceA, invMassB, invInertiaB, tangentDistanceB, normalVelocity) {
                    const invMass = invMassA + invInertiaA * tangentDistanceA * tangentDistanceA +
                        invMassB + invInertiaB * tangentDistanceB * tangentDistanceB;
                    return invMass > 0 ? normalVelocity / invMass : 0;
                }
                ApplyDamping(invMass, invInertia, tangentDistance, isRigidGroup, group, particleIndex, impulse, normal) {
                    if (group && isRigidGroup) {
                        group.m_linearVelocity.SelfMulAdd(impulse * invMass, normal);
                        group.m_angularVelocity += impulse * tangentDistance * invInertia;
                    }
                    else {
                        if (!this.m_velocityBuffer.data) {
                            throw new Error();
                        }
                        this.m_velocityBuffer.data[particleIndex].SelfMulAdd(impulse * invMass, normal);
                    }
                }
            };
            b2ParticleSystem.xTruncBits = 12;
            b2ParticleSystem.yTruncBits = 12;
            b2ParticleSystem.tagBits = 8 * 4;
            b2ParticleSystem.yOffset = 1 << (b2ParticleSystem.yTruncBits - 1);
            b2ParticleSystem.yShift = b2ParticleSystem.tagBits - b2ParticleSystem.yTruncBits;
            b2ParticleSystem.xShift = b2ParticleSystem.tagBits - b2ParticleSystem.yTruncBits - b2ParticleSystem.xTruncBits;
            b2ParticleSystem.xScale = 1 << b2ParticleSystem.xShift;
            b2ParticleSystem.xOffset = b2ParticleSystem.xScale * (1 << (b2ParticleSystem.xTruncBits - 1));
            b2ParticleSystem.yMask = ((1 << b2ParticleSystem.yTruncBits) - 1) << b2ParticleSystem.yShift;
            b2ParticleSystem.xMask = ~b2ParticleSystem.yMask;
            b2ParticleSystem.DestroyParticlesInShape_s_aabb = new b2Collision_5.b2AABB();
            b2ParticleSystem.CreateParticleGroup_s_transform = new b2Math_28.b2Transform();
            b2ParticleSystem.ComputeCollisionEnergy_s_v = new b2Math_28.b2Vec2();
            b2ParticleSystem.QueryShapeAABB_s_aabb = new b2Collision_5.b2AABB();
            b2ParticleSystem.QueryPointAABB_s_aabb = new b2Collision_5.b2AABB();
            b2ParticleSystem.RayCast_s_aabb = new b2Collision_5.b2AABB();
            b2ParticleSystem.RayCast_s_p = new b2Math_28.b2Vec2();
            b2ParticleSystem.RayCast_s_v = new b2Math_28.b2Vec2();
            b2ParticleSystem.RayCast_s_n = new b2Math_28.b2Vec2();
            b2ParticleSystem.RayCast_s_point = new b2Math_28.b2Vec2();
            b2ParticleSystem.k_pairFlags = b2Particle_1.b2ParticleFlag.b2_springParticle;
            b2ParticleSystem.k_triadFlags = b2Particle_1.b2ParticleFlag.b2_elasticParticle;
            b2ParticleSystem.k_noPressureFlags = b2Particle_1.b2ParticleFlag.b2_powderParticle | b2Particle_1.b2ParticleFlag.b2_tensileParticle;
            b2ParticleSystem.k_extraDampingFlags = b2Particle_1.b2ParticleFlag.b2_staticPressureParticle;
            b2ParticleSystem.k_barrierWallFlags = b2Particle_1.b2ParticleFlag.b2_barrierParticle | b2Particle_1.b2ParticleFlag.b2_wallParticle;
            b2ParticleSystem.CreateParticlesStrokeShapeForGroup_s_edge = new b2EdgeShape_2.b2EdgeShape();
            b2ParticleSystem.CreateParticlesStrokeShapeForGroup_s_d = new b2Math_28.b2Vec2();
            b2ParticleSystem.CreateParticlesStrokeShapeForGroup_s_p = new b2Math_28.b2Vec2();
            b2ParticleSystem.CreateParticlesFillShapeForGroup_s_aabb = new b2Collision_5.b2AABB();
            b2ParticleSystem.CreateParticlesFillShapeForGroup_s_p = new b2Math_28.b2Vec2();
            b2ParticleSystem.UpdatePairsAndTriads_s_dab = new b2Math_28.b2Vec2();
            b2ParticleSystem.UpdatePairsAndTriads_s_dbc = new b2Math_28.b2Vec2();
            b2ParticleSystem.UpdatePairsAndTriads_s_dca = new b2Math_28.b2Vec2();
            b2ParticleSystem.AddContact_s_d = new b2Math_28.b2Vec2();
            b2ParticleSystem.UpdateBodyContacts_s_aabb = new b2Collision_5.b2AABB();
            b2ParticleSystem.Solve_s_subStep = new b2TimeStep_2.b2TimeStep();
            b2ParticleSystem.SolveCollision_s_aabb = new b2Collision_5.b2AABB();
            b2ParticleSystem.SolveGravity_s_gravity = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveBarrier_s_aabb = new b2Collision_5.b2AABB();
            b2ParticleSystem.SolveBarrier_s_va = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveBarrier_s_vb = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveBarrier_s_pba = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveBarrier_s_vba = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveBarrier_s_vc = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveBarrier_s_pca = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveBarrier_s_vca = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveBarrier_s_qba = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveBarrier_s_qca = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveBarrier_s_dv = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveBarrier_s_f = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolvePressure_s_f = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveDamping_s_v = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveDamping_s_f = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveRigidDamping_s_t0 = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveRigidDamping_s_t1 = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveRigidDamping_s_p = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveRigidDamping_s_v = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveExtraDamping_s_v = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveExtraDamping_s_f = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveRigid_s_position = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveRigid_s_rotation = new b2Math_28.b2Rot();
            b2ParticleSystem.SolveRigid_s_transform = new b2Math_28.b2Transform();
            b2ParticleSystem.SolveRigid_s_velocityTransform = new b2Math_28.b2Transform();
            b2ParticleSystem.SolveElastic_s_pa = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveElastic_s_pb = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveElastic_s_pc = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveElastic_s_r = new b2Math_28.b2Rot();
            b2ParticleSystem.SolveElastic_s_t0 = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveSpring_s_pa = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveSpring_s_pb = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveSpring_s_d = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveSpring_s_f = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveTensile_s_weightedNormal = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveTensile_s_s = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveTensile_s_f = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveViscous_s_v = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveViscous_s_f = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveRepulsive_s_f = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolvePowder_s_f = new b2Math_28.b2Vec2();
            b2ParticleSystem.SolveSolid_s_f = new b2Math_28.b2Vec2();
            b2ParticleSystem.RemoveSpuriousBodyContacts_s_n = new b2Math_28.b2Vec2();
            b2ParticleSystem.RemoveSpuriousBodyContacts_s_pos = new b2Math_28.b2Vec2();
            b2ParticleSystem.RemoveSpuriousBodyContacts_s_normal = new b2Math_28.b2Vec2();
            exports_37("b2ParticleSystem", b2ParticleSystem);
            (function (b2ParticleSystem) {
                class UserOverridableBuffer {
                    constructor() {
                        this.data = null;
                        this.userSuppliedCapacity = 0;
                    }
                }
                b2ParticleSystem.UserOverridableBuffer = UserOverridableBuffer;
                class Proxy {
                    constructor() {
                        this.index = b2Settings_30.b2_invalidParticleIndex;
                        this.tag = 0;
                    }
                    static CompareProxyProxy(a, b) {
                        return a.tag < b.tag;
                    }
                    static CompareTagProxy(a, b) {
                        return a < b.tag;
                    }
                    static CompareProxyTag(a, b) {
                        return a.tag < b;
                    }
                }
                b2ParticleSystem.Proxy = Proxy;
                class InsideBoundsEnumerator {
                    constructor(system, lower, upper, first, last) {
                        this.m_system = system;
                        this.m_xLower = (lower & b2ParticleSystem.xMask) >>> 0;
                        this.m_xUpper = (upper & b2ParticleSystem.xMask) >>> 0;
                        this.m_yLower = (lower & b2ParticleSystem.yMask) >>> 0;
                        this.m_yUpper = (upper & b2ParticleSystem.yMask) >>> 0;
                        this.m_first = first;
                        this.m_last = last;
                    }
                    GetNext() {
                        while (this.m_first < this.m_last) {
                            const xTag = (this.m_system.m_proxyBuffer.data[this.m_first].tag & b2ParticleSystem.xMask) >>> 0;
                            if (xTag >= this.m_xLower && xTag <= this.m_xUpper) {
                                return (this.m_system.m_proxyBuffer.data[this.m_first++]).index;
                            }
                            this.m_first++;
                        }
                        return b2Settings_30.b2_invalidParticleIndex;
                    }
                }
                b2ParticleSystem.InsideBoundsEnumerator = InsideBoundsEnumerator;
                class ParticleListNode {
                    constructor() {
                        this.next = null;
                        this.count = 0;
                        this.index = 0;
                    }
                }
                b2ParticleSystem.ParticleListNode = ParticleListNode;
                class FixedSetAllocator {
                    Allocate(itemSize, count) {
                        return count;
                    }
                    Clear() {
                    }
                    GetCount() {
                        return 0;
                    }
                    Invalidate(itemIndex) {
                    }
                    GetValidBuffer() {
                        return [];
                    }
                    GetBuffer() {
                        return [];
                    }
                    SetCount(count) {
                    }
                }
                b2ParticleSystem.FixedSetAllocator = FixedSetAllocator;
                class FixtureParticle {
                    constructor(fixture, particle) {
                        this.second = b2Settings_30.b2_invalidParticleIndex;
                        this.first = fixture;
                        this.second = particle;
                    }
                }
                b2ParticleSystem.FixtureParticle = FixtureParticle;
                class FixtureParticleSet extends b2ParticleSystem.FixedSetAllocator {
                    Initialize(bodyContactBuffer, flagsBuffer) {
                    }
                    Find(pair) {
                        return b2Settings_30.b2_invalidParticleIndex;
                    }
                }
                b2ParticleSystem.FixtureParticleSet = FixtureParticleSet;
                class ParticlePair {
                    constructor(particleA, particleB) {
                        this.first = b2Settings_30.b2_invalidParticleIndex;
                        this.second = b2Settings_30.b2_invalidParticleIndex;
                        this.first = particleA;
                        this.second = particleB;
                    }
                }
                b2ParticleSystem.ParticlePair = ParticlePair;
                class b2ParticlePairSet extends b2ParticleSystem.FixedSetAllocator {
                    Initialize(contactBuffer, flagsBuffer) {
                    }
                    Find(pair) {
                        return b2Settings_30.b2_invalidParticleIndex;
                    }
                }
                b2ParticleSystem.b2ParticlePairSet = b2ParticlePairSet;
                class ConnectionFilter {
                    IsNecessary(index) {
                        return true;
                    }
                    ShouldCreatePair(a, b) {
                        return true;
                    }
                    ShouldCreateTriad(a, b, c) {
                        return true;
                    }
                }
                b2ParticleSystem.ConnectionFilter = ConnectionFilter;
                class DestroyParticlesInShapeCallback extends b2WorldCallbacks_1.b2QueryCallback {
                    constructor(system, shape, xf, callDestructionListener) {
                        super();
                        this.m_callDestructionListener = false;
                        this.m_destroyed = 0;
                        this.m_system = system;
                        this.m_shape = shape;
                        this.m_xf = xf;
                        this.m_callDestructionListener = callDestructionListener;
                        this.m_destroyed = 0;
                    }
                    ReportFixture(fixture) {
                        return false;
                    }
                    ReportParticle(particleSystem, index) {
                        if (particleSystem !== this.m_system) {
                            return false;
                        }
                        if (!this.m_system.m_positionBuffer.data) {
                            throw new Error();
                        }
                        if (this.m_shape.TestPoint(this.m_xf, this.m_system.m_positionBuffer.data[index])) {
                            this.m_system.DestroyParticle(index, this.m_callDestructionListener);
                            this.m_destroyed++;
                        }
                        return true;
                    }
                    Destroyed() {
                        return this.m_destroyed;
                    }
                }
                b2ParticleSystem.DestroyParticlesInShapeCallback = DestroyParticlesInShapeCallback;
                class JoinParticleGroupsFilter extends b2ParticleSystem.ConnectionFilter {
                    constructor(threshold) {
                        super();
                        this.m_threshold = 0;
                        this.m_threshold = threshold;
                    }
                    ShouldCreatePair(a, b) {
                        return (a < this.m_threshold && this.m_threshold <= b) ||
                            (b < this.m_threshold && this.m_threshold <= a);
                    }
                    ShouldCreateTriad(a, b, c) {
                        return (a < this.m_threshold || b < this.m_threshold || c < this.m_threshold) &&
                            (this.m_threshold <= a || this.m_threshold <= b || this.m_threshold <= c);
                    }
                }
                b2ParticleSystem.JoinParticleGroupsFilter = JoinParticleGroupsFilter;
                class CompositeShape extends b2Shape_7.b2Shape {
                    constructor(shapes, shapeCount = shapes.length) {
                        super(b2Shape_7.b2ShapeType.e_unknown, 0);
                        this.m_shapeCount = 0;
                        this.m_shapes = shapes;
                        this.m_shapeCount = shapeCount;
                    }
                    Clone() {
                        throw new Error();
                    }
                    GetChildCount() {
                        return 1;
                    }
                    TestPoint(xf, p) {
                        for (let i = 0; i < this.m_shapeCount; i++) {
                            if (this.m_shapes[i].TestPoint(xf, p)) {
                                return true;
                            }
                        }
                        return false;
                    }
                    ComputeDistance(xf, p, normal, childIndex) {
                        return 0;
                    }
                    RayCast(output, input, xf, childIndex) {
                        return false;
                    }
                    ComputeAABB(aabb, xf, childIndex) {
                        const s_subaabb = new b2Collision_5.b2AABB();
                        aabb.lowerBound.x = +b2Settings_30.b2_maxFloat;
                        aabb.lowerBound.y = +b2Settings_30.b2_maxFloat;
                        aabb.upperBound.x = -b2Settings_30.b2_maxFloat;
                        aabb.upperBound.y = -b2Settings_30.b2_maxFloat;
                        for (let i = 0; i < this.m_shapeCount; i++) {
                            const childCount = this.m_shapes[i].GetChildCount();
                            for (let j = 0; j < childCount; j++) {
                                const subaabb = s_subaabb;
                                this.m_shapes[i].ComputeAABB(subaabb, xf, j);
                                aabb.Combine1(subaabb);
                            }
                        }
                    }
                    ComputeMass(massData, density) {
                    }
                    SetupDistanceProxy(proxy, index) {
                    }
                    ComputeSubmergedArea(normal, offset, xf, c) {
                        return 0;
                    }
                    Dump(log) {
                    }
                }
                b2ParticleSystem.CompositeShape = CompositeShape;
                class ReactiveFilter extends b2ParticleSystem.ConnectionFilter {
                    constructor(flagsBuffer) {
                        super();
                        this.m_flagsBuffer = flagsBuffer;
                    }
                    IsNecessary(index) {
                        if (!this.m_flagsBuffer.data) {
                            throw new Error();
                        }
                        return (this.m_flagsBuffer.data[index] & b2Particle_1.b2ParticleFlag.b2_reactiveParticle) !== 0;
                    }
                }
                b2ParticleSystem.ReactiveFilter = ReactiveFilter;
                class UpdateBodyContactsCallback extends b2FixtureParticleQueryCallback {
                    constructor(system, contactFilter) {
                        super(system);
                        this.m_contactFilter = contactFilter;
                    }
                    ShouldCollideFixtureParticle(fixture, particleSystem, particleIndex) {
                        if (this.m_contactFilter) {
                            const flags = this.m_system.GetFlagsBuffer();
                            if (flags[particleIndex] & b2Particle_1.b2ParticleFlag.b2_fixtureContactFilterParticle) {
                                return this.m_contactFilter.ShouldCollideFixtureParticle(fixture, this.m_system, particleIndex);
                            }
                        }
                        return true;
                    }
                    ReportFixtureAndParticle(fixture, childIndex, a) {
                        const s_n = b2ParticleSystem.UpdateBodyContactsCallback.ReportFixtureAndParticle_s_n;
                        const s_rp = b2ParticleSystem.UpdateBodyContactsCallback.ReportFixtureAndParticle_s_rp;
                        if (!this.m_system.m_flagsBuffer.data) {
                            throw new Error();
                        }
                        if (!this.m_system.m_positionBuffer.data) {
                            throw new Error();
                        }
                        const ap = this.m_system.m_positionBuffer.data[a];
                        const n = s_n;
                        const d = fixture.ComputeDistance(ap, n, childIndex);
                        if (d < this.m_system.m_particleDiameter && this.ShouldCollideFixtureParticle(fixture, this.m_system, a)) {
                            const b = fixture.GetBody();
                            const bp = b.GetWorldCenter();
                            const bm = b.GetMass();
                            const bI = b.GetInertia() - bm * b.GetLocalCenter().LengthSquared();
                            const invBm = bm > 0 ? 1 / bm : 0;
                            const invBI = bI > 0 ? 1 / bI : 0;
                            const invAm = this.m_system.m_flagsBuffer.data[a] &
                                b2Particle_1.b2ParticleFlag.b2_wallParticle ? 0 : this.m_system.GetParticleInvMass();
                            const rp = b2Math_28.b2Vec2.SubVV(ap, bp, s_rp);
                            const rpn = b2Math_28.b2Vec2.CrossVV(rp, n);
                            const invM = invAm + invBm + invBI * rpn * rpn;
                            const contact = this.m_system.m_bodyContactBuffer.data[this.m_system.m_bodyContactBuffer.Append()];
                            contact.index = a;
                            contact.body = b;
                            contact.fixture = fixture;
                            contact.weight = 1 - d * this.m_system.m_inverseDiameter;
                            contact.normal.Copy(n.SelfNeg());
                            contact.mass = invM > 0 ? 1 / invM : 0;
                            this.m_system.DetectStuckParticle(a);
                        }
                    }
                }
                UpdateBodyContactsCallback.ReportFixtureAndParticle_s_n = new b2Math_28.b2Vec2();
                UpdateBodyContactsCallback.ReportFixtureAndParticle_s_rp = new b2Math_28.b2Vec2();
                b2ParticleSystem.UpdateBodyContactsCallback = UpdateBodyContactsCallback;
                class SolveCollisionCallback extends b2FixtureParticleQueryCallback {
                    constructor(system, step) {
                        super(system);
                        this.m_step = step;
                    }
                    ReportFixtureAndParticle(fixture, childIndex, a) {
                        const s_p1 = b2ParticleSystem.SolveCollisionCallback.ReportFixtureAndParticle_s_p1;
                        const s_output = b2ParticleSystem.SolveCollisionCallback.ReportFixtureAndParticle_s_output;
                        const s_input = b2ParticleSystem.SolveCollisionCallback.ReportFixtureAndParticle_s_input;
                        const s_p = b2ParticleSystem.SolveCollisionCallback.ReportFixtureAndParticle_s_p;
                        const s_v = b2ParticleSystem.SolveCollisionCallback.ReportFixtureAndParticle_s_v;
                        const s_f = b2ParticleSystem.SolveCollisionCallback.ReportFixtureAndParticle_s_f;
                        const body = fixture.GetBody();
                        if (!this.m_system.m_positionBuffer.data) {
                            throw new Error();
                        }
                        if (!this.m_system.m_velocityBuffer.data) {
                            throw new Error();
                        }
                        const ap = this.m_system.m_positionBuffer.data[a];
                        const av = this.m_system.m_velocityBuffer.data[a];
                        const output = s_output;
                        const input = s_input;
                        if (this.m_system.m_iterationIndex === 0) {
                            const p1 = b2Math_28.b2Transform.MulTXV(body.m_xf0, ap, s_p1);
                            if (fixture.GetShape().GetType() === b2Shape_7.b2ShapeType.e_circleShape) {
                                p1.SelfSub(body.GetLocalCenter());
                                b2Math_28.b2Rot.MulRV(body.m_xf0.q, p1, p1);
                                b2Math_28.b2Rot.MulTRV(body.m_xf.q, p1, p1);
                                p1.SelfAdd(body.GetLocalCenter());
                            }
                            b2Math_28.b2Transform.MulXV(body.m_xf, p1, input.p1);
                        }
                        else {
                            input.p1.Copy(ap);
                        }
                        b2Math_28.b2Vec2.AddVMulSV(ap, this.m_step.dt, av, input.p2);
                        input.maxFraction = 1;
                        if (fixture.RayCast(output, input, childIndex)) {
                            const n = output.normal;
                            const p = s_p;
                            p.x = (1 - output.fraction) * input.p1.x + output.fraction * input.p2.x + b2Settings_30.b2_linearSlop * n.x;
                            p.y = (1 - output.fraction) * input.p1.y + output.fraction * input.p2.y + b2Settings_30.b2_linearSlop * n.y;
                            const v = s_v;
                            v.x = this.m_step.inv_dt * (p.x - ap.x);
                            v.y = this.m_step.inv_dt * (p.y - ap.y);
                            this.m_system.m_velocityBuffer.data[a].Copy(v);
                            const f = s_f;
                            f.x = this.m_step.inv_dt * this.m_system.GetParticleMass() * (av.x - v.x);
                            f.y = this.m_step.inv_dt * this.m_system.GetParticleMass() * (av.y - v.y);
                            this.m_system.ParticleApplyForce(a, f);
                        }
                    }
                    ReportParticle(system, index) {
                        return false;
                    }
                }
                SolveCollisionCallback.ReportFixtureAndParticle_s_p1 = new b2Math_28.b2Vec2();
                SolveCollisionCallback.ReportFixtureAndParticle_s_output = new b2Collision_5.b2RayCastOutput();
                SolveCollisionCallback.ReportFixtureAndParticle_s_input = new b2Collision_5.b2RayCastInput();
                SolveCollisionCallback.ReportFixtureAndParticle_s_p = new b2Math_28.b2Vec2();
                SolveCollisionCallback.ReportFixtureAndParticle_s_v = new b2Math_28.b2Vec2();
                SolveCollisionCallback.ReportFixtureAndParticle_s_f = new b2Math_28.b2Vec2();
                b2ParticleSystem.SolveCollisionCallback = SolveCollisionCallback;
            })(b2ParticleSystem || (b2ParticleSystem = {}));
            exports_37("b2ParticleSystem", b2ParticleSystem);
        }
    };
});
System.register("Particle/b2ParticleGroup", ["Common/b2Math", "Common/b2Draw"], function (exports_38, context_38) {
    "use strict";
    var __moduleName = context_38 && context_38.id;
    var b2Math_29, b2Draw_3, b2ParticleGroupFlag, b2ParticleGroupDef, b2ParticleGroup;
    return {
        setters: [
            function (b2Math_29_1) {
                b2Math_29 = b2Math_29_1;
            },
            function (b2Draw_3_1) {
                b2Draw_3 = b2Draw_3_1;
            }
        ],
        execute: function () {
            (function (b2ParticleGroupFlag) {
                b2ParticleGroupFlag[b2ParticleGroupFlag["b2_solidParticleGroup"] = 1] = "b2_solidParticleGroup";
                b2ParticleGroupFlag[b2ParticleGroupFlag["b2_rigidParticleGroup"] = 2] = "b2_rigidParticleGroup";
                b2ParticleGroupFlag[b2ParticleGroupFlag["b2_particleGroupCanBeEmpty"] = 4] = "b2_particleGroupCanBeEmpty";
                b2ParticleGroupFlag[b2ParticleGroupFlag["b2_particleGroupWillBeDestroyed"] = 8] = "b2_particleGroupWillBeDestroyed";
                b2ParticleGroupFlag[b2ParticleGroupFlag["b2_particleGroupNeedsUpdateDepth"] = 16] = "b2_particleGroupNeedsUpdateDepth";
                b2ParticleGroupFlag[b2ParticleGroupFlag["b2_particleGroupInternalMask"] = 24] = "b2_particleGroupInternalMask";
            })(b2ParticleGroupFlag || (b2ParticleGroupFlag = {}));
            exports_38("b2ParticleGroupFlag", b2ParticleGroupFlag);
            b2ParticleGroupDef = class b2ParticleGroupDef {
                constructor() {
                    this.flags = 0;
                    this.groupFlags = 0;
                    this.position = new b2Math_29.b2Vec2();
                    this.angle = 0.0;
                    this.linearVelocity = new b2Math_29.b2Vec2();
                    this.angularVelocity = 0.0;
                    this.color = new b2Draw_3.b2Color();
                    this.strength = 1.0;
                    this.shapeCount = 0;
                    this.stride = 0;
                    this.particleCount = 0;
                    this.lifetime = 0;
                    this.userData = null;
                    this.group = null;
                }
            };
            exports_38("b2ParticleGroupDef", b2ParticleGroupDef);
            b2ParticleGroup = class b2ParticleGroup {
                constructor(system) {
                    this.m_firstIndex = 0;
                    this.m_lastIndex = 0;
                    this.m_groupFlags = 0;
                    this.m_strength = 1.0;
                    this.m_timestamp = -1;
                    this.m_mass = 0.0;
                    this.m_inertia = 0.0;
                    this.m_center = new b2Math_29.b2Vec2();
                    this.m_linearVelocity = new b2Math_29.b2Vec2();
                    this.m_angularVelocity = 0.0;
                    this.m_transform = new b2Math_29.b2Transform();
                    this.m_userData = null;
                    this.m_system = system;
                }
                GetParticleSystem() {
                    return this.m_system;
                }
                GetParticleCount() {
                    return this.m_lastIndex - this.m_firstIndex;
                }
                GetBufferIndex() {
                    return this.m_firstIndex;
                }
                ContainsParticle(index) {
                    return this.m_firstIndex <= index && index < this.m_lastIndex;
                }
                GetAllParticleFlags() {
                    if (!this.m_system.m_flagsBuffer.data) {
                        throw new Error();
                    }
                    let flags = 0;
                    for (let i = this.m_firstIndex; i < this.m_lastIndex; i++) {
                        flags |= this.m_system.m_flagsBuffer.data[i];
                    }
                    return flags;
                }
                GetGroupFlags() {
                    return this.m_groupFlags;
                }
                SetGroupFlags(flags) {
                    flags |= this.m_groupFlags & b2ParticleGroupFlag.b2_particleGroupInternalMask;
                    this.m_system.SetGroupFlags(this, flags);
                }
                GetMass() {
                    this.UpdateStatistics();
                    return this.m_mass;
                }
                GetInertia() {
                    this.UpdateStatistics();
                    return this.m_inertia;
                }
                GetCenter() {
                    this.UpdateStatistics();
                    return this.m_center;
                }
                GetLinearVelocity() {
                    this.UpdateStatistics();
                    return this.m_linearVelocity;
                }
                GetAngularVelocity() {
                    this.UpdateStatistics();
                    return this.m_angularVelocity;
                }
                GetTransform() {
                    return this.m_transform;
                }
                GetPosition() {
                    return this.m_transform.p;
                }
                GetAngle() {
                    return this.m_transform.q.GetAngle();
                }
                GetLinearVelocityFromWorldPoint(worldPoint, out) {
                    const s_t0 = b2ParticleGroup.GetLinearVelocityFromWorldPoint_s_t0;
                    this.UpdateStatistics();
                    return b2Math_29.b2Vec2.AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, b2Math_29.b2Vec2.SubVV(worldPoint, this.m_center, s_t0), out);
                }
                GetUserData() {
                    return this.m_userData;
                }
                SetUserData(data) {
                    this.m_userData = data;
                }
                ApplyForce(force) {
                    this.m_system.ApplyForce(this.m_firstIndex, this.m_lastIndex, force);
                }
                ApplyLinearImpulse(impulse) {
                    this.m_system.ApplyLinearImpulse(this.m_firstIndex, this.m_lastIndex, impulse);
                }
                DestroyParticles(callDestructionListener) {
                    if (this.m_system.m_world.IsLocked()) {
                        throw new Error();
                    }
                    for (let i = this.m_firstIndex; i < this.m_lastIndex; i++) {
                        this.m_system.DestroyParticle(i, callDestructionListener);
                    }
                }
                UpdateStatistics() {
                    if (!this.m_system.m_positionBuffer.data) {
                        throw new Error();
                    }
                    if (!this.m_system.m_velocityBuffer.data) {
                        throw new Error();
                    }
                    const p = new b2Math_29.b2Vec2();
                    const v = new b2Math_29.b2Vec2();
                    if (this.m_timestamp !== this.m_system.m_timestamp) {
                        const m = this.m_system.GetParticleMass();
                        this.m_mass = m * (this.m_lastIndex - this.m_firstIndex);
                        this.m_center.SetZero();
                        this.m_linearVelocity.SetZero();
                        for (let i = this.m_firstIndex; i < this.m_lastIndex; i++) {
                            this.m_center.SelfMulAdd(m, this.m_system.m_positionBuffer.data[i]);
                            this.m_linearVelocity.SelfMulAdd(m, this.m_system.m_velocityBuffer.data[i]);
                        }
                        if (this.m_mass > 0) {
                            const inv_mass = 1 / this.m_mass;
                            this.m_center.SelfMul(inv_mass);
                            this.m_linearVelocity.SelfMul(inv_mass);
                        }
                        this.m_inertia = 0;
                        this.m_angularVelocity = 0;
                        for (let i = this.m_firstIndex; i < this.m_lastIndex; i++) {
                            b2Math_29.b2Vec2.SubVV(this.m_system.m_positionBuffer.data[i], this.m_center, p);
                            b2Math_29.b2Vec2.SubVV(this.m_system.m_velocityBuffer.data[i], this.m_linearVelocity, v);
                            this.m_inertia += m * b2Math_29.b2Vec2.DotVV(p, p);
                            this.m_angularVelocity += m * b2Math_29.b2Vec2.CrossVV(p, v);
                        }
                        if (this.m_inertia > 0) {
                            this.m_angularVelocity *= 1 / this.m_inertia;
                        }
                        this.m_timestamp = this.m_system.m_timestamp;
                    }
                }
            };
            b2ParticleGroup.GetLinearVelocityFromWorldPoint_s_t0 = new b2Math_29.b2Vec2();
            exports_38("b2ParticleGroup", b2ParticleGroup);
        }
    };
});
System.register("Dynamics/b2WorldCallbacks", ["Common/b2Settings", "Dynamics/b2Body"], function (exports_39, context_39) {
    "use strict";
    var __moduleName = context_39 && context_39.id;
    var b2Settings_32, b2Body_1, b2DestructionListener, b2ContactFilter, b2ContactImpulse, b2ContactListener, b2QueryCallback, b2RayCastCallback;
    return {
        setters: [
            function (b2Settings_32_1) {
                b2Settings_32 = b2Settings_32_1;
            },
            function (b2Body_1_1) {
                b2Body_1 = b2Body_1_1;
            }
        ],
        execute: function () {
            b2DestructionListener = class b2DestructionListener {
                SayGoodbyeJoint(joint) { }
                SayGoodbyeFixture(fixture) { }
                SayGoodbyeParticleGroup(group) { }
                SayGoodbyeParticle(system, index) { }
            };
            exports_39("b2DestructionListener", b2DestructionListener);
            b2ContactFilter = class b2ContactFilter {
                ShouldCollide(fixtureA, fixtureB) {
                    const bodyA = fixtureA.GetBody();
                    const bodyB = fixtureB.GetBody();
                    if (bodyB.GetType() === b2Body_1.b2BodyType.b2_staticBody && bodyA.GetType() === b2Body_1.b2BodyType.b2_staticBody) {
                        return false;
                    }
                    if (!bodyB.ShouldCollideConnected(bodyA)) {
                        return false;
                    }
                    const filter1 = fixtureA.GetFilterData();
                    const filter2 = fixtureB.GetFilterData();
                    if (filter1.groupIndex === filter2.groupIndex && filter1.groupIndex !== 0) {
                        return (filter1.groupIndex > 0);
                    }
                    const collide = (((filter1.maskBits & filter2.categoryBits) !== 0) && ((filter1.categoryBits & filter2.maskBits) !== 0));
                    return collide;
                }
                ShouldCollideFixtureParticle(fixture, system, index) {
                    return true;
                }
                ShouldCollideParticleParticle(system, indexA, indexB) {
                    return true;
                }
            };
            b2ContactFilter.b2_defaultFilter = new b2ContactFilter();
            exports_39("b2ContactFilter", b2ContactFilter);
            b2ContactImpulse = class b2ContactImpulse {
                constructor() {
                    this.normalImpulses = b2Settings_32.b2MakeNumberArray(b2Settings_32.b2_maxManifoldPoints);
                    this.tangentImpulses = b2Settings_32.b2MakeNumberArray(b2Settings_32.b2_maxManifoldPoints);
                    this.count = 0;
                }
            };
            exports_39("b2ContactImpulse", b2ContactImpulse);
            b2ContactListener = class b2ContactListener {
                BeginContact(contact) { }
                EndContact(contact) { }
                BeginContactFixtureParticle(system, contact) { }
                EndContactFixtureParticle(system, contact) { }
                BeginContactParticleParticle(system, contact) { }
                EndContactParticleParticle(system, contact) { }
                PreSolve(contact, oldManifold) { }
                PostSolve(contact, impulse) { }
            };
            b2ContactListener.b2_defaultListener = new b2ContactListener();
            exports_39("b2ContactListener", b2ContactListener);
            b2QueryCallback = class b2QueryCallback {
                ReportFixture(fixture) {
                    return true;
                }
                ReportParticle(system, index) {
                    return false;
                }
                ShouldQueryParticleSystem(system) {
                    return true;
                }
            };
            exports_39("b2QueryCallback", b2QueryCallback);
            b2RayCastCallback = class b2RayCastCallback {
                ReportFixture(fixture, point, normal, fraction) {
                    return fraction;
                }
                ReportParticle(system, index, point, normal, fraction) {
                    return 0;
                }
                ShouldQueryParticleSystem(system) {
                    return true;
                }
            };
            exports_39("b2RayCastCallback", b2RayCastCallback);
        }
    };
});
System.register("Dynamics/b2Island", ["Common/b2Settings", "Common/b2Math", "Common/b2Timer", "Dynamics/Contacts/b2ContactSolver", "Dynamics/b2Body", "Dynamics/b2TimeStep", "Dynamics/b2WorldCallbacks"], function (exports_40, context_40) {
    "use strict";
    var __moduleName = context_40 && context_40.id;
    var b2Settings_33, b2Settings_34, b2Settings_35, b2Settings_36, b2Math_30, b2Timer_2, b2ContactSolver_1, b2Body_2, b2TimeStep_3, b2WorldCallbacks_2, b2Island;
    return {
        setters: [
            function (b2Settings_33_1) {
                b2Settings_33 = b2Settings_33_1;
                b2Settings_34 = b2Settings_33_1;
                b2Settings_35 = b2Settings_33_1;
                b2Settings_36 = b2Settings_33_1;
            },
            function (b2Math_30_1) {
                b2Math_30 = b2Math_30_1;
            },
            function (b2Timer_2_1) {
                b2Timer_2 = b2Timer_2_1;
            },
            function (b2ContactSolver_1_1) {
                b2ContactSolver_1 = b2ContactSolver_1_1;
            },
            function (b2Body_2_1) {
                b2Body_2 = b2Body_2_1;
            },
            function (b2TimeStep_3_1) {
                b2TimeStep_3 = b2TimeStep_3_1;
            },
            function (b2WorldCallbacks_2_1) {
                b2WorldCallbacks_2 = b2WorldCallbacks_2_1;
            }
        ],
        execute: function () {
            b2Island = class b2Island {
                constructor() {
                    this.m_allocator = null;
                    this.m_bodies = [];
                    this.m_contacts = [];
                    this.m_joints = [];
                    this.m_positions = b2TimeStep_3.b2Position.MakeArray(1024);
                    this.m_velocities = b2TimeStep_3.b2Velocity.MakeArray(1024);
                    this.m_bodyCount = 0;
                    this.m_jointCount = 0;
                    this.m_contactCount = 0;
                    this.m_bodyCapacity = 0;
                    this.m_contactCapacity = 0;
                    this.m_jointCapacity = 0;
                }
                Initialize(bodyCapacity, contactCapacity, jointCapacity, allocator, listener) {
                    this.m_bodyCapacity = bodyCapacity;
                    this.m_contactCapacity = contactCapacity;
                    this.m_jointCapacity = jointCapacity;
                    this.m_bodyCount = 0;
                    this.m_contactCount = 0;
                    this.m_jointCount = 0;
                    this.m_allocator = allocator;
                    this.m_listener = listener;
                    if (this.m_positions.length < bodyCapacity) {
                        const new_length = b2Math_30.b2Max(this.m_positions.length * 2, bodyCapacity);
                        while (this.m_positions.length < new_length) {
                            this.m_positions[this.m_positions.length] = new b2TimeStep_3.b2Position();
                        }
                    }
                    if (this.m_velocities.length < bodyCapacity) {
                        const new_length = b2Math_30.b2Max(this.m_velocities.length * 2, bodyCapacity);
                        while (this.m_velocities.length < new_length) {
                            this.m_velocities[this.m_velocities.length] = new b2TimeStep_3.b2Velocity();
                        }
                    }
                }
                Clear() {
                    this.m_bodyCount = 0;
                    this.m_contactCount = 0;
                    this.m_jointCount = 0;
                }
                AddBody(body) {
                    body.m_islandIndex = this.m_bodyCount;
                    this.m_bodies[this.m_bodyCount++] = body;
                }
                AddContact(contact) {
                    this.m_contacts[this.m_contactCount++] = contact;
                }
                AddJoint(joint) {
                    this.m_joints[this.m_jointCount++] = joint;
                }
                Solve(profile, step, gravity, allowSleep) {
                    const timer = b2Island.s_timer.Reset();
                    const h = step.dt;
                    for (let i = 0; i < this.m_bodyCount; ++i) {
                        const b = this.m_bodies[i];
                        this.m_positions[i].c.Copy(b.m_sweep.c);
                        const a = b.m_sweep.a;
                        const v = this.m_velocities[i].v.Copy(b.m_linearVelocity);
                        let w = b.m_angularVelocity;
                        b.m_sweep.c0.Copy(b.m_sweep.c);
                        b.m_sweep.a0 = b.m_sweep.a;
                        if (b.m_type === b2Body_2.b2BodyType.b2_dynamicBody) {
                            v.x += h * (b.m_gravityScale * gravity.x + b.m_invMass * b.m_force.x);
                            v.y += h * (b.m_gravityScale * gravity.y + b.m_invMass * b.m_force.y);
                            w += h * b.m_invI * b.m_torque;
                            v.SelfMul(1.0 / (1.0 + h * b.m_linearDamping));
                            w *= 1.0 / (1.0 + h * b.m_angularDamping);
                        }
                        this.m_positions[i].a = a;
                        this.m_velocities[i].w = w;
                    }
                    timer.Reset();
                    const solverData = b2Island.s_solverData;
                    solverData.step.Copy(step);
                    solverData.positions = this.m_positions;
                    solverData.velocities = this.m_velocities;
                    const contactSolverDef = b2Island.s_contactSolverDef;
                    contactSolverDef.step.Copy(step);
                    contactSolverDef.contacts = this.m_contacts;
                    contactSolverDef.count = this.m_contactCount;
                    contactSolverDef.positions = this.m_positions;
                    contactSolverDef.velocities = this.m_velocities;
                    contactSolverDef.allocator = this.m_allocator;
                    const contactSolver = b2Island.s_contactSolver.Initialize(contactSolverDef);
                    contactSolver.InitializeVelocityConstraints();
                    if (step.warmStarting) {
                        contactSolver.WarmStart();
                    }
                    for (let i = 0; i < this.m_jointCount; ++i) {
                        this.m_joints[i].InitVelocityConstraints(solverData);
                    }
                    profile.solveInit = timer.GetMilliseconds();
                    timer.Reset();
                    for (let i = 0; i < step.velocityIterations; ++i) {
                        for (let j = 0; j < this.m_jointCount; ++j) {
                            this.m_joints[j].SolveVelocityConstraints(solverData);
                        }
                        contactSolver.SolveVelocityConstraints();
                    }
                    contactSolver.StoreImpulses();
                    profile.solveVelocity = timer.GetMilliseconds();
                    for (let i = 0; i < this.m_bodyCount; ++i) {
                        const c = this.m_positions[i].c;
                        let a = this.m_positions[i].a;
                        const v = this.m_velocities[i].v;
                        let w = this.m_velocities[i].w;
                        const translation = b2Math_30.b2Vec2.MulSV(h, v, b2Island.s_translation);
                        if (b2Math_30.b2Vec2.DotVV(translation, translation) > b2Settings_34.b2_maxTranslationSquared) {
                            const ratio = b2Settings_34.b2_maxTranslation / translation.Length();
                            v.SelfMul(ratio);
                        }
                        const rotation = h * w;
                        if (rotation * rotation > b2Settings_35.b2_maxRotationSquared) {
                            const ratio = b2Settings_35.b2_maxRotation / b2Math_30.b2Abs(rotation);
                            w *= ratio;
                        }
                        c.x += h * v.x;
                        c.y += h * v.y;
                        a += h * w;
                        this.m_positions[i].a = a;
                        this.m_velocities[i].w = w;
                    }
                    timer.Reset();
                    let positionSolved = false;
                    for (let i = 0; i < step.positionIterations; ++i) {
                        const contactsOkay = contactSolver.SolvePositionConstraints();
                        let jointsOkay = true;
                        for (let j = 0; j < this.m_jointCount; ++j) {
                            const jointOkay = this.m_joints[j].SolvePositionConstraints(solverData);
                            jointsOkay = jointsOkay && jointOkay;
                        }
                        if (contactsOkay && jointsOkay) {
                            positionSolved = true;
                            break;
                        }
                    }
                    for (let i = 0; i < this.m_bodyCount; ++i) {
                        const body = this.m_bodies[i];
                        body.m_sweep.c.Copy(this.m_positions[i].c);
                        body.m_sweep.a = this.m_positions[i].a;
                        body.m_linearVelocity.Copy(this.m_velocities[i].v);
                        body.m_angularVelocity = this.m_velocities[i].w;
                        body.SynchronizeTransform();
                    }
                    profile.solvePosition = timer.GetMilliseconds();
                    this.Report(contactSolver.m_velocityConstraints);
                    if (allowSleep) {
                        let minSleepTime = b2Settings_33.b2_maxFloat;
                        const linTolSqr = b2Settings_36.b2_linearSleepTolerance * b2Settings_36.b2_linearSleepTolerance;
                        const angTolSqr = b2Settings_36.b2_angularSleepTolerance * b2Settings_36.b2_angularSleepTolerance;
                        for (let i = 0; i < this.m_bodyCount; ++i) {
                            const b = this.m_bodies[i];
                            if (b.GetType() === b2Body_2.b2BodyType.b2_staticBody) {
                                continue;
                            }
                            if (!b.m_autoSleepFlag ||
                                b.m_angularVelocity * b.m_angularVelocity > angTolSqr ||
                                b2Math_30.b2Vec2.DotVV(b.m_linearVelocity, b.m_linearVelocity) > linTolSqr) {
                                b.m_sleepTime = 0;
                                minSleepTime = 0;
                            }
                            else {
                                b.m_sleepTime += h;
                                minSleepTime = b2Math_30.b2Min(minSleepTime, b.m_sleepTime);
                            }
                        }
                        if (minSleepTime >= b2Settings_33.b2_timeToSleep && positionSolved) {
                            for (let i = 0; i < this.m_bodyCount; ++i) {
                                const b = this.m_bodies[i];
                                b.SetAwake(false);
                            }
                        }
                    }
                }
                SolveTOI(subStep, toiIndexA, toiIndexB) {
                    for (let i = 0; i < this.m_bodyCount; ++i) {
                        const b = this.m_bodies[i];
                        this.m_positions[i].c.Copy(b.m_sweep.c);
                        this.m_positions[i].a = b.m_sweep.a;
                        this.m_velocities[i].v.Copy(b.m_linearVelocity);
                        this.m_velocities[i].w = b.m_angularVelocity;
                    }
                    const contactSolverDef = b2Island.s_contactSolverDef;
                    contactSolverDef.contacts = this.m_contacts;
                    contactSolverDef.count = this.m_contactCount;
                    contactSolverDef.allocator = this.m_allocator;
                    contactSolverDef.step.Copy(subStep);
                    contactSolverDef.positions = this.m_positions;
                    contactSolverDef.velocities = this.m_velocities;
                    const contactSolver = b2Island.s_contactSolver.Initialize(contactSolverDef);
                    for (let i = 0; i < subStep.positionIterations; ++i) {
                        const contactsOkay = contactSolver.SolveTOIPositionConstraints(toiIndexA, toiIndexB);
                        if (contactsOkay) {
                            break;
                        }
                    }
                    this.m_bodies[toiIndexA].m_sweep.c0.Copy(this.m_positions[toiIndexA].c);
                    this.m_bodies[toiIndexA].m_sweep.a0 = this.m_positions[toiIndexA].a;
                    this.m_bodies[toiIndexB].m_sweep.c0.Copy(this.m_positions[toiIndexB].c);
                    this.m_bodies[toiIndexB].m_sweep.a0 = this.m_positions[toiIndexB].a;
                    contactSolver.InitializeVelocityConstraints();
                    for (let i = 0; i < subStep.velocityIterations; ++i) {
                        contactSolver.SolveVelocityConstraints();
                    }
                    const h = subStep.dt;
                    for (let i = 0; i < this.m_bodyCount; ++i) {
                        const c = this.m_positions[i].c;
                        let a = this.m_positions[i].a;
                        const v = this.m_velocities[i].v;
                        let w = this.m_velocities[i].w;
                        const translation = b2Math_30.b2Vec2.MulSV(h, v, b2Island.s_translation);
                        if (b2Math_30.b2Vec2.DotVV(translation, translation) > b2Settings_34.b2_maxTranslationSquared) {
                            const ratio = b2Settings_34.b2_maxTranslation / translation.Length();
                            v.SelfMul(ratio);
                        }
                        const rotation = h * w;
                        if (rotation * rotation > b2Settings_35.b2_maxRotationSquared) {
                            const ratio = b2Settings_35.b2_maxRotation / b2Math_30.b2Abs(rotation);
                            w *= ratio;
                        }
                        c.SelfMulAdd(h, v);
                        a += h * w;
                        this.m_positions[i].a = a;
                        this.m_velocities[i].w = w;
                        const body = this.m_bodies[i];
                        body.m_sweep.c.Copy(c);
                        body.m_sweep.a = a;
                        body.m_linearVelocity.Copy(v);
                        body.m_angularVelocity = w;
                        body.SynchronizeTransform();
                    }
                    this.Report(contactSolver.m_velocityConstraints);
                }
                Report(constraints) {
                    if (this.m_listener === null) {
                        return;
                    }
                    for (let i = 0; i < this.m_contactCount; ++i) {
                        const c = this.m_contacts[i];
                        if (!c) {
                            continue;
                        }
                        const vc = constraints[i];
                        const impulse = b2Island.s_impulse;
                        impulse.count = vc.pointCount;
                        for (let j = 0; j < vc.pointCount; ++j) {
                            impulse.normalImpulses[j] = vc.points[j].normalImpulse;
                            impulse.tangentImpulses[j] = vc.points[j].tangentImpulse;
                        }
                        this.m_listener.PostSolve(c, impulse);
                    }
                }
            };
            b2Island.s_timer = new b2Timer_2.b2Timer();
            b2Island.s_solverData = new b2TimeStep_3.b2SolverData();
            b2Island.s_contactSolverDef = new b2ContactSolver_1.b2ContactSolverDef();
            b2Island.s_contactSolver = new b2ContactSolver_1.b2ContactSolver();
            b2Island.s_translation = new b2Math_30.b2Vec2();
            b2Island.s_impulse = new b2WorldCallbacks_2.b2ContactImpulse();
            exports_40("b2Island", b2Island);
        }
    };
});
System.register("Controllers/b2Controller", [], function (exports_41, context_41) {
    "use strict";
    var __moduleName = context_41 && context_41.id;
    var b2Controller;
    return {
        setters: [],
        execute: function () {
            b2Controller = class b2Controller {
                constructor() {
                    this.m_bodyList = new Set();
                }
                GetBodyList() {
                    return this.m_bodyList;
                }
                AddBody(body) {
                    this.m_bodyList.add(body);
                    body.m_controllerList.add(this);
                }
                RemoveBody(body) {
                    if (this.m_bodyList.size <= 0) {
                        throw new Error();
                    }
                    const found = this.m_bodyList.delete(body);
                    if (!found) {
                        throw new Error();
                    }
                    body.m_controllerList.delete(this);
                }
                Clear() {
                    for (const body of this.m_bodyList) {
                        this.RemoveBody(body);
                    }
                }
            };
            exports_41("b2Controller", b2Controller);
        }
    };
});
System.register("Dynamics/b2World", ["Common/b2Settings", "Common/b2Math", "Common/b2Timer", "Common/b2Draw", "Collision/b2Collision", "Collision/b2TimeOfImpact", "Collision/Shapes/b2Shape", "Dynamics/Joints/b2Joint", "Dynamics/Joints/b2JointFactory", "Dynamics/b2Body", "Dynamics/b2ContactManager", "Dynamics/b2Island", "Dynamics/b2TimeStep", "Particle/b2Particle", "Particle/b2ParticleSystem"], function (exports_42, context_42) {
    "use strict";
    var __moduleName = context_42 && context_42.id;
    var b2Settings_37, b2Math_31, b2Timer_3, b2Draw_4, b2Collision_6, b2TimeOfImpact_1, b2Shape_8, b2Joint_14, b2JointFactory_1, b2Body_3, b2ContactManager_1, b2Island_1, b2TimeStep_4, b2Settings_38, b2Particle_2, b2ParticleSystem_1, b2World;
    return {
        setters: [
            function (b2Settings_37_1) {
                b2Settings_37 = b2Settings_37_1;
                b2Settings_38 = b2Settings_37_1;
            },
            function (b2Math_31_1) {
                b2Math_31 = b2Math_31_1;
            },
            function (b2Timer_3_1) {
                b2Timer_3 = b2Timer_3_1;
            },
            function (b2Draw_4_1) {
                b2Draw_4 = b2Draw_4_1;
            },
            function (b2Collision_6_1) {
                b2Collision_6 = b2Collision_6_1;
            },
            function (b2TimeOfImpact_1_1) {
                b2TimeOfImpact_1 = b2TimeOfImpact_1_1;
            },
            function (b2Shape_8_1) {
                b2Shape_8 = b2Shape_8_1;
            },
            function (b2Joint_14_1) {
                b2Joint_14 = b2Joint_14_1;
            },
            function (b2JointFactory_1_1) {
                b2JointFactory_1 = b2JointFactory_1_1;
            },
            function (b2Body_3_1) {
                b2Body_3 = b2Body_3_1;
            },
            function (b2ContactManager_1_1) {
                b2ContactManager_1 = b2ContactManager_1_1;
            },
            function (b2Island_1_1) {
                b2Island_1 = b2Island_1_1;
            },
            function (b2TimeStep_4_1) {
                b2TimeStep_4 = b2TimeStep_4_1;
            },
            function (b2Particle_2_1) {
                b2Particle_2 = b2Particle_2_1;
            },
            function (b2ParticleSystem_1_1) {
                b2ParticleSystem_1 = b2ParticleSystem_1_1;
            }
        ],
        execute: function () {
            b2World = class b2World {
                constructor(gravity) {
                    this.m_newFixture = false;
                    this.m_locked = false;
                    this.m_clearForces = true;
                    this.m_contactManager = new b2ContactManager_1.b2ContactManager();
                    this.m_bodyList = new Set();
                    this.m_jointList = new Set();
                    this.m_particleSystemList = new Set();
                    this.m_gravity = new b2Math_31.b2Vec2();
                    this.m_allowSleep = true;
                    this.m_destructionListener = null;
                    this.m_debugDraw = null;
                    this.m_inv_dt0 = 0;
                    this.m_warmStarting = true;
                    this.m_continuousPhysics = true;
                    this.m_subStepping = false;
                    this.m_stepComplete = true;
                    this.m_profile = new b2TimeStep_4.b2Profile();
                    this.m_island = new b2Island_1.b2Island();
                    this.s_stack = [];
                    this.m_controllerList = new Set();
                    this.m_gravity.Copy(gravity);
                }
                SetDestructionListener(listener) {
                    this.m_destructionListener = listener;
                }
                SetContactFilter(filter) {
                    this.m_contactManager.m_contactFilter = filter;
                }
                SetContactListener(listener) {
                    this.m_contactManager.m_contactListener = listener;
                }
                SetDebugDraw(debugDraw) {
                    this.m_debugDraw = debugDraw;
                }
                CreateBody(def = {}) {
                    if (this.IsLocked()) {
                        throw new Error();
                    }
                    const b = new b2Body_3.b2Body(def, this);
                    this.m_bodyList.add(b);
                    return b;
                }
                DestroyBody(b) {
                    if (this.IsLocked()) {
                        throw new Error();
                    }
                    for (const joint of b.GetJointList()) {
                        if (this.m_destructionListener) {
                            this.m_destructionListener.SayGoodbyeJoint(joint);
                        }
                        this.DestroyJoint(joint);
                    }
                    b.GetJointList().clear();
                    for (const controller of b.GetControllerList()) {
                        controller.RemoveBody(b);
                    }
                    for (const contact of b.GetContactList()) {
                        this.m_contactManager.Destroy(contact);
                    }
                    b.GetContactList().clear();
                    for (const f of b.GetFixtureList()) {
                        if (this.m_destructionListener) {
                            this.m_destructionListener.SayGoodbyeFixture(f);
                        }
                        f.DestroyProxies(this.m_contactManager.m_broadPhase);
                        f.Destroy();
                    }
                    b.GetFixtureList().clear();
                    this.m_bodyList.delete(b);
                }
                CreateJoint(def) {
                    if (this.IsLocked()) {
                        throw new Error();
                    }
                    const j = b2JointFactory_1.b2JointFactory.Create(def, null);
                    this.m_jointList.add(j);
                    j.m_bodyA.GetJointList().add(j);
                    j.m_bodyB.GetJointList().add(j);
                    const bodyA = def.bodyA;
                    const bodyB = def.bodyB;
                    if (!def.collideConnected) {
                        for (const contact of bodyB.GetContactList()) {
                            if (contact.GetOtherBody(bodyB) === bodyA) {
                                contact.FlagForFiltering();
                            }
                        }
                    }
                    return j;
                }
                DestroyJoint(j) {
                    if (this.IsLocked()) {
                        throw new Error();
                    }
                    const collideConnected = j.m_collideConnected;
                    this.m_jointList.delete(j);
                    const bodyA = j.m_bodyA;
                    const bodyB = j.m_bodyB;
                    bodyA.SetAwake(true);
                    bodyB.SetAwake(true);
                    bodyA.GetJointList().delete(j);
                    bodyB.GetJointList().delete(j);
                    b2JointFactory_1.b2JointFactory.Destroy(j, null);
                    if (!collideConnected) {
                        for (const contact of bodyB.GetContactList()) {
                            if (contact.GetOtherBody(bodyB) === bodyA) {
                                contact.FlagForFiltering();
                            }
                        }
                    }
                }
                CreateParticleSystem(def) {
                    if (this.IsLocked()) {
                        throw new Error();
                    }
                    const p = new b2ParticleSystem_1.b2ParticleSystem(def, this);
                    this.m_particleSystemList.add(p);
                    return p;
                }
                DestroyParticleSystem(p) {
                    if (this.IsLocked()) {
                        throw new Error();
                    }
                    this.m_particleSystemList.delete(p);
                }
                CalculateReasonableParticleIterations(timeStep) {
                    if (this.m_particleSystemList.size === 0) {
                        return 1;
                    }
                    function GetSmallestRadius(world) {
                        let smallestRadius = b2Settings_38.b2_maxFloat;
                        for (const system of world.GetParticleSystemList()) {
                            smallestRadius = b2Math_31.b2Min(smallestRadius, system.GetRadius());
                        }
                        return smallestRadius;
                    }
                    return b2Particle_2.b2CalculateParticleIterations(this.m_gravity.Length(), GetSmallestRadius(this), timeStep);
                }
                Step(dt, velocityIterations, positionIterations, particleIterations = this.CalculateReasonableParticleIterations(dt)) {
                    const stepTimer = b2World.Step_s_stepTimer.Reset();
                    if (this.m_newFixture) {
                        this.m_contactManager.FindNewContacts();
                        this.m_newFixture = false;
                    }
                    this.m_locked = true;
                    const step = b2World.Step_s_step;
                    step.dt = dt;
                    step.velocityIterations = velocityIterations;
                    step.positionIterations = positionIterations;
                    step.particleIterations = particleIterations;
                    if (dt > 0) {
                        step.inv_dt = 1 / dt;
                    }
                    else {
                        step.inv_dt = 0;
                    }
                    step.dtRatio = this.m_inv_dt0 * dt;
                    step.warmStarting = this.m_warmStarting;
                    const timer = b2World.Step_s_timer.Reset();
                    this.m_contactManager.Collide();
                    this.m_profile.collide = timer.GetMilliseconds();
                    if (this.m_stepComplete && step.dt > 0) {
                        const timer = b2World.Step_s_timer.Reset();
                        for (const p of this.m_particleSystemList) {
                            p.Solve(step);
                        }
                        this.Solve(step);
                        this.m_profile.solve = timer.GetMilliseconds();
                    }
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
                ClearForces() {
                    for (const body of this.m_bodyList) {
                        body.m_force.SetZero();
                        body.m_torque = 0;
                    }
                }
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
                    if (flags & b2Draw_4.b2DrawFlags.e_shapeBit) {
                        for (const b of this.m_bodyList) {
                            const xf = b.m_xf;
                            this.m_debugDraw.PushTransform(xf);
                            for (const f of b.GetFixtureList()) {
                                if (!b.IsActive()) {
                                    color.SetRGB(0.5, 0.5, 0.3);
                                    this.DrawShape(f, color);
                                }
                                else if (b.GetType() === b2Body_3.b2BodyType.b2_staticBody) {
                                    color.SetRGB(0.5, 0.9, 0.5);
                                    this.DrawShape(f, color);
                                }
                                else if (b.GetType() === b2Body_3.b2BodyType.b2_kinematicBody) {
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
                    if (flags & b2Draw_4.b2DrawFlags.e_particleBit) {
                        for (const p of this.m_particleSystemList) {
                            this.DrawParticleSystem(p);
                        }
                    }
                    if (flags & b2Draw_4.b2DrawFlags.e_jointBit) {
                        for (const j of this.m_jointList) {
                            this.DrawJoint(j);
                        }
                    }
                    if (flags & b2Draw_4.b2DrawFlags.e_pairBit) {
                        color.SetRGB(0.3, 0.9, 0.9);
                        for (const contact of this.m_contactManager.m_contactList) {
                            const fixtureA = contact.GetFixtureA();
                            const fixtureB = contact.GetFixtureB();
                            const cA = fixtureA.GetAABB(contact.m_indexA).GetCenter();
                            const cB = fixtureB.GetAABB(contact.m_indexB).GetCenter();
                            this.m_debugDraw.DrawSegment(cA, cB, color);
                        }
                    }
                    if (flags & b2Draw_4.b2DrawFlags.e_aabbBit) {
                        color.SetRGB(0.9, 0.3, 0.9);
                        const bp = this.m_contactManager.m_broadPhase;
                        const vs = b2World.DrawDebugData_s_vs;
                        for (const b of this.m_bodyList) {
                            if (!b.IsActive()) {
                                continue;
                            }
                            for (const f of b.GetFixtureList()) {
                                for (let i = 0; i < f.m_proxyCount; ++i) {
                                    const proxy = f.m_proxies[i];
                                    const aabb = bp.GetFatAABB(proxy.treeNode);
                                    vs[0].Set(aabb.lowerBound.x, aabb.lowerBound.y);
                                    vs[1].Set(aabb.upperBound.x, aabb.lowerBound.y);
                                    vs[2].Set(aabb.upperBound.x, aabb.upperBound.y);
                                    vs[3].Set(aabb.lowerBound.x, aabb.upperBound.y);
                                    this.m_debugDraw.DrawPolygon(vs, 4, color);
                                }
                            }
                        }
                    }
                    if (flags & b2Draw_4.b2DrawFlags.e_centerOfMassBit) {
                        for (const b of this.m_bodyList) {
                            const xf = b2World.DrawDebugData_s_xf;
                            xf.q.Copy(b.m_xf.q);
                            xf.p.Copy(b.GetWorldCenter());
                            this.m_debugDraw.DrawTransform(xf);
                        }
                    }
                    if (flags & b2Draw_4.b2DrawFlags.e_controllerBit) {
                        for (const c of this.m_controllerList) {
                            c.Draw(this.m_debugDraw);
                        }
                    }
                }
                QueryAABB(callback, aabb, fn) {
                    const broadPhase = this.m_contactManager.m_broadPhase;
                    broadPhase.Query(aabb, (proxy) => {
                        const fixture_proxy = broadPhase.GetUserData(proxy);
                        const fixture = fixture_proxy.fixture;
                        if (callback) {
                            return callback.ReportFixture(fixture);
                        }
                        else if (fn) {
                            return fn(fixture);
                        }
                        return true;
                    });
                    if (callback) {
                        for (const p of this.m_particleSystemList) {
                            if (callback.ShouldQueryParticleSystem(p)) {
                                p.QueryAABB(callback, aabb);
                            }
                        }
                    }
                }
                QueryAllAABB(aabb, out = []) {
                    this.QueryAABB(null, aabb, (fixture) => { out.push(fixture); return true; });
                    return out;
                }
                QueryPointAABB(callback, point, fn) {
                    const broadPhase = this.m_contactManager.m_broadPhase;
                    broadPhase.QueryPoint(point, (proxy) => {
                        const fixture_proxy = broadPhase.GetUserData(proxy);
                        const fixture = fixture_proxy.fixture;
                        if (callback) {
                            return callback.ReportFixture(fixture);
                        }
                        else if (fn) {
                            return fn(fixture);
                        }
                        return true;
                    });
                    if (callback) {
                        for (const p of this.m_particleSystemList) {
                            if (callback.ShouldQueryParticleSystem(p)) {
                                p.QueryPointAABB(callback, point);
                            }
                        }
                    }
                }
                QueryAllPointAABB(point, out = []) {
                    this.QueryPointAABB(null, point, (fixture) => { out.push(fixture); return true; });
                    return out;
                }
                QueryFixtureShape(callback, shape, index, transform, fn) {
                    const broadPhase = this.m_contactManager.m_broadPhase;
                    const aabb = b2World.QueryFixtureShape_s_aabb;
                    shape.ComputeAABB(aabb, transform, index);
                    broadPhase.Query(aabb, (proxy) => {
                        const fixture_proxy = broadPhase.GetUserData(proxy);
                        const fixture = fixture_proxy.fixture;
                        if (b2Collision_6.b2TestOverlapShape(shape, index, fixture.GetShape(), fixture_proxy.childIndex, transform, fixture.GetBody().GetTransform())) {
                            if (callback) {
                                return callback.ReportFixture(fixture);
                            }
                            else if (fn) {
                                return fn(fixture);
                            }
                        }
                        return true;
                    });
                    if (callback) {
                        for (const p of this.m_particleSystemList) {
                            if (callback.ShouldQueryParticleSystem(p)) {
                                p.QueryAABB(callback, aabb);
                            }
                        }
                    }
                }
                QueryAllFixtureShape(shape, index, transform, out = []) {
                    this.QueryFixtureShape(null, shape, index, transform, (fixture) => { out.push(fixture); return true; });
                    return out;
                }
                QueryFixturePoint(callback, point, fn) {
                    const broadPhase = this.m_contactManager.m_broadPhase;
                    broadPhase.QueryPoint(point, (proxy) => {
                        const fixture_proxy = broadPhase.GetUserData(proxy);
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
                    if (callback) {
                        for (const p of this.m_particleSystemList) {
                            if (callback.ShouldQueryParticleSystem(p)) {
                                p.QueryPointAABB(callback, point);
                            }
                        }
                    }
                }
                QueryAllFixturePoint(point, out = []) {
                    this.QueryFixturePoint(null, point, (fixture) => { out.push(fixture); return true; });
                    return out;
                }
                RayCast(callback, point1, point2, fn) {
                    const broadPhase = this.m_contactManager.m_broadPhase;
                    const input = b2World.RayCast_s_input;
                    input.maxFraction = 1;
                    input.p1.Copy(point1);
                    input.p2.Copy(point2);
                    broadPhase.RayCast(input, (input, proxy) => {
                        const fixture_proxy = broadPhase.GetUserData(proxy);
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
                    if (callback) {
                        for (const p of this.m_particleSystemList) {
                            if (callback.ShouldQueryParticleSystem(p)) {
                                p.RayCast(callback, point1, point2);
                            }
                        }
                    }
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
                GetBodyList() {
                    return this.m_bodyList;
                }
                GetJointList() {
                    return this.m_jointList;
                }
                GetParticleSystemList() {
                    return this.m_particleSystemList;
                }
                GetContactList() {
                    return this.m_contactManager.m_contactList;
                }
                SetAllowSleeping(flag) {
                    if (flag === this.m_allowSleep) {
                        return;
                    }
                    this.m_allowSleep = flag;
                    if (!this.m_allowSleep) {
                        for (const b of this.m_bodyList) {
                            b.SetAwake(true);
                        }
                    }
                }
                GetAllowSleeping() {
                    return this.m_allowSleep;
                }
                SetWarmStarting(flag) {
                    this.m_warmStarting = flag;
                }
                GetWarmStarting() {
                    return this.m_warmStarting;
                }
                SetContinuousPhysics(flag) {
                    this.m_continuousPhysics = flag;
                }
                GetContinuousPhysics() {
                    return this.m_continuousPhysics;
                }
                SetSubStepping(flag) {
                    this.m_subStepping = flag;
                }
                GetSubStepping() {
                    return this.m_subStepping;
                }
                GetProxyCount() {
                    return this.m_contactManager.m_broadPhase.GetProxyCount();
                }
                GetBodyCount() {
                    return this.m_bodyList.size;
                }
                GetJointCount() {
                    return this.m_jointList.size;
                }
                GetContactCount() {
                    return this.m_contactManager.m_contactList.size;
                }
                GetTreeHeight() {
                    return this.m_contactManager.m_broadPhase.GetTreeHeight();
                }
                GetTreeBalance() {
                    return this.m_contactManager.m_broadPhase.GetTreeBalance();
                }
                GetTreeQuality() {
                    return this.m_contactManager.m_broadPhase.GetTreeQuality();
                }
                SetGravity(gravity, wake = true) {
                    if (!b2Math_31.b2Vec2.IsEqualToV(this.m_gravity, gravity)) {
                        this.m_gravity.Copy(gravity);
                        if (wake) {
                            for (const b of this.m_bodyList) {
                                b.SetAwake(true);
                            }
                        }
                    }
                }
                GetGravity() {
                    return this.m_gravity;
                }
                IsLocked() {
                    return this.m_locked;
                }
                SetAutoClearForces(flag) {
                    this.m_clearForces = flag;
                }
                GetAutoClearForces() {
                    return this.m_clearForces;
                }
                ShiftOrigin(newOrigin) {
                    if (this.IsLocked()) {
                        throw new Error();
                    }
                    for (const b of this.m_bodyList) {
                        b.m_xf.p.SelfSub(newOrigin);
                        b.m_sweep.c0.SelfSub(newOrigin);
                        b.m_sweep.c.SelfSub(newOrigin);
                    }
                    for (const j of this.m_jointList) {
                        j.ShiftOrigin(newOrigin);
                    }
                    this.m_contactManager.m_broadPhase.ShiftOrigin(newOrigin);
                }
                GetContactManager() {
                    return this.m_contactManager;
                }
                GetProfile() {
                    return this.m_profile;
                }
                Dump(log) {
                    if (this.m_locked) {
                        return;
                    }
                    log("const g: b2Vec2 = new b2Vec2(%.15f, %.15f);\n", this.m_gravity.x, this.m_gravity.y);
                    log("this.m_world.SetGravity(g);\n");
                    log("const bodies: b2Body[] = [];\n");
                    log("const joints: b2Joint[] = [];\n");
                    let i = 0;
                    for (const b of this.m_bodyList) {
                        b.m_islandIndex = i;
                        b.Dump(log);
                        ++i;
                    }
                    i = 0;
                    for (const j of this.m_jointList) {
                        j.m_index = i;
                        ++i;
                    }
                    for (const j of this.m_jointList) {
                        if (j.m_type === b2Joint_14.b2JointType.e_gearJoint) {
                            continue;
                        }
                        log("{\n");
                        j.Dump(log);
                        log("}\n");
                    }
                    for (const j of this.m_jointList) {
                        if (j.m_type !== b2Joint_14.b2JointType.e_gearJoint) {
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
                        case b2Joint_14.b2JointType.e_distanceJoint:
                            this.m_debugDraw.DrawSegment(p1, p2, color);
                            break;
                        case b2Joint_14.b2JointType.e_pulleyJoint:
                            {
                                const pulley = joint;
                                const s1 = pulley.GetGroundAnchorA();
                                const s2 = pulley.GetGroundAnchorB();
                                this.m_debugDraw.DrawSegment(s1, p1, color);
                                this.m_debugDraw.DrawSegment(s2, p2, color);
                                this.m_debugDraw.DrawSegment(s1, s2, color);
                            }
                            break;
                        case b2Joint_14.b2JointType.e_mouseJoint:
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
                        case b2Shape_8.b2ShapeType.e_circleShape:
                            {
                                const circle = shape;
                                const center = circle.m_p;
                                const radius = circle.m_radius;
                                const axis = b2Math_31.b2Vec2.UNITX;
                                this.m_debugDraw.DrawSolidCircle(center, radius, axis, color);
                            }
                            break;
                        case b2Shape_8.b2ShapeType.e_edgeShape:
                            {
                                const edge = shape;
                                const v1 = edge.m_vertex1;
                                const v2 = edge.m_vertex2;
                                this.m_debugDraw.DrawSegment(v1, v2, color);
                            }
                            break;
                        case b2Shape_8.b2ShapeType.e_chainShape:
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
                        case b2Shape_8.b2ShapeType.e_polygonShape:
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
                    for (const b of this.m_bodyList) {
                        b.m_xf0.Copy(b.m_xf);
                    }
                    for (const controller of this.m_controllerList) {
                        controller.Step(step);
                    }
                    this.m_profile.solveInit = 0;
                    this.m_profile.solveVelocity = 0;
                    this.m_profile.solvePosition = 0;
                    const island = this.m_island;
                    island.Initialize(this.m_bodyList.size, this.m_contactManager.m_contactList.size, this.m_jointList.size, null, this.m_contactManager.m_contactListener);
                    for (const b of this.m_bodyList) {
                        b.m_islandFlag = false;
                    }
                    for (const c of this.m_contactManager.m_contactList) {
                        c.m_islandFlag = false;
                    }
                    for (const j of this.m_jointList) {
                        j.m_islandFlag = false;
                    }
                    const stack = this.s_stack;
                    for (const seed of this.m_bodyList) {
                        if (seed.m_islandFlag) {
                            continue;
                        }
                        if (!seed.IsAwake() || !seed.IsActive()) {
                            continue;
                        }
                        if (seed.GetType() === b2Body_3.b2BodyType.b2_staticBody) {
                            continue;
                        }
                        island.Clear();
                        let stackCount = 0;
                        stack[stackCount++] = seed;
                        seed.m_islandFlag = true;
                        while (stackCount > 0) {
                            const b = stack[--stackCount];
                            if (!b) {
                                throw new Error();
                            }
                            island.AddBody(b);
                            b.SetAwake(true);
                            if (b.GetType() === b2Body_3.b2BodyType.b2_staticBody) {
                                continue;
                            }
                            for (const contact of b.GetContactList()) {
                                if (contact.m_islandFlag) {
                                    continue;
                                }
                                if (!contact.IsEnabled() || !contact.IsTouching()) {
                                    continue;
                                }
                                const sensorA = contact.m_fixtureA.m_isSensor;
                                const sensorB = contact.m_fixtureB.m_isSensor;
                                if (sensorA || sensorB) {
                                    continue;
                                }
                                island.AddContact(contact);
                                contact.m_islandFlag = true;
                                const other = contact.GetOtherBody(b);
                                if (other.m_islandFlag) {
                                    continue;
                                }
                                stack[stackCount++] = other;
                                other.m_islandFlag = true;
                            }
                            for (const joint of b.GetJointList()) {
                                if (joint.m_islandFlag) {
                                    continue;
                                }
                                const other = joint.GetOtherBody(b);
                                if (!other.IsActive()) {
                                    continue;
                                }
                                island.AddJoint(joint);
                                joint.m_islandFlag = true;
                                if (other.m_islandFlag) {
                                    continue;
                                }
                                stack[stackCount++] = other;
                                other.m_islandFlag = true;
                            }
                        }
                        const profile = new b2TimeStep_4.b2Profile();
                        island.Solve(profile, step, this.m_gravity, this.m_allowSleep);
                        this.m_profile.solveInit += profile.solveInit;
                        this.m_profile.solveVelocity += profile.solveVelocity;
                        this.m_profile.solvePosition += profile.solvePosition;
                        for (let i = 0; i < island.m_bodyCount; ++i) {
                            const b = island.m_bodies[i];
                            if (b.GetType() === b2Body_3.b2BodyType.b2_staticBody) {
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
                    const timer = new b2Timer_3.b2Timer();
                    for (const b of this.m_bodyList) {
                        if (!b.m_islandFlag) {
                            continue;
                        }
                        if (b.GetType() === b2Body_3.b2BodyType.b2_staticBody) {
                            continue;
                        }
                        b.SynchronizeFixtures();
                    }
                    this.m_contactManager.FindNewContacts();
                    this.m_profile.broadphase = timer.GetMilliseconds();
                }
                SolveTOI(step) {
                    const island = this.m_island;
                    island.Initialize(2 * b2Settings_37.b2_maxTOIContacts, b2Settings_37.b2_maxTOIContacts, 0, null, this.m_contactManager.m_contactListener);
                    if (this.m_stepComplete) {
                        for (const b of this.m_bodyList) {
                            b.m_islandFlag = false;
                            b.m_sweep.alpha0 = 0;
                        }
                        for (const c of this.m_contactManager.m_contactList) {
                            c.m_toiFlag = false;
                            c.m_islandFlag = false;
                            c.m_toiCount = 0;
                            c.m_toi = 1;
                        }
                    }
                    for (;;) {
                        let minContact = null;
                        let minAlpha = 1;
                        for (const c of this.m_contactManager.m_contactList) {
                            if (!c.IsEnabled()) {
                                continue;
                            }
                            if (c.m_toiCount > b2Settings_37.b2_maxSubSteps) {
                                continue;
                            }
                            let alpha = 1;
                            if (c.m_toiFlag) {
                                alpha = c.m_toi;
                            }
                            else {
                                const fA = c.GetFixtureA();
                                const fB = c.GetFixtureB();
                                if (fA.IsSensor() || fB.IsSensor()) {
                                    continue;
                                }
                                const bA = fA.GetBody();
                                const bB = fB.GetBody();
                                const typeA = bA.m_type;
                                const typeB = bB.m_type;
                                const activeA = bA.IsAwake() && typeA !== b2Body_3.b2BodyType.b2_staticBody;
                                const activeB = bB.IsAwake() && typeB !== b2Body_3.b2BodyType.b2_staticBody;
                                if (!activeA && !activeB) {
                                    continue;
                                }
                                const collideA = bA.IsBullet() || typeA !== b2Body_3.b2BodyType.b2_dynamicBody;
                                const collideB = bB.IsBullet() || typeB !== b2Body_3.b2BodyType.b2_dynamicBody;
                                if (!collideA && !collideB) {
                                    continue;
                                }
                                let alpha0 = bA.m_sweep.alpha0;
                                if (bA.m_sweep.alpha0 < bB.m_sweep.alpha0) {
                                    alpha0 = bB.m_sweep.alpha0;
                                    bA.m_sweep.Advance(alpha0);
                                }
                                else if (bB.m_sweep.alpha0 < bA.m_sweep.alpha0) {
                                    alpha0 = bA.m_sweep.alpha0;
                                    bB.m_sweep.Advance(alpha0);
                                }
                                const indexA = c.GetChildIndexA();
                                const indexB = c.GetChildIndexB();
                                const input = b2World.SolveTOI_s_toi_input;
                                input.proxyA.SetShape(fA.GetShape(), indexA);
                                input.proxyB.SetShape(fB.GetShape(), indexB);
                                input.sweepA.Copy(bA.m_sweep);
                                input.sweepB.Copy(bB.m_sweep);
                                input.tMax = 1;
                                const output = b2World.SolveTOI_s_toi_output;
                                b2TimeOfImpact_1.b2TimeOfImpact(output, input);
                                const beta = output.t;
                                if (output.state === b2TimeOfImpact_1.b2TOIOutputState.e_touching) {
                                    alpha = b2Math_31.b2Min(alpha0 + (1 - alpha0) * beta, 1);
                                }
                                else {
                                    alpha = 1;
                                }
                                c.m_toi = alpha;
                                c.m_toiFlag = true;
                            }
                            if (alpha < minAlpha) {
                                minContact = c;
                                minAlpha = alpha;
                            }
                        }
                        if (minContact === null || 1 - 10 * b2Settings_37.b2_epsilon < minAlpha) {
                            this.m_stepComplete = true;
                            break;
                        }
                        const fA = minContact.GetFixtureA();
                        const fB = minContact.GetFixtureB();
                        const bA = fA.GetBody();
                        const bB = fB.GetBody();
                        const backup1 = b2World.SolveTOI_s_backup1.Copy(bA.m_sweep);
                        const backup2 = b2World.SolveTOI_s_backup2.Copy(bB.m_sweep);
                        bA.Advance(minAlpha);
                        bB.Advance(minAlpha);
                        minContact.Update(this.m_contactManager.m_contactListener);
                        minContact.m_toiFlag = false;
                        ++minContact.m_toiCount;
                        if (!minContact.IsEnabled() || !minContact.IsTouching()) {
                            minContact.SetEnabled(false);
                            bA.m_sweep.Copy(backup1);
                            bB.m_sweep.Copy(backup2);
                            bA.SynchronizeTransform();
                            bB.SynchronizeTransform();
                            continue;
                        }
                        bA.SetAwake(true);
                        bB.SetAwake(true);
                        island.Clear();
                        island.AddBody(bA);
                        island.AddBody(bB);
                        island.AddContact(minContact);
                        bA.m_islandFlag = true;
                        bB.m_islandFlag = true;
                        minContact.m_islandFlag = true;
                        for (let i = 0; i < 2; ++i) {
                            const body = (i === 0) ? (bA) : (bB);
                            if (body.m_type === b2Body_3.b2BodyType.b2_dynamicBody) {
                                for (const contact of body.GetContactList()) {
                                    if (island.m_bodyCount === island.m_bodyCapacity) {
                                        break;
                                    }
                                    if (island.m_contactCount === island.m_contactCapacity) {
                                        break;
                                    }
                                    if (contact.m_islandFlag) {
                                        continue;
                                    }
                                    const other = contact.GetOtherBody(body);
                                    if (other.m_type === b2Body_3.b2BodyType.b2_dynamicBody &&
                                        !body.IsBullet() && !other.IsBullet()) {
                                        continue;
                                    }
                                    const sensorA = contact.m_fixtureA.m_isSensor;
                                    const sensorB = contact.m_fixtureB.m_isSensor;
                                    if (sensorA || sensorB) {
                                        continue;
                                    }
                                    const backup = b2World.SolveTOI_s_backup.Copy(other.m_sweep);
                                    if (!other.m_islandFlag) {
                                        other.Advance(minAlpha);
                                    }
                                    contact.Update(this.m_contactManager.m_contactListener);
                                    if (!contact.IsEnabled()) {
                                        other.m_sweep.Copy(backup);
                                        other.SynchronizeTransform();
                                        continue;
                                    }
                                    if (!contact.IsTouching()) {
                                        other.m_sweep.Copy(backup);
                                        other.SynchronizeTransform();
                                        continue;
                                    }
                                    contact.m_islandFlag = true;
                                    island.AddContact(contact);
                                    if (other.m_islandFlag) {
                                        continue;
                                    }
                                    other.m_islandFlag = true;
                                    if (other.m_type !== b2Body_3.b2BodyType.b2_staticBody) {
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
                        subStep.particleIterations = step.particleIterations;
                        subStep.warmStarting = false;
                        island.SolveTOI(subStep, bA.m_islandIndex, bB.m_islandIndex);
                        for (let i = 0; i < island.m_bodyCount; ++i) {
                            const body = island.m_bodies[i];
                            body.m_islandFlag = false;
                            if (body.m_type !== b2Body_3.b2BodyType.b2_dynamicBody) {
                                continue;
                            }
                            body.SynchronizeFixtures();
                            for (const contact of body.GetContactList()) {
                                contact.m_toiFlag = false;
                                contact.m_islandFlag = false;
                            }
                        }
                        this.m_contactManager.FindNewContacts();
                        if (this.m_subStepping) {
                            this.m_stepComplete = false;
                            break;
                        }
                    }
                }
                AddController(controller) {
                    this.m_controllerList.add(controller);
                    return controller;
                }
                RemoveController(controller) {
                    this.m_controllerList.delete(controller);
                    return controller;
                }
            };
            b2World.Step_s_step = new b2TimeStep_4.b2TimeStep();
            b2World.Step_s_stepTimer = new b2Timer_3.b2Timer();
            b2World.Step_s_timer = new b2Timer_3.b2Timer();
            b2World.DrawDebugData_s_color = new b2Draw_4.b2Color(0, 0, 0);
            b2World.DrawDebugData_s_vs = b2Math_31.b2Vec2.MakeArray(4);
            b2World.DrawDebugData_s_xf = new b2Math_31.b2Transform();
            b2World.QueryFixtureShape_s_aabb = new b2Collision_6.b2AABB();
            b2World.RayCast_s_input = new b2Collision_6.b2RayCastInput();
            b2World.RayCast_s_output = new b2Collision_6.b2RayCastOutput();
            b2World.RayCast_s_point = new b2Math_31.b2Vec2();
            b2World.DrawJoint_s_p1 = new b2Math_31.b2Vec2();
            b2World.DrawJoint_s_p2 = new b2Math_31.b2Vec2();
            b2World.DrawJoint_s_color = new b2Draw_4.b2Color(0.5, 0.8, 0.8);
            b2World.SolveTOI_s_subStep = new b2TimeStep_4.b2TimeStep();
            b2World.SolveTOI_s_backup = new b2Math_31.b2Sweep();
            b2World.SolveTOI_s_backup1 = new b2Math_31.b2Sweep();
            b2World.SolveTOI_s_backup2 = new b2Math_31.b2Sweep();
            b2World.SolveTOI_s_toi_input = new b2TimeOfImpact_1.b2TOIInput();
            b2World.SolveTOI_s_toi_output = new b2TimeOfImpact_1.b2TOIOutput();
            exports_42("b2World", b2World);
        }
    };
});
System.register("Dynamics/b2Body", ["Common/b2Settings", "Common/b2Math", "Collision/Shapes/b2Shape", "Dynamics/b2Fixture"], function (exports_43, context_43) {
    "use strict";
    var __moduleName = context_43 && context_43.id;
    var b2Settings_39, b2Math_32, b2Shape_9, b2Fixture_1, b2BodyType, b2BodyDef, b2Body;
    return {
        setters: [
            function (b2Settings_39_1) {
                b2Settings_39 = b2Settings_39_1;
            },
            function (b2Math_32_1) {
                b2Math_32 = b2Math_32_1;
            },
            function (b2Shape_9_1) {
                b2Shape_9 = b2Shape_9_1;
            },
            function (b2Fixture_1_1) {
                b2Fixture_1 = b2Fixture_1_1;
            }
        ],
        execute: function () {
            (function (b2BodyType) {
                b2BodyType[b2BodyType["b2_unknown"] = -1] = "b2_unknown";
                b2BodyType[b2BodyType["b2_staticBody"] = 0] = "b2_staticBody";
                b2BodyType[b2BodyType["b2_kinematicBody"] = 1] = "b2_kinematicBody";
                b2BodyType[b2BodyType["b2_dynamicBody"] = 2] = "b2_dynamicBody";
            })(b2BodyType || (b2BodyType = {}));
            exports_43("b2BodyType", b2BodyType);
            b2BodyDef = class b2BodyDef {
                constructor() {
                    this.type = b2BodyType.b2_staticBody;
                    this.position = new b2Math_32.b2Vec2(0, 0);
                    this.angle = 0;
                    this.linearVelocity = new b2Math_32.b2Vec2(0, 0);
                    this.angularVelocity = 0;
                    this.linearDamping = 0;
                    this.angularDamping = 0;
                    this.allowSleep = true;
                    this.awake = true;
                    this.fixedRotation = false;
                    this.bullet = false;
                    this.active = true;
                    this.userData = null;
                    this.gravityScale = 1;
                }
            };
            exports_43("b2BodyDef", b2BodyDef);
            b2Body = class b2Body {
                constructor(bd, world) {
                    this.m_type = b2BodyType.b2_staticBody;
                    this.m_islandFlag = false;
                    this.m_awakeFlag = false;
                    this.m_autoSleepFlag = false;
                    this.m_bulletFlag = false;
                    this.m_fixedRotationFlag = false;
                    this.m_activeFlag = false;
                    this.m_toiFlag = false;
                    this.m_islandIndex = 0;
                    this.m_xf = new b2Math_32.b2Transform();
                    this.m_xf0 = new b2Math_32.b2Transform();
                    this.m_sweep = new b2Math_32.b2Sweep();
                    this.m_linearVelocity = new b2Math_32.b2Vec2();
                    this.m_angularVelocity = 0;
                    this.m_force = new b2Math_32.b2Vec2();
                    this.m_torque = 0;
                    this.m_fixtureList = new Set();
                    this.m_jointList = new Set();
                    this.m_contactList = new Set();
                    this.m_mass = 1;
                    this.m_invMass = 1;
                    this.m_I = 0;
                    this.m_invI = 0;
                    this.m_linearDamping = 0;
                    this.m_angularDamping = 0;
                    this.m_gravityScale = 1;
                    this.m_sleepTime = 0;
                    this.m_userData = null;
                    this.m_controllerList = new Set();
                    this.m_bulletFlag = b2Settings_39.b2Maybe(bd.bullet, false);
                    this.m_fixedRotationFlag = b2Settings_39.b2Maybe(bd.fixedRotation, false);
                    this.m_autoSleepFlag = b2Settings_39.b2Maybe(bd.allowSleep, true);
                    this.m_awakeFlag = b2Settings_39.b2Maybe(bd.awake, true);
                    this.m_activeFlag = b2Settings_39.b2Maybe(bd.active, true);
                    this.m_world = world;
                    this.m_xf.p.Copy(b2Settings_39.b2Maybe(bd.position, b2Math_32.b2Vec2.ZERO));
                    this.m_xf.q.SetAngle(b2Settings_39.b2Maybe(bd.angle, 0));
                    this.m_xf0.Copy(this.m_xf);
                    this.m_sweep.localCenter.SetZero();
                    this.m_sweep.c0.Copy(this.m_xf.p);
                    this.m_sweep.c.Copy(this.m_xf.p);
                    this.m_sweep.a0 = this.m_sweep.a = this.m_xf.q.GetAngle();
                    this.m_sweep.alpha0 = 0;
                    this.m_linearVelocity.Copy(b2Settings_39.b2Maybe(bd.linearVelocity, b2Math_32.b2Vec2.ZERO));
                    this.m_angularVelocity = b2Settings_39.b2Maybe(bd.angularVelocity, 0);
                    this.m_linearDamping = b2Settings_39.b2Maybe(bd.linearDamping, 0);
                    this.m_angularDamping = b2Settings_39.b2Maybe(bd.angularDamping, 0);
                    this.m_gravityScale = b2Settings_39.b2Maybe(bd.gravityScale, 1);
                    this.m_force.SetZero();
                    this.m_torque = 0;
                    this.m_sleepTime = 0;
                    this.m_type = b2Settings_39.b2Maybe(bd.type, b2BodyType.b2_staticBody);
                    if (bd.type === b2BodyType.b2_dynamicBody) {
                        this.m_mass = 1;
                        this.m_invMass = 1;
                    }
                    else {
                        this.m_mass = 0;
                        this.m_invMass = 0;
                    }
                    this.m_I = 0;
                    this.m_invI = 0;
                    this.m_userData = bd.userData;
                }
                CreateFixture(a, b = 0) {
                    if (a instanceof b2Shape_9.b2Shape) {
                        return this.CreateFixtureShapeDensity(a, b);
                    }
                    else {
                        return this.CreateFixtureDef(a);
                    }
                }
                CreateFixtureDef(def) {
                    if (this.m_world.IsLocked()) {
                        throw new Error();
                    }
                    const fixture = new b2Fixture_1.b2Fixture(def, this);
                    fixture.Create(def);
                    if (this.m_activeFlag) {
                        const broadPhase = this.m_world.m_contactManager.m_broadPhase;
                        fixture.CreateProxies(broadPhase, this.m_xf);
                    }
                    this.m_fixtureList.add(fixture);
                    if (fixture.m_density > 0) {
                        this.ResetMassData();
                    }
                    this.m_world.m_newFixture = true;
                    return fixture;
                }
                CreateFixtureShapeDensity(shape, density = 0) {
                    const def = b2Body.CreateFixtureShapeDensity_s_def;
                    def.shape = shape;
                    def.density = density;
                    return this.CreateFixtureDef(def);
                }
                DestroyFixture(fixture) {
                    if (this.m_world.IsLocked()) {
                        throw new Error();
                    }
                    this.m_fixtureList.delete(fixture);
                    for (const contact of this.m_contactList) {
                        const fixtureA = contact.GetFixtureA();
                        const fixtureB = contact.GetFixtureB();
                        if (fixture === fixtureA || fixture === fixtureB) {
                            this.m_world.m_contactManager.Destroy(contact);
                        }
                    }
                    if (this.m_activeFlag) {
                        const broadPhase = this.m_world.m_contactManager.m_broadPhase;
                        fixture.DestroyProxies(broadPhase);
                    }
                    fixture.Destroy();
                    this.ResetMassData();
                }
                SetTransformVec(position, angle) {
                    this.SetTransformXY(position.x, position.y, angle);
                }
                SetTransformXY(x, y, angle) {
                    if (this.m_world.IsLocked()) {
                        throw new Error();
                    }
                    this.m_xf.q.SetAngle(angle);
                    this.m_xf.p.Set(x, y);
                    this.m_xf0.Copy(this.m_xf);
                    b2Math_32.b2Transform.MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
                    this.m_sweep.a = angle;
                    this.m_sweep.c0.Copy(this.m_sweep.c);
                    this.m_sweep.a0 = angle;
                    const broadPhase = this.m_world.m_contactManager.m_broadPhase;
                    for (const f of this.m_fixtureList) {
                        f.Synchronize(broadPhase, this.m_xf, this.m_xf);
                    }
                    this.m_world.m_contactManager.FindNewContacts();
                }
                SetTransform(xf) {
                    this.SetTransformVec(xf.p, xf.GetAngle());
                }
                GetTransform() {
                    return this.m_xf;
                }
                GetPosition() {
                    return this.m_xf.p;
                }
                SetPosition(position) {
                    this.SetTransformVec(position, this.GetAngle());
                }
                SetPositionXY(x, y) {
                    this.SetTransformXY(x, y, this.GetAngle());
                }
                GetAngle() {
                    return this.m_sweep.a;
                }
                SetAngle(angle) {
                    this.SetTransformVec(this.GetPosition(), angle);
                }
                GetWorldCenter() {
                    return this.m_sweep.c;
                }
                GetLocalCenter() {
                    return this.m_sweep.localCenter;
                }
                SetLinearVelocity(v) {
                    if (this.m_type === b2BodyType.b2_staticBody) {
                        return;
                    }
                    if (b2Math_32.b2Vec2.DotVV(v, v) > 0) {
                        this.SetAwake(true);
                    }
                    this.m_linearVelocity.Copy(v);
                }
                GetLinearVelocity() {
                    return this.m_linearVelocity;
                }
                SetAngularVelocity(w) {
                    if (this.m_type === b2BodyType.b2_staticBody) {
                        return;
                    }
                    if (w * w > 0) {
                        this.SetAwake(true);
                    }
                    this.m_angularVelocity = w;
                }
                GetAngularVelocity() {
                    return this.m_angularVelocity;
                }
                GetDefinition(bd) {
                    bd.type = this.GetType();
                    bd.allowSleep = this.m_autoSleepFlag;
                    bd.angle = this.GetAngle();
                    bd.angularDamping = this.m_angularDamping;
                    bd.gravityScale = this.m_gravityScale;
                    bd.angularVelocity = this.m_angularVelocity;
                    bd.fixedRotation = this.m_fixedRotationFlag;
                    bd.bullet = this.m_bulletFlag;
                    bd.awake = this.m_awakeFlag;
                    bd.linearDamping = this.m_linearDamping;
                    bd.linearVelocity.Copy(this.GetLinearVelocity());
                    bd.position.Copy(this.GetPosition());
                    bd.userData = this.GetUserData();
                    return bd;
                }
                ApplyForce(force, point, wake = true) {
                    if (this.m_type !== b2BodyType.b2_dynamicBody) {
                        return;
                    }
                    if (wake && !this.m_awakeFlag) {
                        this.SetAwake(true);
                    }
                    if (this.m_awakeFlag) {
                        this.m_force.x += force.x;
                        this.m_force.y += force.y;
                        this.m_torque += ((point.x - this.m_sweep.c.x) * force.y - (point.y - this.m_sweep.c.y) * force.x);
                    }
                }
                ApplyForceToCenter(force, wake = true) {
                    if (this.m_type !== b2BodyType.b2_dynamicBody) {
                        return;
                    }
                    if (wake && !this.m_awakeFlag) {
                        this.SetAwake(true);
                    }
                    if (this.m_awakeFlag) {
                        this.m_force.x += force.x;
                        this.m_force.y += force.y;
                    }
                }
                ApplyTorque(torque, wake = true) {
                    if (this.m_type !== b2BodyType.b2_dynamicBody) {
                        return;
                    }
                    if (wake && !this.m_awakeFlag) {
                        this.SetAwake(true);
                    }
                    if (this.m_awakeFlag) {
                        this.m_torque += torque;
                    }
                }
                ApplyLinearImpulse(impulse, point, wake = true) {
                    if (this.m_type !== b2BodyType.b2_dynamicBody) {
                        return;
                    }
                    if (wake && !this.m_awakeFlag) {
                        this.SetAwake(true);
                    }
                    if (this.m_awakeFlag) {
                        this.m_linearVelocity.x += this.m_invMass * impulse.x;
                        this.m_linearVelocity.y += this.m_invMass * impulse.y;
                        this.m_angularVelocity += this.m_invI * ((point.x - this.m_sweep.c.x) * impulse.y - (point.y - this.m_sweep.c.y) * impulse.x);
                    }
                }
                ApplyLinearImpulseToCenter(impulse, wake = true) {
                    if (this.m_type !== b2BodyType.b2_dynamicBody) {
                        return;
                    }
                    if (wake && !this.m_awakeFlag) {
                        this.SetAwake(true);
                    }
                    if (this.m_awakeFlag) {
                        this.m_linearVelocity.x += this.m_invMass * impulse.x;
                        this.m_linearVelocity.y += this.m_invMass * impulse.y;
                    }
                }
                ApplyAngularImpulse(impulse, wake = true) {
                    if (this.m_type !== b2BodyType.b2_dynamicBody) {
                        return;
                    }
                    if (wake && !this.m_awakeFlag) {
                        this.SetAwake(true);
                    }
                    if (this.m_awakeFlag) {
                        this.m_angularVelocity += this.m_invI * impulse;
                    }
                }
                GetMass() {
                    return this.m_mass;
                }
                GetInertia() {
                    return this.m_I + this.m_mass * b2Math_32.b2Vec2.DotVV(this.m_sweep.localCenter, this.m_sweep.localCenter);
                }
                GetMassData(data) {
                    data.mass = this.m_mass;
                    data.I = this.m_I + this.m_mass * b2Math_32.b2Vec2.DotVV(this.m_sweep.localCenter, this.m_sweep.localCenter);
                    data.center.Copy(this.m_sweep.localCenter);
                    return data;
                }
                SetMassData(massData) {
                    if (this.m_world.IsLocked()) {
                        throw new Error();
                    }
                    if (this.m_type !== b2BodyType.b2_dynamicBody) {
                        return;
                    }
                    this.m_invMass = 0;
                    this.m_I = 0;
                    this.m_invI = 0;
                    this.m_mass = massData.mass;
                    if (this.m_mass <= 0) {
                        this.m_mass = 1;
                    }
                    this.m_invMass = 1 / this.m_mass;
                    if (massData.I > 0 && !this.m_fixedRotationFlag) {
                        this.m_I = massData.I - this.m_mass * b2Math_32.b2Vec2.DotVV(massData.center, massData.center);
                        this.m_invI = 1 / this.m_I;
                    }
                    const oldCenter = b2Body.SetMassData_s_oldCenter.Copy(this.m_sweep.c);
                    this.m_sweep.localCenter.Copy(massData.center);
                    b2Math_32.b2Transform.MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
                    this.m_sweep.c0.Copy(this.m_sweep.c);
                    b2Math_32.b2Vec2.AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, b2Math_32.b2Vec2.SubVV(this.m_sweep.c, oldCenter, b2Math_32.b2Vec2.s_t0), this.m_linearVelocity);
                }
                ResetMassData() {
                    this.m_mass = 0;
                    this.m_invMass = 0;
                    this.m_I = 0;
                    this.m_invI = 0;
                    this.m_sweep.localCenter.SetZero();
                    if (this.m_type === b2BodyType.b2_staticBody || this.m_type === b2BodyType.b2_kinematicBody) {
                        this.m_sweep.c0.Copy(this.m_xf.p);
                        this.m_sweep.c.Copy(this.m_xf.p);
                        this.m_sweep.a0 = this.m_sweep.a;
                        return;
                    }
                    const localCenter = b2Body.ResetMassData_s_localCenter.SetZero();
                    for (const f of this.m_fixtureList) {
                        if (f.m_density === 0) {
                            continue;
                        }
                        const massData = f.GetMassData(b2Body.ResetMassData_s_massData);
                        this.m_mass += massData.mass;
                        localCenter.x += massData.center.x * massData.mass;
                        localCenter.y += massData.center.y * massData.mass;
                        this.m_I += massData.I;
                    }
                    if (this.m_mass > 0) {
                        this.m_invMass = 1 / this.m_mass;
                        localCenter.x *= this.m_invMass;
                        localCenter.y *= this.m_invMass;
                    }
                    else {
                        this.m_mass = 1;
                        this.m_invMass = 1;
                    }
                    if (this.m_I > 0 && !this.m_fixedRotationFlag) {
                        this.m_I -= this.m_mass * b2Math_32.b2Vec2.DotVV(localCenter, localCenter);
                        this.m_invI = 1 / this.m_I;
                    }
                    else {
                        this.m_I = 0;
                        this.m_invI = 0;
                    }
                    const oldCenter = b2Body.ResetMassData_s_oldCenter.Copy(this.m_sweep.c);
                    this.m_sweep.localCenter.Copy(localCenter);
                    b2Math_32.b2Transform.MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
                    this.m_sweep.c0.Copy(this.m_sweep.c);
                    b2Math_32.b2Vec2.AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, b2Math_32.b2Vec2.SubVV(this.m_sweep.c, oldCenter, b2Math_32.b2Vec2.s_t0), this.m_linearVelocity);
                }
                GetWorldPoint(localPoint, out) {
                    return b2Math_32.b2Transform.MulXV(this.m_xf, localPoint, out);
                }
                GetWorldVector(localVector, out) {
                    return b2Math_32.b2Rot.MulRV(this.m_xf.q, localVector, out);
                }
                GetLocalPoint(worldPoint, out) {
                    return b2Math_32.b2Transform.MulTXV(this.m_xf, worldPoint, out);
                }
                GetLocalVector(worldVector, out) {
                    return b2Math_32.b2Rot.MulTRV(this.m_xf.q, worldVector, out);
                }
                GetLinearVelocityFromWorldPoint(worldPoint, out) {
                    return b2Math_32.b2Vec2.AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, b2Math_32.b2Vec2.SubVV(worldPoint, this.m_sweep.c, b2Math_32.b2Vec2.s_t0), out);
                }
                GetLinearVelocityFromLocalPoint(localPoint, out) {
                    return this.GetLinearVelocityFromWorldPoint(this.GetWorldPoint(localPoint, out), out);
                }
                GetLinearDamping() {
                    return this.m_linearDamping;
                }
                SetLinearDamping(linearDamping) {
                    this.m_linearDamping = linearDamping;
                }
                GetAngularDamping() {
                    return this.m_angularDamping;
                }
                SetAngularDamping(angularDamping) {
                    this.m_angularDamping = angularDamping;
                }
                GetGravityScale() {
                    return this.m_gravityScale;
                }
                SetGravityScale(scale) {
                    this.m_gravityScale = scale;
                }
                SetType(type) {
                    if (this.m_world.IsLocked()) {
                        throw new Error();
                    }
                    if (this.m_type === type) {
                        return;
                    }
                    this.m_type = type;
                    this.ResetMassData();
                    if (this.m_type === b2BodyType.b2_staticBody) {
                        this.m_linearVelocity.SetZero();
                        this.m_angularVelocity = 0;
                        this.m_sweep.a0 = this.m_sweep.a;
                        this.m_sweep.c0.Copy(this.m_sweep.c);
                        this.SynchronizeFixtures();
                    }
                    this.SetAwake(true);
                    this.m_force.SetZero();
                    this.m_torque = 0;
                    for (const contact of this.m_contactList) {
                        this.m_world.m_contactManager.Destroy(contact);
                    }
                    this.m_contactList.clear();
                    const broadPhase = this.m_world.m_contactManager.m_broadPhase;
                    for (const f of this.m_fixtureList) {
                        const proxyCount = f.m_proxyCount;
                        for (let i = 0; i < proxyCount; ++i) {
                            broadPhase.TouchProxy(f.m_proxies[i].treeNode);
                        }
                    }
                }
                GetType() {
                    return this.m_type;
                }
                SetBullet(flag) {
                    this.m_bulletFlag = flag;
                }
                IsBullet() {
                    return this.m_bulletFlag;
                }
                SetSleepingAllowed(flag) {
                    this.m_autoSleepFlag = flag;
                    if (!flag) {
                        this.SetAwake(true);
                    }
                }
                IsSleepingAllowed() {
                    return this.m_autoSleepFlag;
                }
                SetAwake(flag) {
                    if (flag) {
                        if (!this.m_awakeFlag) {
                            this.m_awakeFlag = true;
                            this.m_sleepTime = 0;
                        }
                    }
                    else {
                        this.m_awakeFlag = false;
                        this.m_sleepTime = 0;
                        this.m_linearVelocity.SetZero();
                        this.m_angularVelocity = 0;
                        this.m_force.SetZero();
                        this.m_torque = 0;
                    }
                }
                IsAwake() {
                    return this.m_awakeFlag;
                }
                SetActive(flag) {
                    if (this.m_world.IsLocked()) {
                        throw new Error();
                    }
                    if (flag === this.IsActive()) {
                        return;
                    }
                    this.m_activeFlag = flag;
                    if (flag) {
                        const broadPhase = this.m_world.m_contactManager.m_broadPhase;
                        for (const f of this.m_fixtureList) {
                            f.CreateProxies(broadPhase, this.m_xf);
                        }
                    }
                    else {
                        const broadPhase = this.m_world.m_contactManager.m_broadPhase;
                        for (const f of this.m_fixtureList) {
                            f.DestroyProxies(broadPhase);
                        }
                        for (const contact of this.m_contactList) {
                            this.m_world.m_contactManager.Destroy(contact);
                        }
                        this.m_contactList.clear();
                    }
                }
                IsActive() {
                    return this.m_activeFlag;
                }
                SetFixedRotation(flag) {
                    if (this.m_fixedRotationFlag === flag) {
                        return;
                    }
                    this.m_fixedRotationFlag = flag;
                    this.m_angularVelocity = 0;
                    this.ResetMassData();
                }
                IsFixedRotation() {
                    return this.m_fixedRotationFlag;
                }
                GetFixtureList() {
                    return this.m_fixtureList;
                }
                GetJointList() {
                    return this.m_jointList;
                }
                GetContactList() {
                    return this.m_contactList;
                }
                GetUserData() {
                    return this.m_userData;
                }
                SetUserData(data) {
                    this.m_userData = data;
                }
                GetWorld() {
                    return this.m_world;
                }
                Dump(log) {
                    const bodyIndex = this.m_islandIndex;
                    log("{\n");
                    log("  const bd: b2BodyDef = new b2BodyDef();\n");
                    let type_str = "";
                    switch (this.m_type) {
                        case b2BodyType.b2_staticBody:
                            type_str = "b2BodyType.b2_staticBody";
                            break;
                        case b2BodyType.b2_kinematicBody:
                            type_str = "b2BodyType.b2_kinematicBody";
                            break;
                        case b2BodyType.b2_dynamicBody:
                            type_str = "b2BodyType.b2_dynamicBody";
                            break;
                        default:
                            break;
                    }
                    log("  bd.type = %s;\n", type_str);
                    log("  bd.position.Set(%.15f, %.15f);\n", this.m_xf.p.x, this.m_xf.p.y);
                    log("  bd.angle = %.15f;\n", this.m_sweep.a);
                    log("  bd.linearVelocity.Set(%.15f, %.15f);\n", this.m_linearVelocity.x, this.m_linearVelocity.y);
                    log("  bd.angularVelocity = %.15f;\n", this.m_angularVelocity);
                    log("  bd.linearDamping = %.15f;\n", this.m_linearDamping);
                    log("  bd.angularDamping = %.15f;\n", this.m_angularDamping);
                    log("  bd.allowSleep = %s;\n", (this.m_autoSleepFlag) ? ("true") : ("false"));
                    log("  bd.awake = %s;\n", (this.m_awakeFlag) ? ("true") : ("false"));
                    log("  bd.fixedRotation = %s;\n", (this.m_fixedRotationFlag) ? ("true") : ("false"));
                    log("  bd.bullet = %s;\n", (this.m_bulletFlag) ? ("true") : ("false"));
                    log("  bd.active = %s;\n", (this.m_activeFlag) ? ("true") : ("false"));
                    log("  bd.gravityScale = %.15f;\n", this.m_gravityScale);
                    log("\n");
                    log("  bodies[%d] = this.m_world.CreateBody(bd);\n", this.m_islandIndex);
                    log("\n");
                    for (const f of this.m_fixtureList) {
                        log("  {\n");
                        f.Dump(log, bodyIndex);
                        log("  }\n");
                    }
                    log("}\n");
                }
                SynchronizeFixtures() {
                    const xf1 = b2Body.SynchronizeFixtures_s_xf1;
                    xf1.q.SetAngle(this.m_sweep.a0);
                    b2Math_32.b2Rot.MulRV(xf1.q, this.m_sweep.localCenter, xf1.p);
                    b2Math_32.b2Vec2.SubVV(this.m_sweep.c0, xf1.p, xf1.p);
                    const broadPhase = this.m_world.m_contactManager.m_broadPhase;
                    for (const f of this.m_fixtureList) {
                        f.Synchronize(broadPhase, xf1, this.m_xf);
                    }
                }
                SynchronizeTransform() {
                    this.m_xf.q.SetAngle(this.m_sweep.a);
                    b2Math_32.b2Rot.MulRV(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p);
                    b2Math_32.b2Vec2.SubVV(this.m_sweep.c, this.m_xf.p, this.m_xf.p);
                }
                ShouldCollide(other) {
                    if (this.m_type === b2BodyType.b2_staticBody && other.m_type === b2BodyType.b2_staticBody) {
                        return false;
                    }
                    return this.ShouldCollideConnected(other);
                }
                ShouldCollideConnected(other) {
                    for (const joint of this.m_jointList) {
                        if (joint.GetOtherBody(this) === other) {
                            if (!joint.m_collideConnected) {
                                return false;
                            }
                        }
                    }
                    return true;
                }
                Advance(alpha) {
                    this.m_sweep.Advance(alpha);
                    this.m_sweep.c.Copy(this.m_sweep.c0);
                    this.m_sweep.a = this.m_sweep.a0;
                    this.m_xf.q.SetAngle(this.m_sweep.a);
                    b2Math_32.b2Rot.MulRV(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p);
                    b2Math_32.b2Vec2.SubVV(this.m_sweep.c, this.m_xf.p, this.m_xf.p);
                }
                GetControllerList() {
                    return this.m_controllerList;
                }
                GetControllerCount() {
                    return this.m_controllerList.size;
                }
            };
            b2Body.CreateFixtureShapeDensity_s_def = new b2Fixture_1.b2FixtureDef();
            b2Body.SetMassData_s_oldCenter = new b2Math_32.b2Vec2();
            b2Body.ResetMassData_s_localCenter = new b2Math_32.b2Vec2();
            b2Body.ResetMassData_s_oldCenter = new b2Math_32.b2Vec2();
            b2Body.ResetMassData_s_massData = new b2Shape_9.b2MassData();
            b2Body.SynchronizeFixtures_s_xf1 = new b2Math_32.b2Transform();
            exports_43("b2Body", b2Body);
        }
    };
});
System.register("Dynamics/Contacts/b2Contact", ["Common/b2Settings", "Common/b2Math", "Collision/b2Collision", "Collision/b2TimeOfImpact"], function (exports_44, context_44) {
    "use strict";
    var __moduleName = context_44 && context_44.id;
    function b2MixFriction(friction1, friction2) {
        return b2Math_33.b2Sqrt(friction1 * friction2);
    }
    exports_44("b2MixFriction", b2MixFriction);
    function b2MixRestitution(restitution1, restitution2) {
        return restitution1 > restitution2 ? restitution1 : restitution2;
    }
    exports_44("b2MixRestitution", b2MixRestitution);
    var b2Settings_40, b2Math_33, b2Collision_7, b2Collision_8, b2TimeOfImpact_2, b2Contact;
    return {
        setters: [
            function (b2Settings_40_1) {
                b2Settings_40 = b2Settings_40_1;
            },
            function (b2Math_33_1) {
                b2Math_33 = b2Math_33_1;
            },
            function (b2Collision_7_1) {
                b2Collision_7 = b2Collision_7_1;
                b2Collision_8 = b2Collision_7_1;
            },
            function (b2TimeOfImpact_2_1) {
                b2TimeOfImpact_2 = b2TimeOfImpact_2_1;
            }
        ],
        execute: function () {
            b2Contact = class b2Contact {
                constructor() {
                    this.m_islandFlag = false;
                    this.m_touchingFlag = false;
                    this.m_enabledFlag = false;
                    this.m_filterFlag = false;
                    this.m_bulletHitFlag = false;
                    this.m_toiFlag = false;
                    this.m_indexA = 0;
                    this.m_indexB = 0;
                    this.m_manifold = new b2Collision_7.b2Manifold();
                    this.m_toiCount = 0;
                    this.m_toi = 0;
                    this.m_friction = 0;
                    this.m_restitution = 0;
                    this.m_tangentSpeed = 0;
                    this.m_oldManifold = new b2Collision_7.b2Manifold();
                }
                GetManifold() {
                    return this.m_manifold;
                }
                GetWorldManifold(worldManifold) {
                    const bodyA = this.m_fixtureA.GetBody();
                    const bodyB = this.m_fixtureB.GetBody();
                    const shapeA = this.m_fixtureA.GetShape();
                    const shapeB = this.m_fixtureB.GetShape();
                    worldManifold.Initialize(this.m_manifold, bodyA.GetTransform(), shapeA.m_radius, bodyB.GetTransform(), shapeB.m_radius);
                }
                IsTouching() {
                    return this.m_touchingFlag;
                }
                SetEnabled(flag) {
                    this.m_enabledFlag = flag;
                }
                IsEnabled() {
                    return this.m_enabledFlag;
                }
                GetFixtureA() {
                    return this.m_fixtureA;
                }
                GetChildIndexA() {
                    return this.m_indexA;
                }
                GetFixtureB() {
                    return this.m_fixtureB;
                }
                GetChildIndexB() {
                    return this.m_indexB;
                }
                GetOtherFixture(fixture) {
                    const fixtureA = this.m_fixtureA;
                    return fixture === fixtureA ? this.m_fixtureB : fixtureA;
                }
                GetOtherBody(body) {
                    const bodyA = this.m_fixtureA.GetBody();
                    return body === bodyA ? this.m_fixtureB.GetBody() : bodyA;
                }
                FlagForFiltering() {
                    this.m_filterFlag = true;
                }
                SetFriction(friction) {
                    this.m_friction = friction;
                }
                GetFriction() {
                    return this.m_friction;
                }
                ResetFriction() {
                    this.m_friction = b2MixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction);
                }
                SetRestitution(restitution) {
                    this.m_restitution = restitution;
                }
                GetRestitution() {
                    return this.m_restitution;
                }
                ResetRestitution() {
                    this.m_restitution = b2MixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
                }
                SetTangentSpeed(speed) {
                    this.m_tangentSpeed = speed;
                }
                GetTangentSpeed() {
                    return this.m_tangentSpeed;
                }
                Reset(fixtureA, indexA, fixtureB, indexB) {
                    this.m_islandFlag = false;
                    this.m_touchingFlag = false;
                    this.m_enabledFlag = true;
                    this.m_filterFlag = false;
                    this.m_bulletHitFlag = false;
                    this.m_toiFlag = false;
                    this.m_fixtureA = fixtureA;
                    this.m_fixtureB = fixtureB;
                    this.m_indexA = indexA;
                    this.m_indexB = indexB;
                    this.m_manifold.pointCount = 0;
                    this.m_toiCount = 0;
                    this.m_friction = b2MixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction);
                    this.m_restitution = b2MixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
                }
                Update(listener) {
                    const tManifold = this.m_oldManifold;
                    this.m_oldManifold = this.m_manifold;
                    this.m_manifold = tManifold;
                    this.m_enabledFlag = true;
                    let touching = false;
                    const wasTouching = this.m_touchingFlag;
                    const sensorA = this.m_fixtureA.IsSensor();
                    const sensorB = this.m_fixtureB.IsSensor();
                    const sensor = sensorA || sensorB;
                    const bodyA = this.m_fixtureA.GetBody();
                    const bodyB = this.m_fixtureB.GetBody();
                    const xfA = bodyA.GetTransform();
                    const xfB = bodyB.GetTransform();
                    if (sensor) {
                        const shapeA = this.m_fixtureA.GetShape();
                        const shapeB = this.m_fixtureB.GetShape();
                        touching = b2Collision_8.b2TestOverlapShape(shapeA, this.m_indexA, shapeB, this.m_indexB, xfA, xfB);
                        this.m_manifold.pointCount = 0;
                    }
                    else {
                        this.Evaluate(this.m_manifold, xfA, xfB);
                        touching = this.m_manifold.pointCount > 0;
                        for (let i = 0; i < this.m_manifold.pointCount; ++i) {
                            const mp2 = this.m_manifold.points[i];
                            mp2.normalImpulse = 0;
                            mp2.tangentImpulse = 0;
                            const id2 = mp2.id;
                            for (let j = 0; j < this.m_oldManifold.pointCount; ++j) {
                                const mp1 = this.m_oldManifold.points[j];
                                if (mp1.id.key === id2.key) {
                                    mp2.normalImpulse = mp1.normalImpulse;
                                    mp2.tangentImpulse = mp1.tangentImpulse;
                                    break;
                                }
                            }
                        }
                        if (touching !== wasTouching) {
                            bodyA.SetAwake(true);
                            bodyB.SetAwake(true);
                        }
                    }
                    this.m_touchingFlag = touching;
                    if (!wasTouching && touching && listener) {
                        listener.BeginContact(this);
                    }
                    if (wasTouching && !touching && listener) {
                        listener.EndContact(this);
                    }
                    if (!sensor && touching && listener) {
                        listener.PreSolve(this, this.m_oldManifold);
                    }
                }
                ComputeTOI(sweepA, sweepB) {
                    const input = b2Contact.ComputeTOI_s_input;
                    input.proxyA.SetShape(this.m_fixtureA.GetShape(), this.m_indexA);
                    input.proxyB.SetShape(this.m_fixtureB.GetShape(), this.m_indexB);
                    input.sweepA.Copy(sweepA);
                    input.sweepB.Copy(sweepB);
                    input.tMax = b2Settings_40.b2_linearSlop;
                    const output = b2Contact.ComputeTOI_s_output;
                    b2TimeOfImpact_2.b2TimeOfImpact(output, input);
                    return output.t;
                }
            };
            b2Contact.ComputeTOI_s_input = new b2TimeOfImpact_2.b2TOIInput();
            b2Contact.ComputeTOI_s_output = new b2TimeOfImpact_2.b2TOIOutput();
            exports_44("b2Contact", b2Contact);
        }
    };
});
System.register("Collision/b2CollideCircle", ["Common/b2Settings", "Common/b2Math", "Collision/b2Collision"], function (exports_45, context_45) {
    "use strict";
    var __moduleName = context_45 && context_45.id;
    function b2CollideCircles(manifold, circleA, xfA, circleB, xfB) {
        manifold.pointCount = 0;
        const pA = b2Math_34.b2Transform.MulXV(xfA, circleA.m_p, b2CollideCircles_s_pA);
        const pB = b2Math_34.b2Transform.MulXV(xfB, circleB.m_p, b2CollideCircles_s_pB);
        const distSqr = b2Math_34.b2Vec2.DistanceSquaredVV(pA, pB);
        const radius = circleA.m_radius + circleB.m_radius;
        if (distSqr > radius * radius) {
            return;
        }
        manifold.type = b2Collision_9.b2ManifoldType.e_circles;
        manifold.localPoint.Copy(circleA.m_p);
        manifold.localNormal.SetZero();
        manifold.pointCount = 1;
        manifold.points[0].localPoint.Copy(circleB.m_p);
        manifold.points[0].id.key = 0;
    }
    exports_45("b2CollideCircles", b2CollideCircles);
    function b2CollidePolygonAndCircle(manifold, polygonA, xfA, circleB, xfB) {
        manifold.pointCount = 0;
        const c = b2Math_34.b2Transform.MulXV(xfB, circleB.m_p, b2CollidePolygonAndCircle_s_c);
        const cLocal = b2Math_34.b2Transform.MulTXV(xfA, c, b2CollidePolygonAndCircle_s_cLocal);
        let normalIndex = 0;
        let separation = (-b2Settings_41.b2_maxFloat);
        const radius = polygonA.m_radius + circleB.m_radius;
        const vertexCount = polygonA.m_count;
        const vertices = polygonA.m_vertices;
        const normals = polygonA.m_normals;
        for (let i = 0; i < vertexCount; ++i) {
            const s = b2Math_34.b2Vec2.DotVV(normals[i], b2Math_34.b2Vec2.SubVV(cLocal, vertices[i], b2Math_34.b2Vec2.s_t0));
            if (s > radius) {
                return;
            }
            if (s > separation) {
                separation = s;
                normalIndex = i;
            }
        }
        const vertIndex1 = normalIndex;
        const vertIndex2 = (vertIndex1 + 1) % vertexCount;
        const v1 = vertices[vertIndex1];
        const v2 = vertices[vertIndex2];
        if (separation < b2Settings_41.b2_epsilon) {
            manifold.pointCount = 1;
            manifold.type = b2Collision_9.b2ManifoldType.e_faceA;
            manifold.localNormal.Copy(normals[normalIndex]);
            b2Math_34.b2Vec2.MidVV(v1, v2, manifold.localPoint);
            manifold.points[0].localPoint.Copy(circleB.m_p);
            manifold.points[0].id.key = 0;
            return;
        }
        const u1 = b2Math_34.b2Vec2.DotVV(b2Math_34.b2Vec2.SubVV(cLocal, v1, b2Math_34.b2Vec2.s_t0), b2Math_34.b2Vec2.SubVV(v2, v1, b2Math_34.b2Vec2.s_t1));
        const u2 = b2Math_34.b2Vec2.DotVV(b2Math_34.b2Vec2.SubVV(cLocal, v2, b2Math_34.b2Vec2.s_t0), b2Math_34.b2Vec2.SubVV(v1, v2, b2Math_34.b2Vec2.s_t1));
        if (u1 <= 0) {
            if (b2Math_34.b2Vec2.DistanceSquaredVV(cLocal, v1) > radius * radius) {
                return;
            }
            manifold.pointCount = 1;
            manifold.type = b2Collision_9.b2ManifoldType.e_faceA;
            b2Math_34.b2Vec2.SubVV(cLocal, v1, manifold.localNormal).SelfNormalize();
            manifold.localPoint.Copy(v1);
            manifold.points[0].localPoint.Copy(circleB.m_p);
            manifold.points[0].id.key = 0;
        }
        else if (u2 <= 0) {
            if (b2Math_34.b2Vec2.DistanceSquaredVV(cLocal, v2) > radius * radius) {
                return;
            }
            manifold.pointCount = 1;
            manifold.type = b2Collision_9.b2ManifoldType.e_faceA;
            b2Math_34.b2Vec2.SubVV(cLocal, v2, manifold.localNormal).SelfNormalize();
            manifold.localPoint.Copy(v2);
            manifold.points[0].localPoint.Copy(circleB.m_p);
            manifold.points[0].id.key = 0;
        }
        else {
            const faceCenter = b2Math_34.b2Vec2.MidVV(v1, v2, b2CollidePolygonAndCircle_s_faceCenter);
            separation = b2Math_34.b2Vec2.DotVV(b2Math_34.b2Vec2.SubVV(cLocal, faceCenter, b2Math_34.b2Vec2.s_t1), normals[vertIndex1]);
            if (separation > radius) {
                return;
            }
            manifold.pointCount = 1;
            manifold.type = b2Collision_9.b2ManifoldType.e_faceA;
            manifold.localNormal.Copy(normals[vertIndex1]).SelfNormalize();
            manifold.localPoint.Copy(faceCenter);
            manifold.points[0].localPoint.Copy(circleB.m_p);
            manifold.points[0].id.key = 0;
        }
    }
    exports_45("b2CollidePolygonAndCircle", b2CollidePolygonAndCircle);
    var b2Settings_41, b2Math_34, b2Collision_9, b2CollideCircles_s_pA, b2CollideCircles_s_pB, b2CollidePolygonAndCircle_s_c, b2CollidePolygonAndCircle_s_cLocal, b2CollidePolygonAndCircle_s_faceCenter;
    return {
        setters: [
            function (b2Settings_41_1) {
                b2Settings_41 = b2Settings_41_1;
            },
            function (b2Math_34_1) {
                b2Math_34 = b2Math_34_1;
            },
            function (b2Collision_9_1) {
                b2Collision_9 = b2Collision_9_1;
            }
        ],
        execute: function () {
            b2CollideCircles_s_pA = new b2Math_34.b2Vec2();
            b2CollideCircles_s_pB = new b2Math_34.b2Vec2();
            b2CollidePolygonAndCircle_s_c = new b2Math_34.b2Vec2();
            b2CollidePolygonAndCircle_s_cLocal = new b2Math_34.b2Vec2();
            b2CollidePolygonAndCircle_s_faceCenter = new b2Math_34.b2Vec2();
        }
    };
});
System.register("Dynamics/Contacts/b2CircleContact", ["Collision/b2CollideCircle", "Dynamics/Contacts/b2Contact"], function (exports_46, context_46) {
    "use strict";
    var __moduleName = context_46 && context_46.id;
    var b2CollideCircle_1, b2Contact_1, b2CircleContact;
    return {
        setters: [
            function (b2CollideCircle_1_1) {
                b2CollideCircle_1 = b2CollideCircle_1_1;
            },
            function (b2Contact_1_1) {
                b2Contact_1 = b2Contact_1_1;
            }
        ],
        execute: function () {
            b2CircleContact = class b2CircleContact extends b2Contact_1.b2Contact {
                constructor() {
                    super();
                }
                static Create(allocator) {
                    return new b2CircleContact();
                }
                static Destroy(contact, allocator) {
                }
                Reset(fixtureA, indexA, fixtureB, indexB) {
                    super.Reset(fixtureA, indexA, fixtureB, indexB);
                }
                Evaluate(manifold, xfA, xfB) {
                    const shapeA = this.m_fixtureA.GetShape();
                    const shapeB = this.m_fixtureB.GetShape();
                    b2CollideCircle_1.b2CollideCircles(manifold, shapeA, xfA, shapeB, xfB);
                }
            };
            exports_46("b2CircleContact", b2CircleContact);
        }
    };
});
System.register("Collision/b2CollidePolygon", ["Common/b2Settings", "Common/b2Math", "Collision/b2Collision"], function (exports_47, context_47) {
    "use strict";
    var __moduleName = context_47 && context_47.id;
    function b2EdgeSeparation(poly1, xf1, edge1, poly2, xf2) {
        const vertices1 = poly1.m_vertices;
        const normals1 = poly1.m_normals;
        const count2 = poly2.m_count;
        const vertices2 = poly2.m_vertices;
        const normal1World = b2Math_35.b2Rot.MulRV(xf1.q, normals1[edge1], b2EdgeSeparation_s_normal1World);
        const normal1 = b2Math_35.b2Rot.MulTRV(xf2.q, normal1World, b2EdgeSeparation_s_normal1);
        let index = 0;
        let minDot = b2Settings_42.b2_maxFloat;
        for (let i = 0; i < count2; ++i) {
            const dot = b2Math_35.b2Vec2.DotVV(vertices2[i], normal1);
            if (dot < minDot) {
                minDot = dot;
                index = i;
            }
        }
        const v1 = b2Math_35.b2Transform.MulXV(xf1, vertices1[edge1], b2EdgeSeparation_s_v1);
        const v2 = b2Math_35.b2Transform.MulXV(xf2, vertices2[index], b2EdgeSeparation_s_v2);
        const separation = b2Math_35.b2Vec2.DotVV(b2Math_35.b2Vec2.SubVV(v2, v1, b2Math_35.b2Vec2.s_t0), normal1World);
        return separation;
    }
    function b2FindMaxSeparation(edgeIndex, poly1, xf1, poly2, xf2) {
        const count1 = poly1.m_count;
        const normals1 = poly1.m_normals;
        const d = b2Math_35.b2Vec2.SubVV(b2Math_35.b2Transform.MulXV(xf2, poly2.m_centroid, b2Math_35.b2Vec2.s_t0), b2Math_35.b2Transform.MulXV(xf1, poly1.m_centroid, b2Math_35.b2Vec2.s_t1), b2FindMaxSeparation_s_d);
        const dLocal1 = b2Math_35.b2Rot.MulTRV(xf1.q, d, b2FindMaxSeparation_s_dLocal1);
        let edge = 0;
        let maxDot = (-b2Settings_42.b2_maxFloat);
        for (let i = 0; i < count1; ++i) {
            const dot = b2Math_35.b2Vec2.DotVV(normals1[i], dLocal1);
            if (dot > maxDot) {
                maxDot = dot;
                edge = i;
            }
        }
        let s = b2EdgeSeparation(poly1, xf1, edge, poly2, xf2);
        const prevEdge = (edge + count1 - 1) % count1;
        const sPrev = b2EdgeSeparation(poly1, xf1, prevEdge, poly2, xf2);
        const nextEdge = (edge + 1) % count1;
        const sNext = b2EdgeSeparation(poly1, xf1, nextEdge, poly2, xf2);
        let bestEdge = 0;
        let bestSeparation = 0;
        let increment = 0;
        if (sPrev > s && sPrev > sNext) {
            increment = -1;
            bestEdge = prevEdge;
            bestSeparation = sPrev;
        }
        else if (sNext > s) {
            increment = 1;
            bestEdge = nextEdge;
            bestSeparation = sNext;
        }
        else {
            edgeIndex[0] = edge;
            return s;
        }
        while (true) {
            if (increment === -1) {
                edge = (bestEdge + count1 - 1) % count1;
            }
            else {
                edge = (bestEdge + 1) % count1;
            }
            s = b2EdgeSeparation(poly1, xf1, edge, poly2, xf2);
            if (s > bestSeparation) {
                bestEdge = edge;
                bestSeparation = s;
            }
            else {
                break;
            }
        }
        edgeIndex[0] = bestEdge;
        return bestSeparation;
    }
    function b2FindIncidentEdge(c, poly1, xf1, edge1, poly2, xf2) {
        const normals1 = poly1.m_normals;
        const count2 = poly2.m_count;
        const vertices2 = poly2.m_vertices;
        const normals2 = poly2.m_normals;
        const normal1 = b2Math_35.b2Rot.MulTRV(xf2.q, b2Math_35.b2Rot.MulRV(xf1.q, normals1[edge1], b2Math_35.b2Vec2.s_t0), b2FindIncidentEdge_s_normal1);
        let index = 0;
        let minDot = b2Settings_42.b2_maxFloat;
        for (let i = 0; i < count2; ++i) {
            const dot = b2Math_35.b2Vec2.DotVV(normal1, normals2[i]);
            if (dot < minDot) {
                minDot = dot;
                index = i;
            }
        }
        const i1 = index;
        const i2 = (i1 + 1) % count2;
        const c0 = c[0];
        b2Math_35.b2Transform.MulXV(xf2, vertices2[i1], c0.v);
        const cf0 = c0.id.cf;
        cf0.indexA = edge1;
        cf0.indexB = i1;
        cf0.typeA = b2Collision_10.b2ContactFeatureType.e_face;
        cf0.typeB = b2Collision_10.b2ContactFeatureType.e_vertex;
        const c1 = c[1];
        b2Math_35.b2Transform.MulXV(xf2, vertices2[i2], c1.v);
        const cf1 = c1.id.cf;
        cf1.indexA = edge1;
        cf1.indexB = i2;
        cf1.typeA = b2Collision_10.b2ContactFeatureType.e_face;
        cf1.typeB = b2Collision_10.b2ContactFeatureType.e_vertex;
    }
    function b2CollidePolygons(manifold, polyA, xfA, polyB, xfB) {
        manifold.pointCount = 0;
        const totalRadius = polyA.m_radius + polyB.m_radius;
        const edgeA = b2CollidePolygons_s_edgeA;
        edgeA[0] = 0;
        const separationA = b2FindMaxSeparation(edgeA, polyA, xfA, polyB, xfB);
        if (separationA > totalRadius) {
            return;
        }
        const edgeB = b2CollidePolygons_s_edgeB;
        edgeB[0] = 0;
        const separationB = b2FindMaxSeparation(edgeB, polyB, xfB, polyA, xfA);
        if (separationB > totalRadius) {
            return;
        }
        let poly1;
        let poly2;
        let xf1, xf2;
        let edge1 = 0;
        let flip = 0;
        const k_relativeTol = 0.98;
        const k_absoluteTol = 0.001;
        if (separationB > k_relativeTol * separationA + k_absoluteTol) {
            poly1 = polyB;
            poly2 = polyA;
            xf1 = xfB;
            xf2 = xfA;
            edge1 = edgeB[0];
            manifold.type = b2Collision_11.b2ManifoldType.e_faceB;
            flip = 1;
        }
        else {
            poly1 = polyA;
            poly2 = polyB;
            xf1 = xfA;
            xf2 = xfB;
            edge1 = edgeA[0];
            manifold.type = b2Collision_11.b2ManifoldType.e_faceA;
            flip = 0;
        }
        const incidentEdge = b2CollidePolygons_s_incidentEdge;
        b2FindIncidentEdge(incidentEdge, poly1, xf1, edge1, poly2, xf2);
        const count1 = poly1.m_count;
        const vertices1 = poly1.m_vertices;
        const iv1 = edge1;
        const iv2 = (edge1 + 1) % count1;
        const local_v11 = vertices1[iv1];
        const local_v12 = vertices1[iv2];
        const localTangent = b2Math_35.b2Vec2.SubVV(local_v12, local_v11, b2CollidePolygons_s_localTangent);
        localTangent.Normalize();
        const localNormal = b2Math_35.b2Vec2.CrossVOne(localTangent, b2CollidePolygons_s_localNormal);
        const planePoint = b2Math_35.b2Vec2.MidVV(local_v11, local_v12, b2CollidePolygons_s_planePoint);
        const tangent = b2Math_35.b2Rot.MulRV(xf1.q, localTangent, b2CollidePolygons_s_tangent);
        const normal = b2Math_35.b2Vec2.CrossVOne(tangent, b2CollidePolygons_s_normal);
        const v11 = b2Math_35.b2Transform.MulXV(xf1, local_v11, b2CollidePolygons_s_v11);
        const v12 = b2Math_35.b2Transform.MulXV(xf1, local_v12, b2CollidePolygons_s_v12);
        const frontOffset = b2Math_35.b2Vec2.DotVV(normal, v11);
        const sideOffset1 = -b2Math_35.b2Vec2.DotVV(tangent, v11) + totalRadius;
        const sideOffset2 = b2Math_35.b2Vec2.DotVV(tangent, v12) + totalRadius;
        const clipPoints1 = b2CollidePolygons_s_clipPoints1;
        const clipPoints2 = b2CollidePolygons_s_clipPoints2;
        let np;
        const ntangent = b2Math_35.b2Vec2.NegV(tangent, b2CollidePolygons_s_ntangent);
        np = b2Collision_11.b2ClipSegmentToLine(clipPoints1, incidentEdge, ntangent, sideOffset1, iv1);
        if (np < 2) {
            return;
        }
        np = b2Collision_11.b2ClipSegmentToLine(clipPoints2, clipPoints1, tangent, sideOffset2, iv2);
        if (np < 2) {
            return;
        }
        manifold.localNormal.Copy(localNormal);
        manifold.localPoint.Copy(planePoint);
        let pointCount = 0;
        for (let i = 0; i < b2Settings_42.b2_maxManifoldPoints; ++i) {
            const cv = clipPoints2[i];
            const separation = b2Math_35.b2Vec2.DotVV(normal, cv.v) - frontOffset;
            if (separation <= totalRadius) {
                const cp = manifold.points[pointCount];
                b2Math_35.b2Transform.MulTXV(xf2, cv.v, cp.localPoint);
                cp.id.Copy(cv.id);
                if (flip) {
                    const cf = cp.id.cf;
                    cp.id.cf.indexA = cf.indexB;
                    cp.id.cf.indexB = cf.indexA;
                    cp.id.cf.typeA = cf.typeB;
                    cp.id.cf.typeB = cf.typeA;
                }
                ++pointCount;
            }
        }
        manifold.pointCount = pointCount;
    }
    exports_47("b2CollidePolygons", b2CollidePolygons);
    var b2Settings_42, b2Math_35, b2Collision_10, b2Collision_11, b2EdgeSeparation_s_normal1World, b2EdgeSeparation_s_normal1, b2EdgeSeparation_s_v1, b2EdgeSeparation_s_v2, b2FindMaxSeparation_s_d, b2FindMaxSeparation_s_dLocal1, b2FindIncidentEdge_s_normal1, b2CollidePolygons_s_incidentEdge, b2CollidePolygons_s_clipPoints1, b2CollidePolygons_s_clipPoints2, b2CollidePolygons_s_edgeA, b2CollidePolygons_s_edgeB, b2CollidePolygons_s_localTangent, b2CollidePolygons_s_localNormal, b2CollidePolygons_s_planePoint, b2CollidePolygons_s_normal, b2CollidePolygons_s_tangent, b2CollidePolygons_s_ntangent, b2CollidePolygons_s_v11, b2CollidePolygons_s_v12;
    return {
        setters: [
            function (b2Settings_42_1) {
                b2Settings_42 = b2Settings_42_1;
            },
            function (b2Math_35_1) {
                b2Math_35 = b2Math_35_1;
            },
            function (b2Collision_10_1) {
                b2Collision_10 = b2Collision_10_1;
                b2Collision_11 = b2Collision_10_1;
            }
        ],
        execute: function () {
            b2EdgeSeparation_s_normal1World = new b2Math_35.b2Vec2();
            b2EdgeSeparation_s_normal1 = new b2Math_35.b2Vec2();
            b2EdgeSeparation_s_v1 = new b2Math_35.b2Vec2();
            b2EdgeSeparation_s_v2 = new b2Math_35.b2Vec2();
            b2FindMaxSeparation_s_d = new b2Math_35.b2Vec2();
            b2FindMaxSeparation_s_dLocal1 = new b2Math_35.b2Vec2();
            b2FindIncidentEdge_s_normal1 = new b2Math_35.b2Vec2();
            b2CollidePolygons_s_incidentEdge = b2Collision_11.b2ClipVertex.MakeArray(2);
            b2CollidePolygons_s_clipPoints1 = b2Collision_11.b2ClipVertex.MakeArray(2);
            b2CollidePolygons_s_clipPoints2 = b2Collision_11.b2ClipVertex.MakeArray(2);
            b2CollidePolygons_s_edgeA = [0];
            b2CollidePolygons_s_edgeB = [0];
            b2CollidePolygons_s_localTangent = new b2Math_35.b2Vec2();
            b2CollidePolygons_s_localNormal = new b2Math_35.b2Vec2();
            b2CollidePolygons_s_planePoint = new b2Math_35.b2Vec2();
            b2CollidePolygons_s_normal = new b2Math_35.b2Vec2();
            b2CollidePolygons_s_tangent = new b2Math_35.b2Vec2();
            b2CollidePolygons_s_ntangent = new b2Math_35.b2Vec2();
            b2CollidePolygons_s_v11 = new b2Math_35.b2Vec2();
            b2CollidePolygons_s_v12 = new b2Math_35.b2Vec2();
        }
    };
});
System.register("Dynamics/Contacts/b2PolygonContact", ["Collision/b2CollidePolygon", "Dynamics/Contacts/b2Contact"], function (exports_48, context_48) {
    "use strict";
    var __moduleName = context_48 && context_48.id;
    var b2CollidePolygon_1, b2Contact_2, b2PolygonContact;
    return {
        setters: [
            function (b2CollidePolygon_1_1) {
                b2CollidePolygon_1 = b2CollidePolygon_1_1;
            },
            function (b2Contact_2_1) {
                b2Contact_2 = b2Contact_2_1;
            }
        ],
        execute: function () {
            b2PolygonContact = class b2PolygonContact extends b2Contact_2.b2Contact {
                constructor() {
                    super();
                }
                static Create(allocator) {
                    return new b2PolygonContact();
                }
                static Destroy(contact, allocator) {
                }
                Reset(fixtureA, indexA, fixtureB, indexB) {
                    super.Reset(fixtureA, indexA, fixtureB, indexB);
                }
                Evaluate(manifold, xfA, xfB) {
                    const shapeA = this.m_fixtureA.GetShape();
                    const shapeB = this.m_fixtureB.GetShape();
                    b2CollidePolygon_1.b2CollidePolygons(manifold, shapeA, xfA, shapeB, xfB);
                }
            };
            exports_48("b2PolygonContact", b2PolygonContact);
        }
    };
});
System.register("Dynamics/Contacts/b2PolygonAndCircleContact", ["Collision/b2CollideCircle", "Dynamics/Contacts/b2Contact"], function (exports_49, context_49) {
    "use strict";
    var __moduleName = context_49 && context_49.id;
    var b2CollideCircle_2, b2Contact_3, b2PolygonAndCircleContact;
    return {
        setters: [
            function (b2CollideCircle_2_1) {
                b2CollideCircle_2 = b2CollideCircle_2_1;
            },
            function (b2Contact_3_1) {
                b2Contact_3 = b2Contact_3_1;
            }
        ],
        execute: function () {
            b2PolygonAndCircleContact = class b2PolygonAndCircleContact extends b2Contact_3.b2Contact {
                constructor() {
                    super();
                }
                static Create(allocator) {
                    return new b2PolygonAndCircleContact();
                }
                static Destroy(contact, allocator) {
                }
                Reset(fixtureA, indexA, fixtureB, indexB) {
                    super.Reset(fixtureA, indexA, fixtureB, indexB);
                }
                Evaluate(manifold, xfA, xfB) {
                    const shapeA = this.m_fixtureA.GetShape();
                    const shapeB = this.m_fixtureB.GetShape();
                    b2CollideCircle_2.b2CollidePolygonAndCircle(manifold, shapeA, xfA, shapeB, xfB);
                }
            };
            exports_49("b2PolygonAndCircleContact", b2PolygonAndCircleContact);
        }
    };
});
System.register("Collision/b2CollideEdge", ["Common/b2Settings", "Common/b2Math", "Collision/b2Collision"], function (exports_50, context_50) {
    "use strict";
    var __moduleName = context_50 && context_50.id;
    function b2CollideEdgeAndCircle(manifold, edgeA, xfA, circleB, xfB) {
        manifold.pointCount = 0;
        const Q = b2Math_36.b2Transform.MulTXV(xfA, b2Math_36.b2Transform.MulXV(xfB, circleB.m_p, b2Math_36.b2Vec2.s_t0), b2CollideEdgeAndCircle_s_Q);
        const A = edgeA.m_vertex1;
        const B = edgeA.m_vertex2;
        const e = b2Math_36.b2Vec2.SubVV(B, A, b2CollideEdgeAndCircle_s_e);
        const u = b2Math_36.b2Vec2.DotVV(e, b2Math_36.b2Vec2.SubVV(B, Q, b2Math_36.b2Vec2.s_t0));
        const v = b2Math_36.b2Vec2.DotVV(e, b2Math_36.b2Vec2.SubVV(Q, A, b2Math_36.b2Vec2.s_t0));
        const radius = edgeA.m_radius + circleB.m_radius;
        const id = b2CollideEdgeAndCircle_s_id;
        id.cf.indexB = 0;
        id.cf.typeB = b2Collision_12.b2ContactFeatureType.e_vertex;
        if (v <= 0) {
            const P = A;
            const d = b2Math_36.b2Vec2.SubVV(Q, P, b2CollideEdgeAndCircle_s_d);
            const dd = b2Math_36.b2Vec2.DotVV(d, d);
            if (dd > radius * radius) {
                return;
            }
            if (edgeA.m_hasVertex0) {
                const A1 = edgeA.m_vertex0;
                const B1 = A;
                const e1 = b2Math_36.b2Vec2.SubVV(B1, A1, b2CollideEdgeAndCircle_s_e1);
                const u1 = b2Math_36.b2Vec2.DotVV(e1, b2Math_36.b2Vec2.SubVV(B1, Q, b2Math_36.b2Vec2.s_t0));
                if (u1 > 0) {
                    return;
                }
            }
            id.cf.indexA = 0;
            id.cf.typeA = b2Collision_12.b2ContactFeatureType.e_vertex;
            manifold.pointCount = 1;
            manifold.type = b2Collision_13.b2ManifoldType.e_circles;
            manifold.localNormal.SetZero();
            manifold.localPoint.Copy(P);
            manifold.points[0].id.Copy(id);
            manifold.points[0].localPoint.Copy(circleB.m_p);
            return;
        }
        if (u <= 0) {
            const P = B;
            const d = b2Math_36.b2Vec2.SubVV(Q, P, b2CollideEdgeAndCircle_s_d);
            const dd = b2Math_36.b2Vec2.DotVV(d, d);
            if (dd > radius * radius) {
                return;
            }
            if (edgeA.m_hasVertex3) {
                const B2 = edgeA.m_vertex3;
                const A2 = B;
                const e2 = b2Math_36.b2Vec2.SubVV(B2, A2, b2CollideEdgeAndCircle_s_e2);
                const v2 = b2Math_36.b2Vec2.DotVV(e2, b2Math_36.b2Vec2.SubVV(Q, A2, b2Math_36.b2Vec2.s_t0));
                if (v2 > 0) {
                    return;
                }
            }
            id.cf.indexA = 1;
            id.cf.typeA = b2Collision_12.b2ContactFeatureType.e_vertex;
            manifold.pointCount = 1;
            manifold.type = b2Collision_13.b2ManifoldType.e_circles;
            manifold.localNormal.SetZero();
            manifold.localPoint.Copy(P);
            manifold.points[0].id.Copy(id);
            manifold.points[0].localPoint.Copy(circleB.m_p);
            return;
        }
        const den = b2Math_36.b2Vec2.DotVV(e, e);
        const P = b2CollideEdgeAndCircle_s_P;
        P.x = (1 / den) * (u * A.x + v * B.x);
        P.y = (1 / den) * (u * A.y + v * B.y);
        const d = b2Math_36.b2Vec2.SubVV(Q, P, b2CollideEdgeAndCircle_s_d);
        const dd = b2Math_36.b2Vec2.DotVV(d, d);
        if (dd > radius * radius) {
            return;
        }
        const n = b2CollideEdgeAndCircle_s_n.Set(-e.y, e.x);
        if (b2Math_36.b2Vec2.DotVV(n, b2Math_36.b2Vec2.SubVV(Q, A, b2Math_36.b2Vec2.s_t0)) < 0) {
            n.Set(-n.x, -n.y);
        }
        n.Normalize();
        id.cf.indexA = 0;
        id.cf.typeA = b2Collision_12.b2ContactFeatureType.e_face;
        manifold.pointCount = 1;
        manifold.type = b2Collision_13.b2ManifoldType.e_faceA;
        manifold.localNormal.Copy(n);
        manifold.localPoint.Copy(A);
        manifold.points[0].id.Copy(id);
        manifold.points[0].localPoint.Copy(circleB.m_p);
    }
    exports_50("b2CollideEdgeAndCircle", b2CollideEdgeAndCircle);
    function b2CollideEdgeAndPolygon(manifold, edgeA, xfA, polygonB, xfB) {
        const collider = b2CollideEdgeAndPolygon_s_collider;
        collider.Collide(manifold, edgeA, xfA, polygonB, xfB);
    }
    exports_50("b2CollideEdgeAndPolygon", b2CollideEdgeAndPolygon);
    var b2Settings_43, b2Math_36, b2Collision_12, b2Collision_13, b2CollideEdgeAndCircle_s_Q, b2CollideEdgeAndCircle_s_e, b2CollideEdgeAndCircle_s_d, b2CollideEdgeAndCircle_s_e1, b2CollideEdgeAndCircle_s_e2, b2CollideEdgeAndCircle_s_P, b2CollideEdgeAndCircle_s_n, b2CollideEdgeAndCircle_s_id, b2EPAxisType, b2EPAxis, b2TempPolygon, b2ReferenceFace, b2EPColliderVertexType, b2EPCollider, b2CollideEdgeAndPolygon_s_collider;
    return {
        setters: [
            function (b2Settings_43_1) {
                b2Settings_43 = b2Settings_43_1;
            },
            function (b2Math_36_1) {
                b2Math_36 = b2Math_36_1;
            },
            function (b2Collision_12_1) {
                b2Collision_12 = b2Collision_12_1;
                b2Collision_13 = b2Collision_12_1;
            }
        ],
        execute: function () {
            b2CollideEdgeAndCircle_s_Q = new b2Math_36.b2Vec2();
            b2CollideEdgeAndCircle_s_e = new b2Math_36.b2Vec2();
            b2CollideEdgeAndCircle_s_d = new b2Math_36.b2Vec2();
            b2CollideEdgeAndCircle_s_e1 = new b2Math_36.b2Vec2();
            b2CollideEdgeAndCircle_s_e2 = new b2Math_36.b2Vec2();
            b2CollideEdgeAndCircle_s_P = new b2Math_36.b2Vec2();
            b2CollideEdgeAndCircle_s_n = new b2Math_36.b2Vec2();
            b2CollideEdgeAndCircle_s_id = new b2Collision_12.b2ContactID();
            (function (b2EPAxisType) {
                b2EPAxisType[b2EPAxisType["e_unknown"] = 0] = "e_unknown";
                b2EPAxisType[b2EPAxisType["e_edgeA"] = 1] = "e_edgeA";
                b2EPAxisType[b2EPAxisType["e_edgeB"] = 2] = "e_edgeB";
            })(b2EPAxisType || (b2EPAxisType = {}));
            b2EPAxis = class b2EPAxis {
                constructor() {
                    this.type = 0;
                    this.index = 0;
                    this.separation = 0;
                }
            };
            b2TempPolygon = class b2TempPolygon {
                constructor() {
                    this.vertices = b2Math_36.b2Vec2.MakeArray(b2Settings_43.b2_maxPolygonVertices);
                    this.normals = b2Math_36.b2Vec2.MakeArray(b2Settings_43.b2_maxPolygonVertices);
                    this.count = 0;
                }
            };
            b2ReferenceFace = class b2ReferenceFace {
                constructor() {
                    this.i1 = 0;
                    this.i2 = 0;
                    this.v1 = new b2Math_36.b2Vec2();
                    this.v2 = new b2Math_36.b2Vec2();
                    this.normal = new b2Math_36.b2Vec2();
                    this.sideNormal1 = new b2Math_36.b2Vec2();
                    this.sideOffset1 = 0;
                    this.sideNormal2 = new b2Math_36.b2Vec2();
                    this.sideOffset2 = 0;
                }
            };
            (function (b2EPColliderVertexType) {
                b2EPColliderVertexType[b2EPColliderVertexType["e_isolated"] = 0] = "e_isolated";
                b2EPColliderVertexType[b2EPColliderVertexType["e_concave"] = 1] = "e_concave";
                b2EPColliderVertexType[b2EPColliderVertexType["e_convex"] = 2] = "e_convex";
            })(b2EPColliderVertexType || (b2EPColliderVertexType = {}));
            b2EPCollider = class b2EPCollider {
                constructor() {
                    this.m_polygonB = new b2TempPolygon();
                    this.m_xf = new b2Math_36.b2Transform();
                    this.m_centroidB = new b2Math_36.b2Vec2();
                    this.m_v0 = new b2Math_36.b2Vec2();
                    this.m_v1 = new b2Math_36.b2Vec2();
                    this.m_v2 = new b2Math_36.b2Vec2();
                    this.m_v3 = new b2Math_36.b2Vec2();
                    this.m_normal0 = new b2Math_36.b2Vec2();
                    this.m_normal1 = new b2Math_36.b2Vec2();
                    this.m_normal2 = new b2Math_36.b2Vec2();
                    this.m_normal = new b2Math_36.b2Vec2();
                    this.m_type1 = 0;
                    this.m_type2 = 0;
                    this.m_lowerLimit = new b2Math_36.b2Vec2();
                    this.m_upperLimit = new b2Math_36.b2Vec2();
                    this.m_radius = 0;
                    this.m_front = false;
                }
                Collide(manifold, edgeA, xfA, polygonB, xfB) {
                    b2Math_36.b2Transform.MulTXX(xfA, xfB, this.m_xf);
                    b2Math_36.b2Transform.MulXV(this.m_xf, polygonB.m_centroid, this.m_centroidB);
                    this.m_v0.Copy(edgeA.m_vertex0);
                    this.m_v1.Copy(edgeA.m_vertex1);
                    this.m_v2.Copy(edgeA.m_vertex2);
                    this.m_v3.Copy(edgeA.m_vertex3);
                    const hasVertex0 = edgeA.m_hasVertex0;
                    const hasVertex3 = edgeA.m_hasVertex3;
                    const edge1 = b2Math_36.b2Vec2.SubVV(this.m_v2, this.m_v1, b2EPCollider.s_edge1);
                    edge1.Normalize();
                    this.m_normal1.Set(edge1.y, -edge1.x);
                    const offset1 = b2Math_36.b2Vec2.DotVV(this.m_normal1, b2Math_36.b2Vec2.SubVV(this.m_centroidB, this.m_v1, b2Math_36.b2Vec2.s_t0));
                    let offset0 = 0;
                    let offset2 = 0;
                    let convex1 = false;
                    let convex2 = false;
                    if (hasVertex0) {
                        const edge0 = b2Math_36.b2Vec2.SubVV(this.m_v1, this.m_v0, b2EPCollider.s_edge0);
                        edge0.Normalize();
                        this.m_normal0.Set(edge0.y, -edge0.x);
                        convex1 = b2Math_36.b2Vec2.CrossVV(edge0, edge1) >= 0;
                        offset0 = b2Math_36.b2Vec2.DotVV(this.m_normal0, b2Math_36.b2Vec2.SubVV(this.m_centroidB, this.m_v0, b2Math_36.b2Vec2.s_t0));
                    }
                    if (hasVertex3) {
                        const edge2 = b2Math_36.b2Vec2.SubVV(this.m_v3, this.m_v2, b2EPCollider.s_edge2);
                        edge2.Normalize();
                        this.m_normal2.Set(edge2.y, -edge2.x);
                        convex2 = b2Math_36.b2Vec2.CrossVV(edge1, edge2) > 0;
                        offset2 = b2Math_36.b2Vec2.DotVV(this.m_normal2, b2Math_36.b2Vec2.SubVV(this.m_centroidB, this.m_v2, b2Math_36.b2Vec2.s_t0));
                    }
                    if (hasVertex0 && hasVertex3) {
                        if (convex1 && convex2) {
                            this.m_front = offset0 >= 0 || offset1 >= 0 || offset2 >= 0;
                            if (this.m_front) {
                                this.m_normal.Copy(this.m_normal1);
                                this.m_lowerLimit.Copy(this.m_normal0);
                                this.m_upperLimit.Copy(this.m_normal2);
                            }
                            else {
                                this.m_normal.Copy(this.m_normal1).SelfNeg();
                                this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
                                this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
                            }
                        }
                        else if (convex1) {
                            this.m_front = offset0 >= 0 || (offset1 >= 0 && offset2 >= 0);
                            if (this.m_front) {
                                this.m_normal.Copy(this.m_normal1);
                                this.m_lowerLimit.Copy(this.m_normal0);
                                this.m_upperLimit.Copy(this.m_normal1);
                            }
                            else {
                                this.m_normal.Copy(this.m_normal1).SelfNeg();
                                this.m_lowerLimit.Copy(this.m_normal2).SelfNeg();
                                this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
                            }
                        }
                        else if (convex2) {
                            this.m_front = offset2 >= 0 || (offset0 >= 0 && offset1 >= 0);
                            if (this.m_front) {
                                this.m_normal.Copy(this.m_normal1);
                                this.m_lowerLimit.Copy(this.m_normal1);
                                this.m_upperLimit.Copy(this.m_normal2);
                            }
                            else {
                                this.m_normal.Copy(this.m_normal1).SelfNeg();
                                this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
                                this.m_upperLimit.Copy(this.m_normal0).SelfNeg();
                            }
                        }
                        else {
                            this.m_front = offset0 >= 0 && offset1 >= 0 && offset2 >= 0;
                            if (this.m_front) {
                                this.m_normal.Copy(this.m_normal1);
                                this.m_lowerLimit.Copy(this.m_normal1);
                                this.m_upperLimit.Copy(this.m_normal1);
                            }
                            else {
                                this.m_normal.Copy(this.m_normal1).SelfNeg();
                                this.m_lowerLimit.Copy(this.m_normal2).SelfNeg();
                                this.m_upperLimit.Copy(this.m_normal0).SelfNeg();
                            }
                        }
                    }
                    else if (hasVertex0) {
                        if (convex1) {
                            this.m_front = offset0 >= 0 || offset1 >= 0;
                            if (this.m_front) {
                                this.m_normal.Copy(this.m_normal1);
                                this.m_lowerLimit.Copy(this.m_normal0);
                                this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
                            }
                            else {
                                this.m_normal.Copy(this.m_normal1).SelfNeg();
                                this.m_lowerLimit.Copy(this.m_normal1);
                                this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
                            }
                        }
                        else {
                            this.m_front = offset0 >= 0 && offset1 >= 0;
                            if (this.m_front) {
                                this.m_normal.Copy(this.m_normal1);
                                this.m_lowerLimit.Copy(this.m_normal1);
                                this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
                            }
                            else {
                                this.m_normal.Copy(this.m_normal1).SelfNeg();
                                this.m_lowerLimit.Copy(this.m_normal1);
                                this.m_upperLimit.Copy(this.m_normal0).SelfNeg();
                            }
                        }
                    }
                    else if (hasVertex3) {
                        if (convex2) {
                            this.m_front = offset1 >= 0 || offset2 >= 0;
                            if (this.m_front) {
                                this.m_normal.Copy(this.m_normal1);
                                this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
                                this.m_upperLimit.Copy(this.m_normal2);
                            }
                            else {
                                this.m_normal.Copy(this.m_normal1).SelfNeg();
                                this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
                                this.m_upperLimit.Copy(this.m_normal1);
                            }
                        }
                        else {
                            this.m_front = offset1 >= 0 && offset2 >= 0;
                            if (this.m_front) {
                                this.m_normal.Copy(this.m_normal1);
                                this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
                                this.m_upperLimit.Copy(this.m_normal1);
                            }
                            else {
                                this.m_normal.Copy(this.m_normal1).SelfNeg();
                                this.m_lowerLimit.Copy(this.m_normal2).SelfNeg();
                                this.m_upperLimit.Copy(this.m_normal1);
                            }
                        }
                    }
                    else {
                        this.m_front = offset1 >= 0;
                        if (this.m_front) {
                            this.m_normal.Copy(this.m_normal1);
                            this.m_lowerLimit.Copy(this.m_normal1).SelfNeg();
                            this.m_upperLimit.Copy(this.m_normal1).SelfNeg();
                        }
                        else {
                            this.m_normal.Copy(this.m_normal1).SelfNeg();
                            this.m_lowerLimit.Copy(this.m_normal1);
                            this.m_upperLimit.Copy(this.m_normal1);
                        }
                    }
                    this.m_polygonB.count = polygonB.m_count;
                    for (let i = 0; i < polygonB.m_count; ++i) {
                        b2Math_36.b2Transform.MulXV(this.m_xf, polygonB.m_vertices[i], this.m_polygonB.vertices[i]);
                        b2Math_36.b2Rot.MulRV(this.m_xf.q, polygonB.m_normals[i], this.m_polygonB.normals[i]);
                    }
                    this.m_radius = 2 * b2Settings_43.b2_polygonRadius;
                    manifold.pointCount = 0;
                    const edgeAxis = this.ComputeEdgeSeparation(b2EPCollider.s_edgeAxis);
                    if (edgeAxis.type === 0) {
                        return;
                    }
                    if (edgeAxis.separation > this.m_radius) {
                        return;
                    }
                    const polygonAxis = this.ComputePolygonSeparation(b2EPCollider.s_polygonAxis);
                    if (polygonAxis.type !== 0 && polygonAxis.separation > this.m_radius) {
                        return;
                    }
                    const k_relativeTol = 0.98;
                    const k_absoluteTol = 0.001;
                    let primaryAxis;
                    if (polygonAxis.type === 0) {
                        primaryAxis = edgeAxis;
                    }
                    else if (polygonAxis.separation > k_relativeTol * edgeAxis.separation + k_absoluteTol) {
                        primaryAxis = polygonAxis;
                    }
                    else {
                        primaryAxis = edgeAxis;
                    }
                    const ie = b2EPCollider.s_ie;
                    const rf = b2EPCollider.s_rf;
                    if (primaryAxis.type === 1) {
                        manifold.type = b2Collision_13.b2ManifoldType.e_faceA;
                        let bestIndex = 0;
                        let bestValue = b2Math_36.b2Vec2.DotVV(this.m_normal, this.m_polygonB.normals[0]);
                        for (let i = 1; i < this.m_polygonB.count; ++i) {
                            const value = b2Math_36.b2Vec2.DotVV(this.m_normal, this.m_polygonB.normals[i]);
                            if (value < bestValue) {
                                bestValue = value;
                                bestIndex = i;
                            }
                        }
                        const i1 = bestIndex;
                        const i2 = (i1 + 1) % this.m_polygonB.count;
                        const ie0 = ie[0];
                        ie0.v.Copy(this.m_polygonB.vertices[i1]);
                        ie0.id.cf.indexA = 0;
                        ie0.id.cf.indexB = i1;
                        ie0.id.cf.typeA = b2Collision_12.b2ContactFeatureType.e_face;
                        ie0.id.cf.typeB = b2Collision_12.b2ContactFeatureType.e_vertex;
                        const ie1 = ie[1];
                        ie1.v.Copy(this.m_polygonB.vertices[i2]);
                        ie1.id.cf.indexA = 0;
                        ie1.id.cf.indexB = i2;
                        ie1.id.cf.typeA = b2Collision_12.b2ContactFeatureType.e_face;
                        ie1.id.cf.typeB = b2Collision_12.b2ContactFeatureType.e_vertex;
                        if (this.m_front) {
                            rf.i1 = 0;
                            rf.i2 = 1;
                            rf.v1.Copy(this.m_v1);
                            rf.v2.Copy(this.m_v2);
                            rf.normal.Copy(this.m_normal1);
                        }
                        else {
                            rf.i1 = 1;
                            rf.i2 = 0;
                            rf.v1.Copy(this.m_v2);
                            rf.v2.Copy(this.m_v1);
                            rf.normal.Copy(this.m_normal1).SelfNeg();
                        }
                    }
                    else {
                        manifold.type = b2Collision_13.b2ManifoldType.e_faceB;
                        const ie0 = ie[0];
                        ie0.v.Copy(this.m_v1);
                        ie0.id.cf.indexA = 0;
                        ie0.id.cf.indexB = primaryAxis.index;
                        ie0.id.cf.typeA = b2Collision_12.b2ContactFeatureType.e_vertex;
                        ie0.id.cf.typeB = b2Collision_12.b2ContactFeatureType.e_face;
                        const ie1 = ie[1];
                        ie1.v.Copy(this.m_v2);
                        ie1.id.cf.indexA = 0;
                        ie1.id.cf.indexB = primaryAxis.index;
                        ie1.id.cf.typeA = b2Collision_12.b2ContactFeatureType.e_vertex;
                        ie1.id.cf.typeB = b2Collision_12.b2ContactFeatureType.e_face;
                        rf.i1 = primaryAxis.index;
                        rf.i2 = (rf.i1 + 1) % this.m_polygonB.count;
                        rf.v1.Copy(this.m_polygonB.vertices[rf.i1]);
                        rf.v2.Copy(this.m_polygonB.vertices[rf.i2]);
                        rf.normal.Copy(this.m_polygonB.normals[rf.i1]);
                    }
                    rf.sideNormal1.Set(rf.normal.y, -rf.normal.x);
                    rf.sideNormal2.Copy(rf.sideNormal1).SelfNeg();
                    rf.sideOffset1 = b2Math_36.b2Vec2.DotVV(rf.sideNormal1, rf.v1);
                    rf.sideOffset2 = b2Math_36.b2Vec2.DotVV(rf.sideNormal2, rf.v2);
                    const clipPoints1 = b2EPCollider.s_clipPoints1;
                    const clipPoints2 = b2EPCollider.s_clipPoints2;
                    let np = 0;
                    np = b2Collision_13.b2ClipSegmentToLine(clipPoints1, ie, rf.sideNormal1, rf.sideOffset1, rf.i1);
                    if (np < b2Settings_43.b2_maxManifoldPoints) {
                        return;
                    }
                    np = b2Collision_13.b2ClipSegmentToLine(clipPoints2, clipPoints1, rf.sideNormal2, rf.sideOffset2, rf.i2);
                    if (np < b2Settings_43.b2_maxManifoldPoints) {
                        return;
                    }
                    if (primaryAxis.type === 1) {
                        manifold.localNormal.Copy(rf.normal);
                        manifold.localPoint.Copy(rf.v1);
                    }
                    else {
                        manifold.localNormal.Copy(polygonB.m_normals[rf.i1]);
                        manifold.localPoint.Copy(polygonB.m_vertices[rf.i1]);
                    }
                    let pointCount = 0;
                    for (let i = 0; i < b2Settings_43.b2_maxManifoldPoints; ++i) {
                        let separation;
                        separation = b2Math_36.b2Vec2.DotVV(rf.normal, b2Math_36.b2Vec2.SubVV(clipPoints2[i].v, rf.v1, b2Math_36.b2Vec2.s_t0));
                        if (separation <= this.m_radius) {
                            const cp = manifold.points[pointCount];
                            if (primaryAxis.type === 1) {
                                b2Math_36.b2Transform.MulTXV(this.m_xf, clipPoints2[i].v, cp.localPoint);
                                cp.id = clipPoints2[i].id;
                            }
                            else {
                                cp.localPoint.Copy(clipPoints2[i].v);
                                cp.id.cf.typeA = clipPoints2[i].id.cf.typeB;
                                cp.id.cf.typeB = clipPoints2[i].id.cf.typeA;
                                cp.id.cf.indexA = clipPoints2[i].id.cf.indexB;
                                cp.id.cf.indexB = clipPoints2[i].id.cf.indexA;
                            }
                            ++pointCount;
                        }
                    }
                    manifold.pointCount = pointCount;
                }
                ComputeEdgeSeparation(out) {
                    const axis = out;
                    axis.type = 1;
                    axis.index = this.m_front ? 0 : 1;
                    axis.separation = b2Settings_43.b2_maxFloat;
                    for (let i = 0; i < this.m_polygonB.count; ++i) {
                        const s = b2Math_36.b2Vec2.DotVV(this.m_normal, b2Math_36.b2Vec2.SubVV(this.m_polygonB.vertices[i], this.m_v1, b2Math_36.b2Vec2.s_t0));
                        if (s < axis.separation) {
                            axis.separation = s;
                        }
                    }
                    return axis;
                }
                ComputePolygonSeparation(out) {
                    const axis = out;
                    axis.type = 0;
                    axis.index = -1;
                    axis.separation = -b2Settings_43.b2_maxFloat;
                    const perp = b2EPCollider.s_perp.Set(-this.m_normal.y, this.m_normal.x);
                    for (let i = 0; i < this.m_polygonB.count; ++i) {
                        const n = b2Math_36.b2Vec2.NegV(this.m_polygonB.normals[i], b2EPCollider.s_n);
                        const s1 = b2Math_36.b2Vec2.DotVV(n, b2Math_36.b2Vec2.SubVV(this.m_polygonB.vertices[i], this.m_v1, b2Math_36.b2Vec2.s_t0));
                        const s2 = b2Math_36.b2Vec2.DotVV(n, b2Math_36.b2Vec2.SubVV(this.m_polygonB.vertices[i], this.m_v2, b2Math_36.b2Vec2.s_t0));
                        const s = b2Math_36.b2Min(s1, s2);
                        if (s > this.m_radius) {
                            axis.type = 2;
                            axis.index = i;
                            axis.separation = s;
                            return axis;
                        }
                        if (b2Math_36.b2Vec2.DotVV(n, perp) >= 0) {
                            if (b2Math_36.b2Vec2.DotVV(b2Math_36.b2Vec2.SubVV(n, this.m_upperLimit, b2Math_36.b2Vec2.s_t0), this.m_normal) < -b2Settings_43.b2_angularSlop) {
                                continue;
                            }
                        }
                        else {
                            if (b2Math_36.b2Vec2.DotVV(b2Math_36.b2Vec2.SubVV(n, this.m_lowerLimit, b2Math_36.b2Vec2.s_t0), this.m_normal) < -b2Settings_43.b2_angularSlop) {
                                continue;
                            }
                        }
                        if (s > axis.separation) {
                            axis.type = 2;
                            axis.index = i;
                            axis.separation = s;
                        }
                    }
                    return axis;
                }
            };
            b2EPCollider.s_edge1 = new b2Math_36.b2Vec2();
            b2EPCollider.s_edge0 = new b2Math_36.b2Vec2();
            b2EPCollider.s_edge2 = new b2Math_36.b2Vec2();
            b2EPCollider.s_ie = b2Collision_13.b2ClipVertex.MakeArray(2);
            b2EPCollider.s_rf = new b2ReferenceFace();
            b2EPCollider.s_clipPoints1 = b2Collision_13.b2ClipVertex.MakeArray(2);
            b2EPCollider.s_clipPoints2 = b2Collision_13.b2ClipVertex.MakeArray(2);
            b2EPCollider.s_edgeAxis = new b2EPAxis();
            b2EPCollider.s_polygonAxis = new b2EPAxis();
            b2EPCollider.s_n = new b2Math_36.b2Vec2();
            b2EPCollider.s_perp = new b2Math_36.b2Vec2();
            b2CollideEdgeAndPolygon_s_collider = new b2EPCollider();
        }
    };
});
System.register("Dynamics/Contacts/b2EdgeAndCircleContact", ["Collision/b2CollideEdge", "Dynamics/Contacts/b2Contact"], function (exports_51, context_51) {
    "use strict";
    var __moduleName = context_51 && context_51.id;
    var b2CollideEdge_1, b2Contact_4, b2EdgeAndCircleContact;
    return {
        setters: [
            function (b2CollideEdge_1_1) {
                b2CollideEdge_1 = b2CollideEdge_1_1;
            },
            function (b2Contact_4_1) {
                b2Contact_4 = b2Contact_4_1;
            }
        ],
        execute: function () {
            b2EdgeAndCircleContact = class b2EdgeAndCircleContact extends b2Contact_4.b2Contact {
                constructor() {
                    super();
                }
                static Create(allocator) {
                    return new b2EdgeAndCircleContact();
                }
                static Destroy(contact, allocator) {
                }
                Reset(fixtureA, indexA, fixtureB, indexB) {
                    super.Reset(fixtureA, indexA, fixtureB, indexB);
                }
                Evaluate(manifold, xfA, xfB) {
                    const shapeA = this.m_fixtureA.GetShape();
                    const shapeB = this.m_fixtureB.GetShape();
                    b2CollideEdge_1.b2CollideEdgeAndCircle(manifold, shapeA, xfA, shapeB, xfB);
                }
            };
            exports_51("b2EdgeAndCircleContact", b2EdgeAndCircleContact);
        }
    };
});
System.register("Dynamics/Contacts/b2EdgeAndPolygonContact", ["Collision/b2CollideEdge", "Dynamics/Contacts/b2Contact"], function (exports_52, context_52) {
    "use strict";
    var __moduleName = context_52 && context_52.id;
    var b2CollideEdge_2, b2Contact_5, b2EdgeAndPolygonContact;
    return {
        setters: [
            function (b2CollideEdge_2_1) {
                b2CollideEdge_2 = b2CollideEdge_2_1;
            },
            function (b2Contact_5_1) {
                b2Contact_5 = b2Contact_5_1;
            }
        ],
        execute: function () {
            b2EdgeAndPolygonContact = class b2EdgeAndPolygonContact extends b2Contact_5.b2Contact {
                constructor() {
                    super();
                }
                static Create(allocator) {
                    return new b2EdgeAndPolygonContact();
                }
                static Destroy(contact, allocator) {
                }
                Reset(fixtureA, indexA, fixtureB, indexB) {
                    super.Reset(fixtureA, indexA, fixtureB, indexB);
                }
                Evaluate(manifold, xfA, xfB) {
                    const shapeA = this.m_fixtureA.GetShape();
                    const shapeB = this.m_fixtureB.GetShape();
                    b2CollideEdge_2.b2CollideEdgeAndPolygon(manifold, shapeA, xfA, shapeB, xfB);
                }
            };
            exports_52("b2EdgeAndPolygonContact", b2EdgeAndPolygonContact);
        }
    };
});
System.register("Dynamics/Contacts/b2ChainAndCircleContact", ["Collision/b2CollideEdge", "Collision/Shapes/b2EdgeShape", "Dynamics/Contacts/b2Contact"], function (exports_53, context_53) {
    "use strict";
    var __moduleName = context_53 && context_53.id;
    var b2CollideEdge_3, b2EdgeShape_3, b2Contact_6, b2ChainAndCircleContact;
    return {
        setters: [
            function (b2CollideEdge_3_1) {
                b2CollideEdge_3 = b2CollideEdge_3_1;
            },
            function (b2EdgeShape_3_1) {
                b2EdgeShape_3 = b2EdgeShape_3_1;
            },
            function (b2Contact_6_1) {
                b2Contact_6 = b2Contact_6_1;
            }
        ],
        execute: function () {
            b2ChainAndCircleContact = class b2ChainAndCircleContact extends b2Contact_6.b2Contact {
                constructor() {
                    super();
                }
                static Create(allocator) {
                    return new b2ChainAndCircleContact();
                }
                static Destroy(contact, allocator) {
                }
                Reset(fixtureA, indexA, fixtureB, indexB) {
                    super.Reset(fixtureA, indexA, fixtureB, indexB);
                }
                Evaluate(manifold, xfA, xfB) {
                    const shapeA = this.m_fixtureA.GetShape();
                    const shapeB = this.m_fixtureB.GetShape();
                    const chain = shapeA;
                    const edge = b2ChainAndCircleContact.Evaluate_s_edge;
                    chain.GetChildEdge(edge, this.m_indexA);
                    b2CollideEdge_3.b2CollideEdgeAndCircle(manifold, edge, xfA, shapeB, xfB);
                }
            };
            b2ChainAndCircleContact.Evaluate_s_edge = new b2EdgeShape_3.b2EdgeShape();
            exports_53("b2ChainAndCircleContact", b2ChainAndCircleContact);
        }
    };
});
System.register("Dynamics/Contacts/b2ChainAndPolygonContact", ["Collision/b2CollideEdge", "Collision/Shapes/b2EdgeShape", "Dynamics/Contacts/b2Contact"], function (exports_54, context_54) {
    "use strict";
    var __moduleName = context_54 && context_54.id;
    var b2CollideEdge_4, b2EdgeShape_4, b2Contact_7, b2ChainAndPolygonContact;
    return {
        setters: [
            function (b2CollideEdge_4_1) {
                b2CollideEdge_4 = b2CollideEdge_4_1;
            },
            function (b2EdgeShape_4_1) {
                b2EdgeShape_4 = b2EdgeShape_4_1;
            },
            function (b2Contact_7_1) {
                b2Contact_7 = b2Contact_7_1;
            }
        ],
        execute: function () {
            b2ChainAndPolygonContact = class b2ChainAndPolygonContact extends b2Contact_7.b2Contact {
                constructor() {
                    super();
                }
                static Create(allocator) {
                    return new b2ChainAndPolygonContact();
                }
                static Destroy(contact, allocator) {
                }
                Reset(fixtureA, indexA, fixtureB, indexB) {
                    super.Reset(fixtureA, indexA, fixtureB, indexB);
                }
                Evaluate(manifold, xfA, xfB) {
                    const shapeA = this.m_fixtureA.GetShape();
                    const shapeB = this.m_fixtureB.GetShape();
                    const chain = shapeA;
                    const edge = b2ChainAndPolygonContact.Evaluate_s_edge;
                    chain.GetChildEdge(edge, this.m_indexA);
                    b2CollideEdge_4.b2CollideEdgeAndPolygon(manifold, edge, xfA, shapeB, xfB);
                }
            };
            b2ChainAndPolygonContact.Evaluate_s_edge = new b2EdgeShape_4.b2EdgeShape();
            exports_54("b2ChainAndPolygonContact", b2ChainAndPolygonContact);
        }
    };
});
System.register("Dynamics/Contacts/b2ContactFactory", ["Common/b2Settings", "Collision/Shapes/b2Shape", "Dynamics/Contacts/b2CircleContact", "Dynamics/Contacts/b2PolygonContact", "Dynamics/Contacts/b2PolygonAndCircleContact", "Dynamics/Contacts/b2EdgeAndCircleContact", "Dynamics/Contacts/b2EdgeAndPolygonContact", "Dynamics/Contacts/b2ChainAndCircleContact", "Dynamics/Contacts/b2ChainAndPolygonContact"], function (exports_55, context_55) {
    "use strict";
    var __moduleName = context_55 && context_55.id;
    var b2Settings_44, b2Shape_10, b2CircleContact_1, b2PolygonContact_1, b2PolygonAndCircleContact_1, b2EdgeAndCircleContact_1, b2EdgeAndPolygonContact_1, b2ChainAndCircleContact_1, b2ChainAndPolygonContact_1, b2ContactRegister, b2ContactFactory;
    return {
        setters: [
            function (b2Settings_44_1) {
                b2Settings_44 = b2Settings_44_1;
            },
            function (b2Shape_10_1) {
                b2Shape_10 = b2Shape_10_1;
            },
            function (b2CircleContact_1_1) {
                b2CircleContact_1 = b2CircleContact_1_1;
            },
            function (b2PolygonContact_1_1) {
                b2PolygonContact_1 = b2PolygonContact_1_1;
            },
            function (b2PolygonAndCircleContact_1_1) {
                b2PolygonAndCircleContact_1 = b2PolygonAndCircleContact_1_1;
            },
            function (b2EdgeAndCircleContact_1_1) {
                b2EdgeAndCircleContact_1 = b2EdgeAndCircleContact_1_1;
            },
            function (b2EdgeAndPolygonContact_1_1) {
                b2EdgeAndPolygonContact_1 = b2EdgeAndPolygonContact_1_1;
            },
            function (b2ChainAndCircleContact_1_1) {
                b2ChainAndCircleContact_1 = b2ChainAndCircleContact_1_1;
            },
            function (b2ChainAndPolygonContact_1_1) {
                b2ChainAndPolygonContact_1 = b2ChainAndPolygonContact_1_1;
            }
        ],
        execute: function () {
            b2ContactRegister = class b2ContactRegister {
                constructor() {
                    this.createFcn = null;
                    this.destroyFcn = null;
                    this.primary = false;
                }
            };
            exports_55("b2ContactRegister", b2ContactRegister);
            b2ContactFactory = class b2ContactFactory {
                constructor(allocator) {
                    this.m_allocator = null;
                    this.m_allocator = allocator;
                    this.InitializeRegisters();
                }
                AddType(createFcn, destroyFcn, type1, type2) {
                    const pool = b2Settings_44.b2MakeArray(256, (i) => createFcn(this.m_allocator));
                    function poolCreateFcn(allocator) {
                        return pool.pop() || createFcn(allocator);
                    }
                    function poolDestroyFcn(contact, allocator) {
                        pool.push(contact);
                    }
                    this.m_registers[type1][type2].createFcn = poolCreateFcn;
                    this.m_registers[type1][type2].destroyFcn = poolDestroyFcn;
                    this.m_registers[type1][type2].primary = true;
                    if (type1 !== type2) {
                        this.m_registers[type2][type1].createFcn = poolCreateFcn;
                        this.m_registers[type2][type1].destroyFcn = poolDestroyFcn;
                        this.m_registers[type2][type1].primary = false;
                    }
                }
                InitializeRegisters() {
                    this.m_registers = [];
                    for (let i = 0; i < b2Shape_10.b2ShapeType.e_shapeTypeCount; i++) {
                        this.m_registers[i] = [];
                        for (let j = 0; j < b2Shape_10.b2ShapeType.e_shapeTypeCount; j++) {
                            this.m_registers[i][j] = new b2ContactRegister();
                        }
                    }
                    this.AddType(b2CircleContact_1.b2CircleContact.Create, b2CircleContact_1.b2CircleContact.Destroy, b2Shape_10.b2ShapeType.e_circleShape, b2Shape_10.b2ShapeType.e_circleShape);
                    this.AddType(b2PolygonAndCircleContact_1.b2PolygonAndCircleContact.Create, b2PolygonAndCircleContact_1.b2PolygonAndCircleContact.Destroy, b2Shape_10.b2ShapeType.e_polygonShape, b2Shape_10.b2ShapeType.e_circleShape);
                    this.AddType(b2PolygonContact_1.b2PolygonContact.Create, b2PolygonContact_1.b2PolygonContact.Destroy, b2Shape_10.b2ShapeType.e_polygonShape, b2Shape_10.b2ShapeType.e_polygonShape);
                    this.AddType(b2EdgeAndCircleContact_1.b2EdgeAndCircleContact.Create, b2EdgeAndCircleContact_1.b2EdgeAndCircleContact.Destroy, b2Shape_10.b2ShapeType.e_edgeShape, b2Shape_10.b2ShapeType.e_circleShape);
                    this.AddType(b2EdgeAndPolygonContact_1.b2EdgeAndPolygonContact.Create, b2EdgeAndPolygonContact_1.b2EdgeAndPolygonContact.Destroy, b2Shape_10.b2ShapeType.e_edgeShape, b2Shape_10.b2ShapeType.e_polygonShape);
                    this.AddType(b2ChainAndCircleContact_1.b2ChainAndCircleContact.Create, b2ChainAndCircleContact_1.b2ChainAndCircleContact.Destroy, b2Shape_10.b2ShapeType.e_chainShape, b2Shape_10.b2ShapeType.e_circleShape);
                    this.AddType(b2ChainAndPolygonContact_1.b2ChainAndPolygonContact.Create, b2ChainAndPolygonContact_1.b2ChainAndPolygonContact.Destroy, b2Shape_10.b2ShapeType.e_chainShape, b2Shape_10.b2ShapeType.e_polygonShape);
                }
                Create(fixtureA, indexA, fixtureB, indexB) {
                    const type1 = fixtureA.GetType();
                    const type2 = fixtureB.GetType();
                    const reg = this.m_registers[type1][type2];
                    if (reg.createFcn) {
                        const c = reg.createFcn(this.m_allocator);
                        if (reg.primary) {
                            c.Reset(fixtureA, indexA, fixtureB, indexB);
                        }
                        else {
                            c.Reset(fixtureB, indexB, fixtureA, indexA);
                        }
                        return c;
                    }
                    else {
                        return null;
                    }
                }
                Destroy(contact) {
                    const fixtureA = contact.m_fixtureA;
                    const fixtureB = contact.m_fixtureB;
                    if (contact.m_manifold.pointCount > 0 &&
                        !fixtureA.IsSensor() &&
                        !fixtureB.IsSensor()) {
                        fixtureA.GetBody().SetAwake(true);
                        fixtureB.GetBody().SetAwake(true);
                    }
                    const typeA = fixtureA.GetType();
                    const typeB = fixtureB.GetType();
                    const reg = this.m_registers[typeA][typeB];
                    if (reg.destroyFcn) {
                        reg.destroyFcn(contact, this.m_allocator);
                    }
                }
            };
            exports_55("b2ContactFactory", b2ContactFactory);
        }
    };
});
System.register("Dynamics/b2ContactManager", ["Collision/b2BroadPhase", "Dynamics/Contacts/b2ContactFactory", "Dynamics/b2Body", "Dynamics/b2WorldCallbacks"], function (exports_56, context_56) {
    "use strict";
    var __moduleName = context_56 && context_56.id;
    var b2BroadPhase_1, b2ContactFactory_1, b2Body_4, b2WorldCallbacks_3, b2ContactManager;
    return {
        setters: [
            function (b2BroadPhase_1_1) {
                b2BroadPhase_1 = b2BroadPhase_1_1;
            },
            function (b2ContactFactory_1_1) {
                b2ContactFactory_1 = b2ContactFactory_1_1;
            },
            function (b2Body_4_1) {
                b2Body_4 = b2Body_4_1;
            },
            function (b2WorldCallbacks_3_1) {
                b2WorldCallbacks_3 = b2WorldCallbacks_3_1;
            }
        ],
        execute: function () {
            b2ContactManager = class b2ContactManager {
                constructor() {
                    this.m_broadPhase = new b2BroadPhase_1.b2BroadPhase();
                    this.m_contactList = new Set();
                    this.m_contactFilter = b2WorldCallbacks_3.b2ContactFilter.b2_defaultFilter;
                    this.m_contactListener = b2WorldCallbacks_3.b2ContactListener.b2_defaultListener;
                    this.m_allocator = null;
                    this.m_contactFactory = new b2ContactFactory_1.b2ContactFactory(this.m_allocator);
                }
                AddPair(proxyA, proxyB) {
                    let fixtureA = proxyA.fixture;
                    let fixtureB = proxyB.fixture;
                    let indexA = proxyA.childIndex;
                    let indexB = proxyB.childIndex;
                    let bodyA = fixtureA.GetBody();
                    let bodyB = fixtureB.GetBody();
                    if (bodyA === bodyB) {
                        return;
                    }
                    for (const contact of bodyB.GetContactList()) {
                        if (contact.GetOtherBody(bodyB) === bodyA) {
                            const fA = contact.GetFixtureA();
                            const fB = contact.GetFixtureB();
                            const iA = contact.GetChildIndexA();
                            const iB = contact.GetChildIndexB();
                            if (fA === fixtureA && fB === fixtureB && iA === indexA && iB === indexB) {
                                return;
                            }
                            if (fA === fixtureB && fB === fixtureA && iA === indexB && iB === indexA) {
                                return;
                            }
                        }
                    }
                    if (this.m_contactFilter && !this.m_contactFilter.ShouldCollide(fixtureA, fixtureB)) {
                        return;
                    }
                    const c = this.m_contactFactory.Create(fixtureA, indexA, fixtureB, indexB);
                    if (c === null) {
                        return;
                    }
                    fixtureA = c.GetFixtureA();
                    fixtureB = c.GetFixtureB();
                    indexA = c.GetChildIndexA();
                    indexB = c.GetChildIndexB();
                    bodyA = fixtureA.m_body;
                    bodyB = fixtureB.m_body;
                    this.m_contactList.add(c);
                    bodyA.GetContactList().add(c);
                    bodyB.GetContactList().add(c);
                    if (!fixtureA.IsSensor() && !fixtureB.IsSensor()) {
                        bodyA.SetAwake(true);
                        bodyB.SetAwake(true);
                    }
                }
                FindNewContacts() {
                    this.m_broadPhase.UpdatePairs(this);
                }
                Destroy(c) {
                    const fixtureA = c.GetFixtureA();
                    const fixtureB = c.GetFixtureB();
                    const bodyA = fixtureA.GetBody();
                    const bodyB = fixtureB.GetBody();
                    if (this.m_contactListener && c.IsTouching()) {
                        this.m_contactListener.EndContact(c);
                    }
                    this.m_contactList.delete(c);
                    bodyA.GetContactList().delete(c);
                    bodyB.GetContactList().delete(c);
                    this.m_contactFactory.Destroy(c);
                }
                Collide() {
                    for (const c of this.m_contactList) {
                        const fixtureA = c.GetFixtureA();
                        const fixtureB = c.GetFixtureB();
                        const indexA = c.GetChildIndexA();
                        const indexB = c.GetChildIndexB();
                        const bodyA = fixtureA.GetBody();
                        const bodyB = fixtureB.GetBody();
                        if (c.m_filterFlag) {
                            if (this.m_contactFilter && !this.m_contactFilter.ShouldCollide(fixtureA, fixtureB)) {
                                const cNuke = c;
                                this.Destroy(cNuke);
                                continue;
                            }
                            c.m_filterFlag = false;
                        }
                        const activeA = bodyA.IsAwake() && bodyA.m_type !== b2Body_4.b2BodyType.b2_staticBody;
                        const activeB = bodyB.IsAwake() && bodyB.m_type !== b2Body_4.b2BodyType.b2_staticBody;
                        if (!activeA && !activeB) {
                            continue;
                        }
                        const proxyA = fixtureA.m_proxies[indexA].treeNode;
                        const proxyB = fixtureB.m_proxies[indexB].treeNode;
                        const overlap = this.m_broadPhase.TestOverlap(proxyA, proxyB);
                        if (!overlap) {
                            const cNuke = c;
                            this.Destroy(cNuke);
                            continue;
                        }
                        c.Update(this.m_contactListener);
                    }
                }
            };
            exports_56("b2ContactManager", b2ContactManager);
        }
    };
});
System.register("Collision/b2BroadPhase", ["Collision/b2Collision", "Collision/b2DynamicTree"], function (exports_57, context_57) {
    "use strict";
    var __moduleName = context_57 && context_57.id;
    function b2PairLessThan(pair1, pair2) {
        if (pair1.proxyA.m_id === pair2.proxyA.m_id) {
            return pair1.proxyB.m_id - pair2.proxyB.m_id;
        }
        return pair1.proxyA.m_id - pair2.proxyA.m_id;
    }
    exports_57("b2PairLessThan", b2PairLessThan);
    var b2Collision_14, b2DynamicTree_1, b2Pair, b2BroadPhase;
    return {
        setters: [
            function (b2Collision_14_1) {
                b2Collision_14 = b2Collision_14_1;
            },
            function (b2DynamicTree_1_1) {
                b2DynamicTree_1 = b2DynamicTree_1_1;
            }
        ],
        execute: function () {
            b2Pair = class b2Pair {
                constructor(proxyA, proxyB) {
                    this.proxyA = proxyA;
                    this.proxyB = proxyB;
                }
            };
            exports_57("b2Pair", b2Pair);
            b2BroadPhase = class b2BroadPhase {
                constructor() {
                    this.m_tree = new b2DynamicTree_1.b2DynamicTree();
                    this.m_proxyCount = 0;
                    this.m_moveCount = 0;
                    this.m_moveBuffer = [];
                    this.m_pairCount = 0;
                    this.m_pairBuffer = [];
                }
                CreateProxy(aabb, userData) {
                    const proxy = this.m_tree.CreateProxy(aabb, userData);
                    ++this.m_proxyCount;
                    this.BufferMove(proxy);
                    return proxy;
                }
                DestroyProxy(proxy) {
                    this.UnBufferMove(proxy);
                    --this.m_proxyCount;
                    this.m_tree.DestroyProxy(proxy);
                }
                MoveProxy(proxy, aabb, displacement) {
                    const buffer = this.m_tree.MoveProxy(proxy, aabb, displacement);
                    if (buffer) {
                        this.BufferMove(proxy);
                    }
                }
                TouchProxy(proxy) {
                    this.BufferMove(proxy);
                }
                GetFatAABB(proxy) {
                    return this.m_tree.GetFatAABB(proxy);
                }
                GetUserData(proxy) {
                    return this.m_tree.GetUserData(proxy);
                }
                TestOverlap(proxyA, proxyB) {
                    const aabbA = this.m_tree.GetFatAABB(proxyA);
                    const aabbB = this.m_tree.GetFatAABB(proxyB);
                    return b2Collision_14.b2TestOverlapAABB(aabbA, aabbB);
                }
                GetProxyCount() {
                    return this.m_proxyCount;
                }
                UpdatePairs(contactManager) {
                    this.m_pairCount = 0;
                    for (let i = 0; i < this.m_moveCount; ++i) {
                        const queryProxy = this.m_moveBuffer[i];
                        if (queryProxy === null) {
                            continue;
                        }
                        const fatAABB = this.m_tree.GetFatAABB(queryProxy);
                        this.m_tree.Query(fatAABB, (proxy) => {
                            if (proxy.m_id === queryProxy.m_id) {
                                return true;
                            }
                            let proxyA;
                            let proxyB;
                            if (proxy.m_id < queryProxy.m_id) {
                                proxyA = proxy;
                                proxyB = queryProxy;
                            }
                            else {
                                proxyA = queryProxy;
                                proxyB = proxy;
                            }
                            if (this.m_pairCount === this.m_pairBuffer.length) {
                                this.m_pairBuffer[this.m_pairCount] = new b2Pair(proxyA, proxyB);
                            }
                            else {
                                const pair = this.m_pairBuffer[this.m_pairCount];
                                pair.proxyA = proxyA;
                                pair.proxyB = proxyB;
                            }
                            ++this.m_pairCount;
                            return true;
                        });
                    }
                    this.m_moveCount = 0;
                    this.m_pairBuffer.length = this.m_pairCount;
                    this.m_pairBuffer.sort(b2PairLessThan);
                    let i = 0;
                    while (i < this.m_pairCount) {
                        const primaryPair = this.m_pairBuffer[i];
                        const userDataA = this.m_tree.GetUserData(primaryPair.proxyA);
                        const userDataB = this.m_tree.GetUserData(primaryPair.proxyB);
                        contactManager.AddPair(userDataA, userDataB);
                        ++i;
                        while (i < this.m_pairCount) {
                            const pair = this.m_pairBuffer[i];
                            if (pair.proxyA.m_id !== primaryPair.proxyA.m_id || pair.proxyB.m_id !== primaryPair.proxyB.m_id) {
                                break;
                            }
                            ++i;
                        }
                    }
                }
                Query(aabb, callback) {
                    this.m_tree.Query(aabb, callback);
                }
                QueryPoint(point, callback) {
                    this.m_tree.QueryPoint(point, callback);
                }
                RayCast(input, callback) {
                    this.m_tree.RayCast(input, callback);
                }
                GetTreeHeight() {
                    return this.m_tree.GetHeight();
                }
                GetTreeBalance() {
                    return this.m_tree.GetMaxBalance();
                }
                GetTreeQuality() {
                    return this.m_tree.GetAreaRatio();
                }
                ShiftOrigin(newOrigin) {
                    this.m_tree.ShiftOrigin(newOrigin);
                }
                BufferMove(proxy) {
                    this.m_moveBuffer[this.m_moveCount] = proxy;
                    ++this.m_moveCount;
                }
                UnBufferMove(proxy) {
                    const i = this.m_moveBuffer.indexOf(proxy);
                    this.m_moveBuffer[i] = null;
                }
            };
            exports_57("b2BroadPhase", b2BroadPhase);
        }
    };
});
System.register("Controllers/b2BuoyancyController", ["Controllers/b2Controller", "Common/b2Math", "Common/b2Settings", "Common/b2Draw"], function (exports_58, context_58) {
    "use strict";
    var __moduleName = context_58 && context_58.id;
    var b2Controller_1, b2Math_37, b2Settings_45, b2Draw_5, b2BuoyancyController;
    return {
        setters: [
            function (b2Controller_1_1) {
                b2Controller_1 = b2Controller_1_1;
            },
            function (b2Math_37_1) {
                b2Math_37 = b2Math_37_1;
            },
            function (b2Settings_45_1) {
                b2Settings_45 = b2Settings_45_1;
            },
            function (b2Draw_5_1) {
                b2Draw_5 = b2Draw_5_1;
            }
        ],
        execute: function () {
            b2BuoyancyController = class b2BuoyancyController extends b2Controller_1.b2Controller {
                constructor() {
                    super(...arguments);
                    this.normal = new b2Math_37.b2Vec2(0, 1);
                    this.offset = 0;
                    this.density = 0;
                    this.velocity = new b2Math_37.b2Vec2(0, 0);
                    this.linearDrag = 0;
                    this.angularDrag = 0;
                    this.useDensity = false;
                    this.useWorldGravity = true;
                    this.gravity = new b2Math_37.b2Vec2(0, 0);
                }
                Step(step) {
                    if (this.m_bodyList.size === 0) {
                        return;
                    }
                    for (const body of this.m_bodyList) {
                        if (!body.IsAwake()) {
                            continue;
                        }
                        const areac = new b2Math_37.b2Vec2();
                        const massc = new b2Math_37.b2Vec2();
                        let area = 0;
                        let mass = 0;
                        for (const fixture of body.GetFixtureList()) {
                            const sc = new b2Math_37.b2Vec2();
                            const sarea = fixture.GetShape().ComputeSubmergedArea(this.normal, this.offset, body.GetTransform(), sc);
                            area += sarea;
                            areac.x += sarea * sc.x;
                            areac.y += sarea * sc.y;
                            let shapeDensity = 0;
                            if (this.useDensity) {
                                shapeDensity = fixture.GetDensity();
                            }
                            else {
                                shapeDensity = 1;
                            }
                            mass += sarea * shapeDensity;
                            massc.x += sarea * sc.x * shapeDensity;
                            massc.y += sarea * sc.y * shapeDensity;
                        }
                        areac.x /= area;
                        areac.y /= area;
                        massc.x /= mass;
                        massc.y /= mass;
                        if (area < b2Settings_45.b2_epsilon) {
                            continue;
                        }
                        const buoyancyForce = (this.useWorldGravity ? body.GetWorld().GetGravity() : this.gravity).Clone().SelfNeg();
                        buoyancyForce.SelfMul(this.density * area);
                        body.ApplyForce(buoyancyForce, massc);
                        const dragForce = body.GetLinearVelocityFromWorldPoint(areac, new b2Math_37.b2Vec2());
                        dragForce.SelfSub(this.velocity);
                        dragForce.SelfMul((-this.linearDrag * area));
                        body.ApplyForce(dragForce, areac);
                        body.ApplyTorque((-body.GetInertia() / body.GetMass() * area * body.GetAngularVelocity() * this.angularDrag));
                    }
                }
                Draw(debugDraw) {
                    const r = 100;
                    const p1 = new b2Math_37.b2Vec2();
                    const p2 = new b2Math_37.b2Vec2();
                    p1.x = this.normal.x * this.offset + this.normal.y * r;
                    p1.y = this.normal.y * this.offset - this.normal.x * r;
                    p2.x = this.normal.x * this.offset - this.normal.y * r;
                    p2.y = this.normal.y * this.offset + this.normal.x * r;
                    const color = new b2Draw_5.b2Color(0, 0, 0.8);
                    debugDraw.DrawSegment(p1, p2, color);
                }
            };
            exports_58("b2BuoyancyController", b2BuoyancyController);
        }
    };
});
System.register("Controllers/b2ConstantAccelController", ["Controllers/b2Controller", "Common/b2Math"], function (exports_59, context_59) {
    "use strict";
    var __moduleName = context_59 && context_59.id;
    var b2Controller_2, b2Math_38, b2ConstantAccelController;
    return {
        setters: [
            function (b2Controller_2_1) {
                b2Controller_2 = b2Controller_2_1;
            },
            function (b2Math_38_1) {
                b2Math_38 = b2Math_38_1;
            }
        ],
        execute: function () {
            b2ConstantAccelController = class b2ConstantAccelController extends b2Controller_2.b2Controller {
                constructor() {
                    super(...arguments);
                    this.A = new b2Math_38.b2Vec2(0, 0);
                }
                Step(step) {
                    const dtA = b2Math_38.b2Vec2.MulSV(step.dt, this.A, b2ConstantAccelController.Step_s_dtA);
                    for (const body of this.m_bodyList) {
                        if (!body.IsAwake()) {
                            continue;
                        }
                        body.SetLinearVelocity(b2Math_38.b2Vec2.AddVV(body.GetLinearVelocity(), dtA, b2Math_38.b2Vec2.s_t0));
                    }
                }
                Draw(draw) { }
            };
            b2ConstantAccelController.Step_s_dtA = new b2Math_38.b2Vec2();
            exports_59("b2ConstantAccelController", b2ConstantAccelController);
        }
    };
});
System.register("Controllers/b2ConstantForceController", ["Controllers/b2Controller", "Common/b2Math"], function (exports_60, context_60) {
    "use strict";
    var __moduleName = context_60 && context_60.id;
    var b2Controller_3, b2Math_39, b2ConstantForceController;
    return {
        setters: [
            function (b2Controller_3_1) {
                b2Controller_3 = b2Controller_3_1;
            },
            function (b2Math_39_1) {
                b2Math_39 = b2Math_39_1;
            }
        ],
        execute: function () {
            b2ConstantForceController = class b2ConstantForceController extends b2Controller_3.b2Controller {
                constructor() {
                    super(...arguments);
                    this.F = new b2Math_39.b2Vec2(0, 0);
                }
                Step(step) {
                    for (const body of this.m_bodyList) {
                        if (!body.IsAwake()) {
                            continue;
                        }
                        body.ApplyForce(this.F, body.GetWorldCenter());
                    }
                }
                Draw(draw) { }
            };
            exports_60("b2ConstantForceController", b2ConstantForceController);
        }
    };
});
System.register("Controllers/b2GravityController", ["Controllers/b2Controller", "Common/b2Settings", "Common/b2Math"], function (exports_61, context_61) {
    "use strict";
    var __moduleName = context_61 && context_61.id;
    var b2Controller_4, b2Settings_46, b2Math_40, b2GravityController;
    return {
        setters: [
            function (b2Controller_4_1) {
                b2Controller_4 = b2Controller_4_1;
            },
            function (b2Settings_46_1) {
                b2Settings_46 = b2Settings_46_1;
            },
            function (b2Math_40_1) {
                b2Math_40 = b2Math_40_1;
            }
        ],
        execute: function () {
            b2GravityController = class b2GravityController extends b2Controller_4.b2Controller {
                constructor() {
                    super(...arguments);
                    this.G = 1;
                    this.invSqr = true;
                }
                Step(step) {
                    if (this.invSqr) {
                        for (const body1 of this.m_bodyList) {
                            const p1 = body1.GetWorldCenter();
                            const mass1 = body1.GetMass();
                            for (const body2 of this.m_bodyList) {
                                const p2 = body2.GetWorldCenter();
                                const mass2 = body2.GetMass();
                                const dx = p2.x - p1.x;
                                const dy = p2.y - p1.y;
                                const r2 = dx * dx + dy * dy;
                                if (r2 < b2Settings_46.b2_epsilon) {
                                    continue;
                                }
                                const f = b2GravityController.Step_s_f.Set(dx, dy);
                                f.SelfMul(this.G / r2 / b2Math_40.b2Sqrt(r2) * mass1 * mass2);
                                if (body1.IsAwake()) {
                                    body1.ApplyForce(f, p1);
                                }
                                if (body2.IsAwake()) {
                                    body2.ApplyForce(f.SelfMul(-1), p2);
                                }
                            }
                        }
                    }
                    else {
                        for (const body1 of this.m_bodyList) {
                            const p1 = body1.GetWorldCenter();
                            const mass1 = body1.GetMass();
                            for (const body2 of this.m_bodyList) {
                                const p2 = body2.GetWorldCenter();
                                const mass2 = body2.GetMass();
                                const dx = p2.x - p1.x;
                                const dy = p2.y - p1.y;
                                const r2 = dx * dx + dy * dy;
                                if (r2 < b2Settings_46.b2_epsilon) {
                                    continue;
                                }
                                const f = b2GravityController.Step_s_f.Set(dx, dy);
                                f.SelfMul(this.G / r2 * mass1 * mass2);
                                if (body1.IsAwake()) {
                                    body1.ApplyForce(f, p1);
                                }
                                if (body2.IsAwake()) {
                                    body2.ApplyForce(f.SelfMul(-1), p2);
                                }
                            }
                        }
                    }
                }
                Draw(draw) { }
            };
            b2GravityController.Step_s_f = new b2Math_40.b2Vec2();
            exports_61("b2GravityController", b2GravityController);
        }
    };
});
System.register("Controllers/b2TensorDampingController", ["Controllers/b2Controller", "Common/b2Math", "Common/b2Settings"], function (exports_62, context_62) {
    "use strict";
    var __moduleName = context_62 && context_62.id;
    var b2Controller_5, b2Math_41, b2Settings_47, b2TensorDampingController;
    return {
        setters: [
            function (b2Controller_5_1) {
                b2Controller_5 = b2Controller_5_1;
            },
            function (b2Math_41_1) {
                b2Math_41 = b2Math_41_1;
            },
            function (b2Settings_47_1) {
                b2Settings_47 = b2Settings_47_1;
            }
        ],
        execute: function () {
            b2TensorDampingController = class b2TensorDampingController extends b2Controller_5.b2Controller {
                constructor() {
                    super(...arguments);
                    this.T = new b2Math_41.b2Mat22();
                    this.maxTimestep = 0;
                }
                Step(step) {
                    let timestep = step.dt;
                    if (timestep <= b2Settings_47.b2_epsilon) {
                        return;
                    }
                    if (timestep > this.maxTimestep && this.maxTimestep > 0) {
                        timestep = this.maxTimestep;
                    }
                    for (const body of this.m_bodyList) {
                        if (!body.IsAwake()) {
                            continue;
                        }
                        const damping = body.GetWorldVector(b2Math_41.b2Mat22.MulMV(this.T, body.GetLocalVector(body.GetLinearVelocity(), b2Math_41.b2Vec2.s_t0), b2Math_41.b2Vec2.s_t1), b2TensorDampingController.Step_s_damping);
                        body.SetLinearVelocity(b2Math_41.b2Vec2.AddVV(body.GetLinearVelocity(), b2Math_41.b2Vec2.MulSV(timestep, damping, b2Math_41.b2Vec2.s_t0), b2Math_41.b2Vec2.s_t1));
                    }
                }
                Draw(draw) { }
                SetAxisAligned(xDamping, yDamping) {
                    this.T.ex.x = (-xDamping);
                    this.T.ex.y = 0;
                    this.T.ey.x = 0;
                    this.T.ey.y = (-yDamping);
                    if (xDamping > 0 || yDamping > 0) {
                        this.maxTimestep = 1 / b2Math_41.b2Max(xDamping, yDamping);
                    }
                    else {
                        this.maxTimestep = 0;
                    }
                }
            };
            b2TensorDampingController.Step_s_damping = new b2Math_41.b2Vec2();
            exports_62("b2TensorDampingController", b2TensorDampingController);
        }
    };
});
System.register("Rope/b2Rope", ["Common/b2Settings", "Common/b2Math", "Common/b2Draw"], function (exports_63, context_63) {
    "use strict";
    var __moduleName = context_63 && context_63.id;
    var b2Settings_48, b2Math_42, b2Draw_6, b2RopeDef, b2Rope;
    return {
        setters: [
            function (b2Settings_48_1) {
                b2Settings_48 = b2Settings_48_1;
            },
            function (b2Math_42_1) {
                b2Math_42 = b2Math_42_1;
            },
            function (b2Draw_6_1) {
                b2Draw_6 = b2Draw_6_1;
            }
        ],
        execute: function () {
            b2RopeDef = class b2RopeDef {
                constructor() {
                    this.vertices = [];
                    this.count = 0;
                    this.masses = [];
                    this.gravity = new b2Math_42.b2Vec2(0, 0);
                    this.damping = 0.1;
                    this.k2 = 0.9;
                    this.k3 = 0.1;
                }
            };
            exports_63("b2RopeDef", b2RopeDef);
            b2Rope = class b2Rope {
                constructor() {
                    this.m_count = 0;
                    this.m_ps = [];
                    this.m_p0s = [];
                    this.m_vs = [];
                    this.m_ims = [];
                    this.m_Ls = [];
                    this.m_as = [];
                    this.m_gravity = new b2Math_42.b2Vec2();
                    this.m_damping = 0;
                    this.m_k2 = 1;
                    this.m_k3 = 0.1;
                }
                GetVertexCount() {
                    return this.m_count;
                }
                GetVertices() {
                    return this.m_ps;
                }
                Initialize(def) {
                    this.m_count = def.count;
                    this.m_ps = b2Math_42.b2Vec2.MakeArray(this.m_count);
                    this.m_p0s = b2Math_42.b2Vec2.MakeArray(this.m_count);
                    this.m_vs = b2Math_42.b2Vec2.MakeArray(this.m_count);
                    this.m_ims = b2Settings_48.b2MakeNumberArray(this.m_count);
                    for (let i = 0; i < this.m_count; ++i) {
                        this.m_ps[i].Copy(def.vertices[i]);
                        this.m_p0s[i].Copy(def.vertices[i]);
                        this.m_vs[i].SetZero();
                        const m = def.masses[i];
                        if (m > 0) {
                            this.m_ims[i] = 1 / m;
                        }
                        else {
                            this.m_ims[i] = 0;
                        }
                    }
                    const count2 = this.m_count - 1;
                    const count3 = this.m_count - 2;
                    this.m_Ls = b2Settings_48.b2MakeNumberArray(count2);
                    this.m_as = b2Settings_48.b2MakeNumberArray(count3);
                    for (let i = 0; i < count2; ++i) {
                        const p1 = this.m_ps[i];
                        const p2 = this.m_ps[i + 1];
                        this.m_Ls[i] = b2Math_42.b2Vec2.DistanceVV(p1, p2);
                    }
                    for (let i = 0; i < count3; ++i) {
                        const p1 = this.m_ps[i];
                        const p2 = this.m_ps[i + 1];
                        const p3 = this.m_ps[i + 2];
                        const d1 = b2Math_42.b2Vec2.SubVV(p2, p1, b2Math_42.b2Vec2.s_t0);
                        const d2 = b2Math_42.b2Vec2.SubVV(p3, p2, b2Math_42.b2Vec2.s_t1);
                        const a = b2Math_42.b2Vec2.CrossVV(d1, d2);
                        const b = b2Math_42.b2Vec2.DotVV(d1, d2);
                        this.m_as[i] = b2Math_42.b2Atan2(a, b);
                    }
                    this.m_gravity.Copy(def.gravity);
                    this.m_damping = def.damping;
                    this.m_k2 = def.k2;
                    this.m_k3 = def.k3;
                }
                Step(h, iterations) {
                    if (h === 0) {
                        return;
                    }
                    const d = Math.exp(-h * this.m_damping);
                    for (let i = 0; i < this.m_count; ++i) {
                        this.m_p0s[i].Copy(this.m_ps[i]);
                        if (this.m_ims[i] > 0) {
                            this.m_vs[i].SelfMulAdd(h, this.m_gravity);
                        }
                        this.m_vs[i].SelfMul(d);
                        this.m_ps[i].SelfMulAdd(h, this.m_vs[i]);
                    }
                    for (let i = 0; i < iterations; ++i) {
                        this.SolveC2();
                        this.SolveC3();
                        this.SolveC2();
                    }
                    const inv_h = 1 / h;
                    for (let i = 0; i < this.m_count; ++i) {
                        b2Math_42.b2Vec2.MulSV(inv_h, b2Math_42.b2Vec2.SubVV(this.m_ps[i], this.m_p0s[i], b2Math_42.b2Vec2.s_t0), this.m_vs[i]);
                    }
                }
                SolveC2() {
                    const count2 = this.m_count - 1;
                    for (let i = 0; i < count2; ++i) {
                        const p1 = this.m_ps[i];
                        const p2 = this.m_ps[i + 1];
                        const d = b2Math_42.b2Vec2.SubVV(p2, p1, b2Rope.s_d);
                        const L = d.Normalize();
                        const im1 = this.m_ims[i];
                        const im2 = this.m_ims[i + 1];
                        if (im1 + im2 === 0) {
                            continue;
                        }
                        const s1 = im1 / (im1 + im2);
                        const s2 = im2 / (im1 + im2);
                        p1.SelfMulSub(this.m_k2 * s1 * (this.m_Ls[i] - L), d);
                        p2.SelfMulAdd(this.m_k2 * s2 * (this.m_Ls[i] - L), d);
                    }
                }
                SetAngle(angle) {
                    const count3 = this.m_count - 2;
                    for (let i = 0; i < count3; ++i) {
                        this.m_as[i] = angle;
                    }
                }
                SolveC3() {
                    const count3 = this.m_count - 2;
                    for (let i = 0; i < count3; ++i) {
                        const p1 = this.m_ps[i];
                        const p2 = this.m_ps[i + 1];
                        const p3 = this.m_ps[i + 2];
                        const m1 = this.m_ims[i];
                        const m2 = this.m_ims[i + 1];
                        const m3 = this.m_ims[i + 2];
                        const d1 = b2Math_42.b2Vec2.SubVV(p2, p1, b2Rope.s_d1);
                        const d2 = b2Math_42.b2Vec2.SubVV(p3, p2, b2Rope.s_d2);
                        const L1sqr = d1.LengthSquared();
                        const L2sqr = d2.LengthSquared();
                        if (L1sqr * L2sqr === 0) {
                            continue;
                        }
                        const a = b2Math_42.b2Vec2.CrossVV(d1, d2);
                        const b = b2Math_42.b2Vec2.DotVV(d1, d2);
                        let angle = b2Math_42.b2Atan2(a, b);
                        const Jd1 = b2Math_42.b2Vec2.MulSV((-1 / L1sqr), d1.SelfSkew(), b2Rope.s_Jd1);
                        const Jd2 = b2Math_42.b2Vec2.MulSV((1 / L2sqr), d2.SelfSkew(), b2Rope.s_Jd2);
                        const J1 = b2Math_42.b2Vec2.NegV(Jd1, b2Rope.s_J1);
                        const J2 = b2Math_42.b2Vec2.SubVV(Jd1, Jd2, b2Rope.s_J2);
                        const J3 = Jd2;
                        let mass = m1 * b2Math_42.b2Vec2.DotVV(J1, J1) + m2 * b2Math_42.b2Vec2.DotVV(J2, J2) + m3 * b2Math_42.b2Vec2.DotVV(J3, J3);
                        if (mass === 0) {
                            continue;
                        }
                        mass = 1 / mass;
                        let C = angle - this.m_as[i];
                        while (C > b2Settings_48.b2_pi) {
                            angle -= 2 * b2Settings_48.b2_pi;
                            C = angle - this.m_as[i];
                        }
                        while (C < -b2Settings_48.b2_pi) {
                            angle += 2 * b2Settings_48.b2_pi;
                            C = angle - this.m_as[i];
                        }
                        const impulse = -this.m_k3 * mass * C;
                        p1.SelfMulAdd((m1 * impulse), J1);
                        p2.SelfMulAdd((m2 * impulse), J2);
                        p3.SelfMulAdd((m3 * impulse), J3);
                    }
                }
                Draw(draw) {
                    const c = new b2Draw_6.b2Color(0.4, 0.5, 0.7);
                    for (let i = 0; i < this.m_count - 1; ++i) {
                        draw.DrawSegment(this.m_ps[i], this.m_ps[i + 1], c);
                    }
                }
            };
            b2Rope.s_d = new b2Math_42.b2Vec2();
            b2Rope.s_d1 = new b2Math_42.b2Vec2();
            b2Rope.s_d2 = new b2Math_42.b2Vec2();
            b2Rope.s_Jd1 = new b2Math_42.b2Vec2();
            b2Rope.s_Jd2 = new b2Math_42.b2Vec2();
            b2Rope.s_J1 = new b2Math_42.b2Vec2();
            b2Rope.s_J2 = new b2Math_42.b2Vec2();
            exports_63("b2Rope", b2Rope);
        }
    };
});
System.register("Box2D", ["Common/b2Settings", "Common/b2Math", "Common/b2Draw", "Common/b2Timer", "Common/b2GrowableStack", "Common/b2BlockAllocator", "Common/b2StackAllocator", "Collision/b2Collision", "Collision/b2Distance", "Collision/b2BroadPhase", "Collision/b2DynamicTree", "Collision/b2TimeOfImpact", "Collision/b2CollideCircle", "Collision/b2CollidePolygon", "Collision/b2CollideEdge", "Collision/Shapes/b2Shape", "Collision/Shapes/b2CircleShape", "Collision/Shapes/b2PolygonShape", "Collision/Shapes/b2EdgeShape", "Collision/Shapes/b2ChainShape", "Dynamics/b2Fixture", "Dynamics/b2Body", "Dynamics/b2World", "Dynamics/b2WorldCallbacks", "Dynamics/b2Island", "Dynamics/b2TimeStep", "Dynamics/b2ContactManager", "Dynamics/Contacts/b2Contact", "Dynamics/Contacts/b2ContactFactory", "Dynamics/Contacts/b2ContactSolver", "Dynamics/Contacts/b2CircleContact", "Dynamics/Contacts/b2PolygonContact", "Dynamics/Contacts/b2PolygonAndCircleContact", "Dynamics/Contacts/b2EdgeAndCircleContact", "Dynamics/Contacts/b2EdgeAndPolygonContact", "Dynamics/Contacts/b2ChainAndCircleContact", "Dynamics/Contacts/b2ChainAndPolygonContact", "Dynamics/Joints/b2Joint", "Dynamics/Joints/b2JointFactory", "Dynamics/Joints/b2AreaJoint", "Dynamics/Joints/b2DistanceJoint", "Dynamics/Joints/b2FrictionJoint", "Dynamics/Joints/b2GearJoint", "Dynamics/Joints/b2MotorJoint", "Dynamics/Joints/b2MouseJoint", "Dynamics/Joints/b2PrismaticJoint", "Dynamics/Joints/b2PulleyJoint", "Dynamics/Joints/b2RevoluteJoint", "Dynamics/Joints/b2RopeJoint", "Dynamics/Joints/b2WeldJoint", "Dynamics/Joints/b2WheelJoint", "Controllers/b2Controller", "Controllers/b2BuoyancyController", "Controllers/b2ConstantAccelController", "Controllers/b2ConstantForceController", "Controllers/b2GravityController", "Controllers/b2TensorDampingController", "Particle/b2Particle", "Particle/b2ParticleGroup", "Particle/b2ParticleSystem", "Rope/b2Rope"], function (exports_64, context_64) {
    "use strict";
    var __moduleName = context_64 && context_64.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_64(exports);
    }
    return {
        setters: [
            function (b2Settings_49_1) {
                exportStar_1(b2Settings_49_1);
            },
            function (b2Math_43_1) {
                exportStar_1(b2Math_43_1);
            },
            function (b2Draw_7_1) {
                exportStar_1(b2Draw_7_1);
            },
            function (b2Timer_4_1) {
                exportStar_1(b2Timer_4_1);
            },
            function (b2GrowableStack_2_1) {
                exportStar_1(b2GrowableStack_2_1);
            },
            function (b2BlockAllocator_1_1) {
                exportStar_1(b2BlockAllocator_1_1);
            },
            function (b2StackAllocator_1_1) {
                exportStar_1(b2StackAllocator_1_1);
            },
            function (b2Collision_15_1) {
                exportStar_1(b2Collision_15_1);
            },
            function (b2Distance_3_1) {
                exportStar_1(b2Distance_3_1);
            },
            function (b2BroadPhase_2_1) {
                exportStar_1(b2BroadPhase_2_1);
            },
            function (b2DynamicTree_2_1) {
                exportStar_1(b2DynamicTree_2_1);
            },
            function (b2TimeOfImpact_3_1) {
                exportStar_1(b2TimeOfImpact_3_1);
            },
            function (b2CollideCircle_3_1) {
                exportStar_1(b2CollideCircle_3_1);
            },
            function (b2CollidePolygon_2_1) {
                exportStar_1(b2CollidePolygon_2_1);
            },
            function (b2CollideEdge_5_1) {
                exportStar_1(b2CollideEdge_5_1);
            },
            function (b2Shape_11_1) {
                exportStar_1(b2Shape_11_1);
            },
            function (b2CircleShape_1_1) {
                exportStar_1(b2CircleShape_1_1);
            },
            function (b2PolygonShape_1_1) {
                exportStar_1(b2PolygonShape_1_1);
            },
            function (b2EdgeShape_5_1) {
                exportStar_1(b2EdgeShape_5_1);
            },
            function (b2ChainShape_1_1) {
                exportStar_1(b2ChainShape_1_1);
            },
            function (b2Fixture_2_1) {
                exportStar_1(b2Fixture_2_1);
            },
            function (b2Body_5_1) {
                exportStar_1(b2Body_5_1);
            },
            function (b2World_1_1) {
                exportStar_1(b2World_1_1);
            },
            function (b2WorldCallbacks_4_1) {
                exportStar_1(b2WorldCallbacks_4_1);
            },
            function (b2Island_2_1) {
                exportStar_1(b2Island_2_1);
            },
            function (b2TimeStep_5_1) {
                exportStar_1(b2TimeStep_5_1);
            },
            function (b2ContactManager_2_1) {
                exportStar_1(b2ContactManager_2_1);
            },
            function (b2Contact_8_1) {
                exportStar_1(b2Contact_8_1);
            },
            function (b2ContactFactory_2_1) {
                exportStar_1(b2ContactFactory_2_1);
            },
            function (b2ContactSolver_2_1) {
                exportStar_1(b2ContactSolver_2_1);
            },
            function (b2CircleContact_2_1) {
                exportStar_1(b2CircleContact_2_1);
            },
            function (b2PolygonContact_2_1) {
                exportStar_1(b2PolygonContact_2_1);
            },
            function (b2PolygonAndCircleContact_2_1) {
                exportStar_1(b2PolygonAndCircleContact_2_1);
            },
            function (b2EdgeAndCircleContact_2_1) {
                exportStar_1(b2EdgeAndCircleContact_2_1);
            },
            function (b2EdgeAndPolygonContact_2_1) {
                exportStar_1(b2EdgeAndPolygonContact_2_1);
            },
            function (b2ChainAndCircleContact_2_1) {
                exportStar_1(b2ChainAndCircleContact_2_1);
            },
            function (b2ChainAndPolygonContact_2_1) {
                exportStar_1(b2ChainAndPolygonContact_2_1);
            },
            function (b2Joint_15_1) {
                exportStar_1(b2Joint_15_1);
            },
            function (b2JointFactory_2_1) {
                exportStar_1(b2JointFactory_2_1);
            },
            function (b2AreaJoint_2_1) {
                exportStar_1(b2AreaJoint_2_1);
            },
            function (b2DistanceJoint_3_1) {
                exportStar_1(b2DistanceJoint_3_1);
            },
            function (b2FrictionJoint_2_1) {
                exportStar_1(b2FrictionJoint_2_1);
            },
            function (b2GearJoint_2_1) {
                exportStar_1(b2GearJoint_2_1);
            },
            function (b2MotorJoint_2_1) {
                exportStar_1(b2MotorJoint_2_1);
            },
            function (b2MouseJoint_2_1) {
                exportStar_1(b2MouseJoint_2_1);
            },
            function (b2PrismaticJoint_2_1) {
                exportStar_1(b2PrismaticJoint_2_1);
            },
            function (b2PulleyJoint_2_1) {
                exportStar_1(b2PulleyJoint_2_1);
            },
            function (b2RevoluteJoint_2_1) {
                exportStar_1(b2RevoluteJoint_2_1);
            },
            function (b2RopeJoint_2_1) {
                exportStar_1(b2RopeJoint_2_1);
            },
            function (b2WeldJoint_2_1) {
                exportStar_1(b2WeldJoint_2_1);
            },
            function (b2WheelJoint_2_1) {
                exportStar_1(b2WheelJoint_2_1);
            },
            function (b2Controller_6_1) {
                exportStar_1(b2Controller_6_1);
            },
            function (b2BuoyancyController_1_1) {
                exportStar_1(b2BuoyancyController_1_1);
            },
            function (b2ConstantAccelController_1_1) {
                exportStar_1(b2ConstantAccelController_1_1);
            },
            function (b2ConstantForceController_1_1) {
                exportStar_1(b2ConstantForceController_1_1);
            },
            function (b2GravityController_1_1) {
                exportStar_1(b2GravityController_1_1);
            },
            function (b2TensorDampingController_1_1) {
                exportStar_1(b2TensorDampingController_1_1);
            },
            function (b2Particle_3_1) {
                exportStar_1(b2Particle_3_1);
            },
            function (b2ParticleGroup_2_1) {
                exportStar_1(b2ParticleGroup_2_1);
            },
            function (b2ParticleSystem_2_1) {
                exportStar_1(b2ParticleSystem_2_1);
            },
            function (b2Rope_1_1) {
                exportStar_1(b2Rope_1_1);
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=box2d-ts.js.map