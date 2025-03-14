# OpenBPT Service Template (Java)

This Java template provides essential scaffolding for developing services within the **OpenBPT** ecosystem.

## **Setup**

Follow these steps to set up the environment:

1. **Ensure you have Java 21 installed** (tested with OpenJDK 21.0.2).  
   You can check your installed version with:
   ```sh
   java -version
   ```
2. Clone this repository.
3. Run the application:
   ```sh
   ./mvnw spring-boot:run
   ```
   *(For Windows, use `mvnw.cmd spring-boot:run` instead.)*

## **Writing Your Service**

Develop your service by focusing on two primary components: the **Manifest** and the **Run Function**.

### Manifest
- The **manifest** is defined in [`java/com/openbpt/service/Manifest.java`](src/main/java/com/openbpt/service/Manifest.java).
- This file serves as a template for defining service metadata.

### Run Function
- The **service logic** is implemented in [`java/com/openbpt/service/Service.java`](src/main/java/com/openbpt/service/Service.java).
- The **entry point** for execution is the `static run()` function, which needs to be properly defined.

## Starting the Service
You can start the service in **development** mode or build and package a JAR file:

### Development Mode
  ```sh
  ./mvnw spring-boot:run
  ```
  This will start the application with default settings.

### Package as JAR
  Build and package the application as a JAR:
  ```sh
  ./mvnw package
  java -jar target/openbpt-service-template.jar
  ```

The service automatically interfaces with the backend using logic in the [`java/com/openbpt/service/core`](src/main/java/com/openbpt/service/core) package.

## Testing

You can run all tests with:
  ```sh
  ./mvnw test
  ```
  
## **Additional Notes**
- The project does not currently support loading configuration via environment variables or environment files.
- The project does not currently support linting.
- If you encounter issues with missing dependencies, try running:
  ```sh
  ./mvnw clean install
  ```
- Ensure that **Java 21** is installed and properly set as the default JDK.
