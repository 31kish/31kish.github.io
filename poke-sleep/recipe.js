$(async () => {
  const fetch_recipe = async (category) => {
    const path = '/poke-sleep';

    const response = await fetch(`/poke-sleep/${category}_recipe.json`);
    const json = await response.json();
    return json;
  }

  const curry = await fetch_recipe('curry');
  const salad = await fetch_recipe('salad');
  const dessert = await fetch_recipe('dessert');

  const table = {
    listOptions: {
      valueNames: ['name', 'material-text', 'total', 'energy', { name: 'cp', attr: 'value' }, { name: 'material-data', attr: 'data-material' }]
    },

    get curry() {
      return this._curry;
    },

    set curry(value) {
      this._curry = value;
    },

    get salad() {
      return this._salad;
    },

    set salad(value) {
      this._salad = value;
    },

    get dessert() {
      return this._dessert;
    },

    set dessert(value) {
      this._dessert = value;
    }
  }

  const init = () => {
    createTable(curry.recipes, 'curry');
    createTable(salad.recipes, 'salad');
    createTable(dessert.recipes, 'dessert');
    table.curry = new List('curry-list', table.listOptions);
    table.salad = new List('salad-list', table.listOptions);
    table.dessert = new List('dessert-list', table.listOptions);
  };

  const createTable = (recipes, category) => {
    const $table = $(`table.${category}`);
    Array.from(recipes).forEach(v => {
      const $row = $('<tr></tr>');
      const $name = $('<td></td>', { text: v.name, 'class': 'name' });
      $row.append($name);

      const material_text = Array.from(v.recipe).reduce((text, v2) => {
        return text += `${v2.material}x${v2.value}<br>`
      }, "");

      const $material = $('<td></td>', { 'class': 'material-text' }).html(material_text);
      $row.append($material);

      const $total = $('<td></td>', { text: v.total, 'class': 'total' });
      $row.append($total);

      const $energy = $('<td></td>', { text: v.energy, 'class': 'energy' });
      $row.append($energy);

      // tdの中に入れないとList.jsで取れない
      const cp_value = Math.round(v.energy / v.total);
      const $cp = $('<input>', { type: 'hidden', 'class': 'cp', value: cp_value });
      const $cp_td = $('<td></td>', { 'class': 'hidden' });
      $cp_td.append($cp);
      $row.append($cp_td);

      const $material_data = $('<input>', { type: 'hidden', 'class': 'material-data' }).attr('data-material', JSON.stringify(v.recipe))
      const $material_data_td = $('<td></td>', { 'class': 'hidden' });
      $material_data_td.append($material_data);
      $row.append($material_data_td);

      $table.append($row)
    });
  };

  const searchRecipe = (materials) => {
    const filterFunc = (items) => {
      console.info('recipe name', items.values().name);
      const requirement = JSON.parse(items.values()['material-data']);
      console.info('requirement', requirement);

      const success = requirement.every(v1 => {
        return materials.some(v2 => v2.material === v1.material && v2.value >= v1.value);
      });

      return success;
    };

    const sortOption = { order: 'desc' };

    console.info('search curry table');
    table.curry.filter(filterFunc);
    table.curry.sort('cp', sortOption);

    console.info('search salad table');
    table.salad.filter(filterFunc);
    table.salad.sort('cp', sortOption);

    console.info('search dessert table');
    table.dessert.filter(filterFunc);
    table.dessert.sort('cp', sortOption);
  }

  /**
   * Event
   */

  $('.category').on('change', (e) => {
    $this = $(e.currentTarget);
    $(`table.${$this.val()}`).fadeIn();
    $('table').not(`.${$this.val()}`).fadeOut();
  });

  $('input[id^="pokesle"]').on('input', (e) => {
    const $this = $(e.currentTarget);
    const materials = $('form.material').find('input').map((i, e) => {
      if (e.value === "") return;
      return { material: $(e).prev().text(), value: Number($(e).val()) }
    }).get();

    console.info('materials', materials);
    searchRecipe(materials);
  });

  /**
   * Initialize
   */

  init();
});
