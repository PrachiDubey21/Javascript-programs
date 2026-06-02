const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
 insert.innerHTML = `
  <div class="flex justify-center">
    <table class="w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl">

      <tr class="bg-cyan-500 text-white">
        <th class="px-6 py-4 text-lg">Key</th>
        <th class="px-6 py-4 text-lg">KeyCode</th>
        <th class="px-6 py-4 text-lg">Code</th>
      </tr>

      <tr class="bg-white/10 backdrop-blur-md text-white">
        <td class="px-6 py-4 border border-white/20 text-xl font-semibold">
          ${e.key === ' ' ? 'Space' : e.key}
        </td>

        <td class="px-6 py-4 border border-white/20 text-xl font-semibold">
          ${e.keyCode}
        </td>

        <td class="px-6 py-4 border border-white/20 text-xl font-semibold">
          ${e.code}
        </td>
      </tr>

    </table>
  </div>
`;
});

