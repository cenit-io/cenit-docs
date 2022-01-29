# Tenants

Cenit is a multi-tenant iPaaS designed to orchestrate data flows in an easy way that may involve several kinds of data formats and communication protocols. Multi-tenancy means that processes have their own dedicated areas, even though they are actually sharing an environment. This means the customer can separate business areas and their respective integration needs, or even just have separate development, test and production environments.

Tenants are generally instances of one application that correspond to distinct subscribing organizations, but tenants may also be instances of different applications from the same organization competing for shared resources.  So, tenants provide logical isolation in a physically shared context. Therefore every user in Cenit should create at least one tenant, maybe more.

By accesing the submenu Tenants in Administration yo can see the list of the tenants the current authenticated user may use.

![tenants lista](https://user-images.githubusercontent.com/54523080/148874262-43e1c0c3-6443-466d-9227-8839f1a94211.png)

#### Add New

If you want to create a new Tenant, click the New button (+) in the [Generic Menu](generic/generic_menu_options_.md) and fill every input field.

 ![new tenant](https://user-images.githubusercontent.com/54523080/148875704-bb5ebe3e-979b-4f62-9af6-d7cd362a56ff.png)

#### List of tenants

After pressing the save button you can see the new tenant on the list of tenants.

![tenants list 2](https://user-images.githubusercontent.com/54523080/148876349-a1177d34-0b6b-4147-b26e-6eda6fcd4525.png)

#### Move to another tenant

In the select menu at the top bar, yo can choose the tenant you want to use.

![tenant selection](https://user-images.githubusercontent.com/54523080/148877535-29a5a9c4-1083-4519-9254-66436263c461.png)

You should pay attention to the selected tenant in the top bar because every new element you define in Cenit belongs to that tenant.

![current tenant](https://user-images.githubusercontent.com/54523080/148877872-7df8be3c-5878-49f9-9dfb-e4804f859f89.png)