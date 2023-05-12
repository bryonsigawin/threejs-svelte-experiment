<script>
  $: if (window) {
    window.addEventListener('mousemove', (e) => {
      /** set the initial position of the cursor */
      if (mouseCurrent.x === -1 && mouseCurrent.y === -1) {
        mouseCurrent.x = e.clientX;
        mouseCurrent.y = e.clientY;
      }

      mouseTo.x = e.clientX;
      mouseTo.y = e.clientY;
      mouseTo = mouseTo;
    });
  }
</script>
