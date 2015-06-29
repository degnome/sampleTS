# Instructions

1. Create a directory for your code to reside

		$ mkdir sampleTS
		
2. Initialize the Node Package.

		$ npm init
	
3. Create a lib directory to put our code in.

		$ mkdir lib
		
4. Initialize the TypeScript Definitions and load Node

		$ tsd init
		$ tsd node install --save

5. Initialize the folder as a typescript project.

	Create a typescript config file _tsconfig.json_ 

		{
		    "compilerOptions": {
		        "module": "commonjs", 
		        "outDir": ".", 
		        "sourceMap": true, 
		        "target": "es5"
		    }, 
				"filesGlob": [
			    "./**/*.ts",
			    "!./node_modules/**/*.ts"
				]
		}
		
		
6. Create a lib/Geeter.ts file with the following class

		/// <reference path="../typings/tsd.d.ts" />
		
		export class Greeter {
		    greeting: string;
		    constructor(message: string) {
		        this.greeting = message;
		    }
		    greet() {
		        return "Hello, " + this.greeting;
		    }
		}


7. Compile the code

		$ tsc
		
		
8. Configure the VS Code Task Runner to build.

	<cmd><shift>B will build.  If there is no task runner configure it.
	*Ensure that args is commented out in the default task.
		
		//"args": ["HelloWorld.ts"],

		
7. Install mocha and chai for testing.

		npm install mocha --save-dev
		npm install chai --save-dev
		tsd install mocha --save
		tsd install chai --save
		
8. Create a test/Greeter.spec.ts file with the following test

		/// <reference path="../typings/tsd.d.ts" />

		import chai = require('chai');
		import lib = require('../lib/Greeter');
		var expect = chai.expect;
		var Greeter = lib.Greeter;
		
		describe('Greeter Class', () => {
			it('Should Greet', () => {
				var greeter = new Greeter('Developer');
				expect(greeter.greet()).to.equal('Hello, Developer');
			});
		});

9. Compile the code

		tsc or <cmd><shift>B
		
10. Test the code

		mocha
	