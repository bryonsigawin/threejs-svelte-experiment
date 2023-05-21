<script>
  import { Pane } from 'tweakpane';

  import { entryComplete } from './../stores/animation';
  import { currentTime, isNight } from './../stores/time';

  const panel = new Pane();

  let PARAMS = {
    isNight: $isNight,
    entryComplete: $entryComplete,
    time: {}
  };

  currentTime.subscribe((value) => {
    PARAMS.time.hours = value.hours;
    PARAMS.time.minutes = value.minutes;
    PARAMS.time.seconds = value.seconds;

    panel.refresh();
  });

  isNight.subscribe((value) => {
    PARAMS.isNight = value;
  });

  entryComplete.subscribe((value) => {
    PARAMS.entryComplete = value;
  });

  const themeFolder = panel.addFolder({ title: 'Theme' });
  themeFolder.addMonitor(PARAMS, 'isNight');
  themeFolder.addMonitor(PARAMS, 'entryComplete');

  const timeFolder = panel.addFolder({ title: 'Time' });

  timeFolder.addInput(PARAMS.time, 'hours', { min: 0, max: 24 }).on('change', ({ value }) => {
    currentTime.update((v) => ({ ...v, hours: value }));
  });
  timeFolder.addInput(PARAMS.time, 'minutes', { min: 0, max: 60 }).on('change', ({ value }) => {
    currentTime.update((v) => ({ ...v, minutes: value }));
  });
  timeFolder.addInput(PARAMS.time, 'seconds', { min: 0, max: 60 }).on('change', ({ value }) => {
    currentTime.update((v) => ({ ...v, seconds: value }));
  });

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
