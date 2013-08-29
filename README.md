PolymitaDemo
============

A demo using BRMS, BPM, Polymita, and JBoss

Installation Instructions:

## Step 1: Clone The Repo
Clone this repo into your **~/Downloads** folder.
```bash
cd ~/Downloads
git clone https://github.com/rwwagner90/PolymitaDemo.git
```

## Step 2: Download Source .zip Files 
Download the following from the JBoss Customer Portal at access.redhat.com

 **EAP6 (jboss-eap-6.1.0.zip)**
 
 **BRMS deployable (brms-p-5.3.1.GA-deployable-ee6.zip)**

Copy these files to the installs directory in the root of this repo and ensure that they are executable by running:

```bash
chmod +x ~/Downloads/PolymitaDemo/installs/jboss-eap-6.1.0.zip
chmod +x ~/Downloads/PolymitaDemo/installs/brms-p-5.3.1.GA-deployable-ee6.zip
```

## Step 3: Install Maven
Make sure you have Maven installed on your machine. You can find instructions on how to install it online.

## Step 4: Transfer Maven settings.xml and Build Project
Copy the settings.xml file in the root of this repo to your **~/.m2** folder.

```bash
cp ~/Downloads/PolymitaDemo/settings.xml ~/.m2/
```

Then you are ready to build the project. Run the init.sh script in the root of your repository folder and it will build.

```bash
sh ~/Downloads/PolymitaDemo/init.sh
```

## Step 5: Setup Server and Define Runtimes

### Setup EAP 6 Server

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
2. Click the plus sign to expand **JBoss Tools** and then select **JBoss Tool Runtime Detection**.
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

## Step 6: Import the Project
Import the project into JBoss Developer Studio by clicking **File → Import** and choosing **General → Existing Projects into Workspace**.
Then navigate to **~/Downloads/PolymitaDemo/PolymitaDemo** as the source folder. (Note the double PolymitaDemo/PolymitaDemo)

Then we need to update the dependencies and such so everything will work.

Right click the project folder and do **Maven → Update Project**, followed by **Run As → Maven Clean**, and then **Run As → Maven Install**. This should download all the required dependencies.

## Step 7: Upload POJO to Guvnor
Upload POJO to Guvnor by jaring all files in **org.railinc.shipping** and going to localhost:8080/jboss-brms and uploading the jar as a POJO.

## Step 8: Add Guvnor to Jboss Developer Studio 
Create Guvnor repository in JBoss Developer Studio. Then add all rules and flows to the Guvnor.
