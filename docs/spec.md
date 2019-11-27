
# Intranet
Web based community for simple teams

# Features
+ Document Management
+ Events Management (+ Birthdays)
+ Blog + News
+ Ideation/Innovation management
+ Knowledge Base (Forum)
+ Photo Gallery
+ Chats? (third-party plugin)

# Misc
+ portal.fipl-ng.com
+ isaiahiroko
+ PASSword2019@!

+ 192.168.26.10
+ admin
+ SWIF....

# Entities
+ Roles
```
    - name
    - policy
```

+ Users
```
    - first_name
    - mid_name?
    - last_name
    - email
    - password
    - role_id
    - department_id
    - branch_id
    - team_id
```

+ Branches
```
    - name
    - desc
```

+ Departments
```
    - name
    - desc
    - branch_id
```

+ Teams
```
    - name
    - desc
    - department_id
```

+ Files
```
    - name
    - desc
    - link
    - tags
    - user_id
```

+ Events
```
    - name
    - desc
    - location
    - start_at
    - end_at
    - user_id
```

+ Articles
```
    - name
    - desc
    - detail
    - start_at
    - end_at
    - user_id
```

+ Ideas
```
    - name
    - desc
    - detail
    - links
    - user_id
```

+ Fileables
```
    - file_id
    - fileable_id
    - fileable_type: users, branches, department, teams
```

+ Eventable
```
    - article_id
    - articleable_id
    - articleable_type: users, branches, department, teams
```

+ Articleables
```
    - article_id
    - articleable_id
    - articleable_type: users, branches, department, teams
```

+ Ideable
```
    - idea_id
    - idea_id
    - idea_type: users, branches, department, teams
```