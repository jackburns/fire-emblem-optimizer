import { Munkres } from 'munkres-js';
/*
 * Do the matching thing!
 *
 * @return {list of list of ids}
 */
export function generateMatching(characters) {
	var Inf = Number.POSITIVE_INFINITY;
	console.log(Munkres);

	var weights=[
		//Azura                         Beruka                         Camilla                         Charlotte                        Effie                           Elise                           Felicia                      Hana                             Hinoka                          Kagero                          Mozu                          Nyx                             Oboro                           Orochi                          Peri                            Rinkah                          Sakura                           Selena                         Setsuna
		[{id1: 0, id2: 19, weight: 4}, {id1: 0, id2: 20, weight: 4},   {id1: 0, id2: 21, weight: 2},   {id1: 0, id2: 22, weight: 3},   {id1: 0, id2: 23, weight: 2},   {id1: 0, id2: 24, weight: 11},  {id1: 0, id2: 25, weight: 7}, {id1: 0, id2: 26, weight: Inf}, {id1: 0, id2: 27, weight: Inf}, {id1: 0, id2: 28, weight: 2},   {id1: 0, id2: 29, weight: 3}, {id1: 0, id2: 30, weight: 10},  {id1: 0, id2: 31, weight: Inf}, {id1: 0, id2: 32, weight: Inf}, {id1: 0, id2: 33, weight: 4},   {id1: 0, id2: 34, weight: Inf}, {id1: 0, id2: 35, weight: Inf}, {id1: 0, id2: 36, weight: 3},   {id1: 0, id2: 37, weight: 2}],   //Arthur
		[{id1: 1, id2: 19, weight: 10},{id1: 1, id2: 20, weight: 8},   {id1: 1, id2: 21, weight: Inf}, {id1: 1, id2: 22, weight: Inf}, {id1: 1, id2: 23, weight: 8},   {id1: 1, id2: 24, weight: Inf}, {id1: 1, id2: 25, weight: 4}, {id1: 1, id2: 26, weight: 5},   {id1: 1, id2: 27, weight: 6},   {id1: 1, id2: 28, weight: 3},   {id1: 1, id2: 29, weight: 7}, {id1: 1, id2: 30, weight: Inf}, {id1: 1, id2: 31, weight: 5},   {id1: 1, id2: 32, weight: 4},   {id1: 1, id2: 33, weight: Inf}, {id1: 1, id2: 34, weight: 7},   {id1: 1, id2: 35, weight: 5},   {id1: 1, id2: 36, weight: Inf}, {id1: 1, id2: 37, weight: 6}],   //Azama
		[{id1: 2, id2: 19, weight: 7}, {id1: 2, id2: 20, weight: 8},   {id1: 2, id2: 21, weight: 3},   {id1: 2, id2: 22, weight: 6},   {id1: 2, id2: 23, weight: 8},   {id1: 2, id2: 24, weight: 7},   {id1: 2, id2: 25, weight: 8}, {id1: 2, id2: 26, weight: Inf}, {id1: 2, id2: 27, weight: Inf}, {id1: 2, id2: 28, weight: Inf}, {id1: 2, id2: 29, weight: 4}, {id1: 2, id2: 30, weight: 6},   {id1: 2, id2: 31, weight: 4},   {id1: 2, id2: 32, weight: Inf}, {id1: 2, id2: 33, weight: 3},   {id1: 2, id2: 34, weight: 5},   {id1: 2, id2: 35, weight: Inf}, {id1: 2, id2: 36, weight: 4},   {id1: 2, id2: 37, weight: Inf}], //Benny
		[{id1: 3, id2: 19, weight: 9}, {id1: 3, id2: 20, weight: Inf}, {id1: 3, id2: 21, weight: Inf}, {id1: 3, id2: 22, weight: Inf}, {id1: 3, id2: 23, weight: 5},   {id1: 3, id2: 24, weight: Inf}, {id1: 3, id2: 25, weight: 2}, {id1: 3, id2: 26, weight: 5},   {id1: 3, id2: 27, weight: 4},   {id1: 3, id2: 28, weight: 3},   {id1: 3, id2: 29, weight: 7}, {id1: 3, id2: 30, weight: 2},   {id1: 3, id2: 31, weight: 3},   {id1: 3, id2: 32, weight: 2},   {id1: 3, id2: 33, weight: Inf}, {id1: 3, id2: 34, weight: 3},   {id1: 3, id2: 35, weight: 2},   {id1: 3, id2: 36, weight: Inf}, {id1: 3, id2: 37, weight: 7}],   //Hayato
		[{id1: 4, id2: 19, weight: 3}, {id1: 4, id2: 20, weight: Inf}, {id1: 4, id2: 21, weight: Inf}, {id1: 4, id2: 22, weight: Inf}, {id1: 4, id2: 23, weight: Inf}, {id1: 4, id2: 24, weight: Inf}, {id1: 4, id2: 25, weight: 4}, {id1: 4, id2: 26, weight: 2},   {id1: 4, id2: 27, weight: 3},   {id1: 4, id2: 28, weight: 1},   {id1: 4, id2: 29, weight: 5}, {id1: 4, id2: 30, weight: Inf}, {id1: 4, id2: 31, weight: 0},   {id1: 4, id2: 32, weight: 2},   {id1: 4, id2: 33, weight: 1},   {id1: 4, id2: 34, weight: 2},   {id1: 4, id2: 35, weight: 3},   {id1: 4, id2: 36, weight: 2},   {id1: 4, id2: 37, weight: 2}],   //Hinata
		[{id1: 5, id2: 19, weight: 5}, {id1: 5, id2: 20, weight: 6},   {id1: 5, id2: 21, weight: 6},   {id1: 5, id2: 22, weight: 2},   {id1: 5, id2: 23, weight: 7},   {id1: 5, id2: 24, weight: 7},   {id1: 5, id2: 25, weight: 7}, {id1: 5, id2: 26, weight: 4},   {id1: 5, id2: 27, weight: 6},   {id1: 5, id2: 28, weight: 2},   {id1: 5, id2: 29, weight: 6}, {id1: 5, id2: 30, weight: 5},   {id1: 5, id2: 31, weight: 4},   {id1: 5, id2: 32, weight: 6},   {id1: 5, id2: 33, weight: 7},   {id1: 5, id2: 34, weight: 8},   {id1: 5, id2: 35, weight: 7},   {id1: 5, id2: 36, weight: 5},   {id1: 5, id2: 37, weight: 4}],   //Jakob
		[{id1: 6, id2: 19, weight: 7}, {id1: 6, id2: 20, weight: Inf}, {id1: 6, id2: 21, weight: Inf}, {id1: 6, id2: 22, weight: 3},   {id1: 6, id2: 23, weight: Inf}, {id1: 6, id2: 24, weight: Inf}, {id1: 6, id2: 25, weight: 10},{id1: 6, id2: 26, weight: 7},   {id1: 6, id2: 27, weight: 5},   {id1: 6, id2: 28, weight: 3},   {id1: 6, id2: 29, weight: 5}, {id1: 6, id2: 30, weight: Inf}, {id1: 6, id2: 31, weight: 2},   {id1: 6, id2: 32, weight: 7},   {id1: 6, id2: 33, weight: 2},   {id1: 6, id2: 34, weight: 3},   {id1: 6, id2: 35, weight: 6},   {id1: 6, id2: 36, weight: Inf}, {id1: 6, id2: 37, weight: 7}],   //Kaden
		[{id1: 7, id2: 19, weight: 6}, {id1: 7, id2: 20, weight: 2},   {id1: 7, id2: 21, weight: 3},   {id1: 7, id2: 22, weight: 3},   {id1: 7, id2: 23, weight: 3},   {id1: 7, id2: 24, weight: 11},  {id1: 7, id2: 25, weight: 10},{id1: 7, id2: 26, weight: 7},   {id1: 7, id2: 27, weight: 9},   {id1: 7, id2: 28, weight: 3},   {id1: 7, id2: 29, weight: 6}, {id1: 7, id2: 30, weight: 10},  {id1: 7, id2: 31, weight: 3},   {id1: 7, id2: 32, weight: 8},   {id1: 7, id2: 33, weight: 7},   {id1: 7, id2: 34, weight: 3},   {id1: 7, id2: 35, weight: 9},   {id1: 7, id2: 36, weight: 8},   {id1: 7, id2: 37, weight: 9}],   //Kaze
		[{id1: 8, id2: 19, weight: 7}, {id1: 8, id2: 20, weight: 5},   {id1: 8, id2: 21, weight: 2},   {id1: 8, id2: 22, weight: 3},   {id1: 8, id2: 23, weight: 4},   {id1: 8, id2: 24, weight: 11},  {id1: 8, id2: 25, weight: 8}, {id1: 8, id2: 26, weight: 2},   {id1: 8, id2: 27, weight: Inf}, {id1: 8, id2: 28, weight: Inf}, {id1: 8, id2: 29, weight: 5}, {id1: 8, id2: 30, weight: 10},  {id1: 8, id2: 31, weight: Inf}, {id1: 8, id2: 32, weight: Inf}, {id1: 8, id2: 33, weight: 5},   {id1: 8, id2: 34, weight: 3},   {id1: 8, id2: 35, weight: Inf}, {id1: 8, id2: 36, weight: 4},   {id1: 8, id2: 37, weight: Inf}], //Keaton
		[{id1: 9, id2: 19, weight: 4}, {id1: 9, id2: 20, weight: 5},   {id1: 9, id2: 21, weight: 5},   {id1: 9, id2: 22, weight: 2},   {id1: 9, id2: 23, weight: 5},   {id1: 9, id2: 24, weight: 11},  {id1: 9, id2: 25, weight: 4}, {id1: 9, id2: 26, weight: 3},   {id1: 9, id2: 27, weight: Inf}, {id1: 9, id2: 28, weight: Inf}, {id1: 9, id2: 29, weight: 6}, {id1: 9, id2: 30, weight: 10},  {id1: 9, id2: 31, weight: Inf}, {id1: 9, id2: 32, weight: 4},   {id1: 9, id2: 33, weight: 2},   {id1: 9, id2: 34, weight: Inf}, {id1: 9, id2: 35, weight: Inf}, {id1: 9, id2: 36, weight: 6},   {id1: 9, id2: 37, weight: Inf}], //Laslow
		[{id1: 10, id2: 19, weight: 8},{id1: 10, id2: 20, weight: 9},  {id1: 10, id2: 21, weight: Inf},{id1: 10, id2: 22, weight: 8},  {id1: 10, id2: 23, weight: 10}, {id1: 10, id2: 24, weight: Inf},{id1: 10, id2: 25, weight: 2},{id1: 10, id2: 26, weight: Inf},{id1: 10, id2: 27, weight: 4},  {id1: 10, id2: 28, weight: Inf},{id1: 10, id2: 29, weight: 9},{id1: 10, id2: 30, weight: 3},  {id1: 10, id2: 31, weight: Inf},{id1: 10, id2: 32, weight: Inf},{id1: 10, id2: 33, weight: 10}, {id1: 10, id2: 34, weight: Inf},{id1: 10, id2: 35, weight: 2},  {id1: 10, id2: 36, weight: 6},  {id1: 10, id2: 37, weight: Inf}],//Leo
		[{id1: 11, id2: 19, weight: 6},{id1: 11, id2: 20, weight: 3},  {id1: 11, id2: 21, weight: 2},  {id1: 11, id2: 22, weight: 3},  {id1: 11, id2: 23, weight: 4},  {id1: 11, id2: 24, weight: 6},  {id1: 11, id2: 25, weight: 6},{id1: 11, id2: 26, weight: Inf},{id1: 11, id2: 27, weight: Inf},{id1: 11, id2: 28, weight: Inf},{id1: 11, id2: 29, weight: 3},{id1: 11, id2: 30, weight: 5},  {id1: 11, id2: 31, weight: 3},  {id1: 11, id2: 32, weight: Inf},{id1: 11, id2: 33, weight: 4},  {id1: 11, id2: 34, weight: Inf},{id1: 11, id2: 35, weight: Inf},{id1: 11, id2: 36, weight: 9},  {id1: 11, id2: 37, weight: 4}],  //Niles
		[{id1: 12, id2: 19, weight: 8},{id1: 12, id2: 20, weight: 6},  {id1: 12, id2: 21, weight: 6},  {id1: 12, id2: 22, weight: 6},  {id1: 12, id2: 23, weight: 5},  {id1: 12, id2: 24, weight: 3},  {id1: 12, id2: 25, weight: 2},{id1: 12, id2: 26, weight: Inf},{id1: 12, id2: 27, weight: Inf},{id1: 12, id2: 28, weight: 8},  {id1: 12, id2: 29, weight: 7},{id1: 12, id2: 30, weight: 3},  {id1: 12, id2: 31, weight: Inf},{id1: 12, id2: 32, weight: 3},  {id1: 12, id2: 33, weight: 7},  {id1: 12, id2: 34, weight: Inf},{id1: 12, id2: 35, weight: Inf},{id1: 12, id2: 36, weight: 8},  {id1: 12, id2: 37, weight: Inf}],//Odin
		[{id1: 13, id2: 19, weight: 6},{id1: 13, id2: 20, weight: Inf},{id1: 13, id2: 21, weight: 5},  {id1: 13, id2: 22, weight: Inf},{id1: 13, id2: 23, weight: Inf},{id1: 13, id2: 24, weight: 8},  {id1: 13, id2: 25, weight: 8},{id1: 13, id2: 26, weight: 6},  {id1: 13, id2: 27, weight: Inf},{id1: 13, id2: 28, weight: 2},  {id1: 13, id2: 29, weight: 5},{id1: 13, id2: 30, weight: Inf},{id1: 13, id2: 31, weight: 3},  {id1: 13, id2: 32, weight: 7},  {id1: 13, id2: 33, weight: Inf},{id1: 13, id2: 34, weight: 4},  {id1: 13, id2: 35, weight: Inf},{id1: 13, id2: 36, weight: Inf},{id1: 13, id2: 37, weight: 6}],  //Ryoma
		[{id1: 14, id2: 19, weight: 5},{id1: 14, id2: 20, weight: 4},  {id1: 14, id2: 21, weight: Inf},{id1: 14, id2: 22, weight: 2},  {id1: 14, id2: 23, weight: Inf},{id1: 14, id2: 24, weight: Inf},{id1: 14, id2: 25, weight: 5},{id1: 14, id2: 26, weight: 4},  {id1: 14, id2: 27, weight: 5},  {id1: 14, id2: 28, weight: 2},  {id1: 14, id2: 29, weight: 5},{id1: 14, id2: 30, weight: Inf},{id1: 14, id2: 31, weight: 2},  {id1: 14, id2: 32, weight: 2},  {id1: 14, id2: 33, weight: Inf},{id1: 14, id2: 34, weight: 6},  {id1: 14, id2: 35, weight: 7},  {id1: 14, id2: 36, weight: Inf},{id1: 14, id2: 37, weight: 4}],  //Saizo
		[{id1: 15, id2: 19, weight: 4},{id1: 15, id2: 20, weight: 5},  {id1: 15, id2: 21, weight: 5},  {id1: 15, id2: 22, weight: 3},  {id1: 15, id2: 23, weight: 5},  {id1: 15, id2: 24, weight: 10}, {id1: 15, id2: 25, weight: 5},{id1: 15, id2: 26, weight: 3},  {id1: 15, id2: 27, weight: 2},  {id1: 15, id2: 28, weight: 3},  {id1: 15, id2: 29, weight: 6},{id1: 15, id2: 30, weight: 9},  {id1: 15, id2: 31, weight: 3},  {id1: 15, id2: 32, weight: 7},  {id1: 15, id2: 33, weight: 9},  {id1: 15, id2: 34, weight: 8},  {id1: 15, id2: 35, weight: 5},  {id1: 15, id2: 36, weight: 2},  {id1: 15, id2: 37, weight: 4}],  //Silas
		[{id1: 16, id2: 19, weight: 8},{id1: 16, id2: 20, weight: Inf},{id1: 16, id2: 21, weight: Inf},{id1: 16, id2: 22, weight: Inf},{id1: 16, id2: 23, weight: Inf},{id1: 16, id2: 24, weight: Inf},{id1: 16, id2: 25, weight: 6},{id1: 16, id2: 26, weight: 7},  {id1: 16, id2: 27, weight: 7},  {id1: 16, id2: 28, weight: 3},  {id1: 16, id2: 29, weight: 6},{id1: 16, id2: 30, weight: 5},  {id1: 16, id2: 31, weight: 1},  {id1: 16, id2: 32, weight: 2},  {id1: 16, id2: 33, weight: Inf},{id1: 16, id2: 34, weight: 4},  {id1: 16, id2: 35, weight: 4},  {id1: 16, id2: 36, weight: 9},  {id1: 16, id2: 37, weight: 5}],  //Subaki
		[{id1: 17, id2: 19, weight: 5},{id1: 17, id2: 20, weight: Inf},{id1: 17, id2: 21, weight: 4},  {id1: 17, id2: 22, weight: Inf},{id1: 17, id2: 23, weight: Inf},{id1: 17, id2: 24, weight: 11}, {id1: 17, id2: 25, weight: 7},{id1: 17, id2: 26, weight: 4},  {id1: 17, id2: 27, weight: Inf},{id1: 17, id2: 28, weight: 2},  {id1: 17, id2: 29, weight: 5},{id1: 17, id2: 30, weight: Inf},{id1: 17, id2: 31, weight: 3},  {id1: 17, id2: 32, weight: 5},  {id1: 17, id2: 33, weight: Inf},{id1: 17, id2: 34, weight: 7},  {id1: 17, id2: 35, weight: Inf},{id1: 17, id2: 36, weight: Inf},{id1: 17, id2: 37, weight: 5}],  //Takumi
		[{id1: 18, id2: 19, weight: 5},{id1: 18, id2: 20, weight: 6},  {id1: 18, id2: 21, weight: Inf},{id1: 18, id2: 22, weight: 1},  {id1: 18, id2: 23, weight: 8},  {id1: 18, id2: 24, weight: Inf},{id1: 18, id2: 25, weight: 5},{id1: 18, id2: 26, weight: Inf},{id1: 18, id2: 27, weight: 3},  {id1: 18, id2: 28, weight: Inf},{id1: 18, id2: 29, weight: 5},{id1: 18, id2: 30, weight: 10}, {id1: 18, id2: 31, weight: Inf},{id1: 18, id2: 32, weight: Inf},{id1: 18, id2: 33, weight: 7},  {id1: 18, id2: 34, weight: Inf},{id1: 18, id2: 35, weight: 5},  {id1: 18, id2: 36, weight: 4},  {id1: 18, id2: 37, weight: Inf}],//Xander
		];

	function getWeightByIds(id1, id2) {
		var result;
		for (var i = 0; i < weights.length; i++) {
			for (var j = 0; j < weights[i].length; j++) {
				if (weights[i][j].id1 === id1 && weights[i][j].id2 === id2) {
					result = weights[i][j].weight;
					break;
				}
			}
		}
		return result;
	}

	var rows = [];
	var cols = [];
	for (var i = 0; i < characters.length; i++)
	{
		if (characters[i].sex === "m") {
			rows.push(characters[i]);
		} else{
			cols.push(characters[i]);
		}
	}
	var cost_matrix = [];
	var mapping_matrix = [];

	//Here we construct our new cost_matrix
	for (var r_index = 0; r_index < rows.length; r_index++)
	{
		var modified_cost_row = [];
		var modified_mapping_row = [];

		for (var c_index = 0; c_index < cols.length; c_index++)
		{
			modified_mapping_row.push({
				"id1": rows[r_index].id,
				"id2": cols[c_index].id
			});
			modified_cost_row.push(getWeightByIds(rows[r_index].id, cols[c_index].id));
		}
		mapping_matrix.push(modified_mapping_row);
		cost_matrix.push(modified_cost_row);
	}

	var m = new Munkres();

	//Calculated pairs
	var indices = m.compute(cost_matrix);
	var result = [];
	console.log(indices);

	function ShowResults(pairing){
		var ids = mapping_matrix[pairing[0]][pairing[1]];
		result.push(ids);
		console.log("Father: " + ids.id1 + " Mother: " + ids.id2 + " Point: " + cost_matrix[pairing[0]][pairing[1]]);
		total_cost += cost_matrix[pairing[0]][pairing[1]];
	}

	var total_cost = 0;

	indices.forEach(ShowResults);

	console.log(total_cost);

	return result
}
