
export

  const Roles: any = [
    { category: "Admin"   , permissions: ["Create ", "Read", "Update", "Delete"], active:false },
    { category: "SuperAdmin", permissions: ["Create ", "Read", "Update", "Delete", "Modify"], active: false },
    { category: "User", permissions: ["Read"], active: false },
    { category: "Manager", permissions: ["Read", "Update"], active: false }
  ]
;
