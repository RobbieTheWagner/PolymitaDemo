PolymitaDemo
============

This is a shipping demo using BRMS, BPM, Polymita, and JBoss. You can create shipments, add containers to those shipments
and add items to each of those containers. Items can have different weights, HazMat classes, and descriptions. If a
hazardous item is added to the container, it kicks off a human task in jBPM, in which the item will need approval. Based on
this information, the items are priced using BRMS, each container is assigned a price based on the items, and the total shipment
gets a price based on all of the containers. This information is then all passed back to Java and reflected in the
Bill of Lading table, and can be exported to PDF if desired.

This README will tell you how to install this demo. It will also go through a few sample usages of the program.

## Table of Contents
###Installation
[Step 1: Clone The Repo](#step1) 

[Step 2: Download Source .zip Files](#step2)

[Step 3: Install Maven](#step3)

[Step 4: Transfer Maven settings.xml and Build Project](#step4)

[Step 5: Install and Run PostgreSQL](#step5)

[Step 6: Setup Server and Define Runtimes](#step6)

[Step 7: Import the Project](#step7)

[Step 8: Upload Resources to Guvnor](#step8)

[Step 9: Run the PolymitaDemo app](#step9)

[Step 10: Configure Polymita](#step10)

[Notes](#notes)

###Usage
[App](#app)

[BPM](#bpm)

[Polymita](#polymita)

## <a name="step1"/> Step 1: Clone The Repo
Clone this repo into your **~/Downloads** folder.
```bash
cd ~/Downloads
git clone https://github.com/rwwagner90/PolymitaDemo.git
```

## <a name="step2"/> Step 2: Download Source .zip Files 
Download the following from the JBoss Customer Portal at access.redhat.com

 **EAP6 (jboss-eap-6.1.0.zip)**
 
 **BRMS deployable (brms-p-5.3.1.GA-deployable-ee6.zip)**

Copy these files to the installs directory in the root of this repo and ensure that they are executable by running:

```bash
chmod +x ~/Downloads/PolymitaDemo/installs/jboss-eap-6.1.0.zip
chmod +x ~/Downloads/PolymitaDemo/installs/brms-p-5.3.1.GA-deployable-ee6.zip
```

## <a name="step3"/> Step 3: Install Maven
Make sure you have Maven installed on your machine.
```bash
mvn --version
```

If you have it installed, you will see output similar to:
```bash
Apache Maven 3.0.3 (r1075438; 2011-02-28 12:31:09-0500)
Maven home: /usr/share/maven
Java version: 1.6.0_51, vendor: Apple Inc.
Java home: /System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
Default locale: en_US, platform encoding: MacRoman
OS name: "mac os x", version: "10.8.4", arch: "x86_64", family: "mac"
```

If you do not have it installed, you can find instructions on how to install it online. 
One specific source is [here](http://maven.apache.org/guides/getting-started/maven-in-five-minutes.html), but 
there are other tutorials you can find.

## <a name="step4"/> Step 4: Transfer Maven settings.xml and Build Project
Copy the settings.xml file in the root of this repo to your **~/.m2** folder.

```bash
cp ~/Downloads/PolymitaDemo/settings.xml ~/.m2/
```

Then you are ready to build the project. Run the init.sh script in the root of your repository folder and it will build.

```bash
sh ~/Downloads/PolymitaDemo/init.sh
```

## <a name="step5"/> Step 5: Install and Run PostgreSQL
1. Go [here](http://www.postgresql.org/download/) and download the PostgreSQL that works with your system and follow the instructions to get it running.
2. Start the PostgreSQL service with the template1 database and create a polymita user for the polymita table.

In bash, start psql by running:
```bash
psql template1
```

Execute the following once you are running psql.
```sql
CREATE USER polymita WITH PASSWORD 'polymita';
DROP DATABASE IF EXISTS polymita;
CREATE DATABASE polymita;
ALTER DATABASE polymita OWNER TO polymita; 
```

Now start the psql service. If you are on linux, use the following command:
```bash
sudo service postgresql start
```

If you are not on linux, look around the documentation of the PostgreSQL instance you installed for how to start it.

## <a name="step6"/> Step 6: Setup Server and Define Runtimes

### Setup EAP 6 Server in JBoss Developer Studio

1. Select the Servers view. If it is currently not open, select **Window → Show View → Other** and search for the Servers view.
2. Right click the white space in the Servers view and choose **New → Server**.
3. Select JBoss Enterprise Application Platform 6.1.
4. Set the following values:
  * Server's host name: **localhost**
  * Server Name: **JBoss EAP 6.1**
  * For Server Runtime Environment click **Add** Then set the following:
  * Name: **JBoss EAP 6.1 Runtime**
  * Home Directory: **~/Downloads/PolymitaDemo/target/jboss-eap6.1**
  * JRE: Choose 1.7.x, whichever version of Java 7 you prefer.
  * Configuration file: **standalone.xml**.
  * **Note:** If this runtime was automatically detected earlier and created, you may just use it instead of making a new one.
7. Click Finish.

### Install SOA Tools

Select **Help → Install New Software** and add the SOA Tools update site **https://devstudio.jboss.com/updates/5.0/central/soa-tooling/**

Select **Business Rules Tooling** and **SOA and Data Services Tooling** (all sub-menu items will be selected) and proceed through installation and restart JBoss Developer Studio to complete the installation. 

You will be told to restart JBoss Developer Studio for the changes to take effect, do this now.

### Detect and add a BRMS 5.3.1 runtime environment

1. Select **Window → Preferences**.
2. Click the plus sign to expand **JBoss Tools** and then select **JBoss Runtime Detection**.
3. Select the **Add** button and navigate to the **~/Downloads/PolymitaDemo/target** folder, then select OK.
4. The jboss-eap-6.1 runtime created earlier should have been found and selected. If so, select OK.
5. Select OK again to close the Preferences dialog window.

### Detect and add jBPM BRMS 5.3.1 runtime environment

1. Select **Window → Preferences**.
2. Click the plus sign to expand **jBPM** and then select **Installed jBPM Runtimes**.
3. If not automatically listed in the view: Select the **Add** button, then the **Create a new jBPM Runtime** button and navigate to the **~/Downloads/PolymitaDemo/target/jboss-eap-6.1** folder, then name the runtime **jBPM BRMS 5.3.1 runtime** and select OK.
4. The **jBPM BRMS 5.3.1 runtime** should be selected. If so, select OK to close the Preferences dialog window. If not, click box to add check mark next to runtime and then select OK.
5. If asked to restart JBoss Developer Studio for the changes to take effect, restart.

### Detect and add Drools 5.3.1 runtime environment

1. Select **Window → Preferences**.
2. Click the plus sign to expand **Drools** and then select **Installed Drools Runtimes**.
3. If not automatically listed in the view: Select the **Add** button, then the **Create a new Drools 5 Runtime** button and navigate to the **~/Downloads/PolymitaDemo/target/jboss-eap-6.1** folder, then name the runtime **Drools 5.3.1.Final runtime** and select OK.
4. Select the **Drools 5.3.1.Final runtime**.
5. In **Drools** in the left hand side menu select **Drools Flow nodes**, make sure all boxes are checked
and select OK to close the Preferences dialog window.
6. You will be told to restart JBoss Developer Studio for the changes to take effect, do this now.

## <a name="step7"/> Step 7: Import the Project
Import the project into JBoss Developer Studio by clicking **File → Import** and choosing **General → Existing Projects into Workspace**.
Then navigate to **~/Downloads/PolymitaDemo/PolymitaDemo** as the source folder. (Note the double PolymitaDemo/PolymitaDemo)

Then we need to update the dependencies and such so everything will work.

Right click the project folder and do **Maven → Update Project**, followed by **Run As → Maven Clean**, and then **Run As → Maven Install**. This should download all the required dependencies.

Now that everything is updated, start the server so that Guvnor will be running for the next step. To do this, right
click the project and choose **Run As → Run on Server** and choose the **JBoss EAP 6.1** server and click finish.

## <a name="step8"/> Step 8: Upload Resources to Guvnor

### Upload POJO Model

Select all the java files under **org.railinc.shipping** and then right click and choose **Export → Java → JAR file**.

All of the default options for saving the JAR will be fine, just save it somewhere you will remember.

Next, navigate to **http://localhost:8080/jboss-brms** and login with Username: **admin** and Password: **admin**. 
This is Guvnor that you are logging into, and it is where you will upload rules and flows.

After logging in, it will ask you to import sample data because it is a new repository. **DO NOT** do this!

Then click Knowledge Bases and then click **Create New → New Package** and call it **org.railinc.shipping**.

Still in Knowledge Bases, click **Create New → Upload POJO**. Name it whatever you would like and click next. 
Then find the JAR you just made and upload it.

### Upload Rules and Flows

1. Add Guvnor to JBoss Developer Studio
  * Click **Window → Open Perspective → Other → Guvnor Repository Exploring**
  * Then click **File → New → Other → Guvnor → Guvnor repository location**
  * The default info is fine for Location, Port, and Repository, and for User Name put **admin** and also for Password put **admin**.
  * Click finish
2. Upload rules to Guvnor
  * In JBoss Developer Studio, navigate to **src/main/rules**.
  * Select all .drl files, right click and go to **Guvnor → Add**
  * Use your existing Guvnor, click next.
  * Expand your Guvnor and select **packages/org.railinc.shipping** as the package to upload to.
  * Click finish
3. Upload flows to Guvnor
  * In JBoss Developer Studio, navigate to **src/main/resources**.
  * Select all .bpmn2 files, right click and go to **Guvnor → Add**
  * Use your existing Guvnor, click next.
  * Expand your Guvnor and select **packages/org.railinc.shipping** as the package to upload to.
  * Click finish
4. Add the item form
  * In Guvnor, navigate to **Knowledge Bases → org → railinc → shipping**.
  * Under the Assets tab open the processes dropdown and open **org.railinc.shipping.ItemFlow**
  * In the ItemFlow window click the task called "Hazard Human Check"
  * Click on the green shirted man directly above the task and a form editing window pops up
  * In JBoss Developer Studio open up **src/main/resources/humanHazardCheck.html**
  * copy-paste the contents into the process form window in guvnor and click save.
5. PNG all flows
  * Log in to Guvnor at **http://localhost:8080/jboss-brms** with the Username: **admin** and Password: **admin**.
  * Click **Knowledge Bases → org → railinc → shipping** to navigate to the package.
  * Now click **Assets → Processes** and click **Open** next to each process. This will open each one in a tab at the top.
  * Now click each tab, and the flow will appear for that process.
  * While viewing each flow, click the PNG button at the bottom to generate images needed by BRMS. You do not need to save the generated PNG file, it will save the images in assets by itself.
  * After each PNG is generated, click **File → Save Changes**.
6. Build the package
  * In Guvnor, navigate to **Knowledge Bases → org → railinc → shipping**.
  * Then click **Edit**.
  * Click the **Validate Configuration** button, followed by the **Build Package** button and fix any errors that may arise.
  * Click **File → Save Changes** to ensure the package that was built is saved.

## <a name="step9"/> Step 9: Run the PolymitaDemo app
1. In JBoss Developer Studio, right click the project and choose **Run As → Run on Server**. 
2. Then select the runtime you previously set up, and wait for everything to start up.
3. You should then be able to navigate to **http://localhost:8080/PolymitaDemo** and see the app!

## <a name="step10"/> Step 10: Configure Polymita

## <a name="notes"/> Notes 
* When you make changes, you must click the red stop button to stop the server, then do **Run As → Run on Server** again to redeploy.
* You must PNG a flow after any changes for the Guvnor to realize the changes.
* You must build your package again after all changes to make the changes go through.
* You must have psql running whenever running the application, so you can access the databases.

## <a name="app"/> App 
This [video](http://vimeo.com/74143875) will show you how the PolymitaDemo app is used.

## <a name="bpm"/> BPM
Explain how to use BPM.

## <a name="polymita"/> Polymita
Explain how to use Polymita.
