---
sidebar_position: 2

---

# Tenants

Cenit is a multi-tenant iPaaS designed to orchestrate data flows that may involve several data formats and communication protocols. 

Multi-tenancy means that processes have their own dedicated areas, even though they are actually sharing an environment. This means the customer can separate business areas and their respective integration needs. For example, you can have a tenant for development and another tenants for test, staging and production. 

Cenit allows that single users can create multiple tenants, which is very useful for developing B2B applications. When a B2B solution is made, each end customer data 
remains in an independent tenant, taking advantage of tenants provide logical isolation in a physically shared context. 

When a user creates a tenant he/she access the tenant with role Admin. Admins can manage all the tenants owned by he/she, by accesing the submenu [Tenants](administration/tenants.md) in Administration:

![image](https://user-images.githubusercontent.com/54523080/173977276-33d3843b-46b3-441c-80e5-e451da8bed0e.png)

## Add New Tenant.

A user can add new tenants as long as he haven't exceeded the maximum amount of tenants on his/her plan.

For creating a new tenant, press the + button in the generic menu bar. 

![image](https://user-images.githubusercontent.com/54523080/173971298-811d0b83-77af-4af8-8e19-91b3bff00832.png)

Next, you must fill every field with the information related to the tenant and press the save button

![image](https://user-images.githubusercontent.com/54523080/173971706-971cb7c3-4b19-47cd-b005-aacee53d966f.png)

## List of tenants.

After pressing the save button you can see the new tenant on the list of tenants. You should notice the list of tenants contains only those tenants which are available to the current user.

![image](https://user-images.githubusercontent.com/54523080/173972000-75009124-3dc6-4e02-9c29-93bbd27f21f1.png)

## View tenant's details.

By selecting a tenant and pressing the Show button you can see the tenant details.

![image](https://user-images.githubusercontent.com/54523080/173972414-9e5646cc-fc66-44fd-8652-09304193fe84.png)

The show view is shown in picture below

![image](https://user-images.githubusercontent.com/54523080/173972682-7de91a0f-766e-481a-bfa9-b560f003e9e3.png)

## Move to another tenant.

When you log in, your default tenant is shown. If you are intending to work in a different tenant, you need to move to that tenant. In the select menu at the top bar, you can choose the tenant you want to work on:

![image](https://user-images.githubusercontent.com/54523080/173974810-e3e244b5-3ec1-4866-b9a0-2b76bd425ae7.png)

Another way of moving from one tenant to other, is selecting the tenant in the list of tenant and pressing switch as shown below.

![image](https://user-images.githubusercontent.com/54523080/173975486-ebf3f095-efe8-4846-ad5b-f0e8e697d407.png)

You should pay attention to the selected tenant in the top bar, because every new element you define in Cenit belongs to that tenant.

![image](https://user-images.githubusercontent.com/54523080/173975636-a6e59f5f-7e8d-42f5-bedd-b73e5bd273fa.png)