# Blog App
This is a project of implementation of a blog on a Django and React application. This is an implementation for making blog posts assuming that you just want an admin user to post blogs on the site.

In order to test out this project, follow these steps:
- clone the repository
- in the frontend folder, run: npm install, this will install the required frontend packages
- in the frontend folder, run: npm run build, this will make a build folder and copy it into the backend folder
- in the backend folder, run: virtualenv venv
- then activate the virtual environment,(for windows) run: source venv/Scripts/activate
- in the backend folder, run: pip install -r requirements.txt
- in backend/blog_app/settings.py, under DATABASES, set the PASSWORD field to your database password