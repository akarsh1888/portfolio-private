### Components of a Well-Architected UI Application
• `Testing`: Unit, component, integration, end-to-end, smoke tests, health checks. <br>
• `Static analysis`: TypeScript, linting, formatting, etc. <br>
• `Build `processes``: Automatically run checks for the items above. Ex. Automated CI process using Jenkins / Travis / Circle CI / Github Actions<br>
• `Separation of concerns`: Keeping your business logic separate from the view layer. <br>
• `Deployment infrastructure`: Do you even CDN? <br>
• `Design processes`: Are we thinking things out or are we throwing spaghetti at the wall?

### Three Ingredients
### What makes a sustainable architecture?
• `Patterns`: Architecture, state management, abstractions. <br>
• `Processes`: Code reviews, blueprints, design documents. <br>
• `Systems`: Testing infrastructure, static analysis, build systems. <br>

### Spectrum of Testing

- Unit Tests
- Integration Tests
    - two services talking to each other, many components working together, mocking API calls
- End to End Tests

`Assertion`
- A thing that you’d ideally like to be true and should totally throw an error if that’s not the case
- Example: 
- Chai => assert, should, expect
- Jest => built upon Jasmine, expect
- Jasmine => 

`Mock, Spy, Stub`
- Sinon =>
- Test Double =>
- Jest =>