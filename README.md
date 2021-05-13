# patient_tracker

## Table of Contents
* [Description](#Description)
* [User_Story](#User_Story)
* [Technology_Used](#Technology_Used)
* [Challenges](#Challenges)
* [Successes](#Successes)
* [Future_Developments](#Future_Developments)
* [User_Guide](#User_Guide)
* [Questions](#Questions)

## Description

Hospitals are no longer only giant infrastructures, that intake 100’s of patients.  Smaller outpatient surgery and small emergency rooms have sprouted across the country.
With patients constantly coming and going, there needed to be an app that can transition quickly for nurses.  This app allows real-time action to track patients.

Patient Tracker was created for use in a day surgery hospital, to keep track of patients, staff, and room occupancy.

-It can help easily identify patients, staff members, room, procedure, and drug allergies.

-With a login and password assigned to each nurse, all of the patients information will only be visible to authorized personnel.

-Easily add or update patient information as they are admitted, and released.

## User Story

* As a nurse of a small day surgery hospital I want to be able to add/remove patients from my systems while being able to track them during their visit.
* WHEN I access the website/ user interface
* THEN I am propmted with a login page for secure access
* WHEN I login with my correct login credentials
* THEN I am taken to the home page where I can chose to view Current Patients, Current Personnel, and Room Information
* WHEN I choose the between patients, personnel, or room
* THEN I am taken to a page that lists all patients, personnel, or rooms dependent on my choice
* WHEN I chose an individual patient, personnel, or room
* THEN I am taken to a page that displays ALL important information pertaining to that choice, including

## Technology Used

This app was built using the following:

-Javascript (node)

-Sequelize

-Express

-MySql2

-HandleBars

-Bootstrap

-Materialize

This program was built in Github, while the database was stored in MySql.  To deploy the application we used Heroku.

## Challenges

Routes, Routes, Routes!  Trying to figure out the direction and relationship of so many routes, proved to be troublesome. While the concepts of what we wanted to do seemed to flow naturally the coding did not.  There were a few snags on how to attach routes as well as figuring out what routes we wanted to use. Another challenge was trying to work on relationship maps, without affecting a teammates work. Even though there are sections/tasks that can be broken out. The relationships seem to get tricky with different thoughts on different routes. Seeding our Database on App.

## Successes

The idea of a patient tracker came quickly, with the idea in place a lot of the framework was built and complete after the first day or two. We were then able to focus on routes and design. This gave us time to really get some neat stuff as far as routes, and be able to produce a well designed application.

## Future Developments

Future versions/updates to this app will include an interactive map showing who is assigned to a room in real time, the ability to be able to track in real-time where the patient is in the hospital. Future updates will also include a system linked with pharmacy to send out prescriptions through app.

## User_Guide
When you first arrive to the site, log in with your credentials. *NOTE: For security reasons, there is not a option to create a new user and password on the front end, otherwise anyone would be able to "sign up" and access extremely private information. Contact your administrator so that they can create a user and password for you to access the application*
Once you log in, the home screen displays three links that will take you to either patient informaiton, personnel information, and room information. Note that the logo at the top of the screen also acts as a link back to the home page.

- Patients: On the patients page, you will see a complete list of all current patients. Click on a patient's name and you will be taken to a page with specific information about that patient including date of birth, address, contact information, allergies, insurance provider, and even a profile picture. The patients page will also have the option to add a new patient.
- Personnel: On the personnel page, you will see a complete list of all personnel. Click on an individuals name and you will be taken to a page with specific information regarding that staff member, including their current room assignment. There is an option to change their room assignment.
- Rooms: On the rooms page, you will see a complete list of all rooms. Rooms where surgical operations are currently taking place will have green text, while unoccupied rooms will have red text. Clicking on a room will reveal specific information regarding that room such as surgery taking place, patients who will occupy the room to receive those surgeries, personnel assigned to that room/surgery, and status of the room.


## Questions

If you have any questions, please feel free to reach out to us on GitHub or via email!
Team Member | GitHub | Email
--- | --- | ---
Chris Goslin | https://github.com/CGO7 | ---
John Hinojosa | https://github.com/takolad | ---
Leticia Mendiola | https://github.com/Leticia-Mendiola | lmendiola509@gmail.com
