
export

  const Roles: any = [
    { category: "Admin"   , permissions: {Create:true , Read:true, Update:true, Delete:true,Modify:false}, active:false, },
    { category: "SuperAdmin", permissions: {Create:true, Read:true, Update:true, Delete:true, Modify:true}, active: false },
    { category: "User", permissions: {Create:false,Read:true,Update:false,Delete:false,Modify:false}, active: false },
    { category: "Manager", permissions: {Create:false,Read:true, Update:true,Delete:false,Modify:false}, active: false }
  ]
;
