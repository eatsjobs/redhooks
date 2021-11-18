# Redhooks

A redux implementation without redux, and without Providers pyramid of doom!

## Why?
If you don't want or can't use redux or redux toolkit you will end up having multiple provider to handle the state
of your application

```javascript
<UserProvider>
    <SomeOtherNestedProvider>
        {children}
    </SomeOtherNestedProvider>
</UserProvider>
```

```javascript
```

@inspired by fragstore