# @modulize/email

Copy and paste transactional email templates built with React Email for your next project.

![opengraph image](apps/web/public/opengraph.jpg)

## Documentation

Visit http://email.modulize.co/docs to view the documentation.

### Transactional Emails included:

### User & Account Emails:

= [x] Magic Link Sign In
- [ ] Email Address Confirmation
- [ ] Password Changed
- [ ] Account Deletion Confirmation
- [ ] Welcome Email for New Users
- [ ] Account Verification
- [ ] Password Reset
- [ ] Email Address Change
- [ ] Security Alert
- [ ] New Device Sign In

#### Payments & Subscriptions:

- [ ] Failed Payment Notification
- [ ] Subscription Renewal Reminder
- [ ] Free Trial Expiry Reminder
- [ ] Cancellation Confirmation
- [ ] Successful Purchase Confirmation
- [ ] Refund Confirmation

### System Emails:

- [ ] System Maintenance Notification
- [ ] Account Downtime Notification
- [ ] Terms of Service Update
- [ ] Privacy Policy Update

## Contributing

### Setup

To develop emails, run the following command:

```bash
pnpm dev:email
```

To work on other parts of the project, run the following command:

```bash
pnpm dev
```

This will run everything except the email server.

### Troubleshooting

If Husky is complaining about not being able to execute. Run the following command:

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

## Acknowledgements
- Docs inspired by [shadcn/ui](https://ui.shadcn.com/)

## License

Licensed under the [MIT license](LICENSE.md).