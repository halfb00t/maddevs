# How To Change Bg For Header

If you need to add a transparent background for your header, follow these steps:

1. Learn how the `@/mixins/headerMixin` mixin works.

2. import the mixin into the page you want

```bash
import headerMixin from '@/mixins/headerMixins'
```

3. Add the mixin to the component settings

```bash
import headerMixin from '@/mixins/headerMixins'

...

export default {
    ...
    mixins: [headerMixin(...)],
    ...
}
```

4. Pass the selector of the section in which the header should be transparent to the headerMixin

```bash
import headerMixin from '@/mixins/headerMixins'

...

export default {
    ...
    mixins: [headerMixin('#/.selector')],
    ...
}
```
