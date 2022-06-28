const Roles: any = [{
  Admin: { permissions: ["Create ", "Read", "Update", "Delete"], active: 1 },
  SuperAdmin: { permissions: ["Create ", "Read", "Update", "Delete", "Modify"], active: 1 },
  User: { permissions: ["Read"], active: 1 },
  Manager: { permissions: ["Read", "Update"], active: 1 }
}

];
