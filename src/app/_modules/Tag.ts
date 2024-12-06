export class Tag {
    static readonly SELENIUM = new Tag('Selenium','green');
    static readonly JAVA = new Tag('Java','red');
    static readonly JAVASCRIPT = new Tag('JavaScript','orange');
    static readonly APPIUM = new Tag('Appium','violet');
    static readonly CYPRESS = new Tag('Cypress','lime');
    static readonly API = new Tag('Api','grey');
    static readonly DOCKER = new Tag('Docker','navy blue');
    static readonly TESTNG = new Tag('TestNg','violet');
    static readonly JDBC = new Tag('JDBC','brown');
    static readonly DATABASE = new Tag('Database','sky blue');
    static readonly CUCUMBER = new Tag('Cucumber','green');
    static readonly JUNIT = new Tag('JUnit','maroon');

    private constructor(private readonly key: string, public readonly color: string) {

    }
    toString() {
        return this.key;
    }
}