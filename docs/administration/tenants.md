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

The show view is shown in picture below. The tenant information includes its owner and the users with access to that tenant. 

![image](https://user-images.githubusercontent.com/54523080/174103372-6d69311f-b989-4240-a6a9-1251ca0eb260.png)

## Edit the tenant.

For editing the tenant you can press the edit button in the show view or you can select the tenant in the list of tenant and press the edit button.

![image](https://user-images.githubusercontent.com/54523080/174106677-2cde153c-4556-4aa9-973a-bf552db8375e.png)

When you are editing the tenant there are two possible scenarios:

- You are running Cenit IO on premise, so you have role of superadmin.

- You are running Cenit IO in the cloud, so you have role of admin 

If Cenit IO is running on premise and you have role of superadmin, all the options in the administration menu are available

![image](https://user-images.githubusercontent.com/54523080/174109308-05ffe9ac-06ce-4d25-882c-f66e72c075cc.png)

Editing a tenant as a superadmin when Cenit IO is running on premise, let you add new users to your tenant by selecting the users from the list of existing users in your Cenit IO instance.

![image](https://user-images.githubusercontent.com/54523080/174111067-c709a82c-53ce-441a-8cc3-d73d4972a7a7.png)



When you edit a tenant in the cloud with role admin, you are not able to add users to the tenant

![image](https://user-images.githubusercontent.com/54523080/174115199-7bfd99bd-0e6e-4d74-a55c-3ec1b45f94e5.png)

In those cases you need to make a request via email to support@cenit.io providing the tenant name and the users you need to give access to your tenant. There are some pre-conditions that apply:

- You must specify a tenant you're its owner.

- Users should register for a Cenit account in advance.

- You must provide a list of one or more users emails

## Move to another tenant.

When you log in, your default tenant is shown. If you are intending to work in a different tenant, you need to move to that tenant. In the select menu at the top bar, you can choose the tenant you want to work on:

![image](https://user-images.githubusercontent.com/54523080/173974810-e3e244b5-3ec1-4866-b9a0-2b76bd425ae7.png)

Another way of moving from one tenant to other, is selecting the tenant in the list of tenant and pressing switch as shown below.

![image](https://user-images.githubusercontent.com/54523080/173975486-ebf3f095-efe8-4846-ad5b-f0e8e697d407.png)

You should pay attention to the selected tenant in the top bar, because every new element you define in Cenit belongs to that tenant.

![image](https://user-images.githubusercontent.com/54523080/173975636-a6e59f5f-7e8d-42f5-bedd-b73e5bd273fa.png)