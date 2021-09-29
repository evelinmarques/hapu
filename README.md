## About:

This is a simplified version of Hapu’s ‘Become a Nanny Share Host’ landing page. 

## Expected visual result:

<img src="https://user-images.githubusercontent.com/56482367/135189902-cdcd155a-fcd8-409e-bc33-dbaed303d492.png">

<img src="https://user-images.githubusercontent.com/56482367/135189974-a5ad3855-8c9c-4230-aeb1-3de856af0e8e.png">


## 🛠 Technologies:

- JSX;
- React.js
- Typescript
- Components, props and state;
- Lifecycle Methods;
- Responsive design with CSS media-queries;
- API calls;
- Error handling;
- Loading states;
- SEO & accessibility;
- A/B tests;
- Production builds.
- Optimizely


## 💻 How to run
  - You must have Git installed and configured on your computer.
  - You must have Node.js installed on your computer
  - You will also need the Yarn or NPM package manager

### Clone the repository:

```sh
git clone https://github.com/evelinmarques/hapu.git
```

### Running the Application:

```sh
    yarn 
    yarn start
```

## Running the Aplication with A/B tests:

The platform used to collect the test data was **Optimizely**, so to proceed with the execution it is necessary to register on the following platform: https://app.optimizely.com/

- Once registered go to Settings and copy the development SDK key

- Back to the code, create a file called **.env** and with the following variables:

```sh
 REACT_APP_OPTIMIZELY_KEY=<your_SDK_key>
 REACT_APP_USE_OPTIMIZELY=true
```

### Registering flags, variables and events in Optimizely

- Go to Flags and then create flag

- Enter the name of the flag with type JSON

- Go toThe key of the flag has to be : **textherosection**

- Click on the flag
- Default Variables
- **+**
- Variable Key
- Default Value

- Enter the name for the key variant
```
    hero_text
   ```


- In Default Value copy this code:

```json
{
  "title": "Easily create or join a local nanny share with Hapu",
  "description": "Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare."
}
```

- Now go to: 
- Variations 
- **+** 
-  Name
- Variables
  
Name:

```
    main_text
```

```json
{
  "title": "Easily create or join a local nanny share with Hapu",
  "description": "Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare."
}
```

- Go to again 
- **+** 
-  **Name** 
- **Variables**

- Name:

```
    secundary_text
```

- Variables

```json
{
  "title": "Create the childcare you need at a price you can afford",
  "description": "Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started."
}
```
### Creating event

The name of the flag has to be:

    registerInNannyShare


### Running test

- Go back to the created flag

- Development
- Add rule
- insert a Name
- Put **Percentage Included**
- Put **Metrics**(registerInNannyShare)
- Put **Deliver Variations** (main_text, secundary_text)
-  Turn on the flag


## 🚀 Deploy: <a href="https://hapu-evelinmarques.vercel.app/">Click here</a> 
