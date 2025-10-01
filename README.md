# DailyPress - Client Side

DailyPress is a modern article management application where users can register, submit articles, and admins can manage users and content. The client-side of the application is built using **React**, **TailwindCSS**, and other modern libraries to provide a smooth and responsive user experience.

---
#### server repo : https://github.com/DevAbidHasan/B11-A12-Dailypress-server
#### live link : https://dailypress-bf298.web.app/

## Features & Highlights

- **User Registration & Authentication:** Users can create accounts and securely log in.  
- **Article Submission:** Users can submit articles with title, description, tags, and images.  
- **Admin Dashboard:** Admin can view all articles, approve, decline, delete, or mark as premium.  
- **Pending, Approved, & Rejected Tabs:** Admin can easily filter articles based on status.  
- **Responsive UI:** Fully responsive design for mobile, tablet, and desktop devices.  
- **Notifications & Alerts:** Real-time success/error feedback using React Hot Toast and SweetAlert.  
- **View Count Analytics:** Animated article view count using React CountUp.  
- **Article Details Page:** Users can read the full article and see author information.  
- **Premium Articles Feature:** Certain articles can be marked premium, viewable only to subscribed users.  
- **Modern Design & Styling:** Styled using TailwindCSS for a clean and professional look.  
- **Iconography:** Uses React Icons for intuitive and visually appealing buttons and elements.  
- **Fast & Optimized Data Fetching:** Leveraging React Query and Axios for API requests.  

---

## Technologies Used

- **Frontend:** React, React Router, TailwindCSS  
- **Libraries & Packages:**  
  - Axios (API requests)  
  - React Query (data fetching & caching)  
  - React Icons (iconography)  
  - React Hot Toast & SweetAlert (notifications & alerts)  
  - React CountUp (view count animation)  
- **Styling:** TailwindCSS for responsive and modern UI  

---

## Installation & Setup

1. **Clone the repository**

```
git clone <your-repo-url>
cd <your-repo-folder>
```
2. **Install dependencies**

```
npm install
```
3. **Configure Environment Variables**
Create a .env file in the root folder:

```
VITE_image_upload_key=<your-imgbb-api-key>
Run the application
npm run dev
```
The app should now be running at http://localhost:5173 (or the port shown in your terminal).
4. **Folder Structure**
```
src/
│
├─ components/       # Reusable UI components
├─ contexts/         # React contexts (AuthContext, etc.)
├─ pages/            # Different pages (Home, Dashboard, AddArticle, etc.)
├─ App.jsx           # Root component
├─ main.jsx          # Entry point
└─ index.css         # TailwindCSS styles
```







