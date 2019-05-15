# p15n.js
p15nとはPrefectureization（都道府県化）のことで、簡単に『方言』が使えるライブラリです。

## Installation

##### ブラウザから:

```html
<script src="p15n.js"></script>
```

##### [WIP] npmを使う:

```shell
$ npm install p15n.js
```

## Usage

##### コールバック関数を渡す方法:

```javascript
import p15n from 'p15n';

p15n.init({
  pref: '鳥取県',
  resources: {
    '鳥取県': {
      'title': 'p15nライブラリを作ってみたにぃ！　すごいだらぁ！？',
      'description': 'p15n.jsは簡単に『方言』が使えるライブラリだにぃ。'
    }
  }
}, function(t) {
  // initialized and ready to go!
  document.getElementById('title').textContent = p15n.t('title');
  document.getElementById('description').textContent = p15n.t('description');
});
```

##### Promiseを使う方法:

```javascript
import p15n from 'p15n';

p15n.init({
  pref: '鳥取県',
  resources: {
    '鳥取県': {
      'title': 'p15nライブラリを作ってみたにぃ！　すごいだらぁ！？',
      'description': 'p15n.jsは簡単に『方言』が使えるライブラリだにぃ。'
    }
  }
}).then(() => {
  // initialized and ready to go!
  document.getElementById('title').textContent = p15n.t('title');
  document.getElementById('description').textContent = p15n.t('description');
});
```

##### JSONファイルを使う方法:

`p15n/prefectures.json` を用意し、次のように設定する。
> ただし、 `p15n.init` で `resources` の指定がある場合は、そちらが優先される

```json
{
  "鳥取県": {
    "title": "p15nライブラリを作ってみたにぃ！　すごいだらぁ！？",
    "description": "p15n.jsは簡単に『方言』が使えるライブラリだにぃ。"
  }
}
```

## License

p15n.js is created under the [MIT](https://opensource.org/licenses/MIT) license.
