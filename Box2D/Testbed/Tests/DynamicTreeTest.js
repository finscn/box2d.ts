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
System.register(["../Testbed"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testbed, DynamicTreeTest;
    return {
        setters: [
            function (testbed_1) {
                testbed = testbed_1;
            }
        ],
        execute: function () {
            DynamicTreeTest = class DynamicTreeTest extends testbed.Test {
                constructor() {
                    super();
                }
                Step(settings) {
                    super.Step(settings);
                }
                static Create() {
                    return new DynamicTreeTest();
                }
            };
            exports_1("DynamicTreeTest", DynamicTreeTest);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY1RyZWVUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRHluYW1pY1RyZWVUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFOzs7Ozs7Ozs7Ozs7WUFLRixrQkFBQSxxQkFBNkIsU0FBUSxPQUFPLENBQUMsSUFBSTtnQkFDL0M7b0JBQ0UsS0FBSyxFQUFFLENBQUM7Z0JBQ1YsQ0FBQztnQkFFTSxJQUFJLENBQUMsUUFBMEI7b0JBQ3BDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBRU0sTUFBTSxDQUFDLE1BQU07b0JBQ2xCLE9BQU8sSUFBSSxlQUFlLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQzthQUNGLENBQUEifQ==