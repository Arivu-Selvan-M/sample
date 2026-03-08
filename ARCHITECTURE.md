# Angular Application Architecture

## Overview
The application has been restructured with shared components and feature modules using Angular's best practices with named router outlets.

## Directory Structure

```
src/app/
├── shared/                          # Shared Components
│   ├── dialog/
│   │   ├── dialog.ts               # Dialog Component
│   │   ├── dialog.html             # Dialog Template
│   │   ├── dialog.scss             # Dialog Styles
│   │   └── dialog.service.ts        # Dialog Service (manages dialog state)
│   ├── footer/
│   │   ├── footer.ts               # Footer Component
│   │   ├── footer.html             # Footer Template
│   │   └── footer.scss             # Footer Styles
│   └── sidebar/
│       ├── sidebar.ts              # Sidebar Component
│       ├── sidebar.html            # Sidebar Template
│       └── sidebar.scss            # Sidebar Styles
│
├── header/                          # Header Component
│   ├── header.ts
│   ├── header.html
│   └── header.scss
│
├── billing/                         # Billing Module
│   ├── billing-module.ts
│   ├── billing-routing-module.ts
│   ├── billing.ts
│   ├── billing.html
│   ├── billing.scss
│   ├── billing-sidebar/
│   │   ├── billing-sidebar.ts
│   │   ├── billing-sidebar.html
│   │   └── billing-sidebar.scss
│   └── billing-footer/              # Footer with action buttons
│       ├── billing-footer.ts
│       ├── billing-footer.html
│       └── billing-footer.scss
│
├── member/                          # Member Module
│   ├── member-module.ts
│   ├── member-routing-module.ts
│   ├── member.ts
│   ├── member.html
│   ├── member.scss
│   ├── member-sidebar/
│   │   ├── member-sidebar.ts
│   │   ├── member-sidebar.html
│   │   └── member-sidebar.scss
│   └── member-footer/               # Footer with action buttons
│       ├── member-footer.ts
│       ├── member-footer.html
│       └── member-footer.scss
│
├── payment/                         # Payment Module
│   ├── payment-module.ts
│   ├── payment-routing-module.ts
│   ├── payment.ts
│   ├── payment.html
│   ├── payment.scss
│   ├── payment-sidebar/
│   │   ├── payment-sidebar.ts
│   │   ├── payment-sidebar.html
│   │   └── payment-sidebar.scss
│   └── payment-footer/              # Footer with action buttons
│       ├── payment-footer.ts
│       ├── payment-footer.html
│       └── payment-footer.scss
│
├── page-not-found/                  # 404 Page
│   ├── page-not-found.ts
│   ├── page-not-found.html
│   └── page-not-found.scss
│
├── app.ts
├── app.html                         # Main app template with router outlets
├── app.scss
├── app-module.ts                    # Main app module
├── app-routing-module.ts            # Main routing module
│
└── ...other files
```

## Key Features

### 1. **Shared Components**
- **Dialog Component**: Displays action dialogs using the pattern from Page-not-found
- **Footer Component**: Base footer (generic)
- **Sidebar Component**: Base sidebar with menu navigation

### 2. **Dialog Service**
Located at `src/app/shared/dialog/dialog.service.ts`
- Manages dialog state (open/close)
- Sends dialog configuration (title, message, action type)
- Uses RxJS BehaviorSubject for state management

### 3. **Module-Specific Footers**
Each module has its own footer component with action buttons:

#### Billing Footer (`billing-footer`)
Buttons:
- **View Details**: Opens dialog for billing details
- **Export**: Opens confirmation dialog for PDF export
- **Pay Now**: Opens payment confirmation dialog

#### Member Footer (`member-footer`)
Buttons:
- **View Profile**: Opens dialog for member profile
- **Edit Info**: Opens confirmation for editing member info
- **Save Changes**: Opens dialog to confirm saving changes

#### Payment Footer (`payment-footer`)
Buttons:
- **Payment History**: Opens dialog for payment history
- **Setup Recurring**: Opens confirmation for recurring payments
- **Complete Payment**: Opens payment completion dialog

### 4. **Routing Structure**
Using Angular Named Router Outlets:
- Main outlet: For the module's main component
- 'sidebar' outlet: For module-specific sidebars
- 'footer' outlet: For module-specific footers

**Routes:**
- `/member` → Member Module
- `/billing` → Billing Module
- `/payment` → Payment Module
- `/` → Redirects to `/member`
- `**` → Page Not Found

### 5. **How It Works**

1. **User clicks footer button** → `billing-footer.ts` (or member/payment) handles the click
2. **Footer method calls DialogService** → `onViewBillingDetails()`, `onPayNow()`, etc.
3. **DialogService.openDialog()** → Updates BehaviorSubject with dialog config
4. **Dialog Component subscribes** → Receives updated state and displays dialog
5. **User clicks Confirm/Cancel** → `DialogComponent` emits event and closes dialog

### 6. **Dialog Flow Example**

```
User clicks "Pay Now" button (in Billing Footer)
    ↓
BillingFooterComponent.onPayNow()
    ↓
dialogService.openDialog({
  title: 'Payment Confirmation',
  message: 'Proceed with payment?',
  actionType: 'confirm'
})
    ↓
DialogComponent receives state update
    ↓
Dialog displays with title and message
    ↓
User clicks Confirm/Cancel
    ↓
DialogComponent closes and emits event
```

## Component Imports in Modules

### App Module
```typescript
- AppComponent
- HeaderComponent
- PageNotFoundComponent
- DialogComponent (from shared)
- SidebarComponent (from shared)
- FooterComponent (from shared)
```

### Billing Module
```typescript
- BillingComponent
- BillingSidebarComponent
- BillingFooterComponent
```

### Member Module
```typescript
- MemberComponent
- MemberSidebarComponent
- MemberFooterComponent
```

### Payment Module
```typescript
- PaymentComponent
- PaymentSidebarComponent
- PaymentFooterComponent
```

## Styling Approach
- Uses SCSS for styling
- Consistent button styling across footers
- Dialog follows the pattern from Page-not-found component
- Responsive layout using flexbox

## Future Enhancements
1. Add animations to dialog open/close
2. Add more dialog action types
3. Integrate backend API calls
4. Add form inputs to dialogs
5. Add notification service for success/error messages
