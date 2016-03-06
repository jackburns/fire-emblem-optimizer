(function() {
	var Inf = Number.POSITIVE_INFINITY;

var weights=[
	//Azura  Beruka  Camilla  Charlotte  Effie  Elise  Felicia  Hana  Hinoka  Kagero  Mozu  Nyx  Oboro  Orochi  Peri  Rinkah  Sakura  Selena  Setsuna
	 [4,     4,      2,       3,         2,     11,    7,       Inf,  Inf,    2,      3,    10,  Inf,   Inf,    4,    Inf,    Inf,    3,      2    ],//Arthur
     [10,    8,      Inf,     Inf,       8,     Inf,   4,       5,    6,      3,      7,    Inf, 5,     4,      Inf,  7,      5,      Inf,    6    ],//Azama
     [7,     8,      3,       6,         8,     7,     8,       Inf,  Inf,    Inf,    4,    6,   4,     Inf,    3,    5,      Inf,    4,      Inf  ],//Benny 
     [9,     Inf,    Inf,     Inf,       5,     Inf,   2,       5,    4,      3,      7,    2,   3,     2,      Inf,  3,      2,      Inf,    7    ],//Hayato    
     [3,     Inf,    Inf,     Inf,       Inf,   Inf,   4,       2,    3,      1,      5,    Inf, 0,     2,      1,    2,      3,      2,      2    ],//Hinata
     [5,     6,      6,       2,         7,     7,     7,       4,    6,      2,      6,    5,   4,     6,      7,    8,      7,      5,      4    ],//Jakob
     [7,     Inf,    Inf,     3,         Inf,   Inf,   10,      7,    5,      3,      5,    Inf, 2,     7,      2,    3,      6,      Inf,    7    ],//Kaden
     [6,     2,      3,       3,         3,     11,    10,      7,    9,      3,      6,    10,  3,     8,      7,    3,      9,      8,      9    ],//Kaze
     [7,     5,      2,       3,         4,     11,    8,       2,    Inf,    Inf,    5,    10,  Inf,   Inf,    5,    3,      Inf,    4,      Inf  ],//Keaton
     [4,     5,      5,       2,         5,     11,    4,       3,    Inf,    Inf,    6,    10,  Inf,   4,      2,    Inf,    Inf,    6,      Inf  ],//Laslow
     [8,     9,      Inf,     8,         10,    Inf,   2,       Inf,  4,      Inf,    9,    3,   Inf,   Inf,    10,   Inf,    2,      6,      Inf  ],//Leo
     [6,     3,      2,       3,         4,     6,     6,       Inf,  Inf,    Inf,    3,    5,   3,     Inf,    4,    Inf,    Inf,    9,      4    ],//Niles
     [8,     6,      6,       6,         5,     3,     2,       Inf,  Inf,    8,      7,    3,   Inf,   3,      7,    Inf,    Inf,    8,      Inf  ],//Odin
     [6,     Inf,    5,       Inf,       Inf,   8,     8,       6,    Inf,    2,      5,    Inf, 3,     7,      Inf,  4,      Inf,    Inf,    6    ],//Ryoma
     [5,     4,      Inf,     2,         Inf,   Inf,   5,       4,    5,      2,      5,    Inf, 2,     2,      Inf,  6,      7,      Inf,    4    ],//Saizo
     [4,     5,      5,       3,         5,     10,    5,       3,    2,      3,      6,    9,   3,     7,      9,    8,      5,      2,      4    ],//Silas
     [8,     Inf,    Inf,     Inf,       Inf,   Inf,   6,       7,    7,      3,      6,    5,   1,     2,      Inf,  4,      4,      9,      5    ],//Subaki
     [5,     Inf,    4,       Inf,       Inf,   11,    7,       4,    Inf,    2,      5,    Inf, 3,     5,      Inf,  7,      Inf,    Inf,    5    ],//Takumi
     [5,     6,      Inf,     1,         8,     Inf,   5,       Inf,  3,      Inf,    5,    10,  Inf,   Inf,    7,    Inf,    5,      4,      Inf  ],//Xander
];


	var all_men_list = ["Arthur","Azama","Benny","Hayato","Hinata","Jakob","Kaden","Kaze","Keaton","Laslow","Leo","Niles","Odin","Ryoma","Saizo","Silas","Subaki","Takumi","Xander"];
	var all_wom_list = ["Azura","Beruka","Camilla","Charlotte","Effie","Elise","Felicia","Hana","Hinoka","Kagero","Mozu","Nyx","Oboro","Orochi","Peri","Rinkah","Sakura","Selena","Setsuna"];

	//List of input male names
	var men_list = ["Dude1", "Dude2"];
	//List of input female names
	var wom_list = ["Chick1","Chick2"];

	var man_row_index = [];
	var wom_row_index = [];

	//Fill array with row numbers we are interested in
	for (var i = 0; i < men_list.length; i++) 
	{
		man_row_index.push(all_men_list.indexOf(men_list[i]));
	}
	//Fill array with column numbers we are interested in
	for (var i = 0; i < wom_list.length; i++)
	{
		wom_row_index.push(all_wom_list.indexOf(wom_list[i]));
	}

	var cost_matrix = [];

	//Here we construct our new cost_matrix
	for (var man_index; man_index < man_row_index.length; man_index++)
	{
		var modified_man_row = [];
		for (var wom_index; wom_index < wom_row_index.length; wom_index++)
		{
			modified_man_row.push(weights[wom_index][man_row_index]);
		}
		cost_matrix.push(modified_man_row);
	}

	var m = new Munkres();

	//Calculated binary matrix
	var indices = m.compute(weights);
	var total_cost = 0;
	console.log(indices);

	for (var woman = 0; woman < wom_list.length; woman++)
	{
		for (var man = 0; man < men_list.length; man++)
		{
			if (indices[man, woman] > 0)
			{
				//We got ourselves a match, yahoo
				//Update total army cost from original grid
				Console.log("Hello")
				total_cost += cost_matrix[man, woman];
			}
		}
	}

})();