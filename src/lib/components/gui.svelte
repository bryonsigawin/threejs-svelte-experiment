<script>
  import { onMount } from 'svelte';
  import { Pane } from 'tweakpane';
  import { isNight, time, clockHands } from './animator/animation-store';

  let PARAMS = {
    nightMode: $isNight
  };

  let TIME_PARAMS = {
    raw: {},
    clock: {}
  };

  time.subscribe((value) => {
    TIME_PARAMS.raw.hours = value.hours;
    TIME_PARAMS.raw.minutes = value.minutes;
    TIME_PARAMS.raw.seconds = value.seconds;
  });

  clockHands.subscribe((value) => {
    TIME_PARAMS.clock.hours = value.hours;
    TIME_PARAMS.clock.minutes = value.minutes;
    TIME_PARAMS.clock.seconds = value.seconds;
  });

  onMount(() => {
    const panel = new Pane();

    const theme = panel.addFolder({ title: 'Theme' });

    theme.addInput(PARAMS, 'nightMode').on('change', ({ value }) => {
      isNight.set(value);
    });

    const time = panel.addFolder({ title: 'Time' });

    const timeTab = time.addTab({
      pages: [{ title: 'Raw' }, { title: 'Clock' }]
    });

    timeTab.pages[0].addMonitor(TIME_PARAMS.raw, 'hours');
    timeTab.pages[0].addMonitor(TIME_PARAMS.raw, 'minutes');
    timeTab.pages[0].addMonitor(TIME_PARAMS.raw, 'seconds');

    timeTab.pages[1].addMonitor(TIME_PARAMS.clock, 'hours');
    timeTab.pages[1].addMonitor(TIME_PARAMS.clock, 'minutes');
    timeTab.pages[1].addMonitor(TIME_PARAMS.clock, 'seconds');
  });
</script>

<style global>
  .tp-dfwv {
    z-index: 9999;
  }
</style>
