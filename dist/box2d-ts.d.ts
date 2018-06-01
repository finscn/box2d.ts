declare module "Box2D/Box2D/Common/b2Settings" {
    export function b2Assert(condition: boolean, ...args: any[]): void;
    export const b2_maxFloat: number;
    export const b2_epsilon: number;
    export const b2_epsilon_sq: number;
    export const b2_pi: number;
    export const b2_maxManifoldPoints: number;
    export const b2_maxPolygonVertices: number;
    export const b2_aabbExtension: number;
    export const b2_aabbMultiplier: number;
    export const b2_linearSlop: number;
    export const b2_angularSlop: number;
    export const b2_polygonRadius: number;
    export const b2_maxSubSteps: number;
    export const b2_maxTOIContacts: number;
    export const b2_velocityThreshold: number;
    export const b2_maxLinearCorrection: number;
    export const b2_maxAngularCorrection: number;
    export const b2_maxTranslation: number;
    export const b2_maxTranslationSquared: number;
    export const b2_maxRotation: number;
    export const b2_maxRotationSquared: number;
    export const b2_baumgarte: number;
    export const b2_toiBaumgarte: number;
    export const b2_invalidParticleIndex: number;
    export const b2_maxParticleIndex: number;
    export const b2_particleStride: number;
    export const b2_minParticleWeight: number;
    export const b2_maxParticlePressure: number;
    export const b2_maxParticleForce: number;
    export const b2_maxTriadDistance: number;
    export const b2_maxTriadDistanceSquared: number;
    export const b2_minParticleSystemBufferCapacity: number;
    export const b2_barrierCollisionTime: number;
    export const b2_timeToSleep: number;
    export const b2_linearSleepTolerance: number;
    export const b2_angularSleepTolerance: number;
    export function b2Alloc(size: number): any;
    export function b2Free(mem: any): void;
    export function b2Log(message: string, ...args: any[]): void;
    export class b2Version {
        major: number;
        minor: number;
        revision: number;
        constructor(major?: number, minor?: number, revision?: number);
        toString(): string;
    }
    export const b2_version: b2Version;
    export const b2_changelist: number;
    export function b2ParseInt(v: string): number;
    export function b2ParseUInt(v: string): number;
    export function b2MakeArray<T>(length: number, init: {
        (i: number): T;
    }): T[];
    export function b2MakeNullArray<T>(length: number): (T | null)[];
    export function b2MakeNumberArray(length: number, init?: number): number[];
}
declare module "Box2D/Box2D/Common/Math/b2Vec2" {
    export class b2Vec2 {
        static ZERO: b2Vec2;
        static UNITX: b2Vec2;
        static UNITY: b2Vec2;
        static s_t0: b2Vec2;
        static s_t1: b2Vec2;
        static s_t2: b2Vec2;
        static s_t3: b2Vec2;
        x: number;
        y: number;
        constructor(x?: number, y?: number);
        Clone(): b2Vec2;
        SetZero(): b2Vec2;
        Set(x: number, y: number): b2Vec2;
        Copy(other: b2Vec2): b2Vec2;
        SelfAdd(v: b2Vec2): b2Vec2;
        SelfAddXY(x: number, y: number): b2Vec2;
        SelfSub(v: b2Vec2): b2Vec2;
        SelfSubXY(x: number, y: number): b2Vec2;
        SelfMul(s: number): b2Vec2;
        SelfMulAdd(s: number, v: b2Vec2): b2Vec2;
        SelfMulSub(s: number, v: b2Vec2): b2Vec2;
        Dot(v: b2Vec2): number;
        Cross(v: b2Vec2): number;
        Length(): number;
        LengthSquared(): number;
        Normalize(): number;
        SelfNormalize(): b2Vec2;
        SelfRotate(radians: number): b2Vec2;
        IsValid(): boolean;
        SelfCrossVS(s: number): b2Vec2;
        SelfCrossSV(s: number): b2Vec2;
        SelfMinV(v: b2Vec2): b2Vec2;
        SelfMaxV(v: b2Vec2): b2Vec2;
        SelfAbs(): b2Vec2;
        SelfNeg(): b2Vec2;
        SelfSkew(): b2Vec2;
        static MakeArray(length: number): b2Vec2[];
        static AbsV(v: b2Vec2, out: b2Vec2): b2Vec2;
        static MinV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2;
        static MaxV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2;
        static ClampV(v: b2Vec2, lo: b2Vec2, hi: b2Vec2, out: b2Vec2): b2Vec2;
        static RotateV(v: b2Vec2, radians: number, out: b2Vec2): b2Vec2;
        static DotVV(a: b2Vec2, b: b2Vec2): number;
        static CrossVV(a: b2Vec2, b: b2Vec2): number;
        static CrossVS(v: b2Vec2, s: number, out: b2Vec2): b2Vec2;
        static CrossVOne(v: b2Vec2, out: b2Vec2): b2Vec2;
        static CrossSV(s: number, v: b2Vec2, out: b2Vec2): b2Vec2;
        static CrossOneV(v: b2Vec2, out: b2Vec2): b2Vec2;
        static AddVV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2;
        static SubVV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2;
        static MulSV(s: number, v: b2Vec2, out: b2Vec2): b2Vec2;
        static MulVS(v: b2Vec2, s: number, out: b2Vec2): b2Vec2;
        static AddVMulSV(a: b2Vec2, s: number, b: b2Vec2, out: b2Vec2): b2Vec2;
        static SubVMulSV(a: b2Vec2, s: number, b: b2Vec2, out: b2Vec2): b2Vec2;
        static AddVCrossSV(a: b2Vec2, s: number, v: b2Vec2, out: b2Vec2): b2Vec2;
        static MidVV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2;
        static ExtVV(a: b2Vec2, b: b2Vec2, out: b2Vec2): b2Vec2;
        static IsEqualToV(a: b2Vec2, b: b2Vec2): boolean;
        static DistanceVV(a: b2Vec2, b: b2Vec2): number;
        static DistanceSquaredVV(a: b2Vec2, b: b2Vec2): number;
        static NegV(v: b2Vec2, out: b2Vec2): b2Vec2;
    }
}
declare module "Box2D/Box2D/Common/Math/b2Vec3" {
    export class b2Vec3 {
        static ZERO: b2Vec3;
        static s_t0: b2Vec3;
        x: number;
        y: number;
        z: number;
        constructor(x?: number, y?: number, z?: number);
        Clone(): b2Vec3;
        SetZero(): b2Vec3;
        SetXYZ(x: number, y: number, z: number): b2Vec3;
        Copy(other: b2Vec3): b2Vec3;
        SelfNeg(): b2Vec3;
        SelfAdd(v: b2Vec3): b2Vec3;
        SelfAddXYZ(x: number, y: number, z: number): b2Vec3;
        SelfSub(v: b2Vec3): b2Vec3;
        SelfSubXYZ(x: number, y: number, z: number): b2Vec3;
        SelfMul(s: number): b2Vec3;
        static DotV3V3(a: b2Vec3, b: b2Vec3): number;
        static CrossV3V3(a: b2Vec3, b: b2Vec3, out: b2Vec3): b2Vec3;
    }
}
declare module "Box2D/Box2D/Common/Math/b2Mat22" {
    import { b2Vec2 } from "Box2D/Box2D/Common/Math/b2Vec2";
    export class b2Mat22 {
        static IDENTITY: b2Mat22;
        readonly ex: b2Vec2;
        readonly ey: b2Vec2;
        Clone(): b2Mat22;
        static FromVV(c1: b2Vec2, c2: b2Vec2): b2Mat22;
        static FromSSSS(r1c1: number, r1c2: number, r2c1: number, r2c2: number): b2Mat22;
        static FromAngle(radians: number): b2Mat22;
        SetSSSS(r1c1: number, r1c2: number, r2c1: number, r2c2: number): b2Mat22;
        SetVV(c1: b2Vec2, c2: b2Vec2): b2Mat22;
        SetAngle(radians: number): b2Mat22;
        Copy(other: b2Mat22): b2Mat22;
        SetIdentity(): b2Mat22;
        SetZero(): b2Mat22;
        GetAngle(): number;
        GetInverse(out: b2Mat22): b2Mat22;
        Solve(b_x: number, b_y: number, out: b2Vec2): b2Vec2;
        SelfAbs(): b2Mat22;
        SelfInv(): b2Mat22;
        SelfAddM(M: b2Mat22): b2Mat22;
        SelfSubM(M: b2Mat22): b2Mat22;
        static AbsM(M: b2Mat22, out: b2Mat22): b2Mat22;
        static MulMV(M: b2Mat22, v: b2Vec2, out: b2Vec2): b2Vec2;
        static MulTMV(M: b2Mat22, v: b2Vec2, out: b2Vec2): b2Vec2;
        static AddMM(A: b2Mat22, B: b2Mat22, out: b2Mat22): b2Mat22;
        static MulMM(A: b2Mat22, B: b2Mat22, out: b2Mat22): b2Mat22;
        static MulTMM(A: b2Mat22, B: b2Mat22, out: b2Mat22): b2Mat22;
    }
}
declare module "Box2D/Box2D/Common/Math/b2Mat33" {
    import { b2Vec2 } from "Box2D/Box2D/Common/Math/b2Vec2";
    import { b2Vec3 } from "Box2D/Box2D/Common/Math/b2Vec3";
    export class b2Mat33 {
        static IDENTITY: b2Mat33;
        ex: b2Vec3;
        ey: b2Vec3;
        ez: b2Vec3;
        Clone(): b2Mat33;
        SetVVV(c1: b2Vec3, c2: b2Vec3, c3: b2Vec3): b2Mat33;
        Copy(other: b2Mat33): b2Mat33;
        SetIdentity(): b2Mat33;
        SetZero(): b2Mat33;
        SelfAddM(M: b2Mat33): b2Mat33;
        Solve33(b_x: number, b_y: number, b_z: number, out: b2Vec3): b2Vec3;
        Solve22(b_x: number, b_y: number, out: b2Vec2): b2Vec2;
        GetInverse22(M: b2Mat33): void;
        GetSymInverse33(M: b2Mat33): void;
        static MulM33V3(A: b2Mat33, v: b2Vec3, out: b2Vec3): b2Vec3;
        static MulM33XYZ(A: b2Mat33, x: number, y: number, z: number, out: b2Vec3): b2Vec3;
        static MulM33V2(A: b2Mat33, v: b2Vec2, out: b2Vec2): b2Vec2;
        static MulM33XY(A: b2Mat33, x: number, y: number, out: b2Vec2): b2Vec2;
    }
}
declare module "Box2D/Box2D/Common/Math/b2Rot" {
    import { b2Vec2 } from "Box2D/Box2D/Common/Math/b2Vec2";
    export class b2Rot {
        static IDENTITY: b2Rot;
        s: number;
        c: number;
        constructor(angle?: number);
        Clone(): b2Rot;
        Copy(other: b2Rot): b2Rot;
        SetAngle(angle: number): b2Rot;
        SetIdentity(): b2Rot;
        GetAngle(): number;
        GetXAxis(out: b2Vec2): b2Vec2;
        GetYAxis(out: b2Vec2): b2Vec2;
        static MulRR(q: b2Rot, r: b2Rot, out: b2Rot): b2Rot;
        static MulTRR(q: b2Rot, r: b2Rot, out: b2Rot): b2Rot;
        static MulRV(q: b2Rot, v: b2Vec2, out: b2Vec2): b2Vec2;
        static MulTRV(q: b2Rot, v: b2Vec2, out: b2Vec2): b2Vec2;
    }
}
declare module "Box2D/Box2D/Common/Math/b2Transform" {
    import { b2Vec2 } from "Box2D/Box2D/Common/Math/b2Vec2";
    import { b2Rot } from "Box2D/Box2D/Common/Math/b2Rot";
    export class b2Transform {
        static IDENTITY: b2Transform;
        readonly p: b2Vec2;
        readonly q: b2Rot;
        Clone(): b2Transform;
        Copy(other: b2Transform): b2Transform;
        SetIdentity(): b2Transform;
        SetPositionRotation(position: b2Vec2, q: b2Rot): b2Transform;
        SetPositionAngle(pos: b2Vec2, a: number): b2Transform;
        SetPosition(position: b2Vec2): b2Transform;
        SetPositionXY(x: number, y: number): b2Transform;
        SetRotation(rotation: b2Rot): b2Transform;
        SetRotationAngle(radians: number): b2Transform;
        GetPosition(): b2Vec2;
        GetRotation(): b2Rot;
        GetRotationAngle(): number;
        GetAngle(): number;
        static MulXV(T: b2Transform, v: b2Vec2, out: b2Vec2): b2Vec2;
        static MulTXV(T: b2Transform, v: b2Vec2, out: b2Vec2): b2Vec2;
        static MulXX(A: b2Transform, B: b2Transform, out: b2Transform): b2Transform;
        static MulTXX(A: b2Transform, B: b2Transform, out: b2Transform): b2Transform;
    }
}
declare module "Box2D/Box2D/Common/Math/b2Sweep" {
    import { b2Vec2 } from "Box2D/Box2D/Common/Math/b2Vec2";
    import { b2Transform } from "Box2D/Box2D/Common/Math/b2Transform";
    export class b2Sweep {
        readonly localCenter: b2Vec2;
        readonly c0: b2Vec2;
        readonly c: b2Vec2;
        a0: number;
        a: number;
        alpha0: number;
        Clone(): b2Sweep;
        Copy(other: b2Sweep): b2Sweep;
        GetTransform(xf: b2Transform, beta: number): b2Transform;
        Advance(alpha: number): void;
        Normalize(): void;
    }
}
declare module "Box2D/Box2D/Common/b2Math" {
    export { b2Vec2 } from "Box2D/Box2D/Common/Math/b2Vec2";
    export { b2Vec3 } from "Box2D/Box2D/Common/Math/b2Vec3";
    export { b2Mat22 } from "Box2D/Box2D/Common/Math/b2Mat22";
    export { b2Mat33 } from "Box2D/Box2D/Common/Math/b2Mat33";
    export { b2Transform } from "Box2D/Box2D/Common/Math/b2Transform";
    export { b2Rot } from "Box2D/Box2D/Common/Math/b2Rot";
    export { b2Sweep } from "Box2D/Box2D/Common/Math/b2Sweep";
    export const b2_pi_over_180: number;
    export const b2_180_over_pi: number;
    export const b2_two_pi: number;
    export const b2Abs: (x: number) => number;
    export const b2Min: (...values: number[]) => number;
    export const b2Max: (...values: number[]) => number;
    export function b2Clamp(a: number, lo: number, hi: number): number;
    export function b2Swap<T>(a: T[], b: T[]): void;
    export function b2IsValid(n: number): boolean;
    export function b2Sq(n: number): number;
    export function b2InvSqrt(n: number): number;
    export const b2Sqrt: (x: number) => number;
    export const b2Pow: (x: number, y: number) => number;
    export function b2DegToRad(degrees: number): number;
    export function b2RadToDeg(radians: number): number;
    export const b2Cos: (x: number) => number;
    export const b2Sin: (x: number) => number;
    export const b2Acos: (x: number) => number;
    export const b2Asin: (x: number) => number;
    export const b2Atan2: (y: number, x: number) => number;
    export function b2NextPowerOfTwo(x: number): number;
    export function b2IsPowerOfTwo(x: number): boolean;
    export function b2Random(): number;
    export function b2RandomRange(lo: number, hi: number): number;
}
declare module "Box2D/Box2D/Common/b2Draw" {
    import { b2Vec2, b2Transform } from "Box2D/Box2D/Common/b2Math";
    export class b2Color {
        static RED: b2Color;
        static GREEN: b2Color;
        static BLUE: b2Color;
        r: number;
        g: number;
        b: number;
        a: number;
        constructor(rr?: number, gg?: number, bb?: number, aa?: number);
        Clone(): b2Color;
        Copy(other: b2Color): b2Color;
        IsEqual(color: b2Color): boolean;
        IsZero(): boolean;
        GetColor(out: b2Color): b2Color;
        SetColor(color: b2Color): void;
        Set(a0: number | b2Color, a1?: number, a2?: number, a3?: number): void;
        SetByteRGB(r: number, g: number, b: number): this;
        SetByteRGBA(r: number, g: number, b: number, a: number): this;
        SetRGB(rr: number, gg: number, bb: number): b2Color;
        SetRGBA(rr: number, gg: number, bb: number, aa: number): b2Color;
        SelfAdd(color: b2Color): b2Color;
        Add(color: b2Color, out: b2Color): b2Color;
        SelfSub(color: b2Color): b2Color;
        Sub(color: b2Color, out: b2Color): b2Color;
        SelfMul_0_1(s: number): b2Color;
        Mul_0_1(s: number, out: b2Color): b2Color;
        Mix(mixColor: b2Color, strength: number): void;
        static MixColors(colorA: b2Color, colorB: b2Color, strength: number): void;
        MakeStyleString(alpha?: number): string;
        static MakeStyleString(r: number, g: number, b: number, a?: number): string;
    }
    export enum b2DrawFlags {
        e_none = 0,
        e_shapeBit = 1,
        e_jointBit = 2,
        e_aabbBit = 4,
        e_pairBit = 8,
        e_centerOfMassBit = 16,
        e_particleBit = 32,
        e_controllerBit = 64,
        e_all = 63,
    }
    export class b2Draw {
        m_drawFlags: b2DrawFlags;
        SetFlags(flags: b2DrawFlags): void;
        GetFlags(): b2DrawFlags;
        AppendFlags(flags: b2DrawFlags): void;
        ClearFlags(flags: b2DrawFlags): void;
        PushTransform(xf: b2Transform): void;
        PopTransform(xf: b2Transform): void;
        DrawPolygon(vertices: b2Vec2[], vertexCount: number, color: b2Color): void;
        DrawSolidPolygon(vertices: b2Vec2[], vertexCount: number, color: b2Color): void;
        DrawCircle(center: b2Vec2, radius: number, color: b2Color): void;
        DrawSolidCircle(center: b2Vec2, radius: number, axis: b2Vec2, color: b2Color): void;
        DrawParticles(centers: b2Vec2[], radius: number, colors: b2Color[], count: number): void;
        DrawSegment(p1: b2Vec2, p2: b2Vec2, color: b2Color): void;
        DrawTransform(xf: b2Transform): void;
    }
}
declare module "Box2D/Box2D/Common/b2Timer" {
    export class b2Timer {
        m_start: number;
        Reset(): b2Timer;
        GetMilliseconds(): number;
    }
    export class b2Counter {
        m_count: number;
        m_min_count: number;
        m_max_count: number;
        GetCount(): number;
        GetMinCount(): number;
        GetMaxCount(): number;
        ResetCount(): number;
        ResetMinCount(): void;
        ResetMaxCount(): void;
        Increment(): void;
        Decrement(): void;
    }
}
declare module "Box2D/Box2D/Common/b2GrowableStack" {
    export class b2GrowableStack<T> {
        m_stack: T[];
        m_count: number;
        constructor(N: number);
        Reset(): this;
        Push(element: T): void;
        Pop(): T;
        GetCount(): number;
    }
}
declare module "Box2D/Box2D/Common/b2BlockAllocator" {
    export class b2BlockAllocator {
    }
}
declare module "Box2D/Box2D/Common/b2StackAllocator" {
    export class b2StackAllocator {
    }
}
declare module "Box2D/Box2D/Collision/b2Distance" {
    import { b2Vec2, b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2Shape } from "Box2D/Box2D/Collision/Shapes/b2Shape";
    export class b2DistanceProxy {
        m_buffer: b2Vec2[];
        m_vertices: b2Vec2[];
        m_count: number;
        m_radius: number;
        Reset(): b2DistanceProxy;
        SetShape(shape: b2Shape, index: number): void;
        GetSupport(d: b2Vec2): number;
        GetSupportVertex(d: b2Vec2): b2Vec2;
        GetVertexCount(): number;
        GetVertex(index: number): b2Vec2;
    }
    export class b2SimplexCache {
        metric: number;
        count: number;
        indexA: number[];
        indexB: number[];
        Reset(): b2SimplexCache;
    }
    export class b2DistanceInput {
        proxyA: b2DistanceProxy;
        proxyB: b2DistanceProxy;
        transformA: b2Transform;
        transformB: b2Transform;
        useRadii: boolean;
        Reset(): b2DistanceInput;
    }
    export class b2DistanceOutput {
        pointA: b2Vec2;
        pointB: b2Vec2;
        distance: number;
        iterations: number;
        Reset(): b2DistanceOutput;
    }
    export let b2_gjkCalls: number;
    export let b2_gjkIters: number;
    export let b2_gjkMaxIters: number;
    export function b2_gjk_reset(): void;
    export class b2SimplexVertex {
        wA: b2Vec2;
        wB: b2Vec2;
        w: b2Vec2;
        a: number;
        indexA: number;
        indexB: number;
        Copy(other: b2SimplexVertex): b2SimplexVertex;
    }
    export class b2Simplex {
        m_v1: b2SimplexVertex;
        m_v2: b2SimplexVertex;
        m_v3: b2SimplexVertex;
        m_vertices: b2SimplexVertex[];
        m_count: number;
        constructor();
        ReadCache(cache: b2SimplexCache, proxyA: b2DistanceProxy, transformA: b2Transform, proxyB: b2DistanceProxy, transformB: b2Transform): void;
        WriteCache(cache: b2SimplexCache): void;
        GetSearchDirection(out: b2Vec2): b2Vec2;
        GetClosestPoint(out: b2Vec2): b2Vec2;
        GetWitnessPoints(pA: b2Vec2, pB: b2Vec2): void;
        GetMetric(): number;
        Solve2(): void;
        Solve3(): void;
        private static s_e12;
        private static s_e13;
        private static s_e23;
    }
    export function b2Distance(output: b2DistanceOutput, cache: b2SimplexCache, input: b2DistanceInput): void;
}
declare module "Box2D/Box2D/Collision/Shapes/b2Shape" {
    import { b2Vec2, b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2AABB, b2RayCastInput, b2RayCastOutput } from "Box2D/Box2D/Collision/b2Collision";
    import { b2DistanceProxy } from "Box2D/Box2D/Collision/b2Distance";
    export class b2MassData {
        mass: number;
        center: b2Vec2;
        I: number;
    }
    export enum b2ShapeType {
        e_unknown = -1,
        e_circleShape = 0,
        e_edgeShape = 1,
        e_polygonShape = 2,
        e_chainShape = 3,
        e_shapeTypeCount = 4,
    }
    export abstract class b2Shape {
        m_type: b2ShapeType;
        m_radius: number;
        constructor(type: b2ShapeType, radius: number);
        abstract Clone(): b2Shape;
        Copy(other: b2Shape): b2Shape;
        GetType(): b2ShapeType;
        abstract GetChildCount(): number;
        abstract TestPoint(xf: b2Transform, p: b2Vec2): boolean;
        abstract ComputeDistance(xf: b2Transform, p: b2Vec2, normal: b2Vec2, childIndex: number): number;
        abstract RayCast(output: b2RayCastOutput, input: b2RayCastInput, transform: b2Transform, childIndex: number): boolean;
        abstract ComputeAABB(aabb: b2AABB, xf: b2Transform, childIndex: number): void;
        abstract ComputeMass(massData: b2MassData, density: number): void;
        abstract SetupDistanceProxy(proxy: b2DistanceProxy, index: number): void;
        abstract ComputeSubmergedArea(normal: b2Vec2, offset: number, xf: b2Transform, c: b2Vec2): number;
        abstract Dump(log: (format: string, ...args: any[]) => void): void;
    }
}
declare module "Box2D/Box2D/Collision/b2Collision" {
    import { b2Vec2, b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2Shape } from "Box2D/Box2D/Collision/Shapes/b2Shape";
    export enum b2ContactFeatureType {
        e_vertex = 0,
        e_face = 1,
    }
    export class b2ContactFeature {
        _key: number;
        _key_invalid: boolean;
        _indexA: number;
        _indexB: number;
        _typeA: number;
        _typeB: number;
        constructor();
        key: number;
        indexA: number;
        indexB: number;
        typeA: number;
        typeB: number;
    }
    export class b2ContactID {
        cf: b2ContactFeature;
        Copy(o: b2ContactID): b2ContactID;
        Clone(): b2ContactID;
        key: number;
    }
    export class b2ManifoldPoint {
        localPoint: b2Vec2;
        normalImpulse: number;
        tangentImpulse: number;
        id: b2ContactID;
        static MakeArray(length: number): b2ManifoldPoint[];
        Reset(): void;
        Copy(o: b2ManifoldPoint): b2ManifoldPoint;
    }
    export enum b2ManifoldType {
        e_unknown = -1,
        e_circles = 0,
        e_faceA = 1,
        e_faceB = 2,
    }
    export class b2Manifold {
        points: b2ManifoldPoint[];
        localNormal: b2Vec2;
        localPoint: b2Vec2;
        type: number;
        pointCount: number;
        Reset(): void;
        Copy(o: b2Manifold): b2Manifold;
        Clone(): b2Manifold;
    }
    export class b2WorldManifold {
        normal: b2Vec2;
        points: b2Vec2[];
        separations: number[];
        private static Initialize_s_pointA;
        private static Initialize_s_pointB;
        private static Initialize_s_cA;
        private static Initialize_s_cB;
        private static Initialize_s_planePoint;
        private static Initialize_s_clipPoint;
        Initialize(manifold: b2Manifold, xfA: b2Transform, radiusA: number, xfB: b2Transform, radiusB: number): void;
    }
    export enum b2PointState {
        b2_nullState = 0,
        b2_addState = 1,
        b2_persistState = 2,
        b2_removeState = 3,
    }
    export function b2GetPointStates(state1: b2PointState[], state2: b2PointState[], manifold1: b2Manifold, manifold2: b2Manifold): void;
    export class b2ClipVertex {
        v: b2Vec2;
        id: b2ContactID;
        static MakeArray(length: number): b2ClipVertex[];
        Copy(other: b2ClipVertex): b2ClipVertex;
    }
    export class b2RayCastInput {
        p1: b2Vec2;
        p2: b2Vec2;
        maxFraction: number;
        Copy(o: b2RayCastInput): b2RayCastInput;
    }
    export class b2RayCastOutput {
        normal: b2Vec2;
        fraction: number;
        Copy(o: b2RayCastOutput): b2RayCastOutput;
    }
    export class b2AABB {
        lowerBound: b2Vec2;
        upperBound: b2Vec2;
        private m_cache_center;
        private m_cache_extent;
        Copy(o: b2AABB): b2AABB;
        IsValid(): boolean;
        GetCenter(): b2Vec2;
        GetExtents(): b2Vec2;
        GetPerimeter(): number;
        Combine1(aabb: b2AABB): b2AABB;
        Combine2(aabb1: b2AABB, aabb2: b2AABB): b2AABB;
        static Combine(aabb1: b2AABB, aabb2: b2AABB, out: b2AABB): b2AABB;
        Contains(aabb: b2AABB): boolean;
        RayCast(output: b2RayCastOutput, input: b2RayCastInput): boolean;
        TestOverlap(other: b2AABB): boolean;
    }
    export function b2TestOverlapAABB(a: b2AABB, b: b2AABB): boolean;
    export function b2ClipSegmentToLine(vOut: b2ClipVertex[], vIn: b2ClipVertex[], normal: b2Vec2, offset: number, vertexIndexA: number): number;
    export function b2TestOverlapShape(shapeA: b2Shape, indexA: number, shapeB: b2Shape, indexB: number, xfA: b2Transform, xfB: b2Transform): boolean;
}
declare module "Box2D/Box2D/Collision/b2DynamicTree" {
    import { b2Vec2 } from "Box2D/Box2D/Common/b2Math";
    import { b2GrowableStack } from "Box2D/Box2D/Common/b2GrowableStack";
    import { b2AABB, b2RayCastInput } from "Box2D/Box2D/Collision/b2Collision";
    export class b2TreeNode {
        m_id: number;
        aabb: b2AABB;
        userData: any;
        parent: b2TreeNode | null;
        child1: b2TreeNode | null;
        child2: b2TreeNode | null;
        height: number;
        constructor(id?: number);
        IsLeaf(): boolean;
    }
    export class b2DynamicTree {
        m_root: b2TreeNode | null;
        m_freeList: b2TreeNode | null;
        m_path: number;
        m_insertionCount: number;
        static s_stack: b2GrowableStack<b2TreeNode>;
        static s_r: b2Vec2;
        static s_v: b2Vec2;
        static s_abs_v: b2Vec2;
        static s_segmentAABB: b2AABB;
        static s_subInput: b2RayCastInput;
        static s_combinedAABB: b2AABB;
        static s_aabb: b2AABB;
        GetUserData(proxy: b2TreeNode): any;
        GetFatAABB(proxy: b2TreeNode): b2AABB;
        Query(callback: (node: b2TreeNode) => boolean, aabb: b2AABB): void;
        RayCast(callback: (input: b2RayCastInput, node: b2TreeNode) => number, input: b2RayCastInput): void;
        static s_node_id: number;
        AllocateNode(): b2TreeNode;
        FreeNode(node: b2TreeNode): void;
        CreateProxy(aabb: b2AABB, userData: any): b2TreeNode;
        DestroyProxy(proxy: b2TreeNode): void;
        MoveProxy(proxy: b2TreeNode, aabb: b2AABB, displacement: b2Vec2): boolean;
        InsertLeaf(leaf: b2TreeNode): void;
        RemoveLeaf(leaf: b2TreeNode): void;
        Balance(A: b2TreeNode): b2TreeNode;
        GetHeight(): number;
        private static GetAreaNode(node);
        GetAreaRatio(): number;
        ComputeHeightNode(node: b2TreeNode): number;
        ComputeHeight(): number;
        ValidateStructure(index: b2TreeNode): void;
        ValidateMetrics(index: b2TreeNode): void;
        Validate(): void;
        private static GetMaxBalanceNode(node, maxBalance);
        GetMaxBalance(): number;
        RebuildBottomUp(): void;
        private static ShiftOriginNode(node, newOrigin);
        ShiftOrigin(newOrigin: b2Vec2): void;
    }
}
declare module "Box2D/Box2D/Collision/b2TimeOfImpact" {
    import { b2Vec2, b2Sweep } from "Box2D/Box2D/Common/b2Math";
    import { b2DistanceProxy, b2SimplexCache } from "Box2D/Box2D/Collision/b2Distance";
    export let b2_toiTime: number;
    export let b2_toiMaxTime: number;
    export let b2_toiCalls: number;
    export let b2_toiIters: number;
    export let b2_toiMaxIters: number;
    export let b2_toiRootIters: number;
    export let b2_toiMaxRootIters: number;
    export function b2_toi_reset(): void;
    export class b2TOIInput {
        proxyA: b2DistanceProxy;
        proxyB: b2DistanceProxy;
        sweepA: b2Sweep;
        sweepB: b2Sweep;
        tMax: number;
    }
    export enum b2TOIOutputState {
        e_unknown = 0,
        e_failed = 1,
        e_overlapped = 2,
        e_touching = 3,
        e_separated = 4,
    }
    export class b2TOIOutput {
        state: b2TOIOutputState;
        t: number;
    }
    export enum b2SeparationFunctionType {
        e_unknown = -1,
        e_points = 0,
        e_faceA = 1,
        e_faceB = 2,
    }
    export class b2SeparationFunction {
        m_proxyA: b2DistanceProxy;
        m_proxyB: b2DistanceProxy;
        m_sweepA: b2Sweep;
        m_sweepB: b2Sweep;
        m_type: b2SeparationFunctionType;
        m_localPoint: b2Vec2;
        m_axis: b2Vec2;
        Initialize(cache: b2SimplexCache, proxyA: b2DistanceProxy, sweepA: b2Sweep, proxyB: b2DistanceProxy, sweepB: b2Sweep, t1: number): number;
        FindMinSeparation(indexA: number[], indexB: number[], t: number): number;
        Evaluate(indexA: number, indexB: number, t: number): number;
    }
    export function b2TimeOfImpact(output: b2TOIOutput, input: b2TOIInput): void;
}
declare module "Box2D/Box2D/Dynamics/b2TimeStep" {
    import { b2Vec2 } from "Box2D/Box2D/Common/b2Math";
    export class b2Profile {
        step: number;
        collide: number;
        solve: number;
        solveInit: number;
        solveVelocity: number;
        solvePosition: number;
        broadphase: number;
        solveTOI: number;
        Reset(): this;
    }
    export class b2TimeStep {
        dt: number;
        inv_dt: number;
        dtRatio: number;
        velocityIterations: number;
        positionIterations: number;
        particleIterations: number;
        warmStarting: boolean;
        Copy(step: b2TimeStep): b2TimeStep;
    }
    export class b2Position {
        c: b2Vec2;
        a: number;
        static MakeArray(length: number): b2Position[];
    }
    export class b2Velocity {
        v: b2Vec2;
        w: number;
        static MakeArray(length: number): b2Velocity[];
    }
    export class b2SolverData {
        step: b2TimeStep;
        positions: b2Position[];
        velocities: b2Velocity[];
    }
}
declare module "Box2D/Box2D/Dynamics/Joints/b2Joint" {
    import { b2Vec2 } from "Box2D/Box2D/Common/b2Math";
    import { b2Body } from "Box2D/Box2D/Dynamics/b2Body";
    import { b2SolverData } from "Box2D/Box2D/Dynamics/b2TimeStep";
    export enum b2JointType {
        e_unknownJoint = 0,
        e_revoluteJoint = 1,
        e_prismaticJoint = 2,
        e_distanceJoint = 3,
        e_pulleyJoint = 4,
        e_mouseJoint = 5,
        e_gearJoint = 6,
        e_wheelJoint = 7,
        e_weldJoint = 8,
        e_frictionJoint = 9,
        e_ropeJoint = 10,
        e_motorJoint = 11,
        e_areaJoint = 12,
    }
    export enum b2LimitState {
        e_inactiveLimit = 0,
        e_atLowerLimit = 1,
        e_atUpperLimit = 2,
        e_equalLimits = 3,
    }
    export class b2Jacobian {
        linear: b2Vec2;
        angularA: number;
        angularB: number;
        SetZero(): b2Jacobian;
        Set(x: b2Vec2, a1: number, a2: number): b2Jacobian;
    }
    export class b2JointEdge {
        readonly other: b2Body;
        readonly joint: b2Joint;
        prev: b2JointEdge | null;
        next: b2JointEdge | null;
        constructor(joint: b2Joint, other: b2Body);
    }
    export class b2JointDef {
        type: b2JointType;
        userData: any;
        bodyA: b2Body;
        bodyB: b2Body;
        collideConnected: boolean;
        constructor(type: b2JointType);
    }
    export class b2Joint {
        m_type: b2JointType;
        m_prev: b2Joint | null;
        m_next: b2Joint | null;
        m_edgeA: b2JointEdge;
        m_edgeB: b2JointEdge;
        m_bodyA: b2Body;
        m_bodyB: b2Body;
        m_index: number;
        m_islandFlag: boolean;
        m_collideConnected: boolean;
        m_userData: any;
        constructor(def: b2JointDef);
        GetType(): b2JointType;
        GetBodyA(): b2Body;
        GetBodyB(): b2Body;
        GetAnchorA(out: b2Vec2): b2Vec2;
        GetAnchorB(out: b2Vec2): b2Vec2;
        GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2;
        GetReactionTorque(inv_dt: number): number;
        GetNext(): b2Joint | null;
        GetUserData(): any;
        SetUserData(data: any): void;
        IsActive(): boolean;
        GetCollideConnected(): boolean;
        Dump(log: (format: string, ...args: any[]) => void): void;
        ShiftOrigin(newOrigin: b2Vec2): void;
        InitVelocityConstraints(data: b2SolverData): void;
        SolveVelocityConstraints(data: b2SolverData): void;
        SolvePositionConstraints(data: b2SolverData): boolean;
    }
}
declare module "Box2D/Box2D/Dynamics/b2Fixture" {
    import { b2Vec2, b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2BroadPhase } from "Box2D/Box2D/Collision/b2BroadPhase";
    import { b2AABB, b2RayCastInput, b2RayCastOutput } from "Box2D/Box2D/Collision/b2Collision";
    import { b2TreeNode } from "Box2D/Box2D/Collision/b2DynamicTree";
    import { b2Shape, b2ShapeType, b2MassData } from "Box2D/Box2D/Collision/Shapes/b2Shape";
    import { b2Body } from "Box2D/Box2D/Dynamics/b2Body";
    export class b2Filter {
        categoryBits: number;
        maskBits: number;
        groupIndex: number;
        Clone(): b2Filter;
        Copy(other: b2Filter): b2Filter;
    }
    export class b2FixtureDef {
        shape: b2Shape;
        userData: any;
        friction: number;
        restitution: number;
        density: number;
        isSensor: boolean;
        filter: b2Filter;
    }
    export class b2FixtureProxy {
        aabb: b2AABB;
        fixture: b2Fixture;
        childIndex: number;
        treeNode: b2TreeNode;
        constructor(fixture: b2Fixture);
    }
    export class b2Fixture {
        m_density: number;
        m_next: b2Fixture | null;
        readonly m_body: b2Body;
        readonly m_shape: b2Shape;
        m_friction: number;
        m_restitution: number;
        m_proxies: b2FixtureProxy[];
        m_proxyCount: number;
        m_filter: b2Filter;
        m_isSensor: boolean;
        m_userData: any;
        constructor(def: b2FixtureDef, body: b2Body);
        GetType(): b2ShapeType;
        GetShape(): b2Shape;
        SetSensor(sensor: boolean): void;
        IsSensor(): boolean;
        SetFilterData(filter: b2Filter): void;
        GetFilterData(): b2Filter;
        Refilter(): void;
        GetBody(): b2Body;
        GetNext(): b2Fixture;
        GetUserData(): any;
        SetUserData(data: any): void;
        TestPoint(p: b2Vec2): boolean;
        ComputeDistance(p: b2Vec2, normal: b2Vec2, childIndex: number): number;
        RayCast(output: b2RayCastOutput, input: b2RayCastInput, childIndex: number): boolean;
        GetMassData(massData?: b2MassData): b2MassData;
        SetDensity(density: number): void;
        GetDensity(): number;
        GetFriction(): number;
        SetFriction(friction: number): void;
        GetRestitution(): number;
        SetRestitution(restitution: number): void;
        GetAABB(childIndex: number): b2AABB;
        Dump(log: (format: string, ...args: any[]) => void, bodyIndex: number): void;
        Create(def: b2FixtureDef): void;
        Destroy(): void;
        CreateProxies(broadPhase: b2BroadPhase, xf: b2Transform): void;
        DestroyProxies(broadPhase: b2BroadPhase): void;
        private static Synchronize_s_aabb1;
        private static Synchronize_s_aabb2;
        private static Synchronize_s_displacement;
        Synchronize(broadPhase: b2BroadPhase, transform1: b2Transform, transform2: b2Transform): void;
    }
}
declare module "Box2D/Box2D/Collision/Shapes/b2EdgeShape" {
    import { b2Vec2, b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2AABB, b2RayCastInput, b2RayCastOutput } from "Box2D/Box2D/Collision/b2Collision";
    import { b2DistanceProxy } from "Box2D/Box2D/Collision/b2Distance";
    import { b2MassData } from "Box2D/Box2D/Collision/Shapes/b2Shape";
    import { b2Shape } from "Box2D/Box2D/Collision/Shapes/b2Shape";
    export class b2EdgeShape extends b2Shape {
        m_vertex1: b2Vec2;
        m_vertex2: b2Vec2;
        m_vertex0: b2Vec2;
        m_vertex3: b2Vec2;
        m_hasVertex0: boolean;
        m_hasVertex3: boolean;
        constructor();
        Set(v1: b2Vec2, v2: b2Vec2): b2EdgeShape;
        Clone(): b2EdgeShape;
        Copy(other: b2EdgeShape): b2EdgeShape;
        GetChildCount(): number;
        TestPoint(xf: b2Transform, p: b2Vec2): boolean;
        private static ComputeDistance_s_v1;
        private static ComputeDistance_s_v2;
        private static ComputeDistance_s_d;
        private static ComputeDistance_s_s;
        ComputeDistance(xf: b2Transform, p: b2Vec2, normal: b2Vec2, childIndex: number): number;
        private static RayCast_s_p1;
        private static RayCast_s_p2;
        private static RayCast_s_d;
        private static RayCast_s_e;
        private static RayCast_s_q;
        private static RayCast_s_r;
        RayCast(output: b2RayCastOutput, input: b2RayCastInput, xf: b2Transform, childIndex: number): boolean;
        private static ComputeAABB_s_v1;
        private static ComputeAABB_s_v2;
        ComputeAABB(aabb: b2AABB, xf: b2Transform, childIndex: number): void;
        ComputeMass(massData: b2MassData, density: number): void;
        SetupDistanceProxy(proxy: b2DistanceProxy, index: number): void;
        ComputeSubmergedArea(normal: b2Vec2, offset: number, xf: b2Transform, c: b2Vec2): number;
        Dump(log: (format: string, ...args: any[]) => void): void;
    }
}
declare module "Box2D/Box2D/Collision/Shapes/b2ChainShape" {
    import { b2Vec2, b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2AABB, b2RayCastInput, b2RayCastOutput } from "Box2D/Box2D/Collision/b2Collision";
    import { b2DistanceProxy } from "Box2D/Box2D/Collision/b2Distance";
    import { b2MassData } from "Box2D/Box2D/Collision/Shapes/b2Shape";
    import { b2Shape } from "Box2D/Box2D/Collision/Shapes/b2Shape";
    import { b2EdgeShape } from "Box2D/Box2D/Collision/Shapes/b2EdgeShape";
    export class b2ChainShape extends b2Shape {
        m_vertices: b2Vec2[];
        m_count: number;
        m_prevVertex: b2Vec2;
        m_nextVertex: b2Vec2;
        m_hasPrevVertex: boolean;
        m_hasNextVertex: boolean;
        constructor();
        CreateLoop(vertices: b2Vec2[], count?: number): b2ChainShape;
        CreateChain(vertices: b2Vec2[], count?: number): b2ChainShape;
        SetPrevVertex(prevVertex: b2Vec2): b2ChainShape;
        SetNextVertex(nextVertex: b2Vec2): b2ChainShape;
        Clone(): b2ChainShape;
        Copy(other: b2ChainShape): b2ChainShape;
        GetChildCount(): number;
        GetChildEdge(edge: b2EdgeShape, index: number): void;
        TestPoint(xf: b2Transform, p: b2Vec2): boolean;
        private static ComputeDistance_s_edgeShape;
        ComputeDistance(xf: b2Transform, p: b2Vec2, normal: b2Vec2, childIndex: number): number;
        private static RayCast_s_edgeShape;
        RayCast(output: b2RayCastOutput, input: b2RayCastInput, xf: b2Transform, childIndex: number): boolean;
        private static ComputeAABB_s_v1;
        private static ComputeAABB_s_v2;
        ComputeAABB(aabb: b2AABB, xf: b2Transform, childIndex: number): void;
        ComputeMass(massData: b2MassData, density: number): void;
        SetupDistanceProxy(proxy: b2DistanceProxy, index: number): void;
        ComputeSubmergedArea(normal: b2Vec2, offset: number, xf: b2Transform, c: b2Vec2): number;
        Dump(log: (format: string, ...args: any[]) => void): void;
    }
}
declare module "Box2D/Box2D/Collision/Shapes/b2CircleShape" {
    import { b2Vec2, b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2AABB, b2RayCastInput, b2RayCastOutput } from "Box2D/Box2D/Collision/b2Collision";
    import { b2DistanceProxy } from "Box2D/Box2D/Collision/b2Distance";
    import { b2MassData } from "Box2D/Box2D/Collision/Shapes/b2Shape";
    import { b2Shape } from "Box2D/Box2D/Collision/Shapes/b2Shape";
    export class b2CircleShape extends b2Shape {
        m_p: b2Vec2;
        constructor(radius?: number);
        Clone(): b2CircleShape;
        Copy(other: b2CircleShape): b2CircleShape;
        GetChildCount(): number;
        private static TestPoint_s_center;
        private static TestPoint_s_d;
        TestPoint(transform: b2Transform, p: b2Vec2): boolean;
        private static ComputeDistance_s_center;
        ComputeDistance(xf: b2Transform, p: b2Vec2, normal: b2Vec2, childIndex: number): number;
        private static RayCast_s_position;
        private static RayCast_s_s;
        private static RayCast_s_r;
        RayCast(output: b2RayCastOutput, input: b2RayCastInput, transform: b2Transform, childIndex: number): boolean;
        private static ComputeAABB_s_p;
        ComputeAABB(aabb: b2AABB, transform: b2Transform, childIndex: number): void;
        ComputeMass(massData: b2MassData, density: number): void;
        SetupDistanceProxy(proxy: b2DistanceProxy, index: number): void;
        ComputeSubmergedArea(normal: b2Vec2, offset: number, xf: b2Transform, c: b2Vec2): number;
        Dump(log: (format: string, ...args: any[]) => void): void;
    }
}
declare module "Box2D/Box2D/Collision/Shapes/b2PolygonShape" {
    import { b2Vec2, b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2AABB, b2RayCastInput, b2RayCastOutput } from "Box2D/Box2D/Collision/b2Collision";
    import { b2DistanceProxy } from "Box2D/Box2D/Collision/b2Distance";
    import { b2MassData } from "Box2D/Box2D/Collision/Shapes/b2Shape";
    import { b2Shape } from "Box2D/Box2D/Collision/Shapes/b2Shape";
    export class b2PolygonShape extends b2Shape {
        m_centroid: b2Vec2;
        m_vertices: b2Vec2[];
        m_normals: b2Vec2[];
        m_count: number;
        constructor();
        Clone(): b2PolygonShape;
        Copy(other: b2PolygonShape): b2PolygonShape;
        GetChildCount(): number;
        private static Set_s_ps;
        private static Set_s_hull;
        private static Set_s_r;
        private static Set_s_v;
        Set(vertices: b2Vec2[], count?: number, start?: number): b2PolygonShape;
        SetAsArray(vertices: b2Vec2[], count?: number): b2PolygonShape;
        SetAsBox(hx: number, hy: number, center?: b2Vec2, angle?: number): b2PolygonShape;
        private static TestPoint_s_pLocal;
        TestPoint(xf: b2Transform, p: b2Vec2): boolean;
        private static ComputeDistance_s_pLocal;
        private static ComputeDistance_s_normalForMaxDistance;
        private static ComputeDistance_s_minDistance;
        private static ComputeDistance_s_distance;
        ComputeDistance(xf: b2Transform, p: b2Vec2, normal: b2Vec2, childIndex: number): number;
        private static RayCast_s_p1;
        private static RayCast_s_p2;
        private static RayCast_s_d;
        RayCast(output: b2RayCastOutput, input: b2RayCastInput, xf: b2Transform, childIndex: number): boolean;
        private static ComputeAABB_s_v;
        ComputeAABB(aabb: b2AABB, xf: b2Transform, childIndex: number): void;
        private static ComputeMass_s_center;
        private static ComputeMass_s_s;
        private static ComputeMass_s_e1;
        private static ComputeMass_s_e2;
        ComputeMass(massData: b2MassData, density: number): void;
        private static Validate_s_e;
        private static Validate_s_v;
        Validate(): boolean;
        SetupDistanceProxy(proxy: b2DistanceProxy, index: number): void;
        private static ComputeSubmergedArea_s_normalL;
        private static ComputeSubmergedArea_s_depths;
        private static ComputeSubmergedArea_s_md;
        private static ComputeSubmergedArea_s_intoVec;
        private static ComputeSubmergedArea_s_outoVec;
        private static ComputeSubmergedArea_s_center;
        ComputeSubmergedArea(normal: b2Vec2, offset: number, xf: b2Transform, c: b2Vec2): number;
        Dump(log: (format: string, ...args: any[]) => void): void;
        private static ComputeCentroid_s_pRef;
        private static ComputeCentroid_s_e1;
        private static ComputeCentroid_s_e2;
        static ComputeCentroid(vs: b2Vec2[], count: number, out: b2Vec2): b2Vec2;
    }
}
declare module "Box2D/Box2D/Dynamics/Joints/b2DistanceJoint" {
    import { b2Vec2, b2Rot } from "Box2D/Box2D/Common/b2Math";
    import { b2Joint, b2JointDef } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    import { b2SolverData } from "Box2D/Box2D/Dynamics/b2TimeStep";
    import { b2Body } from "Box2D/Box2D/Dynamics/b2Body";
    export class b2DistanceJointDef extends b2JointDef {
        localAnchorA: b2Vec2;
        localAnchorB: b2Vec2;
        length: number;
        frequencyHz: number;
        dampingRatio: number;
        constructor();
        Initialize(b1: b2Body, b2: b2Body, anchor1: b2Vec2, anchor2: b2Vec2): void;
    }
    export class b2DistanceJoint extends b2Joint {
        m_frequencyHz: number;
        m_dampingRatio: number;
        m_bias: number;
        m_localAnchorA: b2Vec2;
        m_localAnchorB: b2Vec2;
        m_gamma: number;
        m_impulse: number;
        m_length: number;
        m_indexA: number;
        m_indexB: number;
        m_u: b2Vec2;
        m_rA: b2Vec2;
        m_rB: b2Vec2;
        m_localCenterA: b2Vec2;
        m_localCenterB: b2Vec2;
        m_invMassA: number;
        m_invMassB: number;
        m_invIA: number;
        m_invIB: number;
        m_mass: number;
        m_qA: b2Rot;
        m_qB: b2Rot;
        m_lalcA: b2Vec2;
        m_lalcB: b2Vec2;
        constructor(def: b2DistanceJointDef);
        GetAnchorA(out: b2Vec2): b2Vec2;
        GetAnchorB(out: b2Vec2): b2Vec2;
        GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2;
        GetReactionTorque(inv_dt: number): number;
        GetLocalAnchorA(): b2Vec2;
        GetLocalAnchorB(): b2Vec2;
        SetLength(length: number): void;
        Length(): number;
        SetFrequency(hz: number): void;
        GetFrequency(): number;
        SetDampingRatio(ratio: number): void;
        GetDampingRatio(): number;
        Dump(log: (format: string, ...args: any[]) => void): void;
        private static InitVelocityConstraints_s_P;
        InitVelocityConstraints(data: b2SolverData): void;
        private static SolveVelocityConstraints_s_vpA;
        private static SolveVelocityConstraints_s_vpB;
        private static SolveVelocityConstraints_s_P;
        SolveVelocityConstraints(data: b2SolverData): void;
        private static SolvePositionConstraints_s_P;
        SolvePositionConstraints(data: b2SolverData): boolean;
    }
}
declare module "Box2D/Box2D/Dynamics/Joints/b2AreaJoint" {
    import { b2Vec2 } from "Box2D/Box2D/Common/b2Math";
    import { b2Joint, b2JointDef } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    import { b2DistanceJoint } from "Box2D/Box2D/Dynamics/Joints/b2DistanceJoint";
    import { b2SolverData } from "Box2D/Box2D/Dynamics/b2TimeStep";
    import { b2Body } from "Box2D/Box2D/Dynamics/b2Body";
    import { b2World } from "Box2D/Box2D/Dynamics/b2World";
    export class b2AreaJointDef extends b2JointDef {
        world: b2World;
        bodies: b2Body[];
        frequencyHz: number;
        dampingRatio: number;
        constructor();
        AddBody(body: b2Body): void;
    }
    export class b2AreaJoint extends b2Joint {
        m_bodies: b2Body[];
        m_frequencyHz: number;
        m_dampingRatio: number;
        m_impulse: number;
        m_targetLengths: number[];
        m_targetArea: number;
        m_normals: b2Vec2[];
        m_joints: b2DistanceJoint[];
        m_deltas: b2Vec2[];
        m_delta: b2Vec2;
        constructor(def: b2AreaJointDef);
        GetAnchorA(out: b2Vec2): b2Vec2;
        GetAnchorB(out: b2Vec2): b2Vec2;
        GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2;
        GetReactionTorque(inv_dt: number): number;
        SetFrequency(hz: number): void;
        GetFrequency(): number;
        SetDampingRatio(ratio: number): void;
        GetDampingRatio(): number;
        Dump(log: (format: string, ...args: any[]) => void): void;
        InitVelocityConstraints(data: b2SolverData): void;
        SolveVelocityConstraints(data: b2SolverData): void;
        SolvePositionConstraints(data: b2SolverData): boolean;
    }
}
declare module "Box2D/Box2D/Dynamics/Joints/b2FrictionJoint" {
    import { b2Vec2, b2Mat22, b2Rot } from "Box2D/Box2D/Common/b2Math";
    import { b2Joint, b2JointDef } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    import { b2SolverData } from "Box2D/Box2D/Dynamics/b2TimeStep";
    import { b2Body } from "Box2D/Box2D/Dynamics/b2Body";
    export class b2FrictionJointDef extends b2JointDef {
        localAnchorA: b2Vec2;
        localAnchorB: b2Vec2;
        maxForce: number;
        maxTorque: number;
        constructor();
        Initialize(bA: b2Body, bB: b2Body, anchor: b2Vec2): void;
    }
    export class b2FrictionJoint extends b2Joint {
        m_localAnchorA: b2Vec2;
        m_localAnchorB: b2Vec2;
        m_linearImpulse: b2Vec2;
        m_angularImpulse: number;
        m_maxForce: number;
        m_maxTorque: number;
        m_indexA: number;
        m_indexB: number;
        m_rA: b2Vec2;
        m_rB: b2Vec2;
        m_localCenterA: b2Vec2;
        m_localCenterB: b2Vec2;
        m_invMassA: number;
        m_invMassB: number;
        m_invIA: number;
        m_invIB: number;
        m_linearMass: b2Mat22;
        m_angularMass: number;
        m_qA: b2Rot;
        m_qB: b2Rot;
        m_lalcA: b2Vec2;
        m_lalcB: b2Vec2;
        m_K: b2Mat22;
        constructor(def: b2FrictionJointDef);
        InitVelocityConstraints(data: b2SolverData): void;
        private static SolveVelocityConstraints_s_Cdot_v2;
        private static SolveVelocityConstraints_s_impulseV;
        private static SolveVelocityConstraints_s_oldImpulseV;
        SolveVelocityConstraints(data: b2SolverData): void;
        SolvePositionConstraints(data: b2SolverData): boolean;
        GetAnchorA(out: b2Vec2): b2Vec2;
        GetAnchorB(out: b2Vec2): b2Vec2;
        GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2;
        GetReactionTorque(inv_dt: number): number;
        GetLocalAnchorA(): b2Vec2;
        GetLocalAnchorB(): b2Vec2;
        SetMaxForce(force: number): void;
        GetMaxForce(): number;
        SetMaxTorque(torque: number): void;
        GetMaxTorque(): number;
        Dump(log: (format: string, ...args: any[]) => void): void;
    }
}
declare module "Box2D/Box2D/Dynamics/Joints/b2PrismaticJoint" {
    import { b2Vec2, b2Mat22, b2Vec3, b2Mat33, b2Rot } from "Box2D/Box2D/Common/b2Math";
    import { b2Body } from "Box2D/Box2D/Dynamics/b2Body";
    import { b2Joint, b2JointDef, b2LimitState } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    import { b2SolverData } from "Box2D/Box2D/Dynamics/b2TimeStep";
    export class b2PrismaticJointDef extends b2JointDef {
        localAnchorA: b2Vec2;
        localAnchorB: b2Vec2;
        localAxisA: b2Vec2;
        referenceAngle: number;
        enableLimit: boolean;
        lowerTranslation: number;
        upperTranslation: number;
        enableMotor: boolean;
        maxMotorForce: number;
        motorSpeed: number;
        constructor();
        Initialize(bA: b2Body, bB: b2Body, anchor: b2Vec2, axis: b2Vec2): void;
    }
    export class b2PrismaticJoint extends b2Joint {
        m_localAnchorA: b2Vec2;
        m_localAnchorB: b2Vec2;
        m_localXAxisA: b2Vec2;
        m_localYAxisA: b2Vec2;
        m_referenceAngle: number;
        m_impulse: b2Vec3;
        m_motorImpulse: number;
        m_lowerTranslation: number;
        m_upperTranslation: number;
        m_maxMotorForce: number;
        m_motorSpeed: number;
        m_enableLimit: boolean;
        m_enableMotor: boolean;
        m_limitState: b2LimitState;
        m_indexA: number;
        m_indexB: number;
        m_localCenterA: b2Vec2;
        m_localCenterB: b2Vec2;
        m_invMassA: number;
        m_invMassB: number;
        m_invIA: number;
        m_invIB: number;
        m_axis: b2Vec2;
        m_perp: b2Vec2;
        m_s1: number;
        m_s2: number;
        m_a1: number;
        m_a2: number;
        m_K: b2Mat33;
        m_K3: b2Mat33;
        m_K2: b2Mat22;
        m_motorMass: number;
        m_qA: b2Rot;
        m_qB: b2Rot;
        m_lalcA: b2Vec2;
        m_lalcB: b2Vec2;
        m_rA: b2Vec2;
        m_rB: b2Vec2;
        constructor(def: b2PrismaticJointDef);
        private static InitVelocityConstraints_s_d;
        private static InitVelocityConstraints_s_P;
        InitVelocityConstraints(data: b2SolverData): void;
        private static SolveVelocityConstraints_s_P;
        private static SolveVelocityConstraints_s_f2r;
        private static SolveVelocityConstraints_s_f1;
        private static SolveVelocityConstraints_s_df3;
        private static SolveVelocityConstraints_s_df2;
        SolveVelocityConstraints(data: b2SolverData): void;
        private static SolvePositionConstraints_s_d;
        private static SolvePositionConstraints_s_impulse;
        private static SolvePositionConstraints_s_impulse1;
        private static SolvePositionConstraints_s_P;
        SolvePositionConstraints(data: b2SolverData): boolean;
        GetAnchorA(out: b2Vec2): b2Vec2;
        GetAnchorB(out: b2Vec2): b2Vec2;
        GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2;
        GetReactionTorque(inv_dt: number): number;
        GetLocalAnchorA(): b2Vec2;
        GetLocalAnchorB(): b2Vec2;
        GetLocalAxisA(): b2Vec2;
        GetReferenceAngle(): number;
        private static GetJointTranslation_s_pA;
        private static GetJointTranslation_s_pB;
        private static GetJointTranslation_s_d;
        private static GetJointTranslation_s_axis;
        GetJointTranslation(): number;
        GetJointSpeed(): number;
        IsLimitEnabled(): boolean;
        EnableLimit(flag: boolean): void;
        GetLowerLimit(): number;
        GetUpperLimit(): number;
        SetLimits(lower: number, upper: number): void;
        IsMotorEnabled(): boolean;
        EnableMotor(flag: boolean): void;
        SetMotorSpeed(speed: number): void;
        GetMotorSpeed(): number;
        SetMaxMotorForce(force: number): void;
        GetMaxMotorForce(): number;
        GetMotorForce(inv_dt: number): number;
        Dump(log: (format: string, ...args: any[]) => void): void;
    }
}
declare module "Box2D/Box2D/Dynamics/Joints/b2RevoluteJoint" {
    import { b2Vec2, b2Mat22, b2Vec3, b2Mat33, b2Rot } from "Box2D/Box2D/Common/b2Math";
    import { b2Body } from "Box2D/Box2D/Dynamics/b2Body";
    import { b2Joint, b2JointDef, b2LimitState } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    import { b2SolverData } from "Box2D/Box2D/Dynamics/b2TimeStep";
    export class b2RevoluteJointDef extends b2JointDef {
        localAnchorA: b2Vec2;
        localAnchorB: b2Vec2;
        referenceAngle: number;
        enableLimit: boolean;
        lowerAngle: number;
        upperAngle: number;
        enableMotor: boolean;
        motorSpeed: number;
        maxMotorTorque: number;
        constructor();
        Initialize(bA: b2Body, bB: b2Body, anchor: b2Vec2): void;
    }
    export class b2RevoluteJoint extends b2Joint {
        m_localAnchorA: b2Vec2;
        m_localAnchorB: b2Vec2;
        m_impulse: b2Vec3;
        m_motorImpulse: number;
        m_enableMotor: boolean;
        m_maxMotorTorque: number;
        m_motorSpeed: number;
        m_enableLimit: boolean;
        m_referenceAngle: number;
        m_lowerAngle: number;
        m_upperAngle: number;
        m_indexA: number;
        m_indexB: number;
        m_rA: b2Vec2;
        m_rB: b2Vec2;
        m_localCenterA: b2Vec2;
        m_localCenterB: b2Vec2;
        m_invMassA: number;
        m_invMassB: number;
        m_invIA: number;
        m_invIB: number;
        m_mass: b2Mat33;
        m_motorMass: number;
        m_limitState: b2LimitState;
        m_qA: b2Rot;
        m_qB: b2Rot;
        m_lalcA: b2Vec2;
        m_lalcB: b2Vec2;
        m_K: b2Mat22;
        constructor(def: b2RevoluteJointDef);
        private static InitVelocityConstraints_s_P;
        InitVelocityConstraints(data: b2SolverData): void;
        private static SolveVelocityConstraints_s_P;
        private static SolveVelocityConstraints_s_Cdot_v2;
        private static SolveVelocityConstraints_s_Cdot1;
        private static SolveVelocityConstraints_s_impulse_v3;
        private static SolveVelocityConstraints_s_reduced_v2;
        private static SolveVelocityConstraints_s_impulse_v2;
        SolveVelocityConstraints(data: b2SolverData): void;
        private static SolvePositionConstraints_s_C_v2;
        private static SolvePositionConstraints_s_impulse;
        SolvePositionConstraints(data: b2SolverData): boolean;
        GetAnchorA(out: b2Vec2): b2Vec2;
        GetAnchorB(out: b2Vec2): b2Vec2;
        GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2;
        GetReactionTorque(inv_dt: number): number;
        GetLocalAnchorA(): b2Vec2;
        GetLocalAnchorB(): b2Vec2;
        GetReferenceAngle(): number;
        GetJointAngle(): number;
        GetJointSpeed(): number;
        IsMotorEnabled(): boolean;
        EnableMotor(flag: boolean): void;
        GetMotorTorque(inv_dt: number): number;
        GetMotorSpeed(): number;
        SetMaxMotorTorque(torque: number): void;
        GetMaxMotorTorque(): number;
        IsLimitEnabled(): boolean;
        EnableLimit(flag: boolean): void;
        GetLowerLimit(): number;
        GetUpperLimit(): number;
        SetLimits(lower: number, upper: number): void;
        SetMotorSpeed(speed: number): void;
        Dump(log: (format: string, ...args: any[]) => void): void;
    }
}
declare module "Box2D/Box2D/Dynamics/Joints/b2GearJoint" {
    import { b2Vec2, b2Rot } from "Box2D/Box2D/Common/b2Math";
    import { b2Joint, b2JointDef, b2JointType } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    import { b2SolverData } from "Box2D/Box2D/Dynamics/b2TimeStep";
    import { b2Body } from "Box2D/Box2D/Dynamics/b2Body";
    export class b2GearJointDef extends b2JointDef {
        joint1: b2Joint;
        joint2: b2Joint;
        ratio: number;
        constructor();
    }
    export class b2GearJoint extends b2Joint {
        m_joint1: b2Joint;
        m_joint2: b2Joint;
        m_typeA: b2JointType;
        m_typeB: b2JointType;
        m_bodyC: b2Body;
        m_bodyD: b2Body;
        m_localAnchorA: b2Vec2;
        m_localAnchorB: b2Vec2;
        m_localAnchorC: b2Vec2;
        m_localAnchorD: b2Vec2;
        m_localAxisC: b2Vec2;
        m_localAxisD: b2Vec2;
        m_referenceAngleA: number;
        m_referenceAngleB: number;
        m_constant: number;
        m_ratio: number;
        m_impulse: number;
        m_indexA: number;
        m_indexB: number;
        m_indexC: number;
        m_indexD: number;
        m_lcA: b2Vec2;
        m_lcB: b2Vec2;
        m_lcC: b2Vec2;
        m_lcD: b2Vec2;
        m_mA: number;
        m_mB: number;
        m_mC: number;
        m_mD: number;
        m_iA: number;
        m_iB: number;
        m_iC: number;
        m_iD: number;
        m_JvAC: b2Vec2;
        m_JvBD: b2Vec2;
        m_JwA: number;
        m_JwB: number;
        m_JwC: number;
        m_JwD: number;
        m_mass: number;
        m_qA: b2Rot;
        m_qB: b2Rot;
        m_qC: b2Rot;
        m_qD: b2Rot;
        m_lalcA: b2Vec2;
        m_lalcB: b2Vec2;
        m_lalcC: b2Vec2;
        m_lalcD: b2Vec2;
        constructor(def: b2GearJointDef);
        private static InitVelocityConstraints_s_u;
        private static InitVelocityConstraints_s_rA;
        private static InitVelocityConstraints_s_rB;
        private static InitVelocityConstraints_s_rC;
        private static InitVelocityConstraints_s_rD;
        InitVelocityConstraints(data: b2SolverData): void;
        SolveVelocityConstraints(data: b2SolverData): void;
        private static SolvePositionConstraints_s_u;
        private static SolvePositionConstraints_s_rA;
        private static SolvePositionConstraints_s_rB;
        private static SolvePositionConstraints_s_rC;
        private static SolvePositionConstraints_s_rD;
        SolvePositionConstraints(data: b2SolverData): boolean;
        GetAnchorA(out: b2Vec2): b2Vec2;
        GetAnchorB(out: b2Vec2): b2Vec2;
        GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2;
        GetReactionTorque(inv_dt: number): number;
        GetJoint1(): b2Joint;
        GetJoint2(): b2Joint;
        GetRatio(): number;
        SetRatio(ratio: number): void;
        Dump(log: (format: string, ...args: any[]) => void): void;
    }
}
declare module "Box2D/Box2D/Dynamics/Joints/b2MotorJoint" {
    import { b2Vec2, b2Mat22, b2Rot } from "Box2D/Box2D/Common/b2Math";
    import { b2Body } from "Box2D/Box2D/Dynamics/b2Body";
    import { b2Joint, b2JointDef } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    import { b2SolverData } from "Box2D/Box2D/Dynamics/b2TimeStep";
    export class b2MotorJointDef extends b2JointDef {
        linearOffset: b2Vec2;
        angularOffset: number;
        maxForce: number;
        maxTorque: number;
        correctionFactor: number;
        constructor();
        Initialize(bA: b2Body, bB: b2Body): void;
    }
    export class b2MotorJoint extends b2Joint {
        m_linearOffset: b2Vec2;
        m_angularOffset: number;
        m_linearImpulse: b2Vec2;
        m_angularImpulse: number;
        m_maxForce: number;
        m_maxTorque: number;
        m_correctionFactor: number;
        m_indexA: number;
        m_indexB: number;
        m_rA: b2Vec2;
        m_rB: b2Vec2;
        m_localCenterA: b2Vec2;
        m_localCenterB: b2Vec2;
        m_linearError: b2Vec2;
        m_angularError: number;
        m_invMassA: number;
        m_invMassB: number;
        m_invIA: number;
        m_invIB: number;
        m_linearMass: b2Mat22;
        m_angularMass: number;
        m_qA: b2Rot;
        m_qB: b2Rot;
        m_K: b2Mat22;
        constructor(def: b2MotorJointDef);
        GetAnchorA(): b2Vec2;
        GetAnchorB(): b2Vec2;
        GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2;
        GetReactionTorque(inv_dt: number): number;
        SetLinearOffset(linearOffset: b2Vec2): void;
        GetLinearOffset(): b2Vec2;
        SetAngularOffset(angularOffset: number): void;
        GetAngularOffset(): number;
        SetMaxForce(force: number): void;
        GetMaxForce(): number;
        SetMaxTorque(torque: number): void;
        GetMaxTorque(): number;
        InitVelocityConstraints(data: b2SolverData): void;
        private static SolveVelocityConstraints_s_Cdot_v2;
        private static SolveVelocityConstraints_s_impulse_v2;
        private static SolveVelocityConstraints_s_oldImpulse_v2;
        SolveVelocityConstraints(data: b2SolverData): void;
        SolvePositionConstraints(data: b2SolverData): boolean;
        Dump(log: (format: string, ...args: any[]) => void): void;
    }
}
declare module "Box2D/Box2D/Dynamics/Joints/b2MouseJoint" {
    import { b2Vec2, b2Mat22, b2Rot } from "Box2D/Box2D/Common/b2Math";
    import { b2Joint, b2JointDef } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    import { b2SolverData } from "Box2D/Box2D/Dynamics/b2TimeStep";
    export class b2MouseJointDef extends b2JointDef {
        target: b2Vec2;
        maxForce: number;
        frequencyHz: number;
        dampingRatio: number;
        constructor();
    }
    export class b2MouseJoint extends b2Joint {
        m_localAnchorB: b2Vec2;
        m_targetA: b2Vec2;
        m_frequencyHz: number;
        m_dampingRatio: number;
        m_beta: number;
        m_impulse: b2Vec2;
        m_maxForce: number;
        m_gamma: number;
        m_indexA: number;
        m_indexB: number;
        m_rB: b2Vec2;
        m_localCenterB: b2Vec2;
        m_invMassB: number;
        m_invIB: number;
        m_mass: b2Mat22;
        m_C: b2Vec2;
        m_qB: b2Rot;
        m_lalcB: b2Vec2;
        m_K: b2Mat22;
        constructor(def: b2MouseJointDef);
        SetTarget(target: b2Vec2): void;
        GetTarget(): b2Vec2;
        SetMaxForce(maxForce: number): void;
        GetMaxForce(): number;
        SetFrequency(hz: number): void;
        GetFrequency(): number;
        SetDampingRatio(ratio: number): void;
        GetDampingRatio(): number;
        InitVelocityConstraints(data: b2SolverData): void;
        private static SolveVelocityConstraints_s_Cdot;
        private static SolveVelocityConstraints_s_impulse;
        private static SolveVelocityConstraints_s_oldImpulse;
        SolveVelocityConstraints(data: b2SolverData): void;
        SolvePositionConstraints(data: b2SolverData): boolean;
        GetAnchorA(out: b2Vec2): b2Vec2;
        GetAnchorB(out: b2Vec2): b2Vec2;
        GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2;
        GetReactionTorque(inv_dt: number): number;
        Dump(log: (format: string, ...args: any[]) => void): void;
        ShiftOrigin(newOrigin: b2Vec2): void;
    }
}
declare module "Box2D/Box2D/Dynamics/Joints/b2PulleyJoint" {
    import { b2Vec2, b2Rot } from "Box2D/Box2D/Common/b2Math";
    import { b2Body } from "Box2D/Box2D/Dynamics/b2Body";
    import { b2Joint, b2JointDef } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    import { b2SolverData } from "Box2D/Box2D/Dynamics/b2TimeStep";
    export const b2_minPulleyLength: number;
    export class b2PulleyJointDef extends b2JointDef {
        groundAnchorA: b2Vec2;
        groundAnchorB: b2Vec2;
        localAnchorA: b2Vec2;
        localAnchorB: b2Vec2;
        lengthA: number;
        lengthB: number;
        ratio: number;
        constructor();
        Initialize(bA: b2Body, bB: b2Body, groundA: b2Vec2, groundB: b2Vec2, anchorA: b2Vec2, anchorB: b2Vec2, r: number): void;
    }
    export class b2PulleyJoint extends b2Joint {
        m_groundAnchorA: b2Vec2;
        m_groundAnchorB: b2Vec2;
        m_lengthA: number;
        m_lengthB: number;
        m_localAnchorA: b2Vec2;
        m_localAnchorB: b2Vec2;
        m_constant: number;
        m_ratio: number;
        m_impulse: number;
        m_indexA: number;
        m_indexB: number;
        m_uA: b2Vec2;
        m_uB: b2Vec2;
        m_rA: b2Vec2;
        m_rB: b2Vec2;
        m_localCenterA: b2Vec2;
        m_localCenterB: b2Vec2;
        m_invMassA: number;
        m_invMassB: number;
        m_invIA: number;
        m_invIB: number;
        m_mass: number;
        m_qA: b2Rot;
        m_qB: b2Rot;
        m_lalcA: b2Vec2;
        m_lalcB: b2Vec2;
        constructor(def: b2PulleyJointDef);
        private static InitVelocityConstraints_s_PA;
        private static InitVelocityConstraints_s_PB;
        InitVelocityConstraints(data: b2SolverData): void;
        private static SolveVelocityConstraints_s_vpA;
        private static SolveVelocityConstraints_s_vpB;
        private static SolveVelocityConstraints_s_PA;
        private static SolveVelocityConstraints_s_PB;
        SolveVelocityConstraints(data: b2SolverData): void;
        private static SolvePositionConstraints_s_PA;
        private static SolvePositionConstraints_s_PB;
        SolvePositionConstraints(data: b2SolverData): boolean;
        GetAnchorA(out: b2Vec2): b2Vec2;
        GetAnchorB(out: b2Vec2): b2Vec2;
        GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2;
        GetReactionTorque(inv_dt: number): number;
        GetGroundAnchorA(): b2Vec2;
        GetGroundAnchorB(): b2Vec2;
        GetLengthA(): number;
        GetLengthB(): number;
        GetRatio(): number;
        private static GetCurrentLengthA_s_p;
        GetCurrentLengthA(): number;
        private static GetCurrentLengthB_s_p;
        GetCurrentLengthB(): number;
        Dump(log: (format: string, ...args: any[]) => void): void;
        ShiftOrigin(newOrigin: b2Vec2): void;
    }
}
declare module "Box2D/Box2D/Dynamics/Joints/b2RopeJoint" {
    import { b2Vec2, b2Rot } from "Box2D/Box2D/Common/b2Math";
    import { b2Joint, b2JointDef, b2LimitState } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    import { b2SolverData } from "Box2D/Box2D/Dynamics/b2TimeStep";
    export class b2RopeJointDef extends b2JointDef {
        localAnchorA: b2Vec2;
        localAnchorB: b2Vec2;
        maxLength: number;
        constructor();
    }
    export class b2RopeJoint extends b2Joint {
        m_localAnchorA: b2Vec2;
        m_localAnchorB: b2Vec2;
        m_maxLength: number;
        m_length: number;
        m_impulse: number;
        m_indexA: number;
        m_indexB: number;
        m_u: b2Vec2;
        m_rA: b2Vec2;
        m_rB: b2Vec2;
        m_localCenterA: b2Vec2;
        m_localCenterB: b2Vec2;
        m_invMassA: number;
        m_invMassB: number;
        m_invIA: number;
        m_invIB: number;
        m_mass: number;
        m_state: b2LimitState;
        m_qA: b2Rot;
        m_qB: b2Rot;
        m_lalcA: b2Vec2;
        m_lalcB: b2Vec2;
        constructor(def: b2RopeJointDef);
        private static InitVelocityConstraints_s_P;
        InitVelocityConstraints(data: b2SolverData): void;
        private static SolveVelocityConstraints_s_vpA;
        private static SolveVelocityConstraints_s_vpB;
        private static SolveVelocityConstraints_s_P;
        SolveVelocityConstraints(data: b2SolverData): void;
        private static SolvePositionConstraints_s_P;
        SolvePositionConstraints(data: b2SolverData): boolean;
        GetAnchorA(out: b2Vec2): b2Vec2;
        GetAnchorB(out: b2Vec2): b2Vec2;
        GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2;
        GetReactionTorque(inv_dt: number): number;
        GetLocalAnchorA(): b2Vec2;
        GetLocalAnchorB(): b2Vec2;
        SetMaxLength(length: number): void;
        GetMaxLength(): number;
        GetLimitState(): b2LimitState;
        Dump(log: (format: string, ...args: any[]) => void): void;
    }
}
declare module "Box2D/Box2D/Dynamics/Joints/b2WeldJoint" {
    import { b2Vec2, b2Vec3, b2Mat33, b2Rot } from "Box2D/Box2D/Common/b2Math";
    import { b2Body } from "Box2D/Box2D/Dynamics/b2Body";
    import { b2Joint, b2JointDef } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    import { b2SolverData } from "Box2D/Box2D/Dynamics/b2TimeStep";
    export class b2WeldJointDef extends b2JointDef {
        localAnchorA: b2Vec2;
        localAnchorB: b2Vec2;
        referenceAngle: number;
        frequencyHz: number;
        dampingRatio: number;
        constructor();
        Initialize(bA: b2Body, bB: b2Body, anchor: b2Vec2): void;
    }
    export class b2WeldJoint extends b2Joint {
        m_frequencyHz: number;
        m_dampingRatio: number;
        m_bias: number;
        m_localAnchorA: b2Vec2;
        m_localAnchorB: b2Vec2;
        m_referenceAngle: number;
        m_gamma: number;
        m_impulse: b2Vec3;
        m_indexA: number;
        m_indexB: number;
        m_rA: b2Vec2;
        m_rB: b2Vec2;
        m_localCenterA: b2Vec2;
        m_localCenterB: b2Vec2;
        m_invMassA: number;
        m_invMassB: number;
        m_invIA: number;
        m_invIB: number;
        m_mass: b2Mat33;
        m_qA: b2Rot;
        m_qB: b2Rot;
        m_lalcA: b2Vec2;
        m_lalcB: b2Vec2;
        m_K: b2Mat33;
        constructor(def: b2WeldJointDef);
        private static InitVelocityConstraints_s_P;
        InitVelocityConstraints(data: b2SolverData): void;
        private static SolveVelocityConstraints_s_Cdot1;
        private static SolveVelocityConstraints_s_impulse1;
        private static SolveVelocityConstraints_s_impulse;
        private static SolveVelocityConstraints_s_P;
        SolveVelocityConstraints(data: b2SolverData): void;
        private static SolvePositionConstraints_s_C1;
        private static SolvePositionConstraints_s_P;
        private static SolvePositionConstraints_s_impulse;
        SolvePositionConstraints(data: b2SolverData): boolean;
        GetAnchorA(out: b2Vec2): b2Vec2;
        GetAnchorB(out: b2Vec2): b2Vec2;
        GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2;
        GetReactionTorque(inv_dt: number): number;
        GetLocalAnchorA(): b2Vec2;
        GetLocalAnchorB(): b2Vec2;
        GetReferenceAngle(): number;
        SetFrequency(hz: number): void;
        GetFrequency(): number;
        SetDampingRatio(ratio: number): void;
        GetDampingRatio(): number;
        Dump(log: (format: string, ...args: any[]) => void): void;
    }
}
declare module "Box2D/Box2D/Dynamics/Joints/b2WheelJoint" {
    import { b2Vec2, b2Rot } from "Box2D/Box2D/Common/b2Math";
    import { b2Joint, b2JointDef } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    import { b2SolverData } from "Box2D/Box2D/Dynamics/b2TimeStep";
    import { b2Body } from "Box2D/Box2D/Dynamics/b2Body";
    export class b2WheelJointDef extends b2JointDef {
        localAnchorA: b2Vec2;
        localAnchorB: b2Vec2;
        localAxisA: b2Vec2;
        enableMotor: boolean;
        maxMotorTorque: number;
        motorSpeed: number;
        frequencyHz: number;
        dampingRatio: number;
        constructor();
        Initialize(bA: b2Body, bB: b2Body, anchor: b2Vec2, axis: b2Vec2): void;
    }
    export class b2WheelJoint extends b2Joint {
        m_frequencyHz: number;
        m_dampingRatio: number;
        m_localAnchorA: b2Vec2;
        m_localAnchorB: b2Vec2;
        m_localXAxisA: b2Vec2;
        m_localYAxisA: b2Vec2;
        m_impulse: number;
        m_motorImpulse: number;
        m_springImpulse: number;
        m_maxMotorTorque: number;
        m_motorSpeed: number;
        m_enableMotor: boolean;
        m_indexA: number;
        m_indexB: number;
        m_localCenterA: b2Vec2;
        m_localCenterB: b2Vec2;
        m_invMassA: number;
        m_invMassB: number;
        m_invIA: number;
        m_invIB: number;
        m_ax: b2Vec2;
        m_ay: b2Vec2;
        m_sAx: number;
        m_sBx: number;
        m_sAy: number;
        m_sBy: number;
        m_mass: number;
        m_motorMass: number;
        m_springMass: number;
        m_bias: number;
        m_gamma: number;
        m_qA: b2Rot;
        m_qB: b2Rot;
        m_lalcA: b2Vec2;
        m_lalcB: b2Vec2;
        m_rA: b2Vec2;
        m_rB: b2Vec2;
        constructor(def: b2WheelJointDef);
        GetMotorSpeed(): number;
        GetMaxMotorTorque(): number;
        SetSpringFrequencyHz(hz: number): void;
        GetSpringFrequencyHz(): number;
        SetSpringDampingRatio(ratio: number): void;
        GetSpringDampingRatio(): number;
        private static InitVelocityConstraints_s_d;
        private static InitVelocityConstraints_s_P;
        InitVelocityConstraints(data: b2SolverData): void;
        private static SolveVelocityConstraints_s_P;
        SolveVelocityConstraints(data: b2SolverData): void;
        private static SolvePositionConstraints_s_d;
        private static SolvePositionConstraints_s_P;
        SolvePositionConstraints(data: b2SolverData): boolean;
        GetDefinition(def: b2WheelJointDef): b2WheelJointDef;
        GetAnchorA(out: b2Vec2): b2Vec2;
        GetAnchorB(out: b2Vec2): b2Vec2;
        GetReactionForce(inv_dt: number, out: b2Vec2): b2Vec2;
        GetReactionTorque(inv_dt: number): number;
        GetLocalAnchorA(): b2Vec2;
        GetLocalAnchorB(): b2Vec2;
        GetLocalAxisA(): b2Vec2;
        GetJointTranslation(): number;
        GetJointSpeed(): number;
        GetPrismaticJointTranslation(): number;
        GetPrismaticJointSpeed(): number;
        GetRevoluteJointAngle(): number;
        GetRevoluteJointSpeed(): number;
        IsMotorEnabled(): boolean;
        EnableMotor(flag: boolean): void;
        SetMotorSpeed(speed: number): void;
        SetMaxMotorTorque(force: number): void;
        GetMotorTorque(inv_dt: number): number;
        Dump(log: (format: string, ...args: any[]) => void): void;
    }
}
declare module "Box2D/Box2D/Dynamics/Joints/b2JointFactory" {
    import { b2Joint, b2JointDef } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    export class b2JointFactory {
        static Create(def: b2JointDef, allocator: any): b2Joint;
        static Destroy(joint: b2Joint, allocator: any): void;
    }
}
declare module "Box2D/Box2D/Dynamics/Contacts/b2ContactSolver" {
    import { b2Vec2, b2Mat22, b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2ManifoldType } from "Box2D/Box2D/Collision/b2Collision";
    import { b2Contact } from "Box2D/Box2D/Dynamics/Contacts/b2Contact";
    import { b2TimeStep, b2Position, b2Velocity } from "Box2D/Box2D/Dynamics/b2TimeStep";
    export class b2VelocityConstraintPoint {
        rA: b2Vec2;
        rB: b2Vec2;
        normalImpulse: number;
        tangentImpulse: number;
        normalMass: number;
        tangentMass: number;
        velocityBias: number;
        static MakeArray(length: number): b2VelocityConstraintPoint[];
    }
    export class b2ContactVelocityConstraint {
        points: b2VelocityConstraintPoint[];
        normal: b2Vec2;
        tangent: b2Vec2;
        normalMass: b2Mat22;
        K: b2Mat22;
        indexA: number;
        indexB: number;
        invMassA: number;
        invMassB: number;
        invIA: number;
        invIB: number;
        friction: number;
        restitution: number;
        tangentSpeed: number;
        pointCount: number;
        contactIndex: number;
        static MakeArray(length: number): b2ContactVelocityConstraint[];
    }
    export class b2ContactPositionConstraint {
        localPoints: b2Vec2[];
        localNormal: b2Vec2;
        localPoint: b2Vec2;
        indexA: number;
        indexB: number;
        invMassA: number;
        invMassB: number;
        localCenterA: b2Vec2;
        localCenterB: b2Vec2;
        invIA: number;
        invIB: number;
        type: b2ManifoldType;
        radiusA: number;
        radiusB: number;
        pointCount: number;
        static MakeArray(length: number): b2ContactPositionConstraint[];
    }
    export class b2ContactSolverDef {
        step: b2TimeStep;
        contacts: b2Contact[];
        count: number;
        positions: b2Position[];
        velocities: b2Velocity[];
        allocator: any;
    }
    export class b2PositionSolverManifold {
        normal: b2Vec2;
        point: b2Vec2;
        separation: number;
        private static Initialize_s_pointA;
        private static Initialize_s_pointB;
        private static Initialize_s_planePoint;
        private static Initialize_s_clipPoint;
        Initialize(pc: b2ContactPositionConstraint, xfA: b2Transform, xfB: b2Transform, index: number): void;
    }
    export class b2ContactSolver {
        m_step: b2TimeStep;
        m_positions: b2Position[];
        m_velocities: b2Velocity[];
        m_allocator: any;
        m_positionConstraints: b2ContactPositionConstraint[];
        m_velocityConstraints: b2ContactVelocityConstraint[];
        m_contacts: b2Contact[];
        m_count: number;
        Initialize(def: b2ContactSolverDef): b2ContactSolver;
        private static InitializeVelocityConstraints_s_xfA;
        private static InitializeVelocityConstraints_s_xfB;
        private static InitializeVelocityConstraints_s_worldManifold;
        InitializeVelocityConstraints(): void;
        private static WarmStart_s_P;
        WarmStart(): void;
        private static SolveVelocityConstraints_s_dv;
        private static SolveVelocityConstraints_s_dv1;
        private static SolveVelocityConstraints_s_dv2;
        private static SolveVelocityConstraints_s_P;
        private static SolveVelocityConstraints_s_a;
        private static SolveVelocityConstraints_s_b;
        private static SolveVelocityConstraints_s_x;
        private static SolveVelocityConstraints_s_d;
        private static SolveVelocityConstraints_s_P1;
        private static SolveVelocityConstraints_s_P2;
        private static SolveVelocityConstraints_s_P1P2;
        SolveVelocityConstraints(): void;
        StoreImpulses(): void;
        private static SolvePositionConstraints_s_xfA;
        private static SolvePositionConstraints_s_xfB;
        private static SolvePositionConstraints_s_psm;
        private static SolvePositionConstraints_s_rA;
        private static SolvePositionConstraints_s_rB;
        private static SolvePositionConstraints_s_P;
        SolvePositionConstraints(): boolean;
        private static SolveTOIPositionConstraints_s_xfA;
        private static SolveTOIPositionConstraints_s_xfB;
        private static SolveTOIPositionConstraints_s_psm;
        private static SolveTOIPositionConstraints_s_rA;
        private static SolveTOIPositionConstraints_s_rB;
        private static SolveTOIPositionConstraints_s_P;
        SolveTOIPositionConstraints(toiIndexA: number, toiIndexB: number): boolean;
    }
}
declare module "Box2D/Box2D/Particle/b2Particle" {
    import { b2Vec2 } from "Box2D/Box2D/Common/b2Math";
    import { b2Color } from "Box2D/Box2D/Common/b2Draw";
    import { b2ParticleGroup } from "Box2D/Box2D/Particle/b2ParticleGroup";
    export enum b2ParticleFlag {
        b2_waterParticle = 0,
        b2_zombieParticle = 2,
        b2_wallParticle = 4,
        b2_springParticle = 8,
        b2_elasticParticle = 16,
        b2_viscousParticle = 32,
        b2_powderParticle = 64,
        b2_tensileParticle = 128,
        b2_colorMixingParticle = 256,
        b2_destructionListenerParticle = 512,
        b2_barrierParticle = 1024,
        b2_staticPressureParticle = 2048,
        b2_reactiveParticle = 4096,
        b2_repulsiveParticle = 8192,
        b2_fixtureContactListenerParticle = 16384,
        b2_particleContactListenerParticle = 32768,
        b2_fixtureContactFilterParticle = 65536,
        b2_particleContactFilterParticle = 131072,
    }
    export class b2ParticleDef {
        flags: b2ParticleFlag;
        position: b2Vec2;
        velocity: b2Vec2;
        color: b2Color;
        lifetime: number;
        userData: any;
        group: b2ParticleGroup;
    }
    export function b2CalculateParticleIterations(gravity: number, radius: number, timeStep: number): number;
    export class b2ParticleHandle {
        m_index: number;
        GetIndex(): number;
        SetIndex(index: number): void;
    }
}
declare module "Box2D/Box2D/Particle/b2StackQueue" {
    export class b2StackQueue<T> {
        m_buffer: T[];
        m_front: number;
        m_back: number;
        m_capacity: number;
        constructor(capacity: number);
        Push(item: T): void;
        Pop(): void;
        Empty(): boolean;
        Front(): T;
    }
}
declare module "Box2D/Box2D/Particle/b2VoronoiDiagram" {
    import { b2Vec2 } from "Box2D/Box2D/Common/b2Math";
    export class b2VoronoiDiagram {
        m_generatorBuffer: b2VoronoiDiagram.Generator[];
        m_generatorCapacity: number;
        m_generatorCount: number;
        m_countX: number;
        m_countY: number;
        m_diagram: b2VoronoiDiagram.Generator[];
        constructor(generatorCapacity: number);
        AddGenerator(center: b2Vec2, tag: number, necessary: boolean): void;
        Generate(radius: number, margin: number): void;
        GetNodes(callback: b2VoronoiDiagram.NodeCallback): void;
    }
    export namespace b2VoronoiDiagram {
        type NodeCallback = (a: number, b: number, c: number) => void;
        class Generator {
            center: b2Vec2;
            tag: number;
            necessary: boolean;
        }
        class Task {
            m_x: number;
            m_y: number;
            m_i: number;
            m_generator: b2VoronoiDiagram.Generator;
            constructor(x: number, y: number, i: number, g: b2VoronoiDiagram.Generator);
        }
    }
}
declare module "Box2D/Box2D/Particle/b2ParticleSystem" {
    import { b2Vec2, b2Rot, b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2Color } from "Box2D/Box2D/Common/b2Draw";
    import { b2AABB, b2RayCastInput, b2RayCastOutput } from "Box2D/Box2D/Collision/b2Collision";
    import { b2Shape, b2MassData } from "Box2D/Box2D/Collision/Shapes/b2Shape";
    import { b2EdgeShape } from "Box2D/Box2D/Collision/Shapes/b2EdgeShape";
    import { b2TimeStep } from "Box2D/Box2D/Dynamics/b2TimeStep";
    import { b2Fixture } from "Box2D/Box2D/Dynamics/b2Fixture";
    import { b2Body } from "Box2D/Box2D/Dynamics/b2Body";
    import { b2World } from "Box2D/Box2D/Dynamics/b2World";
    import { b2ContactFilter, b2ContactListener, b2QueryCallback, b2RayCastCallback } from "Box2D/Box2D/Dynamics/b2WorldCallbacks";
    import { b2ParticleFlag, b2ParticleDef, b2ParticleHandle } from "Box2D/Box2D/Particle/b2Particle";
    import { b2ParticleGroupFlag, b2ParticleGroupDef, b2ParticleGroup } from "Box2D/Box2D/Particle/b2ParticleGroup";
    import { b2DistanceProxy } from "Box2D/Box2D/Collision/b2Distance";
    export class b2GrowableBuffer<T> {
        data: T[];
        count: number;
        capacity: number;
        allocator: () => T;
        constructor(allocator: () => T);
        Append(): number;
        Reserve(newCapacity: number): void;
        Grow(): void;
        Free(): void;
        Shorten(newEnd: number): void;
        Data(): T[];
        GetCount(): number;
        SetCount(newCount: number): void;
        GetCapacity(): number;
        RemoveIf(pred: (t: T) => boolean): void;
        Unique(pred: (a: T, b: T) => boolean): void;
    }
    export type b2ParticleIndex = number;
    export class b2FixtureParticleQueryCallback extends b2QueryCallback {
        m_system: b2ParticleSystem;
        constructor(system: b2ParticleSystem);
        ShouldQueryParticleSystem(system: b2ParticleSystem): boolean;
        ReportFixture(fixture: b2Fixture): boolean;
        ReportParticle(system: b2ParticleSystem, index: number): boolean;
        ReportFixtureAndParticle(fixture: b2Fixture, childIndex: number, index: number): void;
    }
    export class b2ParticleContact {
        indexA: number;
        indexB: number;
        weight: number;
        normal: b2Vec2;
        flags: b2ParticleFlag;
        SetIndices(a: number, b: number): void;
        SetWeight(w: number): void;
        SetNormal(n: b2Vec2): void;
        SetFlags(f: b2ParticleFlag): void;
        GetIndexA(): number;
        GetIndexB(): number;
        GetWeight(): number;
        GetNormal(): b2Vec2;
        GetFlags(): b2ParticleFlag;
        IsEqual(rhs: b2ParticleContact): boolean;
        IsNotEqual(rhs: b2ParticleContact): boolean;
        ApproximatelyEqual(rhs: b2ParticleContact): boolean;
    }
    export class b2ParticleBodyContact {
        index: number;
        body: b2Body;
        fixture: b2Fixture;
        weight: number;
        normal: b2Vec2;
        mass: number;
    }
    export class b2ParticlePair {
        indexA: number;
        indexB: number;
        flags: b2ParticleFlag;
        strength: number;
        distance: number;
    }
    export class b2ParticleTriad {
        indexA: number;
        indexB: number;
        indexC: number;
        flags: b2ParticleFlag;
        strength: number;
        pa: b2Vec2;
        pb: b2Vec2;
        pc: b2Vec2;
        ka: number;
        kb: number;
        kc: number;
        s: number;
    }
    export class b2ParticleSystemDef {
        strictContactCheck: boolean;
        density: number;
        gravityScale: number;
        radius: number;
        maxCount: number;
        pressureStrength: number;
        dampingStrength: number;
        elasticStrength: number;
        springStrength: number;
        viscousStrength: number;
        surfaceTensionPressureStrength: number;
        surfaceTensionNormalStrength: number;
        repulsiveStrength: number;
        powderStrength: number;
        ejectionStrength: number;
        staticPressureStrength: number;
        staticPressureRelaxation: number;
        staticPressureIterations: number;
        colorMixingStrength: number;
        destroyByAge: boolean;
        lifetimeGranularity: number;
        Copy(def: b2ParticleSystemDef): b2ParticleSystemDef;
        Clone(): b2ParticleSystemDef;
    }
    export class b2ParticleSystem {
        m_paused: boolean;
        m_timestamp: number;
        m_allParticleFlags: b2ParticleFlag;
        m_needsUpdateAllParticleFlags: boolean;
        m_allGroupFlags: b2ParticleGroupFlag;
        m_needsUpdateAllGroupFlags: boolean;
        m_hasForce: boolean;
        m_iterationIndex: number;
        m_inverseDensity: number;
        m_particleDiameter: number;
        m_inverseDiameter: number;
        m_squaredDiameter: number;
        m_count: number;
        m_internalAllocatedCapacity: number;
        m_handleIndexBuffer: b2ParticleSystem.UserOverridableBuffer<b2ParticleHandle>;
        m_flagsBuffer: b2ParticleSystem.UserOverridableBuffer<b2ParticleFlag>;
        m_positionBuffer: b2ParticleSystem.UserOverridableBuffer<b2Vec2>;
        m_velocityBuffer: b2ParticleSystem.UserOverridableBuffer<b2Vec2>;
        m_forceBuffer: b2Vec2[];
        m_weightBuffer: number[];
        m_staticPressureBuffer: number[];
        m_accumulationBuffer: number[];
        m_accumulation2Buffer: b2Vec2[];
        m_depthBuffer: number[];
        m_colorBuffer: b2ParticleSystem.UserOverridableBuffer<b2Color>;
        m_groupBuffer: b2ParticleGroup[];
        m_userDataBuffer: b2ParticleSystem.UserOverridableBuffer<any>;
        m_stuckThreshold: number;
        m_lastBodyContactStepBuffer: b2ParticleSystem.UserOverridableBuffer<number>;
        m_bodyContactCountBuffer: b2ParticleSystem.UserOverridableBuffer<number>;
        m_consecutiveContactStepsBuffer: b2ParticleSystem.UserOverridableBuffer<number>;
        m_stuckParticleBuffer: b2GrowableBuffer<number>;
        m_proxyBuffer: b2GrowableBuffer<b2ParticleSystem.Proxy>;
        m_contactBuffer: b2GrowableBuffer<b2ParticleContact>;
        m_bodyContactBuffer: b2GrowableBuffer<b2ParticleBodyContact>;
        m_pairBuffer: b2GrowableBuffer<b2ParticlePair>;
        m_triadBuffer: b2GrowableBuffer<b2ParticleTriad>;
        m_expirationTimeBuffer: b2ParticleSystem.UserOverridableBuffer<number>;
        m_indexByExpirationTimeBuffer: b2ParticleSystem.UserOverridableBuffer<number>;
        m_timeElapsed: number;
        m_expirationTimeBufferRequiresSorting: boolean;
        m_groupCount: number;
        m_groupList: b2ParticleGroup | null;
        m_def: b2ParticleSystemDef;
        m_world: b2World;
        m_prev: b2ParticleSystem | null;
        m_next: b2ParticleSystem | null;
        static xTruncBits: number;
        static yTruncBits: number;
        static tagBits: number;
        static yOffset: number;
        static yShift: number;
        static xShift: number;
        static xScale: number;
        static xOffset: number;
        static yMask: number;
        static xMask: number;
        static computeTag(x: number, y: number): number;
        static computeRelativeTag(tag: number, x: number, y: number): number;
        constructor(def: b2ParticleSystemDef, world: b2World);
        Drop(): void;
        CreateParticle(def: b2ParticleDef): number;
        GetParticleHandleFromIndex(index: number): b2ParticleHandle;
        DestroyParticle(index: number, callDestructionListener?: boolean): void;
        DestroyOldestParticle(index: number, callDestructionListener?: boolean): void;
        DestroyParticlesInShape(shape: b2Shape, xf: b2Transform, callDestructionListener?: boolean): number;
        static DestroyParticlesInShape_s_aabb: b2AABB;
        CreateParticleGroup(groupDef: b2ParticleGroupDef): b2ParticleGroup;
        static CreateParticleGroup_s_transform: b2Transform;
        JoinParticleGroups(groupA: b2ParticleGroup, groupB: b2ParticleGroup): void;
        SplitParticleGroup(group: b2ParticleGroup): void;
        GetParticleGroupList(): b2ParticleGroup;
        GetParticleGroupCount(): number;
        GetParticleCount(): number;
        GetMaxParticleCount(): number;
        SetMaxParticleCount(count: number): void;
        GetAllParticleFlags(): b2ParticleFlag;
        GetAllGroupFlags(): b2ParticleGroupFlag;
        SetPaused(paused: boolean): void;
        GetPaused(): boolean;
        SetDensity(density: number): void;
        GetDensity(): number;
        SetGravityScale(gravityScale: number): void;
        GetGravityScale(): number;
        SetDamping(damping: number): void;
        GetDamping(): number;
        SetStaticPressureIterations(iterations: number): void;
        GetStaticPressureIterations(): number;
        SetRadius(radius: number): void;
        GetRadius(): number;
        GetPositionBuffer(): b2Vec2[];
        GetVelocityBuffer(): b2Vec2[];
        GetColorBuffer(): b2Color[];
        GetGroupBuffer(): b2ParticleGroup[];
        GetWeightBuffer(): number[];
        GetUserDataBuffer<T>(): T[];
        GetFlagsBuffer(): b2ParticleFlag[];
        SetParticleFlags(index: number, newFlags: b2ParticleFlag): void;
        GetParticleFlags(index: number): b2ParticleFlag;
        SetFlagsBuffer(buffer: b2ParticleFlag[], capacity: number): void;
        SetPositionBuffer(buffer: b2Vec2[], capacity: number): void;
        SetVelocityBuffer(buffer: b2Vec2[], capacity: number): void;
        SetColorBuffer(buffer: b2Color[], capacity: number): void;
        SetUserDataBuffer<T>(buffer: T[], capacity: number): void;
        GetContacts(): b2ParticleContact[];
        GetContactCount(): number;
        GetBodyContacts(): b2ParticleBodyContact[];
        GetBodyContactCount(): number;
        GetPairs(): b2ParticlePair[];
        GetPairCount(): number;
        GetTriads(): b2ParticleTriad[];
        GetTriadCount(): number;
        SetStuckThreshold(steps: number): void;
        GetStuckCandidates(): number[];
        GetStuckCandidateCount(): number;
        ComputeCollisionEnergy(): number;
        static ComputeCollisionEnergy_s_v: b2Vec2;
        SetStrictContactCheck(enabled: boolean): void;
        GetStrictContactCheck(): boolean;
        SetParticleLifetime(index: number, lifetime: number): void;
        GetParticleLifetime(index: number): number;
        SetDestructionByAge(enable: boolean): void;
        GetDestructionByAge(): boolean;
        GetExpirationTimeBuffer(): number[];
        ExpirationTimeToLifetime(expirationTime: number): number;
        GetIndexByExpirationTimeBuffer(): number[];
        ParticleApplyLinearImpulse(index: number, impulse: b2Vec2): void;
        ApplyLinearImpulse(firstIndex: number, lastIndex: number, impulse: b2Vec2): void;
        static IsSignificantForce(force: b2Vec2): boolean;
        ParticleApplyForce(index: number, force: b2Vec2): void;
        ApplyForce(firstIndex: number, lastIndex: number, force: b2Vec2): void;
        GetNext(): b2ParticleSystem;
        QueryAABB(callback: b2QueryCallback, aabb: b2AABB): void;
        QueryShapeAABB(callback: b2QueryCallback, shape: b2Shape, xf: b2Transform, childIndex?: number): void;
        static QueryShapeAABB_s_aabb: b2AABB;
        QueryPointAABB(callback: b2QueryCallback, point: b2Vec2, slop?: number): void;
        static QueryPointAABB_s_aabb: b2AABB;
        RayCast(callback: b2RayCastCallback, point1: b2Vec2, point2: b2Vec2): void;
        static RayCast_s_aabb: b2AABB;
        static RayCast_s_p: b2Vec2;
        static RayCast_s_v: b2Vec2;
        static RayCast_s_n: b2Vec2;
        static RayCast_s_point: b2Vec2;
        ComputeAABB(aabb: b2AABB): void;
        static k_pairFlags: number;
        static k_triadFlags: b2ParticleFlag;
        static k_noPressureFlags: number;
        static k_extraDampingFlags: b2ParticleFlag;
        static k_barrierWallFlags: number;
        FreeBuffer<T>(b: T[], capacity: number): void;
        FreeUserOverridableBuffer<T>(b: b2ParticleSystem.UserOverridableBuffer<T>): void;
        ReallocateBuffer3<T>(oldBuffer: T[], oldCapacity: number, newCapacity: number): T[];
        ReallocateBuffer5<T>(buffer: T[], userSuppliedCapacity: number, oldCapacity: number, newCapacity: number, deferred: boolean): T[];
        ReallocateBuffer4<T>(buffer: b2ParticleSystem.UserOverridableBuffer<any>, oldCapacity: number, newCapacity: number, deferred: boolean): T[];
        RequestBuffer<T>(buffer: T[]): T[];
        ReallocateHandleBuffers(newCapacity: number): void;
        ReallocateInternalAllocatedBuffers(capacity: number): void;
        CreateParticleForGroup(groupDef: b2ParticleGroupDef, xf: b2Transform, p: b2Vec2): void;
        CreateParticlesStrokeShapeForGroup(shape: b2Shape, groupDef: b2ParticleGroupDef, xf: b2Transform): void;
        static CreateParticlesStrokeShapeForGroup_s_edge: b2EdgeShape;
        static CreateParticlesStrokeShapeForGroup_s_d: b2Vec2;
        static CreateParticlesStrokeShapeForGroup_s_p: b2Vec2;
        CreateParticlesFillShapeForGroup(shape: b2Shape, groupDef: b2ParticleGroupDef, xf: b2Transform): void;
        static CreateParticlesFillShapeForGroup_s_aabb: b2AABB;
        static CreateParticlesFillShapeForGroup_s_p: b2Vec2;
        CreateParticlesWithShapeForGroup(shape: b2Shape, groupDef: b2ParticleGroupDef, xf: b2Transform): void;
        CreateParticlesWithShapesForGroup(shapes: b2Shape[], shapeCount: number, groupDef: b2ParticleGroupDef, xf: b2Transform): void;
        CloneParticle(oldIndex: number, group: b2ParticleGroup): number;
        DestroyParticlesInGroup(group: b2ParticleGroup, callDestructionListener?: boolean): void;
        DestroyParticleGroup(group: b2ParticleGroup): void;
        static ParticleCanBeConnected(flags: b2ParticleFlag, group: b2ParticleGroup): boolean;
        UpdatePairsAndTriads(firstIndex: number, lastIndex: number, filter: b2ParticleSystem.ConnectionFilter): void;
        private static UpdatePairsAndTriads_s_dab;
        private static UpdatePairsAndTriads_s_dbc;
        private static UpdatePairsAndTriads_s_dca;
        UpdatePairsAndTriadsWithReactiveParticles(): void;
        static ComparePairIndices(a: b2ParticlePair, b: b2ParticlePair): boolean;
        static MatchPairIndices(a: b2ParticlePair, b: b2ParticlePair): boolean;
        static CompareTriadIndices(a: b2ParticleTriad, b: b2ParticleTriad): boolean;
        static MatchTriadIndices(a: b2ParticleTriad, b: b2ParticleTriad): boolean;
        static InitializeParticleLists(group: b2ParticleGroup, nodeBuffer: b2ParticleSystem.ParticleListNode[]): void;
        MergeParticleListsInContact(group: b2ParticleGroup, nodeBuffer: b2ParticleSystem.ParticleListNode[]): void;
        static MergeParticleLists(listA: b2ParticleSystem.ParticleListNode, listB: b2ParticleSystem.ParticleListNode): void;
        static FindLongestParticleList(group: b2ParticleGroup, nodeBuffer: b2ParticleSystem.ParticleListNode[]): b2ParticleSystem.ParticleListNode;
        MergeZombieParticleListNodes(group: b2ParticleGroup, nodeBuffer: b2ParticleSystem.ParticleListNode[], survivingList: b2ParticleSystem.ParticleListNode): void;
        static MergeParticleListAndNode(list: b2ParticleSystem.ParticleListNode, node: b2ParticleSystem.ParticleListNode): void;
        CreateParticleGroupsFromParticleList(group: b2ParticleGroup, nodeBuffer: b2ParticleSystem.ParticleListNode[], survivingList: b2ParticleSystem.ParticleListNode): void;
        UpdatePairsAndTriadsWithParticleList(group: b2ParticleGroup, nodeBuffer: b2ParticleSystem.ParticleListNode[]): void;
        ComputeDepth(): void;
        GetInsideBoundsEnumerator(aabb: b2AABB): b2ParticleSystem.InsideBoundsEnumerator;
        UpdateAllParticleFlags(): void;
        UpdateAllGroupFlags(): void;
        AddContact(a: number, b: number, contacts: b2GrowableBuffer<b2ParticleContact>): void;
        static AddContact_s_d: b2Vec2;
        FindContacts_Reference(contacts: b2GrowableBuffer<b2ParticleContact>): void;
        FindContacts(contacts: b2GrowableBuffer<b2ParticleContact>): void;
        UpdateProxies_Reference(proxies: b2GrowableBuffer<b2ParticleSystem.Proxy>): void;
        UpdateProxies(proxies: b2GrowableBuffer<b2ParticleSystem.Proxy>): void;
        SortProxies(proxies: b2GrowableBuffer<b2ParticleSystem.Proxy>): void;
        FilterContacts(contacts: b2GrowableBuffer<b2ParticleContact>): void;
        NotifyContactListenerPreContact(particlePairs: b2ParticleSystem.b2ParticlePairSet): void;
        NotifyContactListenerPostContact(particlePairs: b2ParticleSystem.b2ParticlePairSet): void;
        static b2ParticleContactIsZombie(contact: b2ParticleContact): boolean;
        UpdateContacts(exceptZombie: boolean): void;
        NotifyBodyContactListenerPreContact(fixtureSet: b2ParticleSystem.FixtureParticleSet): void;
        NotifyBodyContactListenerPostContact(fixtureSet: b2ParticleSystem.FixtureParticleSet): void;
        UpdateBodyContacts(): void;
        static UpdateBodyContacts_s_aabb: b2AABB;
        Solve(step: b2TimeStep): void;
        static Solve_s_subStep: b2TimeStep;
        SolveCollision(step: b2TimeStep): void;
        static SolveCollision_s_aabb: b2AABB;
        LimitVelocity(step: b2TimeStep): void;
        SolveGravity(step: b2TimeStep): void;
        static SolveGravity_s_gravity: b2Vec2;
        SolveBarrier(step: b2TimeStep): void;
        static SolveBarrier_s_aabb: b2AABB;
        static SolveBarrier_s_va: b2Vec2;
        static SolveBarrier_s_vb: b2Vec2;
        static SolveBarrier_s_pba: b2Vec2;
        static SolveBarrier_s_vba: b2Vec2;
        static SolveBarrier_s_vc: b2Vec2;
        static SolveBarrier_s_pca: b2Vec2;
        static SolveBarrier_s_vca: b2Vec2;
        static SolveBarrier_s_qba: b2Vec2;
        static SolveBarrier_s_qca: b2Vec2;
        static SolveBarrier_s_dv: b2Vec2;
        static SolveBarrier_s_f: b2Vec2;
        SolveStaticPressure(step: b2TimeStep): void;
        ComputeWeight(): void;
        SolvePressure(step: b2TimeStep): void;
        static SolvePressure_s_f: b2Vec2;
        SolveDamping(step: b2TimeStep): void;
        static SolveDamping_s_v: b2Vec2;
        static SolveDamping_s_f: b2Vec2;
        SolveRigidDamping(): void;
        static SolveRigidDamping_s_t0: b2Vec2;
        static SolveRigidDamping_s_t1: b2Vec2;
        static SolveRigidDamping_s_p: b2Vec2;
        static SolveRigidDamping_s_v: b2Vec2;
        SolveExtraDamping(): void;
        static SolveExtraDamping_s_v: b2Vec2;
        static SolveExtraDamping_s_f: b2Vec2;
        SolveWall(): void;
        SolveRigid(step: b2TimeStep): void;
        static SolveRigid_s_position: b2Vec2;
        static SolveRigid_s_rotation: b2Rot;
        static SolveRigid_s_transform: b2Transform;
        static SolveRigid_s_velocityTransform: b2Transform;
        SolveElastic(step: b2TimeStep): void;
        static SolveElastic_s_pa: b2Vec2;
        static SolveElastic_s_pb: b2Vec2;
        static SolveElastic_s_pc: b2Vec2;
        static SolveElastic_s_r: b2Rot;
        static SolveElastic_s_t0: b2Vec2;
        SolveSpring(step: b2TimeStep): void;
        static SolveSpring_s_pa: b2Vec2;
        static SolveSpring_s_pb: b2Vec2;
        static SolveSpring_s_d: b2Vec2;
        static SolveSpring_s_f: b2Vec2;
        SolveTensile(step: b2TimeStep): void;
        static SolveTensile_s_weightedNormal: b2Vec2;
        static SolveTensile_s_s: b2Vec2;
        static SolveTensile_s_f: b2Vec2;
        SolveViscous(): void;
        static SolveViscous_s_v: b2Vec2;
        static SolveViscous_s_f: b2Vec2;
        SolveRepulsive(step: b2TimeStep): void;
        static SolveRepulsive_s_f: b2Vec2;
        SolvePowder(step: b2TimeStep): void;
        static SolvePowder_s_f: b2Vec2;
        SolveSolid(step: b2TimeStep): void;
        static SolveSolid_s_f: b2Vec2;
        SolveForce(step: b2TimeStep): void;
        SolveColorMixing(): void;
        SolveZombie(): void;
        SolveLifetimes(step: b2TimeStep): void;
        RotateBuffer(start: number, mid: number, end: number): void;
        GetCriticalVelocity(step: b2TimeStep): number;
        GetCriticalVelocitySquared(step: b2TimeStep): number;
        GetCriticalPressure(step: b2TimeStep): number;
        GetParticleStride(): number;
        GetParticleMass(): number;
        GetParticleInvMass(): number;
        GetFixtureContactFilter(): b2ContactFilter;
        GetParticleContactFilter(): b2ContactFilter;
        GetFixtureContactListener(): b2ContactListener;
        GetParticleContactListener(): b2ContactListener;
        SetUserOverridableBuffer<T>(buffer: b2ParticleSystem.UserOverridableBuffer<any>, newData: T[], newCapacity: number): void;
        SetGroupFlags(group: b2ParticleGroup, newFlags: b2ParticleGroupFlag): void;
        static BodyContactCompare(lhs: b2ParticleBodyContact, rhs: b2ParticleBodyContact): boolean;
        RemoveSpuriousBodyContacts(): void;
        private static RemoveSpuriousBodyContacts_s_n;
        private static RemoveSpuriousBodyContacts_s_pos;
        private static RemoveSpuriousBodyContacts_s_normal;
        DetectStuckParticle(particle: number): void;
        ValidateParticleIndex(index: number): boolean;
        GetQuantizedTimeElapsed(): number;
        LifetimeToExpirationTime(lifetime: number): number;
        ForceCanBeApplied(flags: b2ParticleFlag): boolean;
        PrepareForceBuffer(): void;
        IsRigidGroup(group: b2ParticleGroup): boolean;
        GetLinearVelocity(group: b2ParticleGroup, particleIndex: number, point: b2Vec2, out: b2Vec2): b2Vec2;
        InitDampingParameter(invMass: number[], invInertia: number[], tangentDistance: number[], mass: number, inertia: number, center: b2Vec2, point: b2Vec2, normal: b2Vec2): void;
        InitDampingParameterWithRigidGroupOrParticle(invMass: number[], invInertia: number[], tangentDistance: number[], isRigidGroup: boolean, group: b2ParticleGroup, particleIndex: number, point: b2Vec2, normal: b2Vec2): void;
        ComputeDampingImpulse(invMassA: number, invInertiaA: number, tangentDistanceA: number, invMassB: number, invInertiaB: number, tangentDistanceB: number, normalVelocity: number): number;
        ApplyDamping(invMass: number, invInertia: number, tangentDistance: number, isRigidGroup: boolean, group: b2ParticleGroup, particleIndex: number, impulse: number, normal: b2Vec2): void;
    }
    export namespace b2ParticleSystem {
        class UserOverridableBuffer<T> {
            data: T[] | null;
            userSuppliedCapacity: number;
        }
        class Proxy {
            index: number;
            tag: number;
            static CompareProxyProxy(a: Proxy, b: Proxy): boolean;
            static CompareTagProxy(a: number, b: Proxy): boolean;
            static CompareProxyTag(a: Proxy, b: number): boolean;
        }
        class InsideBoundsEnumerator {
            m_system: b2ParticleSystem;
            m_xLower: number;
            m_xUpper: number;
            m_yLower: number;
            m_yUpper: number;
            m_first: number;
            m_last: number;
            constructor(system: b2ParticleSystem, lower: number, upper: number, first: number, last: number);
            GetNext(): number;
        }
        class ParticleListNode {
            list: b2ParticleSystem.ParticleListNode;
            next: b2ParticleSystem.ParticleListNode | null;
            count: number;
            index: number;
        }
        class FixedSetAllocator<T> {
            Allocate(itemSize: number, count: number): number;
            Clear(): void;
            GetCount(): number;
            Invalidate(itemIndex: number): void;
            GetValidBuffer(): boolean[];
            GetBuffer(): T[];
            SetCount(count: number): void;
        }
        class FixtureParticle {
            first: b2Fixture;
            second: number;
            constructor(fixture: b2Fixture, particle: number);
        }
        class FixtureParticleSet extends b2ParticleSystem.FixedSetAllocator<FixtureParticle> {
            Initialize(bodyContactBuffer: b2GrowableBuffer<b2ParticleBodyContact>, flagsBuffer: b2ParticleSystem.UserOverridableBuffer<b2ParticleFlag>): void;
            Find(pair: b2ParticleSystem.FixtureParticle): number;
        }
        class ParticlePair {
            first: number;
            second: number;
            constructor(particleA: number, particleB: number);
        }
        class b2ParticlePairSet extends b2ParticleSystem.FixedSetAllocator<ParticlePair> {
            Initialize(contactBuffer: b2GrowableBuffer<b2ParticleContact>, flagsBuffer: UserOverridableBuffer<b2ParticleFlag>): void;
            Find(pair: b2ParticleSystem.ParticlePair): number;
        }
        class ConnectionFilter {
            IsNecessary(index: number): boolean;
            ShouldCreatePair(a: number, b: number): boolean;
            ShouldCreateTriad(a: number, b: number, c: number): boolean;
        }
        class DestroyParticlesInShapeCallback extends b2QueryCallback {
            m_system: b2ParticleSystem;
            m_shape: b2Shape;
            m_xf: b2Transform;
            m_callDestructionListener: boolean;
            m_destroyed: number;
            constructor(system: b2ParticleSystem, shape: b2Shape, xf: b2Transform, callDestructionListener: boolean);
            ReportFixture(fixture: b2Fixture): boolean;
            ReportParticle(particleSystem: b2ParticleSystem, index: number): boolean;
            Destroyed(): number;
        }
        class JoinParticleGroupsFilter extends b2ParticleSystem.ConnectionFilter {
            m_threshold: number;
            constructor(threshold: number);
            ShouldCreatePair(a: number, b: number): boolean;
            ShouldCreateTriad(a: number, b: number, c: number): boolean;
        }
        class CompositeShape extends b2Shape {
            constructor(shapes: b2Shape[], shapeCount?: number);
            m_shapes: b2Shape[];
            m_shapeCount: number;
            Clone(): b2Shape;
            GetChildCount(): number;
            TestPoint(xf: b2Transform, p: b2Vec2): boolean;
            ComputeDistance(xf: b2Transform, p: b2Vec2, normal: b2Vec2, childIndex: number): number;
            RayCast(output: b2RayCastOutput, input: b2RayCastInput, xf: b2Transform, childIndex: number): boolean;
            ComputeAABB(aabb: b2AABB, xf: b2Transform, childIndex: number): void;
            ComputeMass(massData: b2MassData, density: number): void;
            SetupDistanceProxy(proxy: b2DistanceProxy, index: number): void;
            ComputeSubmergedArea(normal: b2Vec2, offset: number, xf: b2Transform, c: b2Vec2): number;
            Dump(log: (format: string, ...args: any[]) => void): void;
        }
        class ReactiveFilter extends b2ParticleSystem.ConnectionFilter {
            m_flagsBuffer: b2ParticleSystem.UserOverridableBuffer<b2ParticleFlag>;
            constructor(flagsBuffer: b2ParticleSystem.UserOverridableBuffer<b2ParticleFlag>);
            IsNecessary(index: number): boolean;
        }
        class UpdateBodyContactsCallback extends b2FixtureParticleQueryCallback {
            m_contactFilter: b2ContactFilter;
            constructor(system: b2ParticleSystem, contactFilter: b2ContactFilter);
            ShouldCollideFixtureParticle(fixture: b2Fixture, particleSystem: b2ParticleSystem, particleIndex: number): boolean;
            ReportFixtureAndParticle(fixture: b2Fixture, childIndex: number, a: number): void;
            static ReportFixtureAndParticle_s_n: b2Vec2;
            static ReportFixtureAndParticle_s_rp: b2Vec2;
        }
        class SolveCollisionCallback extends b2FixtureParticleQueryCallback {
            m_step: b2TimeStep;
            constructor(system: b2ParticleSystem, step: b2TimeStep);
            ReportFixtureAndParticle(fixture: b2Fixture, childIndex: number, a: number): void;
            static ReportFixtureAndParticle_s_p1: b2Vec2;
            static ReportFixtureAndParticle_s_output: b2RayCastOutput;
            static ReportFixtureAndParticle_s_input: b2RayCastInput;
            static ReportFixtureAndParticle_s_p: b2Vec2;
            static ReportFixtureAndParticle_s_v: b2Vec2;
            static ReportFixtureAndParticle_s_f: b2Vec2;
            ReportParticle(system: b2ParticleSystem, index: number): boolean;
        }
    }
}
declare module "Box2D/Box2D/Particle/b2ParticleGroup" {
    import { b2Vec2, b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2Color } from "Box2D/Box2D/Common/b2Draw";
    import { b2Shape } from "Box2D/Box2D/Collision/Shapes/b2Shape";
    import { b2ParticleFlag } from "Box2D/Box2D/Particle/b2Particle";
    import { b2ParticleSystem } from "Box2D/Box2D/Particle/b2ParticleSystem";
    export enum b2ParticleGroupFlag {
        b2_solidParticleGroup = 1,
        b2_rigidParticleGroup = 2,
        b2_particleGroupCanBeEmpty = 4,
        b2_particleGroupWillBeDestroyed = 8,
        b2_particleGroupNeedsUpdateDepth = 16,
        b2_particleGroupInternalMask = 24,
    }
    export class b2ParticleGroupDef {
        flags: b2ParticleFlag;
        groupFlags: b2ParticleGroupFlag;
        position: b2Vec2;
        angle: number;
        linearVelocity: b2Vec2;
        angularVelocity: number;
        color: b2Color;
        strength: number;
        shape: b2Shape;
        shapes: b2Shape[];
        shapeCount: number;
        stride: number;
        particleCount: number;
        positionData: b2Vec2[];
        lifetime: number;
        userData: any;
        group: b2ParticleGroup | null;
    }
    export class b2ParticleGroup {
        readonly m_system: b2ParticleSystem;
        m_firstIndex: number;
        m_lastIndex: number;
        m_groupFlags: b2ParticleGroupFlag;
        m_strength: number;
        m_prev: b2ParticleGroup | null;
        m_next: b2ParticleGroup | null;
        m_timestamp: number;
        m_mass: number;
        m_inertia: number;
        m_center: b2Vec2;
        m_linearVelocity: b2Vec2;
        m_angularVelocity: number;
        m_transform: b2Transform;
        m_userData: any;
        constructor(system: b2ParticleSystem);
        GetNext(): b2ParticleGroup;
        GetParticleSystem(): b2ParticleSystem;
        GetParticleCount(): number;
        GetBufferIndex(): number;
        ContainsParticle(index: number): boolean;
        GetAllParticleFlags(): b2ParticleFlag;
        GetGroupFlags(): b2ParticleGroupFlag;
        SetGroupFlags(flags: number): void;
        GetMass(): number;
        GetInertia(): number;
        GetCenter(): b2Vec2;
        GetLinearVelocity(): b2Vec2;
        GetAngularVelocity(): number;
        GetTransform(): b2Transform;
        GetPosition(): b2Vec2;
        GetAngle(): number;
        GetLinearVelocityFromWorldPoint(worldPoint: b2Vec2, out: b2Vec2): b2Vec2;
        static GetLinearVelocityFromWorldPoint_s_t0: b2Vec2;
        GetUserData(): void;
        SetUserData(data: any): void;
        ApplyForce(force: b2Vec2): void;
        ApplyLinearImpulse(impulse: b2Vec2): void;
        DestroyParticles(callDestructionListener: boolean): void;
        UpdateStatistics(): void;
    }
}
declare module "Box2D/Box2D/Dynamics/b2WorldCallbacks" {
    import { b2Vec2 } from "Box2D/Box2D/Common/b2Math";
    import { b2Manifold } from "Box2D/Box2D/Collision/b2Collision";
    import { b2Contact } from "Box2D/Box2D/Dynamics/Contacts/b2Contact";
    import { b2Joint } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    import { b2Fixture } from "Box2D/Box2D/Dynamics/b2Fixture";
    import { b2ParticleGroup } from "Box2D/Box2D/Particle/b2ParticleGroup";
    import { b2ParticleSystem, b2ParticleContact, b2ParticleBodyContact } from "Box2D/Box2D/Particle/b2ParticleSystem";
    export class b2DestructionListener {
        SayGoodbyeJoint(joint: b2Joint): void;
        SayGoodbyeFixture(fixture: b2Fixture): void;
        SayGoodbyeParticleGroup(group: b2ParticleGroup): void;
        SayGoodbyeParticle(system: b2ParticleSystem, index: number): void;
    }
    export class b2ContactFilter {
        ShouldCollide(fixtureA: b2Fixture, fixtureB: b2Fixture): boolean;
        ShouldCollideFixtureParticle(fixture: b2Fixture, system: b2ParticleSystem, index: number): boolean;
        ShouldCollideParticleParticle(system: b2ParticleSystem, indexA: number, indexB: number): boolean;
        static b2_defaultFilter: b2ContactFilter;
    }
    export class b2ContactImpulse {
        normalImpulses: number[];
        tangentImpulses: number[];
        count: number;
    }
    export class b2ContactListener {
        BeginContact(contact: b2Contact): void;
        EndContact(contact: b2Contact): void;
        BeginContactFixtureParticle(system: b2ParticleSystem, contact: b2ParticleBodyContact): void;
        EndContactFixtureParticle(system: b2ParticleSystem, contact: b2ParticleBodyContact): void;
        BeginContactParticleParticle(system: b2ParticleSystem, contact: b2ParticleContact): void;
        EndContactParticleParticle(system: b2ParticleSystem, contact: b2ParticleContact): void;
        PreSolve(contact: b2Contact, oldManifold: b2Manifold): void;
        PostSolve(contact: b2Contact, impulse: b2ContactImpulse): void;
        static b2_defaultListener: b2ContactListener;
    }
    export class b2QueryCallback {
        ReportFixture(fixture: b2Fixture): boolean;
        ReportParticle(system: b2ParticleSystem, index: number): boolean;
        ShouldQueryParticleSystem(system: b2ParticleSystem): boolean;
    }
    export type b2QueryCallbackFunction = {
        (fixture: b2Fixture): boolean;
    };
    export class b2RayCastCallback {
        ReportFixture(fixture: b2Fixture, point: b2Vec2, normal: b2Vec2, fraction: number): number;
        ReportParticle(system: b2ParticleSystem, index: number, point: b2Vec2, normal: b2Vec2, fraction: number): number;
        ShouldQueryParticleSystem(system: b2ParticleSystem): boolean;
    }
    export type b2RayCastCallbackFunction = {
        (fixture: b2Fixture, point: b2Vec2, normal: b2Vec2, fraction: number): number;
    };
}
declare module "Box2D/Box2D/Dynamics/b2Island" {
    import { b2Vec2 } from "Box2D/Box2D/Common/b2Math";
    import { b2Contact } from "Box2D/Box2D/Dynamics/Contacts/b2Contact";
    import { b2ContactVelocityConstraint } from "Box2D/Box2D/Dynamics/Contacts/b2ContactSolver";
    import { b2Joint } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    import { b2Body } from "Box2D/Box2D/Dynamics/b2Body";
    import { b2TimeStep, b2Profile, b2Position, b2Velocity } from "Box2D/Box2D/Dynamics/b2TimeStep";
    import { b2ContactListener } from "Box2D/Box2D/Dynamics/b2WorldCallbacks";
    export class b2Island {
        m_allocator: any;
        m_listener: b2ContactListener;
        m_bodies: b2Body[];
        m_contacts: b2Contact[];
        m_joints: b2Joint[];
        m_positions: b2Position[];
        m_velocities: b2Velocity[];
        m_bodyCount: number;
        m_jointCount: number;
        m_contactCount: number;
        m_bodyCapacity: number;
        m_contactCapacity: number;
        m_jointCapacity: number;
        Initialize(bodyCapacity: number, contactCapacity: number, jointCapacity: number, allocator: any, listener: b2ContactListener): void;
        Clear(): void;
        AddBody(body: b2Body): void;
        AddContact(contact: b2Contact): void;
        AddJoint(joint: b2Joint): void;
        private static s_timer;
        private static s_solverData;
        private static s_contactSolverDef;
        private static s_contactSolver;
        private static s_translation;
        Solve(profile: b2Profile, step: b2TimeStep, gravity: b2Vec2, allowSleep: boolean): void;
        SolveTOI(subStep: b2TimeStep, toiIndexA: number, toiIndexB: number): void;
        private static s_impulse;
        Report(constraints: b2ContactVelocityConstraint[]): void;
    }
}
declare module "Contributions/Enhancements/Controllers/b2Controller" {
    import { b2TimeStep, b2Draw, b2Body, b2World } from "Box2D/Box2D/Box2D";
    export class b2ControllerEdge {
        controller: b2Controller;
        body: b2Body;
        prevBody: b2ControllerEdge;
        nextBody: b2ControllerEdge;
        prevController: b2ControllerEdge;
        nextController: b2ControllerEdge;
    }
    export abstract class b2Controller {
        m_world: b2World;
        m_bodyList: b2ControllerEdge;
        m_bodyCount: number;
        m_prev: b2Controller | null;
        m_next: b2Controller | null;
        abstract Step(step: b2TimeStep): void;
        abstract Draw(debugDraw: b2Draw): void;
        GetNext(): b2Controller;
        GetPrev(): b2Controller;
        GetWorld(): b2World;
        GetBodyList(): b2ControllerEdge;
        AddBody(body: b2Body): void;
        RemoveBody(body: b2Body): void;
        Clear(): void;
    }
}
declare module "Box2D/Box2D/Dynamics/b2World" {
    import { b2Vec2, b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2Color, b2Draw } from "Box2D/Box2D/Common/b2Draw";
    import { b2AABB } from "Box2D/Box2D/Collision/b2Collision";
    import { b2Shape } from "Box2D/Box2D/Collision/Shapes/b2Shape";
    import { b2Contact } from "Box2D/Box2D/Dynamics/Contacts/b2Contact";
    import { b2Joint, b2JointDef } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    import { b2Body, b2BodyDef } from "Box2D/Box2D/Dynamics/b2Body";
    import { b2ContactManager } from "Box2D/Box2D/Dynamics/b2ContactManager";
    import { b2Fixture } from "Box2D/Box2D/Dynamics/b2Fixture";
    import { b2Island } from "Box2D/Box2D/Dynamics/b2Island";
    import { b2Profile, b2TimeStep } from "Box2D/Box2D/Dynamics/b2TimeStep";
    import { b2ContactFilter } from "Box2D/Box2D/Dynamics/b2WorldCallbacks";
    import { b2ContactListener } from "Box2D/Box2D/Dynamics/b2WorldCallbacks";
    import { b2DestructionListener } from "Box2D/Box2D/Dynamics/b2WorldCallbacks";
    import { b2QueryCallback, b2QueryCallbackFunction } from "Box2D/Box2D/Dynamics/b2WorldCallbacks";
    import { b2RayCastCallback, b2RayCastCallbackFunction } from "Box2D/Box2D/Dynamics/b2WorldCallbacks";
    import { b2ParticleSystemDef, b2ParticleSystem } from "Box2D/Box2D/Particle/b2ParticleSystem";
    import { b2Controller } from "Contributions/Enhancements/Controllers/b2Controller";
    export class b2World {
        m_newFixture: boolean;
        m_locked: boolean;
        m_clearForces: boolean;
        m_contactManager: b2ContactManager;
        m_bodyList: b2Body | null;
        m_jointList: b2Joint | null;
        m_particleSystemList: b2ParticleSystem;
        m_bodyCount: number;
        m_jointCount: number;
        m_gravity: b2Vec2;
        m_allowSleep: boolean;
        m_destructionListener: b2DestructionListener | null;
        m_debugDraw: b2Draw | null;
        m_inv_dt0: number;
        m_warmStarting: boolean;
        m_continuousPhysics: boolean;
        m_subStepping: boolean;
        m_stepComplete: boolean;
        m_profile: b2Profile;
        m_island: b2Island;
        s_stack: b2Body[];
        m_controllerList: b2Controller;
        m_controllerCount: number;
        constructor(gravity: b2Vec2);
        SetDestructionListener(listener: b2DestructionListener): void;
        SetContactFilter(filter: b2ContactFilter): void;
        SetContactListener(listener: b2ContactListener): void;
        SetDebugDraw(debugDraw: b2Draw): void;
        CreateBody(def: b2BodyDef): b2Body;
        DestroyBody(b: b2Body): void;
        CreateJoint<T extends b2Joint>(def: b2JointDef): T;
        DestroyJoint(j: b2Joint): void;
        CreateParticleSystem(def: b2ParticleSystemDef): b2ParticleSystem;
        DestroyParticleSystem(p: b2ParticleSystem): void;
        CalculateReasonableParticleIterations(timeStep: number): number;
        private static Step_s_step;
        private static Step_s_stepTimer;
        private static Step_s_timer;
        Step(dt: number, velocityIterations: number, positionIterations: number, particleIterations?: number): void;
        ClearForces(): void;
        DrawParticleSystem(system: b2ParticleSystem): void;
        private static DrawDebugData_s_color;
        private static DrawDebugData_s_vs;
        private static DrawDebugData_s_xf;
        DrawDebugData(): void;
        QueryAABB(callback: b2QueryCallback | b2QueryCallbackFunction, aabb: b2AABB): void;
        private static QueryShape_s_aabb;
        QueryShape(callback: b2QueryCallback | b2QueryCallbackFunction, shape: b2Shape, transform: b2Transform): void;
        private static QueryPoint_s_aabb;
        QueryPoint(callback: b2QueryCallback | b2QueryCallbackFunction, point: b2Vec2): void;
        private static RayCast_s_input;
        private static RayCast_s_output;
        private static RayCast_s_point;
        RayCast(callback: b2RayCastCallback | b2RayCastCallbackFunction, point1: b2Vec2, point2: b2Vec2): void;
        RayCastOne(point1: b2Vec2, point2: b2Vec2): b2Fixture;
        RayCastAll(point1: b2Vec2, point2: b2Vec2, out?: b2Fixture[]): b2Fixture[];
        GetBodyList(): b2Body;
        GetJointList(): b2Joint;
        GetParticleSystemList(): b2ParticleSystem;
        GetContactList(): b2Contact | null;
        SetAllowSleeping(flag: boolean): void;
        GetAllowSleeping(): boolean;
        SetWarmStarting(flag: boolean): void;
        GetWarmStarting(): boolean;
        SetContinuousPhysics(flag: boolean): void;
        GetContinuousPhysics(): boolean;
        SetSubStepping(flag: boolean): void;
        GetSubStepping(): boolean;
        GetProxyCount(): number;
        GetBodyCount(): number;
        GetJointCount(): number;
        GetContactCount(): number;
        GetTreeHeight(): number;
        GetTreeBalance(): number;
        GetTreeQuality(): number;
        SetGravity(gravity: b2Vec2, wake?: boolean): void;
        GetGravity(): b2Vec2;
        IsLocked(): boolean;
        SetAutoClearForces(flag: boolean): void;
        GetAutoClearForces(): boolean;
        ShiftOrigin(newOrigin: b2Vec2): void;
        GetContactManager(): b2ContactManager;
        GetProfile(): b2Profile;
        Dump(log: (format: string, ...args: any[]) => void): void;
        private static DrawJoint_s_p1;
        private static DrawJoint_s_p2;
        private static DrawJoint_s_color;
        DrawJoint(joint: b2Joint): void;
        DrawShape(fixture: b2Fixture, color: b2Color): void;
        Solve(step: b2TimeStep): void;
        private static SolveTOI_s_subStep;
        private static SolveTOI_s_backup;
        private static SolveTOI_s_backup1;
        private static SolveTOI_s_backup2;
        private static SolveTOI_s_toi_input;
        private static SolveTOI_s_toi_output;
        SolveTOI(step: b2TimeStep): void;
        AddController(controller: b2Controller): b2Controller;
        RemoveController(controller: b2Controller): b2Controller;
    }
}
declare module "Box2D/Box2D/Dynamics/b2Body" {
    import { b2Vec2, b2Transform, b2Sweep } from "Box2D/Box2D/Common/b2Math";
    import { b2Shape, b2MassData } from "Box2D/Box2D/Collision/Shapes/b2Shape";
    import { b2ContactEdge } from "Box2D/Box2D/Dynamics/Contacts/b2Contact";
    import { b2JointEdge } from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    import { b2Fixture, b2FixtureDef } from "Box2D/Box2D/Dynamics/b2Fixture";
    import { b2World } from "Box2D/Box2D/Dynamics/b2World";
    import { b2ControllerEdge } from "Contributions/Enhancements/Controllers/b2Controller";
    export enum b2BodyType {
        b2_unknown = -1,
        b2_staticBody = 0,
        b2_kinematicBody = 1,
        b2_dynamicBody = 2,
    }
    export class b2BodyDef {
        type: b2BodyType;
        position: b2Vec2;
        angle: number;
        linearVelocity: b2Vec2;
        angularVelocity: number;
        linearDamping: number;
        angularDamping: number;
        allowSleep: boolean;
        awake: boolean;
        fixedRotation: boolean;
        bullet: boolean;
        active: boolean;
        userData: any;
        gravityScale: number;
    }
    export class b2Body {
        m_type: b2BodyType;
        m_islandFlag: boolean;
        m_awakeFlag: boolean;
        m_autoSleepFlag: boolean;
        m_bulletFlag: boolean;
        m_fixedRotationFlag: boolean;
        m_activeFlag: boolean;
        m_toiFlag: boolean;
        m_islandIndex: number;
        m_xf: b2Transform;
        m_xf0: b2Transform;
        m_sweep: b2Sweep;
        m_linearVelocity: b2Vec2;
        m_angularVelocity: number;
        m_force: b2Vec2;
        m_torque: number;
        m_world: b2World;
        m_prev: b2Body | null;
        m_next: b2Body | null;
        m_fixtureList: b2Fixture | null;
        m_fixtureCount: number;
        m_jointList: b2JointEdge | null;
        m_contactList: b2ContactEdge | null;
        m_mass: number;
        m_invMass: number;
        m_I: number;
        m_invI: number;
        m_linearDamping: number;
        m_angularDamping: number;
        m_gravityScale: number;
        m_sleepTime: number;
        m_userData: any;
        m_controllerList: b2ControllerEdge;
        m_controllerCount: number;
        constructor(bd: b2BodyDef, world: b2World);
        CreateFixture(a: b2FixtureDef | b2Shape, b?: number): b2Fixture;
        CreateFixtureDef(def: b2FixtureDef): b2Fixture;
        private static CreateFixtureShapeDensity_s_def;
        CreateFixtureShapeDensity(shape: b2Shape, density?: number): b2Fixture;
        DestroyFixture(fixture: b2Fixture): void;
        SetTransformVec(position: b2Vec2, angle: number): void;
        SetTransformXY(x: number, y: number, angle: number): void;
        SetTransform(xf: b2Transform): void;
        GetTransform(): b2Transform;
        GetPosition(): b2Vec2;
        SetPosition(position: b2Vec2): void;
        SetPositionXY(x: number, y: number): void;
        GetAngle(): number;
        SetAngle(angle: number): void;
        GetWorldCenter(): b2Vec2;
        GetLocalCenter(): b2Vec2;
        SetLinearVelocity(v: b2Vec2): void;
        GetLinearVelocity(): b2Vec2;
        SetAngularVelocity(w: number): void;
        GetAngularVelocity(): number;
        GetDefinition(bd: b2BodyDef): b2BodyDef;
        ApplyForce(force: b2Vec2, point: b2Vec2, wake?: boolean): void;
        ApplyForceToCenter(force: b2Vec2, wake?: boolean): void;
        ApplyTorque(torque: number, wake?: boolean): void;
        ApplyLinearImpulse(impulse: b2Vec2, point: b2Vec2, wake?: boolean): void;
        ApplyLinearImpulseToCenter(impulse: b2Vec2, wake?: boolean): void;
        ApplyAngularImpulse(impulse: number, wake?: boolean): void;
        GetMass(): number;
        GetInertia(): number;
        GetMassData(data: b2MassData): b2MassData;
        private static SetMassData_s_oldCenter;
        SetMassData(massData: b2MassData): void;
        private static ResetMassData_s_localCenter;
        private static ResetMassData_s_oldCenter;
        private static ResetMassData_s_massData;
        ResetMassData(): void;
        GetWorldPoint(localPoint: b2Vec2, out: b2Vec2): b2Vec2;
        GetWorldVector(localVector: b2Vec2, out: b2Vec2): b2Vec2;
        GetLocalPoint(worldPoint: b2Vec2, out: b2Vec2): b2Vec2;
        GetLocalVector(worldVector: b2Vec2, out: b2Vec2): b2Vec2;
        GetLinearVelocityFromWorldPoint(worldPoint: b2Vec2, out: b2Vec2): b2Vec2;
        GetLinearVelocityFromLocalPoint(localPoint: b2Vec2, out: b2Vec2): b2Vec2;
        GetLinearDamping(): number;
        SetLinearDamping(linearDamping: number): void;
        GetAngularDamping(): number;
        SetAngularDamping(angularDamping: number): void;
        GetGravityScale(): number;
        SetGravityScale(scale: number): void;
        SetType(type: b2BodyType): void;
        GetType(): b2BodyType;
        SetBullet(flag: boolean): void;
        IsBullet(): boolean;
        SetSleepingAllowed(flag: boolean): void;
        IsSleepingAllowed(): boolean;
        SetAwake(flag: boolean): void;
        IsAwake(): boolean;
        SetActive(flag: boolean): void;
        IsActive(): boolean;
        SetFixedRotation(flag: boolean): void;
        IsFixedRotation(): boolean;
        GetFixtureList(): b2Fixture | null;
        GetJointList(): b2JointEdge | null;
        GetContactList(): b2ContactEdge | null;
        GetNext(): b2Body | null;
        GetUserData(): any;
        SetUserData(data: any): void;
        GetWorld(): b2World;
        Dump(log: (format: string, ...args: any[]) => void): void;
        private static SynchronizeFixtures_s_xf1;
        SynchronizeFixtures(): void;
        SynchronizeTransform(): void;
        ShouldCollide(other: b2Body): boolean;
        ShouldCollideConnected(other: b2Body): boolean;
        Advance(alpha: number): void;
        GetControllerList(): b2ControllerEdge;
        GetControllerCount(): number;
    }
}
declare module "Box2D/Box2D/Dynamics/Contacts/b2Contact" {
    import { b2Transform, b2Sweep } from "Box2D/Box2D/Common/b2Math";
    import { b2Manifold, b2WorldManifold } from "Box2D/Box2D/Collision/b2Collision";
    import { b2Body } from "Box2D/Box2D/Dynamics/b2Body";
    import { b2Fixture } from "Box2D/Box2D/Dynamics/b2Fixture";
    import { b2ContactListener } from "Box2D/Box2D/Dynamics/b2WorldCallbacks";
    export function b2MixFriction(friction1: number, friction2: number): number;
    export function b2MixRestitution(restitution1: number, restitution2: number): number;
    export class b2ContactEdge {
        other: b2Body | null;
        contact: b2Contact | null;
        prev: b2ContactEdge | null;
        next: b2ContactEdge | null;
    }
    export class b2Contact {
        m_islandFlag: boolean;
        m_touchingFlag: boolean;
        m_enabledFlag: boolean;
        m_filterFlag: boolean;
        m_bulletHitFlag: boolean;
        m_toiFlag: boolean;
        m_prev: b2Contact | null;
        m_next: b2Contact | null;
        m_nodeA: b2ContactEdge;
        m_nodeB: b2ContactEdge;
        m_fixtureA: b2Fixture | null;
        m_fixtureB: b2Fixture | null;
        m_indexA: number;
        m_indexB: number;
        m_manifold: b2Manifold;
        m_toiCount: number;
        m_toi: number;
        m_friction: number;
        m_restitution: number;
        m_tangentSpeed: number;
        m_oldManifold: b2Manifold;
        GetManifold(): b2Manifold;
        GetWorldManifold(worldManifold: b2WorldManifold): void;
        IsTouching(): boolean;
        SetEnabled(flag: boolean): void;
        IsEnabled(): boolean;
        GetNext(): b2Contact | null;
        GetFixtureA(): b2Fixture | null;
        GetChildIndexA(): number;
        GetFixtureB(): b2Fixture | null;
        GetChildIndexB(): number;
        Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void;
        FlagForFiltering(): void;
        SetFriction(friction: number): void;
        GetFriction(): number;
        ResetFriction(): void;
        SetRestitution(restitution: number): void;
        GetRestitution(): number;
        ResetRestitution(): void;
        SetTangentSpeed(speed: number): void;
        GetTangentSpeed(): number;
        Reset(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): void;
        Update(listener: b2ContactListener): void;
        private static ComputeTOI_s_input;
        private static ComputeTOI_s_output;
        ComputeTOI(sweepA: b2Sweep, sweepB: b2Sweep): number;
    }
}
declare module "Box2D/Box2D/Collision/b2CollideCircle" {
    import { b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2Manifold } from "Box2D/Box2D/Collision/b2Collision";
    import { b2CircleShape } from "Box2D/Box2D/Collision/Shapes/b2CircleShape";
    import { b2PolygonShape } from "Box2D/Box2D/Collision/Shapes/b2PolygonShape";
    export function b2CollideCircles(manifold: b2Manifold, circleA: b2CircleShape, xfA: b2Transform, circleB: b2CircleShape, xfB: b2Transform): void;
    export function b2CollidePolygonAndCircle(manifold: b2Manifold, polygonA: b2PolygonShape, xfA: b2Transform, circleB: b2CircleShape, xfB: b2Transform): void;
}
declare module "Box2D/Box2D/Dynamics/Contacts/b2CircleContact" {
    import { b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2Manifold } from "Box2D/Box2D/Collision/b2Collision";
    import { b2Contact } from "Box2D/Box2D/Dynamics/Contacts/b2Contact";
    import { b2Fixture } from "Box2D/Box2D/Dynamics/b2Fixture";
    export class b2CircleContact extends b2Contact {
        constructor();
        static Create(allocator: any): b2Contact;
        static Destroy(contact: b2Contact, allocator: any): void;
        Reset(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): void;
        Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void;
    }
}
declare module "Box2D/Box2D/Collision/b2CollidePolygon" {
    import { b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2Manifold } from "Box2D/Box2D/Collision/b2Collision";
    import { b2PolygonShape } from "Box2D/Box2D/Collision/Shapes/b2PolygonShape";
    export function b2CollidePolygons(manifold: b2Manifold, polyA: b2PolygonShape, xfA: b2Transform, polyB: b2PolygonShape, xfB: b2Transform): void;
}
declare module "Box2D/Box2D/Dynamics/Contacts/b2PolygonContact" {
    import { b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2Manifold } from "Box2D/Box2D/Collision/b2Collision";
    import { b2Contact } from "Box2D/Box2D/Dynamics/Contacts/b2Contact";
    import { b2Fixture } from "Box2D/Box2D/Dynamics/b2Fixture";
    export class b2PolygonContact extends b2Contact {
        constructor();
        static Create(allocator: any): b2Contact;
        static Destroy(contact: b2Contact, allocator: any): void;
        Reset(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): void;
        Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void;
    }
}
declare module "Box2D/Box2D/Dynamics/Contacts/b2PolygonAndCircleContact" {
    import { b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2Manifold } from "Box2D/Box2D/Collision/b2Collision";
    import { b2Contact } from "Box2D/Box2D/Dynamics/Contacts/b2Contact";
    import { b2Fixture } from "Box2D/Box2D/Dynamics/b2Fixture";
    export class b2PolygonAndCircleContact extends b2Contact {
        constructor();
        static Create(allocator: any): b2Contact;
        static Destroy(contact: b2Contact, allocator: any): void;
        Reset(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): void;
        Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void;
    }
}
declare module "Box2D/Box2D/Collision/b2CollideEdge" {
    import { b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2Manifold } from "Box2D/Box2D/Collision/b2Collision";
    import { b2CircleShape } from "Box2D/Box2D/Collision/Shapes/b2CircleShape";
    import { b2PolygonShape } from "Box2D/Box2D/Collision/Shapes/b2PolygonShape";
    import { b2EdgeShape } from "Box2D/Box2D/Collision/Shapes/b2EdgeShape";
    export function b2CollideEdgeAndCircle(manifold: b2Manifold, edgeA: b2EdgeShape, xfA: b2Transform, circleB: b2CircleShape, xfB: b2Transform): void;
    export function b2CollideEdgeAndPolygon(manifold: b2Manifold, edgeA: b2EdgeShape, xfA: b2Transform, polygonB: b2PolygonShape, xfB: b2Transform): void;
}
declare module "Box2D/Box2D/Dynamics/Contacts/b2EdgeAndCircleContact" {
    import { b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2Manifold } from "Box2D/Box2D/Collision/b2Collision";
    import { b2Contact } from "Box2D/Box2D/Dynamics/Contacts/b2Contact";
    import { b2Fixture } from "Box2D/Box2D/Dynamics/b2Fixture";
    export class b2EdgeAndCircleContact extends b2Contact {
        constructor();
        static Create(allocator: any): b2Contact;
        static Destroy(contact: b2Contact, allocator: any): void;
        Reset(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): void;
        Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void;
    }
}
declare module "Box2D/Box2D/Dynamics/Contacts/b2EdgeAndPolygonContact" {
    import { b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2Manifold } from "Box2D/Box2D/Collision/b2Collision";
    import { b2Contact } from "Box2D/Box2D/Dynamics/Contacts/b2Contact";
    import { b2Fixture } from "Box2D/Box2D/Dynamics/b2Fixture";
    export class b2EdgeAndPolygonContact extends b2Contact {
        constructor();
        static Create(allocator: any): b2Contact;
        static Destroy(contact: b2Contact, allocator: any): void;
        Reset(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): void;
        Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void;
    }
}
declare module "Box2D/Box2D/Dynamics/Contacts/b2ChainAndCircleContact" {
    import { b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2Manifold } from "Box2D/Box2D/Collision/b2Collision";
    import { b2Contact } from "Box2D/Box2D/Dynamics/Contacts/b2Contact";
    import { b2Fixture } from "Box2D/Box2D/Dynamics/b2Fixture";
    export class b2ChainAndCircleContact extends b2Contact {
        constructor();
        static Create(allocator: any): b2Contact;
        static Destroy(contact: b2Contact, allocator: any): void;
        Reset(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): void;
        private static Evaluate_s_edge;
        Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void;
    }
}
declare module "Box2D/Box2D/Dynamics/Contacts/b2ChainAndPolygonContact" {
    import { b2Transform } from "Box2D/Box2D/Common/b2Math";
    import { b2Manifold } from "Box2D/Box2D/Collision/b2Collision";
    import { b2Contact } from "Box2D/Box2D/Dynamics/Contacts/b2Contact";
    import { b2Fixture } from "Box2D/Box2D/Dynamics/b2Fixture";
    export class b2ChainAndPolygonContact extends b2Contact {
        constructor();
        static Create(allocator: any): b2Contact;
        static Destroy(contact: b2Contact, allocator: any): void;
        Reset(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): void;
        private static Evaluate_s_edge;
        Evaluate(manifold: b2Manifold, xfA: b2Transform, xfB: b2Transform): void;
    }
}
declare module "Box2D/Box2D/Dynamics/Contacts/b2ContactFactory" {
    import { b2Contact } from "Box2D/Box2D/Dynamics/Contacts/b2Contact";
    import { b2Fixture } from "Box2D/Box2D/Dynamics/b2Fixture";
    export class b2ContactRegister {
        pool: b2Contact[];
        createFcn: {
            (allocator: any): b2Contact;
        };
        destroyFcn: {
            (contact: b2Contact, allocator: any): void;
        };
        primary: boolean;
    }
    export class b2ContactFactory {
        m_allocator: any;
        m_registers: b2ContactRegister[][];
        constructor(allocator: any);
        private AddType(createFcn, destroyFcn, type1, type2);
        private InitializeRegisters();
        Create(fixtureA: b2Fixture, indexA: number, fixtureB: b2Fixture, indexB: number): b2Contact;
        Destroy(contact: b2Contact): void;
    }
}
declare module "Box2D/Box2D/Dynamics/b2ContactManager" {
    import { b2BroadPhase } from "Box2D/Box2D/Collision/b2BroadPhase";
    import { b2Contact } from "Box2D/Box2D/Dynamics/Contacts/b2Contact";
    import { b2ContactFactory } from "Box2D/Box2D/Dynamics/Contacts/b2ContactFactory";
    import { b2FixtureProxy } from "Box2D/Box2D/Dynamics/b2Fixture";
    import { b2ContactFilter, b2ContactListener } from "Box2D/Box2D/Dynamics/b2WorldCallbacks";
    export class b2ContactManager {
        m_broadPhase: b2BroadPhase;
        m_contactList: b2Contact | null;
        m_contactCount: number;
        m_contactFilter: b2ContactFilter;
        m_contactListener: b2ContactListener;
        m_allocator: any;
        m_contactFactory: b2ContactFactory;
        constructor();
        AddPair(proxyA: b2FixtureProxy, proxyB: b2FixtureProxy): void;
        FindNewContacts(): void;
        Destroy(c: b2Contact): void;
        Collide(): void;
    }
}
declare module "Box2D/Box2D/Collision/b2BroadPhase" {
    import { b2Vec2 } from "Box2D/Box2D/Common/b2Math";
    import { b2AABB, b2RayCastInput } from "Box2D/Box2D/Collision/b2Collision";
    import { b2TreeNode, b2DynamicTree } from "Box2D/Box2D/Collision/b2DynamicTree";
    import { b2ContactManager } from "Box2D/Box2D/Dynamics/b2ContactManager";
    export class b2Pair {
        proxyA: b2TreeNode | null;
        proxyB: b2TreeNode | null;
    }
    export class b2BroadPhase {
        m_tree: b2DynamicTree;
        m_proxyCount: number;
        m_moveCount: number;
        m_moveBuffer: b2TreeNode[];
        m_pairCount: number;
        m_pairBuffer: b2Pair[];
        CreateProxy(aabb: b2AABB, userData: any): b2TreeNode;
        DestroyProxy(proxy: b2TreeNode): void;
        MoveProxy(proxy: b2TreeNode, aabb: b2AABB, displacement: b2Vec2): void;
        TouchProxy(proxy: b2TreeNode): void;
        GetFatAABB(proxy: b2TreeNode): b2AABB;
        GetUserData(proxy: b2TreeNode): any;
        TestOverlap(proxyA: b2TreeNode, proxyB: b2TreeNode): boolean;
        GetProxyCount(): number;
        UpdatePairs(contactManager: b2ContactManager): void;
        Query(callback: (node: b2TreeNode) => boolean, aabb: b2AABB): void;
        RayCast(callback: (input: b2RayCastInput, node: b2TreeNode) => number, input: b2RayCastInput): void;
        GetTreeHeight(): number;
        GetTreeBalance(): number;
        GetTreeQuality(): number;
        ShiftOrigin(newOrigin: b2Vec2): void;
        BufferMove(proxy: b2TreeNode): void;
        UnBufferMove(proxy: b2TreeNode): void;
    }
    export function b2PairLessThan(pair1: b2Pair, pair2: b2Pair): number;
}
declare module "Box2D/Box2D/Rope/b2Rope" {
    import { b2Vec2 } from "Box2D/Box2D/Common/b2Math";
    import { b2Draw } from "Box2D/Box2D/Common/b2Draw";
    export class b2RopeDef {
        vertices: b2Vec2[];
        count: number;
        masses: number[];
        gravity: b2Vec2;
        damping: number;
        k2: number;
        k3: number;
    }
    export class b2Rope {
        m_count: number;
        m_ps: b2Vec2[];
        m_p0s: b2Vec2[];
        m_vs: b2Vec2[];
        m_ims: number[];
        m_Ls: number[];
        m_as: number[];
        m_gravity: b2Vec2;
        m_damping: number;
        m_k2: number;
        m_k3: number;
        GetVertexCount(): number;
        GetVertices(): b2Vec2[];
        Initialize(def: b2RopeDef): void;
        Step(h: number, iterations: number): void;
        private static s_d;
        SolveC2(): void;
        SetAngle(angle: number): void;
        private static s_d1;
        private static s_d2;
        private static s_Jd1;
        private static s_Jd2;
        private static s_J1;
        private static s_J2;
        SolveC3(): void;
        Draw(draw: b2Draw): void;
    }
}
declare module "Box2D/Box2D/Box2D" {
    export * from "Box2D/Box2D/Common/b2Settings";
    export * from "Box2D/Box2D/Common/b2Math";
    export * from "Box2D/Box2D/Common/b2Draw";
    export * from "Box2D/Box2D/Common/b2Timer";
    export * from "Box2D/Box2D/Common/b2GrowableStack";
    export * from "Box2D/Box2D/Common/b2BlockAllocator";
    export * from "Box2D/Box2D/Common/b2StackAllocator";
    export * from "Box2D/Box2D/Collision/b2Collision";
    export * from "Box2D/Box2D/Collision/b2Distance";
    export * from "Box2D/Box2D/Collision/b2BroadPhase";
    export * from "Box2D/Box2D/Collision/b2DynamicTree";
    export * from "Box2D/Box2D/Collision/b2TimeOfImpact";
    export * from "Box2D/Box2D/Collision/b2CollideCircle";
    export * from "Box2D/Box2D/Collision/b2CollidePolygon";
    export * from "Box2D/Box2D/Collision/b2CollideEdge";
    export * from "Box2D/Box2D/Collision/Shapes/b2Shape";
    export * from "Box2D/Box2D/Collision/Shapes/b2CircleShape";
    export * from "Box2D/Box2D/Collision/Shapes/b2PolygonShape";
    export * from "Box2D/Box2D/Collision/Shapes/b2EdgeShape";
    export * from "Box2D/Box2D/Collision/Shapes/b2ChainShape";
    export * from "Box2D/Box2D/Dynamics/b2Fixture";
    export * from "Box2D/Box2D/Dynamics/b2Body";
    export * from "Box2D/Box2D/Dynamics/b2World";
    export * from "Box2D/Box2D/Dynamics/b2WorldCallbacks";
    export * from "Box2D/Box2D/Dynamics/b2Island";
    export * from "Box2D/Box2D/Dynamics/b2TimeStep";
    export * from "Box2D/Box2D/Dynamics/b2ContactManager";
    export * from "Box2D/Box2D/Dynamics/Contacts/b2Contact";
    export * from "Box2D/Box2D/Dynamics/Contacts/b2ContactFactory";
    export * from "Box2D/Box2D/Dynamics/Contacts/b2ContactSolver";
    export * from "Box2D/Box2D/Dynamics/Contacts/b2CircleContact";
    export * from "Box2D/Box2D/Dynamics/Contacts/b2PolygonContact";
    export * from "Box2D/Box2D/Dynamics/Contacts/b2PolygonAndCircleContact";
    export * from "Box2D/Box2D/Dynamics/Contacts/b2EdgeAndCircleContact";
    export * from "Box2D/Box2D/Dynamics/Contacts/b2EdgeAndPolygonContact";
    export * from "Box2D/Box2D/Dynamics/Contacts/b2ChainAndCircleContact";
    export * from "Box2D/Box2D/Dynamics/Contacts/b2ChainAndPolygonContact";
    export * from "Box2D/Box2D/Dynamics/Joints/b2Joint";
    export * from "Box2D/Box2D/Dynamics/Joints/b2JointFactory";
    export * from "Box2D/Box2D/Dynamics/Joints/b2AreaJoint";
    export * from "Box2D/Box2D/Dynamics/Joints/b2DistanceJoint";
    export * from "Box2D/Box2D/Dynamics/Joints/b2FrictionJoint";
    export * from "Box2D/Box2D/Dynamics/Joints/b2GearJoint";
    export * from "Box2D/Box2D/Dynamics/Joints/b2MotorJoint";
    export * from "Box2D/Box2D/Dynamics/Joints/b2MouseJoint";
    export * from "Box2D/Box2D/Dynamics/Joints/b2PrismaticJoint";
    export * from "Box2D/Box2D/Dynamics/Joints/b2PulleyJoint";
    export * from "Box2D/Box2D/Dynamics/Joints/b2RevoluteJoint";
    export * from "Box2D/Box2D/Dynamics/Joints/b2RopeJoint";
    export * from "Box2D/Box2D/Dynamics/Joints/b2WeldJoint";
    export * from "Box2D/Box2D/Dynamics/Joints/b2WheelJoint";
    export * from "Box2D/Box2D/Particle/b2Particle";
    export * from "Box2D/Box2D/Particle/b2ParticleGroup";
    export * from "Box2D/Box2D/Particle/b2ParticleSystem";
    export * from "Box2D/Box2D/Rope/b2Rope";
}
