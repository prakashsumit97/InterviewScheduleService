# 🚀 InterviewScheduleService

## 📌 Overview

````The InterviewScheduleService is a backend API built using Node.js that helps interviewers and candidates efficiently manage their availability and schedule interviews. It provides APIs for setting availability, finding common slots, and scheduling interviews.````

## 🎯  Features

```✅ User Roles: Supports both Interviewers & Candidates.
✅ Availability Management: Users can set available time slots.
✅ Common Slot Finder: Finds overlapping slots between an interviewer and a candidate.
✅ Interview Scheduling: Automatically schedules interviews based on common availability.
✅ Rescheduling & Cancellations: Allows users to modify or cancel interviews.
✅ Notifications (Optional): Sends reminders for upcoming interviews.
✅ RESTful API: Provides endpoints for managing availability and interview scheduling.
```

## 🏗️ Tech Stack

````
Backend: Node.js, TypeScript

Database: MongoDB

Containerization: Docker 
````

## 📦 Installation & Setup
````
1️⃣ Clone the Repository

$ git clone https://github.com/your-username/interview-calendar-service.git
$ cd interview-calendar-service

2️⃣ Install Dependencies

$ npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory and add the following:

PORT=4000
MONGODB_URI=mongodb://localhost:27017/interview_calendar

4️⃣ Start the Server

$ npm run build  # For building the project
$ npm run start    # Start in production mode
````
📌 API Documentation
```
📖 Swagger UI: http://localhost:4000/interviewSchedulingService/api-docs/#/
```

## 🐳 Docker Setup
```
1️⃣ Build Docker Image

$ docker build -t interview-calendar-service .

2️⃣ Run Docker Container

$ docker run -p 4000:4000 --env-file .env interview-calendar-service
```
## 📄 License
```
This project is licensed under the MIT License – see the LICENSE file for details.

✨ Contributing

🚀 Want to contribute? Follow these steps:

Fork the repository.

Create a new branch (feature/your-feature).

Commit your changes.

Push to the branch.

Open a pull request.
```
## 🛠️ Author
```
👨‍💻 Sumit Prakash📧 Email: prakashsumit97@gmail.com🔗 LinkedIn: [Sumit Prakash] (https://www.linkedin.com/in/sumit-prakash-37a4836a/)

💡 Feel free to contribute, suggest improvements, or report issues! Happy coding! 🚀
```
