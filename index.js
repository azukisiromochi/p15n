class P15n {
  constructor(options = {}, callback) {

    this.init(options, callback);
  }

  init(options = {}, callback) {

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.pref = options.pref || '東京都';
    this.fallbackPref = options.fallbackPref || '東京都';
    this.defaultPref = '東京都';
    this.resources = options.resources;

    const deferred = this._defer();

    wait(0).then(() => {
      deferred.resolve(this.t);
      if (typeof callback === 'function') callback(this.t);
    });

    return deferred;
  }

  t(key) {

    if (!this.exists(key)) return '';

    const resource = this.resources[this.pref] || this.resources[this.fallbackPref] || this.resources[this.defaultPref];

    return resource[key];
  }

  exists(key) {

    if (!this.resources) return false;

    const resource = this.resources[this.pref] || this.resources[this.fallbackPref] || this.resources[this.defaultPref];

    if (!resource) return false;

    return resource[key] && resource[key] !== undefined;
  }

  _defer() {
    let res;
    let rej;

    const promise = new Promise((resolve, reject) => {
      res = resolve;
      rej = reject;
    });

    promise.resolve = res;
    promise.reject = rej;

    return promise;
  }

};

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const p15n = new P15n();

module.exports = p15n;
