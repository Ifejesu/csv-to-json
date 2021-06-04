# CSV to JSON

A Node.js test project to convert CSV to JSON array.

### /csv

Method: POST

Expected Post Data

```
{
  "csv":{
    "url": "https://linktocsv",
    "select_fields": ["First Name", "Last Name", "Age"],
  }
}
```

Expected Response

```
{
  "conversion_key": "ZEMAHBb54vkFXPHA9jHY6Xp3gMnMAKYg",
  "json": [
    {
      "First Name":"Ade",
      "Last Name":"Stark",
      "Age": 21
    },
    {
      "First Name":"Ade",
      "Last Name":"Stark",
      "Age": 21
    }
  ]
}
```

## Made by [Glitch](https://glitch.com/)

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).

( ᵔ ᴥ ᵔ )
