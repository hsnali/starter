export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Choose a theme to apply',
    defaultValue: 'light',
    toolbar: {
      icon: 'cog',
      items: [
        { value: 'light', icon: 'sun', title: 'Light' },
        {
          value: 'dark',
          icon: 'moon',
          title: 'Dark'
        }
      ],
      dynamicTitle: true
    }
  }
}
