FROM maven:3.9-eclipse-temurin-17-alpine AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn clean package -DskipTests -B

FROM eclipse-temurin:17-jdk-alpine
LABEL authors="Artur Dommy"
COPY --from=build /app/target/MiniInventario-0.0.1-SNAPSHOT.jar app_miniinventario.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app_miniinventario.jar"]
