/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
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
System.register(["./b2Settings"], function (exports_1, context_1) {
    "use strict";
    var b2Settings_1, b2_pi_over_180, b2_180_over_pi, b2_two_pi, b2Abs, b2Min, b2Max, b2IsValid, b2Sqrt, b2Pow, b2Cos, b2Sin, b2Acos, b2Asin, b2Atan2, b2Vec2, b2Vec2_zero, b2Vec3, b2Mat22, b2Mat33, b2Rot, b2Transform, b2Sweep;
    var __moduleName = context_1 && context_1.id;
    function b2Clamp(a, lo, hi) {
        return (a < lo) ? (lo) : ((a > hi) ? (hi) : (a));
    }
    exports_1("b2Clamp", b2Clamp);
    function b2Swap(a, b) {
        // DEBUG: b2Assert(false);
        const tmp = a[0];
        a[0] = b[0];
        b[0] = tmp;
    }
    exports_1("b2Swap", b2Swap);
    function b2Sq(n) {
        return n * n;
    }
    exports_1("b2Sq", b2Sq);
    /// This is a approximate yet fast inverse square-root.
    function b2InvSqrt(n) {
        return 1 / Math.sqrt(n);
    }
    exports_1("b2InvSqrt", b2InvSqrt);
    function b2DegToRad(degrees) {
        return degrees * b2_pi_over_180;
    }
    exports_1("b2DegToRad", b2DegToRad);
    function b2RadToDeg(radians) {
        return radians * b2_180_over_pi;
    }
    exports_1("b2RadToDeg", b2RadToDeg);
    function b2NextPowerOfTwo(x) {
        x |= (x >> 1) & 0x7FFFFFFF;
        x |= (x >> 2) & 0x3FFFFFFF;
        x |= (x >> 4) & 0x0FFFFFFF;
        x |= (x >> 8) & 0x00FFFFFF;
        x |= (x >> 16) & 0x0000FFFF;
        return x + 1;
    }
    exports_1("b2NextPowerOfTwo", b2NextPowerOfTwo);
    function b2IsPowerOfTwo(x) {
        return x > 0 && (x & (x - 1)) === 0;
    }
    exports_1("b2IsPowerOfTwo", b2IsPowerOfTwo);
    function b2Random() {
        return Math.random() * 2 - 1;
    }
    exports_1("b2Random", b2Random);
    function b2RandomRange(lo, hi) {
        return (hi - lo) * Math.random() + lo;
    }
    exports_1("b2RandomRange", b2RandomRange);
    return {
        setters: [
            function (b2Settings_1_1) {
                b2Settings_1 = b2Settings_1_1;
            }
        ],
        execute: function () {
            exports_1("b2_pi_over_180", b2_pi_over_180 = b2Settings_1.b2_pi / 180);
            exports_1("b2_180_over_pi", b2_180_over_pi = 180 / b2Settings_1.b2_pi);
            exports_1("b2_two_pi", b2_two_pi = 2 * b2Settings_1.b2_pi);
            exports_1("b2Abs", b2Abs = Math.abs);
            exports_1("b2Min", b2Min = Math.min);
            exports_1("b2Max", b2Max = Math.max);
            /// This function is used to ensure that a floating point number is
            /// not a NaN or infinity.
            exports_1("b2IsValid", b2IsValid = isFinite);
            exports_1("b2Sqrt", b2Sqrt = Math.sqrt);
            exports_1("b2Pow", b2Pow = Math.pow);
            exports_1("b2Cos", b2Cos = Math.cos);
            exports_1("b2Sin", b2Sin = Math.sin);
            exports_1("b2Acos", b2Acos = Math.acos);
            exports_1("b2Asin", b2Asin = Math.asin);
            exports_1("b2Atan2", b2Atan2 = Math.atan2);
            // ===============================================
            //
            /// A 2D column vector.
            //
            // ===============================================
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
            exports_1("b2Vec2", b2Vec2);
            exports_1("b2Vec2_zero", b2Vec2_zero = new b2Vec2(0, 0));
            // ===============================================
            //
            /// A 2D column vector with 3 elements.
            //
            // ===============================================
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
            exports_1("b2Vec3", b2Vec3);
            // ===============================================
            //
            /// A 2-by-2 matrix. Stored in column-major order.
            //
            // ===============================================
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
            exports_1("b2Mat22", b2Mat22);
            // ===============================================
            //
            /// A 3-by-3 matrix. Stored in column-major order.
            //
            // ===============================================
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
            exports_1("b2Mat33", b2Mat33);
            // ===============================================
            //
            /// Rotation
            //
            // ===============================================
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
                    // [qc -qs] * [rc -rs] = [qc*rc-qs*rs -qc*rs-qs*rc]
                    // [qs  qc]   [rs  rc]   [qs*rc+qc*rs -qs*rs+qc*rc]
                    // s = qs * rc + qc * rs
                    // c = qc * rc - qs * rs
                    const q_c = q.c, q_s = q.s;
                    const r_c = r.c, r_s = r.s;
                    out.s = q_s * r_c + q_c * r_s;
                    out.c = q_c * r_c - q_s * r_s;
                    return out;
                }
                static MulTRR(q, r, out) {
                    // [ qc qs] * [rc -rs] = [qc*rc+qs*rs -qc*rs+qs*rc]
                    // [-qs qc]   [rs  rc]   [-qs*rc+qc*rs qs*rs+qc*rc]
                    // s = qc * rs - qs * rc
                    // c = qc * rc + qs * rs
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
            exports_1("b2Rot", b2Rot);
            // ===============================================
            //
            /// A transform contains translation and rotation. It is used to represent
            /// the position and orientation of rigid frames.
            //
            // ===============================================
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
                    // float32 x = (T.q.c * v.x - T.q.s * v.y) + T.p.x;
                    // float32 y = (T.q.s * v.x + T.q.c * v.y) + T.p.y;
                    // return b2Vec2(x, y);
                    const T_q_c = T.q.c, T_q_s = T.q.s;
                    const v_x = v.x, v_y = v.y;
                    out.x = (T_q_c * v_x - T_q_s * v_y) + T.p.x;
                    out.y = (T_q_s * v_x + T_q_c * v_y) + T.p.y;
                    return out;
                }
                static MulTXV(T, v, out) {
                    // float32 px = v.x - T.p.x;
                    // float32 py = v.y - T.p.y;
                    // float32 x = (T.q.c * px + T.q.s * py);
                    // float32 y = (-T.q.s * px + T.q.c * py);
                    // return b2Vec2(x, y);
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
            exports_1("b2Transform", b2Transform);
            // ===============================================
            //
            /// This describes the motion of a body/shape for TOI computation.
            /// Shapes are defined with respect to the body origin, which may
            /// no coincide with the center of mass. However, to support dynamics
            /// we must interpolate the center of mass position.
            //
            // ===============================================
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
                    // DEBUG: b2Assert(this.alpha0 < 1);
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
            exports_1("b2Sweep", b2Sweep);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJNYXRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQm94MkQvQ29tbW9uL2IyTWF0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztFQWdCRTs7Ozs7SUFjRixTQUFnQixPQUFPLENBQUMsQ0FBUyxFQUFFLEVBQVUsRUFBRSxFQUFVO1FBQ3ZELE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDOztJQUVELFNBQWdCLE1BQU0sQ0FBSSxDQUFNLEVBQUUsQ0FBTTtRQUN0QywwQkFBMEI7UUFDMUIsTUFBTSxHQUFHLEdBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7SUFNRCxTQUFnQixJQUFJLENBQUMsQ0FBUztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDOztJQUVELHVEQUF1RDtJQUN2RCxTQUFnQixTQUFTLENBQUMsQ0FBUztRQUNqQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7O0lBTUQsU0FBZ0IsVUFBVSxDQUFDLE9BQWU7UUFDeEMsT0FBTyxPQUFPLEdBQUcsY0FBYyxDQUFDO0lBQ2xDLENBQUM7O0lBRUQsU0FBZ0IsVUFBVSxDQUFDLE9BQWU7UUFDeEMsT0FBTyxPQUFPLEdBQUcsY0FBYyxDQUFDO0lBQ2xDLENBQUM7O0lBUUQsU0FBZ0IsZ0JBQWdCLENBQUMsQ0FBUztRQUN4QyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQzNCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDM0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUMzQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQzNCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQzs7SUFFRCxTQUFnQixjQUFjLENBQUMsQ0FBUztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7SUFFRCxTQUFnQixRQUFRO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7SUFFRCxTQUFnQixhQUFhLENBQUMsRUFBVSxFQUFFLEVBQVU7UUFDbEQsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7Ozs7OztZQXRFRCw0QkFBYSxjQUFjLEdBQVcsa0JBQUssR0FBRyxHQUFHLEVBQUM7WUFDbEQsNEJBQWEsY0FBYyxHQUFXLEdBQUcsR0FBRyxrQkFBSyxFQUFDO1lBQ2xELHVCQUFhLFNBQVMsR0FBVyxDQUFDLEdBQUcsa0JBQUssRUFBQztZQUUzQyxtQkFBYSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUU5QixtQkFBYSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBQztZQUM5QixtQkFBYSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBQztZQWE5QixtRUFBbUU7WUFDbkUsMEJBQTBCO1lBQzFCLHVCQUFhLFNBQVMsR0FBRyxRQUFRLEVBQUM7WUFXbEMsb0JBQWEsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUM7WUFFaEMsbUJBQWEsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFVOUIsbUJBQWEsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDOUIsbUJBQWEsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUM7WUFDOUIsb0JBQWEsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUM7WUFDaEMsb0JBQWEsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUM7WUFDaEMscUJBQWEsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFnQ2xDLGtEQUFrRDtZQUNsRCxFQUFFO1lBQ0YsdUJBQXVCO1lBQ3ZCLEVBQUU7WUFDRixrREFBa0Q7WUFDbEQsU0FBQSxNQUFhLE1BQU07Z0JBYWpCLFlBQVksSUFBWSxDQUFDLEVBQUUsSUFBWSxDQUFDO29CQUN0QyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixDQUFDO2dCQUVNLEtBQUs7b0JBQ1YsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFTSxPQUFPO29CQUNaLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNYLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBRU0sR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTO29CQUM3QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDWCxPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQUVNLElBQUksQ0FBQyxLQUFTO29CQUNuQixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDakIsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFFTSxPQUFPLENBQUMsQ0FBSztvQkFDbEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNkLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDZCxPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQUVNLFNBQVMsQ0FBQyxDQUFTLEVBQUUsQ0FBUztvQkFDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1osSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1osT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFFTSxPQUFPLENBQUMsQ0FBSztvQkFDbEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNkLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDZCxPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQUVNLFNBQVMsQ0FBQyxDQUFTLEVBQUUsQ0FBUztvQkFDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1osSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1osT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFFTSxPQUFPLENBQUMsQ0FBUztvQkFDdEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1osSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1osT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFFTSxVQUFVLENBQUMsQ0FBUyxFQUFFLENBQUs7b0JBQ2hDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBRU0sVUFBVSxDQUFDLENBQVMsRUFBRSxDQUFLO29CQUNoQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQixPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQUVNLEdBQUcsQ0FBQyxDQUFLO29CQUNkLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFFTSxLQUFLLENBQUMsQ0FBSztvQkFDaEIsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQUVNLE1BQU07b0JBQ1gsTUFBTSxDQUFDLEdBQVcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUVNLGFBQWE7b0JBQ2xCLE1BQU0sQ0FBQyxHQUFXLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFXLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzdDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFTSxTQUFTO29CQUNkLE1BQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDckMsSUFBSSxNQUFNLElBQUksdUJBQVUsRUFBRTt3QkFDeEIsTUFBTSxVQUFVLEdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDO3FCQUN0QjtvQkFDRCxPQUFPLE1BQU0sQ0FBQztnQkFDaEIsQ0FBQztnQkFFTSxhQUFhO29CQUNsQixNQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3JDLElBQUksTUFBTSxJQUFJLHVCQUFVLEVBQUU7d0JBQ3hCLE1BQU0sVUFBVSxHQUFXLENBQUMsR0FBRyxNQUFNLENBQUM7d0JBQ3RDLElBQUksQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDO3dCQUNyQixJQUFJLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQztxQkFDdEI7b0JBQ0QsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFFTSxVQUFVLENBQUMsT0FBZTtvQkFDL0IsTUFBTSxDQUFDLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEMsTUFBTSxDQUFDLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEMsTUFBTSxDQUFDLEdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDekIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzVCLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBRU0sT0FBTztvQkFDWixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFTSxXQUFXLENBQUMsQ0FBUztvQkFDMUIsTUFBTSxDQUFDLEdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDekIsSUFBSSxDQUFDLENBQUMsR0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDckIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hCLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBRU0sV0FBVyxDQUFDLENBQVM7b0JBQzFCLE1BQU0sQ0FBQyxHQUFXLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDckIsSUFBSSxDQUFDLENBQUMsR0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNoQixPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQUVNLFFBQVEsQ0FBQyxDQUFLO29CQUNuQixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBRU0sUUFBUSxDQUFDLENBQUs7b0JBQ25CLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFFTSxPQUFPO29CQUNaLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQUVNLE9BQU87b0JBQ1osSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBRU0sUUFBUTtvQkFDYixNQUFNLENBQUMsR0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDakIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1gsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFFTSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQWM7b0JBQ3BDLE9BQU8sd0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFTLEVBQVUsRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkFFTSxNQUFNLENBQUMsSUFBSSxDQUFlLENBQUssRUFBRSxHQUFNO29CQUM1QyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkIsT0FBTyxHQUFHLENBQUM7Z0JBQ2IsQ0FBQztnQkFFTSxNQUFNLENBQUMsSUFBSSxDQUFlLENBQUssRUFBRSxDQUFLLEVBQUUsR0FBTTtvQkFDbkQsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QixPQUFPLEdBQUcsQ0FBQztnQkFDYixDQUFDO2dCQUVNLE1BQU0sQ0FBQyxJQUFJLENBQWUsQ0FBSyxFQUFFLENBQUssRUFBRSxHQUFNO29CQUNuRCxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLE9BQU8sR0FBRyxDQUFDO2dCQUNiLENBQUM7Z0JBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBZSxDQUFLLEVBQUUsRUFBTSxFQUFFLEVBQU0sRUFBRSxHQUFNO29CQUM5RCxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxPQUFPLEdBQUcsQ0FBQztnQkFDYixDQUFDO2dCQUVNLE1BQU0sQ0FBQyxPQUFPLENBQWUsQ0FBSyxFQUFFLE9BQWUsRUFBRSxHQUFNO29CQUNoRSxNQUFNLEdBQUcsR0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQyxNQUFNLENBQUMsR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNwQyxNQUFNLENBQUMsR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNwQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDMUIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQzFCLE9BQU8sR0FBRyxDQUFDO2dCQUNiLENBQUM7Z0JBRU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFLLEVBQUUsQ0FBSztvQkFDOUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUVNLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBSyxFQUFFLENBQUs7b0JBQ2hDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFFTSxNQUFNLENBQUMsT0FBTyxDQUFlLENBQUssRUFBRSxDQUFTLEVBQUUsR0FBTTtvQkFDMUQsTUFBTSxHQUFHLEdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsR0FBRyxDQUFDLENBQUMsR0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ2pCLE9BQU8sR0FBRyxDQUFDO2dCQUNiLENBQUM7Z0JBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBZSxDQUFLLEVBQUUsR0FBTTtvQkFDakQsTUFBTSxHQUFHLEdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsR0FBRyxDQUFDLENBQUMsR0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNiLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7b0JBQ2IsT0FBTyxHQUFHLENBQUM7Z0JBQ2IsQ0FBQztnQkFFTSxNQUFNLENBQUMsT0FBTyxDQUFlLENBQVMsRUFBRSxDQUFLLEVBQUUsR0FBTTtvQkFDMUQsTUFBTSxHQUFHLEdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixHQUFHLENBQUMsQ0FBQyxHQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ2pCLE9BQU8sR0FBRyxDQUFDO2dCQUNiLENBQUM7Z0JBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBZSxDQUFLLEVBQUUsR0FBTTtvQkFDakQsTUFBTSxHQUFHLEdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2IsR0FBRyxDQUFDLENBQUMsR0FBSSxHQUFHLENBQUM7b0JBQ2IsT0FBTyxHQUFHLENBQUM7Z0JBQ2IsQ0FBQztnQkFFTSxNQUFNLENBQUMsS0FBSyxDQUFlLENBQUssRUFBRSxDQUFLLEVBQUUsR0FBTTtvQkFDcEQsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQixPQUFPLEdBQUcsQ0FBQztnQkFDYixDQUFDO2dCQUVNLE1BQU0sQ0FBQyxLQUFLLENBQWUsQ0FBSyxFQUFFLENBQUssRUFBRSxHQUFNO29CQUNwRCxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLE9BQU8sR0FBRyxDQUFDO2dCQUNiLENBQUM7Z0JBRU0sTUFBTSxDQUFDLEtBQUssQ0FBZSxDQUFTLEVBQUUsQ0FBSyxFQUFFLEdBQU07b0JBQ3hELEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hCLE9BQU8sR0FBRyxDQUFDO2dCQUNiLENBQUM7Z0JBRU0sTUFBTSxDQUFDLEtBQUssQ0FBZSxDQUFLLEVBQUUsQ0FBUyxFQUFFLEdBQU07b0JBQ3hELEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hCLE9BQU8sR0FBRyxDQUFDO2dCQUNiLENBQUM7Z0JBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBZSxDQUFLLEVBQUUsQ0FBUyxFQUFFLENBQUssRUFBRSxHQUFNO29CQUNuRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QixPQUFPLEdBQUcsQ0FBQztnQkFDYixDQUFDO2dCQUVNLE1BQU0sQ0FBQyxTQUFTLENBQWUsQ0FBSyxFQUFFLENBQVMsRUFBRSxDQUFLLEVBQUUsR0FBTTtvQkFDbkUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsT0FBTyxHQUFHLENBQUM7Z0JBQ2IsQ0FBQztnQkFFTSxNQUFNLENBQUMsV0FBVyxDQUFlLENBQUssRUFBRSxDQUFTLEVBQUUsQ0FBSyxFQUFFLEdBQU07b0JBQ3JFLE1BQU0sR0FBRyxHQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDeEIsT0FBTyxHQUFHLENBQUM7Z0JBQ2IsQ0FBQztnQkFFTSxNQUFNLENBQUMsS0FBSyxDQUFlLENBQUssRUFBRSxDQUFLLEVBQUUsR0FBTTtvQkFDcEQsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDMUIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDMUIsT0FBTyxHQUFHLENBQUM7Z0JBQ2IsQ0FBQztnQkFFTSxNQUFNLENBQUMsS0FBSyxDQUFlLENBQUssRUFBRSxDQUFLLEVBQUUsR0FBTTtvQkFDcEQsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDMUIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDMUIsT0FBTyxHQUFHLENBQUM7Z0JBQ2Is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QUNiLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO3FCQUNmO29CQUNELEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLE9BQU8sR0FBRyxDQUFDO2dCQUNiLENBQUM7Z0JBRU0sS0FBSyxDQUFlLEdBQVcsRUFBRSxHQUFXLEVBQUUsR0FBTTtvQkFDekQsTUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMvQyxNQUFNLEdBQUcsR0FBVyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQy9DLElBQUksR0FBRyxHQUFXLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDeEMsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO3dCQUNiLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO3FCQUNmO29CQUNELEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQ3RDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQ3RDLE9BQU8sR0FBRyxDQUFDO2dCQUNiLENBQUM7Z0JBRU0sT0FBTztvQkFDWixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNsQixPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQUVNLE9BQU87b0JBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEIsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFFTSxRQUFRLENBQUMsQ0FBVTtvQkFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN0QixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3RCLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBRU0sUUFBUSxDQUFDLENBQVU7b0JBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN0QixPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQUVNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBVSxFQUFFLEdBQVk7b0JBQ3pDLE1BQU0sSUFBSSxHQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQy9DLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE9BQU8sR0FBRyxDQUFDO2dCQUNiLENBQUM7Z0JBRU0sTUFBTSxDQUFDLEtBQUssQ0FBZSxDQUFVLEVBQUUsQ0FBSyxFQUFFLEdBQU07b0JBQ3pELE1BQU0sSUFBSSxHQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQy9DLE1BQU0sR0FBRyxHQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ3BDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ3BDLE9BQU8sR0FBRyxDQUFDO2dCQUNiLENBQUM7Z0JBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBZSxDQUFVLEVBQUUsQ0FBSyxFQUFFLEdBQU07b0JBQzFELE1BQU0sSUFBSSxHQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQy9DLE1BQU0sR0FBRyxHQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ3BDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ3BDLE9BQU8sR0FBRyxDQUFDO2dCQUNiLENBQUM7Z0JBRU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFVLEVBQUUsQ0FBVSxFQUFFLEdBQVk7b0JBQ3RELE1BQU0sSUFBSSxHQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQy9DLE1BQU0sSUFBSSxHQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQy9DLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDM0IsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUMzQixHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzNCLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDM0IsT0FBTyxHQUFHLENBQUM7Z0JBQ2IsQ0FBQztnQkFFTSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQVUsRUFBRSxDQUFVLEVBQUUsR0FBWTtvQkFDdEQsTUFBTSxNQUFNLEdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxNQUFNLE1BQU0sR0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELE1BQU0sTUFBTSxHQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdkQsTUFBTSxNQUFNLEdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBQzdDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQztvQkFDN0MsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUM3QyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBQzdDLE9BQU8sR0FBRyxDQUFDO2dCQUNiLENBQUM7Z0JBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFVLEVBQUUsQ0FBVSxFQUFFLEdBQVk7b0JBQ3ZELE1BQU0sTUFBTSxHQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdkQsTUFBTSxNQUFNLEdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxNQUFNLE1BQU0sR0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELE1BQU0sTUFBTSxHQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdkQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUM3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R0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDOUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUM5RyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzlHLE9BQU8sR0FBRyxDQUFDO2dCQUNiLENBQUM7Z0JBRU0sT0FBTyxDQUFlLEdBQVcsRUFBRSxHQUFXLEVBQUUsR0FBTTtvQkFDM0QsTUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFXLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxNQUFNLEdBQUcsR0FBVyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELElBQUksR0FBRyxHQUFXLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDeEMsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO3dCQUNiLEdBQUcsR0FB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LENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUNuRCxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUNuRCxPQUFPLEdBQUcsQ0FBQztnQkFDYixDQUFDO2dCQUVNLE1BQU0sQ0FBQyxTQUFTLENBQWdCLENBQVUsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxHQUFNO29CQUN4RixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM3QyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM3QyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM3QyxPQUFPLEdBQUcsQ0FBQztnQkFDYixDQUFDO2dCQUVNLE1BQU0sQ0FBQyxRQUFRLENBQWUsQ0FBVSxFQUFFLENBQUssRUFBRSxHQUFNO29CQUM1RCxNQUFNLEdBQUcs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