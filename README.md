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

## Step 4: Transfer Maven settings.xml
Copy the settings.xml file in the root of this repo to your **~/.m2** folder.

```bash
cp ~/Downloads/PolymitaDemo/settings.xml ~/.m2/
```

Then you are ready to build the project. Run the init.sh script in the root of your repository folder and it will build.

```bash
sh ~/Downloads/PolymitaDemo/init.sh
```

## Step 5: Install Drools into Jboss Developer Studio 

Select **Help → Install New Software** and add the SOA Tools update site **https://devstudio.jboss.com/updates/5.0/central/soa-tooling/**

Select **Business Rules Tooling** and **SOA and Data Services Tooling** (all sub-menu items will be selected) and proceed through installation and restart JBoss Developer Studio to complete the installation. 
You will be told to restart JBoss Developer Studio for the changes to take effect, do this now.

## Step 6: Define Runtimes

## Step 7: Import the Project
Import the project into JBoss Developer Studio by clicking File → Import and choosing General → Existing Projects into Workspace.

Then we need to update the dependencies and such so everything will work.

Right click the project folder and do **Maven → Update Project**, followed by **Run As → Maven Clean**, and then **Run As → Maven Install**. This should download all the required dependencies.

## Step 8: Upload POJO to Guvnor
Upload POJO to Guvnor by jaring all files in org.railinc.shipping and going to localhost:8080/jboss-brms and uploading the jar as a POJO.

## Step 9: Create Guvnor repository in JBoss Developer Studio. Then add all rules and flows to the Guvnor.
