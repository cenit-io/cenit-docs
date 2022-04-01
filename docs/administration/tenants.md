---
sidebar_position: 2

---

# Tenants

Cenit is a multi-tenant iPaaS designed to orchestrate data flows in an easy way that may involve several kinds of data formats and communication protocols. Multi-tenancy means that processes have their own dedicated areas, even though they are actually sharing an environment. This means the customer can separate business areas and their respective integration needs, or even just have separate development, test and production environments.

Tenants are generally instances of one application that correspond to distinct subscribing organizations, but tenants may also be instances of different applications from the same organization competing for shared resources.  So, tenants provide logical isolation in a physically shared context. 



Administrators can manage all the tenants in the system, by accesing the submenu [Tenants](administration/tenants.md) in Administration:

![tenants](https://user-images.githubusercontent.com/99367633/160722661-e9946e33-6d71-446b-abea-08ddb2d652a9.png)

Simple user can add new tenants, but only will can edit the tenants of their own. 

In the figure below, you can appreciate the edition of a tenant that corresponds to a user logged in the system: 

![my tenant](https://user-images.githubusercontent.com/99367633/160723760-be762e28-6f43-4639-b931-e9ea7acf96e7.png)

If that user is not an administrator, he or she only can edit information about their own tenants. 

## Add New Tenant.

Administrators or simple users can add new tenants in the system.

In order to add a new tenant, you may press the + sign in the generic task bar. 

![Plus a tenant](https://user-images.githubusercontent.com/99367633/160732877-092431a4-e97a-4e89-ab77-78c9ed705f31.png)

Next, you must fill in the elements that are made available:

## ![Adding a tenant](https://user-images.githubusercontent.com/99367633/160727654-20531f71-4113-42da-9a23-6a9259bdb8d7.png) List of tenants.

After pressing the save button you can see the new tenant on the list of tenants. In the picture, this simple user can see all of their tenants:

![List of tenants](https://user-images.githubusercontent.com/99367633/160727876-7a0da8bd-7520-4bb1-a47f-3fa099f58a7c.png)

## Move to another tenant.

Gently press the line at the left of your photo. In the select menu at the top bar, yo can choose the tenant you want to use:

![Move to a tenant](https://user-images.githubusercontent.com/99367633/160728195-a4861f58-c7ab-4dcb-8df1-169d5c0f0ab8.png)You should pay attention to the selected tenant in the top bar, because every new element you define in Cenit belongs to that tenant.

![Elements in current tenant](https://user-images.githubusercontent.com/99367633/160728535-dfe4bfad-d60f-4d41-aff6-1cfdf0f68541.png)