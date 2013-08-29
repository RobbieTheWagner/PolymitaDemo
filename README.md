PolymitaDemo
============

A demo using BRMS, BPM, Polymita, and JBoss

Installation Instructions:

Step 1: Clone this repo into your ~/Downloads folder. 

Step 2: Download the following from the JBoss Customer Portal at access.redhat.com

 * EAP6 (jboss-eap-6.1.0.zip)
 * BRMS deployable (brms-p-5.3.1.GA-deployable-ee6.zip)

Copy these files to the installs directory in the root of this repo.

Ensure that these files are executable by running:

```bash
chmod +x ~/Downloads/PolymitaDemo/installs/jboss-eap-6.1.0.zip
chmod +x ~/Downloads/PolymitaDemo/installs/brms-p-5.3.1.GA-deployable-ee6.zip
```

Step 3: Make sure you have Maven installed on your machine. You can find instructions on how to install it online.

Step 4: Copy the settings.xml file in the root of this repo to your ~/.m2 folder.

```bash
cp ~/Downloads/PolymitaDemo/settings.xml ~/.m2/
```

Then you are ready to build the project. Run the init.sh script in the root of your repository folder and it will build.

```bash
sh ~/Downloads/PolymitaDemo/init.sh
```

Step 5: Import the project into JBoss Developer Studio and update everything. Right click the project folder and do Maven -> Update Project, followed by Run As -> Maven Clean, and then Run As -> Maven Install. This should download all the required dependencies.

Step 6: Upload POJO to Guvnor by jaring all files in org.railinc.shipping and going to localhost:8080/jboss-brms and uploading the jar as a POJO.

Step 7: Install Drools into Jboss Developer Studio by doing the following:
Select Help → Install New Software... and add SOA Tools update site https://devstudio.jboss.com/updates/5.0/central/soa-tooling/

Select Business Rules Tooling & SOA and Data Services Tooling (all sub-menu items will be selected) and proceed thru installation and restart JBoss Developer Studio to complete the installation. You will be told to restart JBoss Developer Studio for the changes to take effect, do this now.

Step 7: Create Guvnor repository in JBoss Developer Studio. Then add all rules and flows to the Guvnor.
