Gym Management System/
│
├── frontend/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   └── assets/
│   │       └── placeholder.png
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── logo.svg
│   │   │   └── icons/
│   │   │
│   │   ├── api/
│   │   │   └── axios.js
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   ├── attendance/
│   │   │   │   └── ViewAttendance.jsx
│   │   │   ├── classes/
│   │   │   │   ├── ManageClassSchedule.jsx
│   │   │   │   └── ClassBooking.jsx
│   │   │   ├── equipment/
│   │   │   │   └── ManageEquipment.jsx
│   │   │   ├── profile/
│   │   │   │   └── ManageProfile.jsx
│   │   │   └── ai/
│   │   │       └── AI.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   ├── Dashboards/
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── MemberDashboard.jsx
│   │   │   │   └── TrainerDashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── router/
│   │   │   └── index.jsx
│   │   │
│   │   ├── utils/
│   │   │   └── generateDocs.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│
├── backend/
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── auth.module.ts
│   │   │   │   ├── auth.schema.ts
│   │   │   │   └── dto/
│   │   │   │       ├── login.dto.ts
│   │   │   │       └── register.dto.ts
│   │   │   ├── users/
│   │   │   │   ├── users.controller.ts
│   │   │   │   ├── users.service.ts
│   │   │   │   ├── users.module.ts
│   │   │   │   ├── users.schema.ts
│   │   │   │   └── dto/
│   │   │   ├── attendance/
│   │   │   │   ├── attendance.controller.ts
│   │   │   │   ├── attendance.service.ts
│   │   │   │   ├── attendance.module.ts
│   │   │   │   └── attendance.schema.ts
│   │   │   ├── classes/
│   │   │   │   ├── classes.controller.ts
│   │   │   │   ├── classes.service.ts
│   │   │   │   ├── classes.module.ts
│   │   │   │   └── classes.schema.ts
│   │   │   ├── bookings/
│   │   │   │   ├── bookings.controller.ts
│   │   │   │   ├── bookings.service.ts
│   │   │   │   ├── bookings.module.ts
│   │   │   │   └── bookings.schema.ts
│   │   │   ├── equipment/
│   │   │   │   ├── equipment.controller.ts
│   │   │   │   ├── equipment.service.ts
│   │   │   │   ├── equipment.module.ts
│   │   │   │   └── equipment.schema.ts
│   │   │   ├── profile/
│   │   │   │   ├── profile.controller.ts
│   │   │   │   ├── profile.service.ts
│   │   │   │   ├── profile.module.ts
│   │   │   │   └── profile.schema.ts
│   │   │   └── ai/
│   │   │       ├── ai.controller.ts
│   │   │       ├── ai.service.ts
│   │   │       ├── ai.module.ts
│   │   │       └── ai.schema.ts
│   │   │
│   │   ├── common/
│   │   │   ├── filters/
│   │   │   └── guards/
│   │   │
│   │   ├── database/
│   │   │   └── database.module.ts
│   │   │
│   │   ├── app.module.ts
│   │   ├── app.controller.ts
│   │   ├── app.service.ts
│   │   └── main.ts
│   │
│   ├── .env
│   ├── package.json
│   ├── tsconfig.json
│   ├── nest-cli.json
│
├── .gitignore
└── README.md
