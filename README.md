# Building a Multi-step Registration Form


   # Deployed Link : https://registeranuradha.netlify.app/

   
## Introduction 
   *This project is a multi-step registration form built using ReactJS. It guides users through several steps to gather necessary information for
   registration.
   
   ## Features
   All features built required in Assignment : 
   1. Step 1: Personal Information: First Name, Last Name, Date of Birth
   
   2. Step 2: Contact Information: Include fields for Email and Phone Number.

   3. Step 3: Account Setup: Develop the final step to set up the user's account.
                          Include fields for Username, Password, and Confirm Password.
   
  4.  Stepper Navigation: Implement a stepper to indicate the total steps involved, highlighting visually the current step in progress, 
                       completed and the remaining steps to be completed allow users to navigate between steps - next, previous 
                       navigation
                       
   5. Form Submission: Handle form submission. Upon successful validation of all steps, log the form data to the console.
   
   6. Bonus Points (Optional):(completed) Add a summary step that displays the entered information for users to review before 
                                          submission.
                                          Implement real-time validation for fields as users type.
     Each step is numbered and can be tracked.
     Each Step has a previous and next button.
     After filling all fields, before submit, check your details in the Summary Step
     Agree to the terms and conditions checkbox
     Then Confirm and Account will be created successfully
      
# Output Screenshots :

![3](https://github.com/Anuradha-Naidu/multistep-registration-form/assets/88324015/d5100cae-0e45-45e5-a22b-2535ff3c94e4)

![4](https://github.com/Anuradha-Naidu/multistep-registration-form/assets/88324015/11f4b1d9-72dc-41ef-b1d1-02e2d3565eaa)
   
# Technologies Used

- React: Frontend library for building user interfaces.
   
- CSS (Tailwind CSS): Utility-first CSS framework used for styling.

# Project Structure
   The project is structured as follows:

   - src/: Contains all source code files.
   - Components/: Components used for different form steps.
   - StepperControl and Stepper for stepper management
   - contexts/: Context providers for managing state across components.
   - App.js: Main application component that manages form steps and state transitions.

# SETUP INSTRUCTIONS :

   1. **Clone the repository:**

   ```bash
   git clone https://github.com/Anuradha-Naidu/multistep-registration-form.git
   cd multistep-registration-form
   ```

   2. **Install dependencies:**
      
   ```bash
   npm install
   ```
   
   3. **Run the Application:**
   ```bash
   npm start
   ```

   

   

   

