# Headache diary as a web app & schema for extending the SAP PE platform with measurements
___

A headache diary, which enables migraine or headache patients to record headache attacks and analyse patterns in the records. Furthermore, this repo contains xml schematics for the measurements & tasks needed to store data from the headache diary in the Patient Engagement platform of SAP.
___

This repository was created as part of the "Digital Society School" programme at the University of Applied Sciences Amsterdam.

The goal of this prototype is to show a first proof of concept for a simple app which can analyse patterns and give a prediction about the headache type based on different factors, which can be found in `/front`.

#### (!)
In the current state, the application to analyse the data is not finished.

SAP's platform for Patient Engagement is used to record data from headache apps on different platforms (clients such as web apps, mobile app etc.). The existing system provides support for common features such as administrating patients and organizations. Physicians can access data from their patients on a dashboard, while client applications can use an API to save measurements. For the planned mobile application extending the database is necessary. This is done with xml schemas for each measurement, which can be found in `/patient_engagement_platform`.

The repo contains the setup for a web crawler, the database needed to store the results of the crawler, and scripts to analyse the fetched data.

## Run the project

### Web app

The web app is written in [Vue](https://vuejs.org/).
- Install [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)
- Open the terminal and go to `/front`
- On first time use, run `npm install`
- To start the app, run `npm run start:dev`
- Go in the browser and open `localhost:8080` (or the url shown in the terminal)

### Patient engagement platform

The backend of the application can be extended with custom measurements via xml schematics. Help can be found on the [SAP Help platform](https://help.sap.com/viewer/p/PATIENT_ENGAGEMENT).
In this case, the backend is extended with the measurements which were labeled "necessary" in the data requirements for the headache app. The requirements were co-created with neurologists according to the information needed to diagnose a patient.
The measurements are:
 - Headache attack
 - Caffeine intake
 - Medication intake
 - Menstruation
