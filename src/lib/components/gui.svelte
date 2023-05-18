<script>
  import { Pane } from 'tweakpane';
  import { isNight, time } from './animator/animation-store';

  const panel = new Pane();

  let PARAMS = {
    nightMode: $isNight,
    time: {}
  };

  time.subscribe((value) => {
    PARAMS.time.hours = value.hours;
    PARAMS.time.minutes = value.minutes;
    PARAMS.time.seconds = value.seconds;
  });

  isNight.subscribe((value) => {
    PARAMS.nightMode = value;
  });

  const themeFolder = panel.addFolder({ title: 'Theme' });
  themeFolder.addMonitor(PARAMS, 'nightMode', { label: 'Is night' });

  const timeFolder = panel.addFolder({ title: 'Time' });

  timeFolder.addMonitor(PARAMS.time, 'hours');
  timeFolder.addMonitor(PARAMS.time, 'minutes');
  timeFolder.addMonitor(PARAMS.time, 'seconds');

  // timeFolder.addInput(PARAMS.time, 'hours', { min: 0, max: 24 }).on('change', ({ value }) => {
  //   time.update((v) => ({ ...v, hours: value }));
  // });
  // timeFolder.addInput(PARAMS.time, 'minutes', { min: 0, max: 60 }).on('change', ({ value }) => {
  //   time.update((v) => ({ ...v, minutes: value }));
  // });
  // timeFolder.addInput(PARAMS.time, 'seconds', { min: 0, max: 60 }).on('change', ({ value }) => {
  //   time.update((v) => ({ ...v, seconds: value }));
  // });

  (function () {
    var script = document.createElement('script');
    script.onload = function () {
      var stats = new Stats();
      document.body.appendChild(stats.dom);
      requestAnimationFrame(function loop() {
        stats.update();
        requestAnimationFrame(loop);
      });
    };
    script.src = 'https://mrdoob.github.io/stats.js/build/stats.min.js';
    document.head.appendChild(script);
  })();
</script>

<style global>
  .tp-dfwv {
    z-index: 9999;
  }
</style>
