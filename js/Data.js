function Data() {
    console.log('test: in Data');
    this.headers = new Array('Node', 'Time', 'Trunk_CM_x', 'Trunk_CM_y', 'Hip_x', 'Hip_y', 'R_knee_x', 'R_knee_y', 'R_ankle_x', 'R_ankle_y', 'R_CP_01_x', 'R_CP_01_y', 'R_CP_02_x', 'R_CP_02_y', 'L_knee_x', 'L_knee_y', 'L_ankle_x', 'L_ankle_y', 'L_CP_01_x', 'L_CP_01_y', 'L_CP_02_x', 'L_CP_02_y', 'R_CP_woDef_01_x', 'R_CP_woDef_01_y', 'R_CP_woDef_02_x', 'R_CP_woDef_02_y', 'L_CP_woDef_01_x', 'L_CP_woDef_01_y', 'L_CP_woDef_02_x', 'L_CP_woDef_02_y');
    // time in s

    this.testData = new Array(80);
    this.testData[ 0] = new Array( 1,  0.000,  0.075,  1.276,  0.000,  0.968,  0.192,  0.568,  0.258,  0.128,  0.199,  0.057,  0.424,  0.060, -0.106,  0.537, -0.494,  0.320, -0.572,  0.371, -0.543,  0.148,  0.199,  0.057,  0.424,  0.060, -0.572,  0.371, -0.543,  0.148); 
    this.testData[ 1] = new Array( 2,  0.009,  0.073,  1.270,  0.000,  0.961,  0.189,  0.560,  0.241,  0.118,  0.180,  0.048,  0.405,  0.046, -0.093,  0.528, -0.492,  0.329, -0.567,  0.383, -0.547,  0.158,  0.180,  0.048,  0.405,  0.046, -0.567,  0.383, -0.547,  0.158); 
    this.testData[ 2] = new Array( 3,  0.018,  0.072,  1.263,  0.000,  0.954,  0.187,  0.551,  0.222,  0.108,  0.159,  0.040,  0.384,  0.031, -0.080,  0.518, -0.487,  0.338, -0.561,  0.394, -0.548,  0.169,  0.159,  0.040,  0.384,  0.031, -0.561,  0.394, -0.548,  0.169); 
    this.testData[ 3] = new Array( 4,  0.026,  0.070,  1.255,  0.000,  0.946,  0.184,  0.542,  0.200,  0.097,  0.135,  0.031,  0.360,  0.017, -0.066,  0.507, -0.481,  0.347, -0.553,  0.405, -0.546,  0.180,  0.135,  0.031,  0.360,  0.016, -0.553,  0.405, -0.546,  0.180); 
    this.testData[ 4] = new Array( 5,  0.035,  0.069,  1.246,  0.000,  0.937,  0.182,  0.533,  0.173,  0.087,  0.106,  0.024,  0.330,  0.002, -0.050,  0.496, -0.473,  0.356, -0.543,  0.416, -0.543,  0.191,  0.106,  0.023,  0.330,  0.001, -0.543,  0.416, -0.543,  0.191); 
    this.testData[ 5] = new Array( 6,  0.044,  0.068,  1.237,  0.000,  0.928,  0.181,  0.523,  0.141,  0.079,  0.075,  0.015,  0.298,  0.000, -0.034,  0.485, -0.463,  0.365, -0.531,  0.427, -0.536,  0.202,  0.075,  0.014,  0.300, -0.004, -0.531,  0.427, -0.536,  0.202); 
    this.testData[ 6] = new Array( 7,  0.053,  0.067,  1.229,  0.000,  0.919,  0.179,  0.513,  0.110,  0.073,  0.045,  0.007,  0.268,  0.000, -0.016,  0.475, -0.450,  0.374, -0.517,  0.437, -0.527,  0.212,  0.045,  0.007,  0.270, -0.007, -0.517,  0.437, -0.527,  0.212); 
    this.testData[ 7] = new Array( 8,  0.062,  0.067,  1.220,  0.000,  0.910,  0.176,  0.503,  0.079,  0.068,  0.016,  0.002,  0.238,  0.000,  0.003,  0.467, -0.434,  0.382, -0.501,  0.447, -0.513,  0.222,  0.016,  0.001,  0.240, -0.009, -0.501,  0.446, -0.513,  0.222); 
    this.testData[ 8] = new Array( 9,  0.071,  0.068,  1.213,  0.000,  0.903,  0.171,  0.494,  0.050,  0.065, -0.013,  0.001,  0.209,  0.000,  0.024,  0.460, -0.416,  0.390, -0.482,  0.454, -0.497,  0.230, -0.013, -0.002,  0.212, -0.011, -0.482,  0.454, -0.497,  0.230); 
    this.testData[ 9] = new Array(10,  0.079,  0.069,  1.207,  0.000,  0.897,  0.165,  0.486,  0.022,  0.064, -0.041,  0.000,  0.181,  0.000,  0.045,  0.456, -0.396,  0.396, -0.463,  0.461, -0.477,  0.236, -0.042, -0.003,  0.183, -0.013, -0.463,  0.461, -0.477,  0.236); 
    this.testData[10] = new Array(11,  0.088,  0.071,  1.202,  0.000,  0.893,  0.157,  0.478, -0.005,  0.064, -0.069,  0.000,  0.154,  0.000,  0.067,  0.455, -0.375,  0.401, -0.442,  0.465, -0.454,  0.240, -0.069, -0.003,  0.156, -0.015, -0.442,  0.465, -0.454,  0.240); 
    this.testData[11] = new Array(12,  0.097,  0.073,  1.200,  0.000,  0.891,  0.145,  0.472, -0.032,  0.064, -0.097,  0.001,  0.126,  0.000,  0.088,  0.457, -0.354,  0.404, -0.422,  0.466, -0.428,  0.241, -0.097, -0.002,  0.128, -0.017, -0.422,  0.466, -0.428,  0.241); 
    this.testData[12] = new Array(13,  0.106,  0.075,  1.200,  0.000,  0.891,  0.131,  0.468, -0.058,  0.065, -0.124,  0.001,  0.099,  0.000,  0.110,  0.462, -0.332,  0.405, -0.402,  0.465, -0.401,  0.240, -0.124, -0.001,  0.100, -0.019, -0.402,  0.465, -0.401,  0.240); 
    this.testData[13] = new Array(14,  0.115,  0.077,  1.201,  0.000,  0.893,  0.114,  0.465, -0.085,  0.066, -0.152,  0.003,  0.071,  0.000,  0.131,  0.469, -0.310,  0.404, -0.383,  0.461, -0.372,  0.236, -0.152,  0.002,  0.072, -0.019, -0.383,  0.461, -0.372,  0.236); 
    this.testData[14] = new Array(15,  0.124,  0.079,  1.204,  0.000,  0.896,  0.096,  0.464, -0.112,  0.070, -0.180,  0.008,  0.044,  0.000,  0.151,  0.479, -0.288,  0.401, -0.364,  0.454, -0.342,  0.230, -0.180,  0.007,  0.044, -0.019, -0.364,  0.454, -0.342,  0.230); 
    this.testData[15] = new Array(16,  0.132,  0.081,  1.208,  0.000,  0.901,  0.078,  0.465, -0.138,  0.075, -0.208,  0.014,  0.016,  0.000,  0.169,  0.491, -0.266,  0.397, -0.344,  0.445, -0.310,  0.223, -0.208,  0.014,  0.015, -0.018, -0.344,  0.445, -0.310,  0.223); 
    this.testData[16] = new Array(17,  0.141,  0.083,  1.214,  0.000,  0.907,  0.058,  0.468, -0.164,  0.082, -0.236,  0.023, -0.012,  0.000,  0.187,  0.505, -0.244,  0.390, -0.325,  0.435, -0.277,  0.215, -0.236,  0.023, -0.014, -0.016, -0.325,  0.434, -0.277,  0.214); 
    this.testData[17] = new Array(18,  0.150,  0.084,  1.220,  0.000,  0.914,  0.039,  0.473, -0.189,  0.090, -0.263,  0.035, -0.041,  0.000,  0.202,  0.520, -0.221,  0.383, -0.305,  0.422, -0.244,  0.205, -0.263,  0.035, -0.044, -0.014, -0.305,  0.422, -0.244,  0.205); 
    this.testData[18] = new Array(19,  0.159,  0.085,  1.227,  0.000,  0.922,  0.019,  0.479, -0.214,  0.099, -0.291,  0.048, -0.071,  0.000,  0.216,  0.535, -0.199,  0.374, -0.285,  0.407, -0.209,  0.196, -0.291,  0.047, -0.073, -0.011, -0.285,  0.407, -0.209,  0.196); 
    this.testData[19] = new Array(20,  0.168,  0.085,  1.235,  0.000,  0.930, -0.001,  0.486, -0.238,  0.109, -0.317,  0.062, -0.101,  0.000,  0.229,  0.550, -0.176,  0.365, -0.264,  0.392, -0.173,  0.186, -0.317,  0.062, -0.104, -0.009, -0.265,  0.391, -0.173,  0.186); 
    this.testData[20] = new Array(21,  0.177,  0.085,  1.243,  0.000,  0.937, -0.021,  0.494, -0.261,  0.120, -0.343,  0.077, -0.132,  0.000,  0.240,  0.565, -0.152,  0.354, -0.242,  0.374, -0.136,  0.175, -0.343,  0.077, -0.134, -0.007, -0.242,  0.374, -0.136,  0.175); 
    this.testData[21] = new Array(22,  0.185,  0.085,  1.251,  0.000,  0.945, -0.040,  0.503, -0.283,  0.130, -0.368,  0.093, -0.164,  0.000,  0.249,  0.578, -0.127,  0.341, -0.219,  0.354, -0.097,  0.164, -0.368,  0.093, -0.166, -0.005, -0.219,  0.354, -0.097,  0.164); 
    this.testData[22] = new Array(23,  0.194,  0.085,  1.258,  0.000,  0.952, -0.060,  0.513, -0.304,  0.140, -0.391,  0.110, -0.195,  0.000,  0.257,  0.591, -0.100,  0.325, -0.192,  0.331, -0.056,  0.152, -0.391,  0.110, -0.197, -0.003, -0.193,  0.331, -0.057,  0.152); 
    this.testData[23] = new Array(24,  0.203,  0.084,  1.265,  0.000,  0.959, -0.079,  0.523, -0.323,  0.150, -0.412,  0.128, -0.227,  0.001,  0.263,  0.602, -0.071,  0.308, -0.164,  0.306, -0.013,  0.139, -0.412,  0.128, -0.228, -0.002, -0.164,  0.306, -0.013,  0.139); 
    this.testData[24] = new Array(25,  0.212,  0.084,  1.272,  0.000,  0.966, -0.096,  0.533, -0.340,  0.160, -0.431,  0.146, -0.259,  0.001,  0.268,  0.612, -0.039,  0.290, -0.131,  0.280,  0.033,  0.126, -0.431,  0.146, -0.260, -0.000, -0.131,  0.280,  0.033,  0.126); 
    this.testData[25] = new Array(26,  0.221,  0.084,  1.278,  0.000,  0.971, -0.111,  0.542, -0.355,  0.170, -0.447,  0.165, -0.291,  0.003,  0.271,  0.620, -0.005,  0.271, -0.095,  0.253,  0.082,  0.114, -0.447,  0.165, -0.291,  0.002, -0.096,  0.252,  0.082,  0.114); 
    this.testData[26] = new Array(27,  0.230,  0.084,  1.283,  0.000,  0.977, -0.124,  0.551, -0.369,  0.179, -0.461,  0.184, -0.323,  0.006,  0.272,  0.626,  0.032,  0.251, -0.057,  0.225,  0.133,  0.104, -0.461,  0.184, -0.323,  0.006, -0.057,  0.225,  0.133,  0.103); 
    this.testData[27] = new Array(28,  0.238,  0.084,  1.287,  0.000,  0.981, -0.134,  0.558, -0.382,  0.189, -0.474,  0.202, -0.354,  0.012,  0.271,  0.630,  0.070,  0.233, -0.016,  0.198,  0.185,  0.095, -0.474,  0.202, -0.354,  0.012, -0.016,  0.198,  0.185,  0.095); 
    this.testData[28] = new Array(29,  0.247,  0.084,  1.291,  0.000,  0.985, -0.142,  0.565, -0.397,  0.200, -0.488,  0.220, -0.381,  0.022,  0.268,  0.631,  0.108,  0.216,  0.026,  0.173,  0.235,  0.090, -0.488,  0.220, -0.381,  0.022,  0.026,  0.173,  0.235,  0.090); 
    this.testData[29] = new Array(30,  0.256,  0.084,  1.294,  0.000,  0.988, -0.148,  0.570, -0.413,  0.212, -0.502,  0.236, -0.405,  0.033,  0.263,  0.631,  0.145,  0.201,  0.068,  0.151,  0.283,  0.087, -0.502,  0.236, -0.405,  0.033,  0.068,  0.151,  0.283,  0.087); 
    this.testData[30] = new Array(31,  0.265,  0.084,  1.296,  0.000,  0.990, -0.152,  0.573, -0.427,  0.223, -0.516,  0.250, -0.426,  0.044,  0.257,  0.628,  0.180,  0.189,  0.107,  0.133,  0.327,  0.087, -0.516,  0.250, -0.426,  0.044,  0.107,  0.133,  0.327,  0.087); 
    this.testData[31] = new Array(32,  0.274,  0.084,  1.297,  0.000,  0.991, -0.155,  0.576, -0.440,  0.234, -0.528,  0.264, -0.445,  0.055,  0.249,  0.624,  0.212,  0.180,  0.143,  0.119,  0.366,  0.089, -0.528,  0.264, -0.445,  0.055,  0.143,  0.119,  0.366,  0.089); 
    this.testData[32] = new Array(33,  0.283,  0.084,  1.298,  0.000,  0.992, -0.156,  0.576, -0.452,  0.244, -0.539,  0.277, -0.461,  0.065,  0.241,  0.619,  0.239,  0.174,  0.174,  0.108,  0.398,  0.093, -0.539,  0.277, -0.461,  0.065,  0.174,  0.108,  0.398,  0.093); 
    this.testData[33] = new Array(34,  0.291,  0.083,  1.298,  0.000,  0.991, -0.155,  0.576, -0.463,  0.254, -0.548,  0.288, -0.476,  0.075,  0.232,  0.613,  0.260,  0.169,  0.199,  0.100,  0.424,  0.097, -0.549,  0.288, -0.476,  0.075,  0.199,  0.100,  0.424,  0.097); 
    this.testData[34] = new Array(35,  0.300,  0.082,  1.297,  0.000,  0.990, -0.153,  0.574, -0.472,  0.263, -0.557,  0.300, -0.490,  0.085,  0.224,  0.608,  0.275,  0.165,  0.217,  0.093,  0.442,  0.100, -0.557,  0.300, -0.490,  0.085,  0.217,  0.093,  0.442,  0.100); 
    this.testData[35] = new Array(36,  0.309,  0.081,  1.295,  0.000,  0.988, -0.149,  0.571, -0.480,  0.273, -0.564,  0.311, -0.502,  0.095,  0.217,  0.602,  0.285,  0.162,  0.229,  0.088,  0.453,  0.101, -0.564,  0.311, -0.502,  0.095,  0.229,  0.088,  0.454,  0.101); 
    this.testData[36] = new Array(37,  0.318,  0.080,  1.293,  0.000,  0.986, -0.143,  0.566, -0.486,  0.282, -0.569,  0.323, -0.513,  0.105,  0.210,  0.595,  0.289,  0.157,  0.234,  0.083,  0.458,  0.099, -0.569,  0.323, -0.513,  0.105,  0.234,  0.083,  0.458,  0.099); 
    this.testData[37] = new Array(38,  0.327,  0.079,  1.290,  0.000,  0.982, -0.136,  0.560, -0.491,  0.292, -0.573,  0.335, -0.522,  0.116,  0.205,  0.589,  0.288,  0.151,  0.232,  0.077,  0.457,  0.093, -0.573,  0.335, -0.523,  0.116,  0.232,  0.077,  0.457,  0.093); 
    this.testData[38] = new Array(39,  0.335,  0.078,  1.286,  0.000,  0.978, -0.127,  0.553, -0.494,  0.301, -0.574,  0.347, -0.531,  0.126,  0.200,  0.582,  0.282,  0.145,  0.225,  0.071,  0.450,  0.084, -0.574,  0.347, -0.531,  0.126,  0.225,  0.071,  0.450,  0.084); 
    this.testData[39] = new Array(40,  0.344,  0.076,  1.281,  0.000,  0.973, -0.117,  0.545, -0.495,  0.311, -0.574,  0.359, -0.538,  0.137,  0.196,  0.575,  0.272,  0.137,  0.214,  0.064,  0.439,  0.073, -0.574,  0.359, -0.538,  0.137,  0.214,  0.064,  0.439,  0.073); 
    this.testData[40] = new Array(41,  0.353,  0.075,  1.276,  0.000,  0.968, -0.106,  0.537, -0.494,  0.320, -0.572,  0.371, -0.543,  0.148,  0.192,  0.568,  0.258,  0.128,  0.199,  0.057,  0.424,  0.060, -0.572,  0.371, -0.543,  0.148,  0.199,  0.057,  0.424,  0.060); 
    this.testData[41] = new Array(42,  0.362,  0.073,  1.270,  0.000,  0.961, -0.093,  0.528, -0.492,  0.329, -0.567,  0.383, -0.547,  0.158,  0.189,  0.560,  0.241,  0.118,  0.180,  0.048,  0.405,  0.046, -0.567,  0.383, -0.547,  0.158,  0.180,  0.048,  0.405,  0.046); 
    this.testData[42] = new Array(43,  0.371,  0.072,  1.263,  0.000,  0.954, -0.080,  0.518, -0.487,  0.338, -0.561,  0.394, -0.548,  0.169,  0.187,  0.551,  0.222,  0.108,  0.159,  0.040,  0.384,  0.031, -0.561,  0.394, -0.548,  0.169,  0.159,  0.040,  0.384,  0.031); 
    this.testData[43] = new Array(44,  0.380,  0.070,  1.255,  0.000,  0.946, -0.066,  0.507, -0.481,  0.347, -0.553,  0.405, -0.546,  0.180,  0.184,  0.542,  0.200,  0.097,  0.135,  0.031,  0.360,  0.017, -0.553,  0.405, -0.546,  0.180,  0.135,  0.031,  0.360,  0.016); 
    this.testData[44] = new Array(45,  0.388,  0.069,  1.246,  0.000,  0.937, -0.050,  0.496, -0.473,  0.356, -0.543,  0.416, -0.543,  0.191,  0.182,  0.533,  0.173,  0.087,  0.106,  0.024,  0.330,  0.002, -0.543,  0.416, -0.543,  0.191,  0.106,  0.023,  0.330,  0.001); 
    this.testData[45] = new Array(46,  0.397,  0.068,  1.237,  0.000,  0.928, -0.034,  0.485, -0.463,  0.365, -0.531,  0.427, -0.536,  0.202,  0.181,  0.523,  0.141,  0.079,  0.075,  0.015,  0.298,  0.000, -0.531,  0.427, -0.536,  0.202,  0.075,  0.014,  0.300, -0.004); 
    this.testData[46] = new Array(47,  0.406,  0.067,  1.229,  0.000,  0.919, -0.016,  0.475, -0.450,  0.374, -0.517,  0.437, -0.527,  0.212,  0.179,  0.513,  0.110,  0.073,  0.045,  0.007,  0.268,  0.000, -0.517,  0.437, -0.527,  0.212,  0.045,  0.007,  0.270, -0.007); 
    this.testData[47] = new Array(48,  0.415,  0.067,  1.220,  0.000,  0.910,  0.003,  0.467, -0.434,  0.382, -0.501,  0.447, -0.513,  0.222,  0.176,  0.503,  0.079,  0.068,  0.016,  0.002,  0.238,  0.000, -0.501,  0.446, -0.513,  0.222,  0.016,  0.001,  0.240, -0.009); 
    this.testData[48] = new Array(49,  0.424,  0.068,  1.213,  0.000,  0.903,  0.024,  0.460, -0.416,  0.390, -0.482,  0.454, -0.497,  0.230,  0.171,  0.494,  0.050,  0.065, -0.013,  0.001,  0.209,  0.000, -0.482,  0.454, -0.497,  0.230, -0.013, -0.002,  0.212, -0.011); 
    this.testData[49] = new Array(50,  0.433,  0.069,  1.207,  0.000,  0.897,  0.045,  0.456, -0.396,  0.396, -0.463,  0.461, -0.477,  0.236,  0.165,  0.486,  0.022,  0.064, -0.041,  0.000,  0.181,  0.000, -0.463,  0.461, -0.477,  0.236, -0.042, -0.003,  0.183, -0.013); 
    this.testData[50] = new Array(51,  0.441,  0.071,  1.202,  0.000,  0.893,  0.067,  0.455, -0.375,  0.401, -0.442,  0.465, -0.454,  0.240,  0.157,  0.478, -0.005,  0.064, -0.069,  0.000,  0.154,  0.000, -0.442,  0.465, -0.454,  0.240, -0.069, -0.003,  0.156, -0.015); 
    this.testData[51] = new Array(52,  0.450,  0.073,  1.200,  0.000,  0.891,  0.088,  0.457, -0.354,  0.404, -0.422,  0.466, -0.428,  0.241,  0.145,  0.472, -0.032,  0.064, -0.097,  0.001,  0.126,  0.000, -0.422,  0.466, -0.428,  0.241, -0.097, -0.002,  0.128, -0.017); 
    this.testData[52] = new Array(53,  0.459,  0.075,  1.200,  0.000,  0.891,  0.110,  0.462, -0.332,  0.405, -0.402,  0.465, -0.401,  0.240,  0.131,  0.468, -0.058,  0.065, -0.124,  0.001,  0.099,  0.000, -0.402,  0.465, -0.401,  0.240, -0.124, -0.001,  0.100, -0.019); 
    this.testData[53] = new Array(54,  0.468,  0.077,  1.201,  0.000,  0.893,  0.131,  0.469, -0.310,  0.404, -0.383,  0.461, -0.372,  0.236,  0.114,  0.465, -0.085,  0.066, -0.152,  0.003,  0.071,  0.000, -0.383,  0.461, -0.372,  0.236, -0.152,  0.002,  0.072, -0.019); 
    this.testData[54] = new Array(55,  0.477,  0.079,  1.204,  0.000,  0.896,  0.151,  0.479, -0.288,  0.401, -0.364,  0.454, -0.342,  0.230,  0.096,  0.464, -0.112,  0.070, -0.180,  0.008,  0.044,  0.000, -0.364,  0.454, -0.342,  0.230, -0.180,  0.007,  0.044, -0.019); 
    this.testData[55] = new Array(56,  0.486,  0.081,  1.208,  0.000,  0.901,  0.169,  0.491, -0.266,  0.397, -0.344,  0.445, -0.310,  0.223,  0.078,  0.465, -0.138,  0.075, -0.208,  0.014,  0.016,  0.000, -0.344,  0.445, -0.310,  0.223, -0.208,  0.014,  0.015, -0.018); 
    this.testData[56] = new Array(57,  0.494,  0.083,  1.214,  0.000,  0.907,  0.187,  0.505, -0.244,  0.390, -0.325,  0.435, -0.277,  0.215,  0.058,  0.468, -0.164,  0.082, -0.236,  0.023, -0.012,  0.000, -0.325,  0.434, -0.277,  0.214, -0.236,  0.023, -0.014, -0.016); 
    this.testData[57] = new Array(58,  0.503,  0.084,  1.220,  0.000,  0.914,  0.202,  0.520, -0.221,  0.383, -0.305,  0.422, -0.244,  0.205,  0.039,  0.473, -0.189,  0.090, -0.263,  0.035, -0.041,  0.000, -0.305,  0.422, -0.244,  0.205, -0.263,  0.035, -0.044, -0.014); 
    this.testData[58] = new Array(59,  0.512,  0.085,  1.227,  0.000,  0.922,  0.216,  0.535, -0.199,  0.374, -0.285,  0.407, -0.209,  0.196,  0.019,  0.479, -0.214,  0.099, -0.291,  0.048, -0.071,  0.000, -0.285,  0.407, -0.209,  0.196, -0.291,  0.047, -0.073, -0.011); 
    this.testData[59] = new Array(60,  0.521,  0.085,  1.235,  0.000,  0.930,  0.229,  0.550, -0.176,  0.365, -0.264,  0.392, -0.173,  0.186, -0.001,  0.486, -0.238,  0.109, -0.317,  0.062, -0.101,  0.000, -0.265,  0.391, -0.173,  0.186, -0.317,  0.062, -0.104, -0.009); 
    this.testData[60] = new Array(61,  0.530,  0.085,  1.243,  0.000,  0.937,  0.240,  0.565, -0.152,  0.354, -0.242,  0.374, -0.136,  0.175, -0.021,  0.494, -0.261,  0.120, -0.343,  0.077, -0.132,  0.000, -0.242,  0.374, -0.136,  0.175, -0.343,  0.077, -0.134, -0.007); 
    this.testData[61] = new Array(62,  0.539,  0.085,  1.251,  0.000,  0.945,  0.249,  0.578, -0.127,  0.341, -0.219,  0.354, -0.097,  0.164, -0.040,  0.503, -0.283,  0.130, -0.368,  0.093, -0.164,  0.000, -0.219,  0.354, -0.097,  0.164, -0.368,  0.093, -0.166, -0.005); 
    this.testData[62] = new Array(63,  0.547,  0.085,  1.258,  0.000,  0.952,  0.257,  0.591, -0.100,  0.325, -0.192,  0.331, -0.056,  0.152, -0.060,  0.513, -0.304,  0.140, -0.391,  0.110, -0.195,  0.000, -0.193,  0.331, -0.057,  0.152, -0.391,  0.110, -0.197, -0.003); 
    this.testData[63] = new Array(64,  0.556,  0.084,  1.265,  0.000,  0.959,  0.263,  0.602, -0.071,  0.308, -0.164,  0.306, -0.013,  0.139, -0.079,  0.523, -0.323,  0.150, -0.412,  0.128, -0.227,  0.001, -0.164,  0.306, -0.013,  0.139, -0.412,  0.128, -0.228, -0.002); 
    this.testData[64] = new Array(65,  0.565,  0.084,  1.272,  0.000,  0.966,  0.268,  0.612, -0.039,  0.290, -0.131,  0.280,  0.033,  0.126, -0.096,  0.533, -0.340,  0.160, -0.431,  0.146, -0.259,  0.001, -0.131,  0.280,  0.033,  0.126, -0.431,  0.146, -0.260, -0.000); 
    this.testData[65] = new Array(66,  0.574,  0.084,  1.278,  0.000,  0.971,  0.271,  0.620, -0.005,  0.271, -0.095,  0.253,  0.082,  0.114, -0.111,  0.542, -0.355,  0.170, -0.447,  0.165, -0.291,  0.003, -0.096,  0.252,  0.082,  0.114, -0.447,  0.165, -0.291,  0.002); 
    this.testData[66] = new Array(67,  0.583,  0.084,  1.283,  0.000,  0.977,  0.272,  0.626,  0.032,  0.251, -0.057,  0.225,  0.133,  0.104, -0.124,  0.551, -0.369,  0.179, -0.461,  0.184, -0.323,  0.006, -0.057,  0.225,  0.133,  0.103, -0.461,  0.184, -0.323,  0.006); 
    this.testData[67] = new Array(68,  0.591,  0.084,  1.287,  0.000,  0.981,  0.271,  0.630,  0.070,  0.233, -0.016,  0.198,  0.185,  0.095, -0.134,  0.558, -0.382,  0.189, -0.474,  0.202, -0.354,  0.012, -0.016,  0.198,  0.185,  0.095, -0.474,  0.202, -0.354,  0.012); 
    this.testData[68] = new Array(69,  0.600,  0.084,  1.291,  0.000,  0.985,  0.268,  0.631,  0.108,  0.216,  0.026,  0.173,  0.235,  0.090, -0.142,  0.565, -0.397,  0.200, -0.488,  0.220, -0.381,  0.022,  0.026,  0.173,  0.235,  0.090, -0.488,  0.220, -0.381,  0.022); 
    this.testData[69] = new Array(70,  0.609,  0.084,  1.294,  0.000,  0.988,  0.263,  0.631,  0.145,  0.201,  0.068,  0.151,  0.283,  0.087, -0.148,  0.570, -0.413,  0.212, -0.502,  0.236, -0.405,  0.033,  0.068,  0.151,  0.283,  0.087, -0.502,  0.236, -0.405,  0.033); 
    this.testData[70] = new Array(71,  0.618,  0.084,  1.296,  0.000,  0.990,  0.257,  0.628,  0.180,  0.189,  0.107,  0.133,  0.327,  0.087, -0.152,  0.573, -0.427,  0.223, -0.516,  0.250, -0.426,  0.044,  0.107,  0.133,  0.327,  0.087, -0.516,  0.250, -0.426,  0.044); 
    this.testData[71] = new Array(72,  0.627,  0.084,  1.297,  0.000,  0.991,  0.249,  0.624,  0.212,  0.180,  0.143,  0.119,  0.366,  0.089, -0.155,  0.576, -0.440,  0.234, -0.528,  0.264, -0.445,  0.055,  0.143,  0.119,  0.366,  0.089, -0.528,  0.264, -0.445,  0.055); 
    this.testData[72] = new Array(73,  0.636,  0.084,  1.298,  0.000,  0.992,  0.241,  0.619,  0.239,  0.174,  0.174,  0.108,  0.398,  0.093, -0.156,  0.576, -0.452,  0.244, -0.539,  0.277, -0.461,  0.065,  0.174,  0.108,  0.398,  0.093, -0.539,  0.277, -0.461,  0.065); 
    this.testData[73] = new Array(74,  0.644,  0.083,  1.298,  0.000,  0.991,  0.232,  0.613,  0.260,  0.169,  0.199,  0.100,  0.424,  0.097, -0.155,  0.576, -0.463,  0.254, -0.548,  0.288, -0.476,  0.075,  0.199,  0.100,  0.424,  0.097, -0.549,  0.288, -0.476,  0.075); 
    this.testData[74] = new Array(75,  0.653,  0.082,  1.297,  0.000,  0.990,  0.224,  0.608,  0.275,  0.165,  0.217,  0.093,  0.442,  0.100, -0.153,  0.574, -0.472,  0.263, -0.557,  0.300, -0.490,  0.085,  0.217,  0.093,  0.442,  0.100, -0.557,  0.300, -0.490,  0.085); 
    this.testData[75] = new Array(76,  0.662,  0.081,  1.295,  0.000,  0.988,  0.217,  0.602,  0.285,  0.162,  0.229,  0.088,  0.453,  0.101, -0.149,  0.571, -0.480,  0.273, -0.564,  0.311, -0.502,  0.095,  0.229,  0.088,  0.454,  0.101, -0.564,  0.311, -0.502,  0.095); 
    this.testData[76] = new Array(77,  0.671,  0.080,  1.293,  0.000,  0.986,  0.210,  0.595,  0.289,  0.157,  0.234,  0.083,  0.458,  0.099, -0.143,  0.566, -0.486,  0.282, -0.569,  0.323, -0.513,  0.105,  0.234,  0.083,  0.458,  0.099, -0.569,  0.323, -0.513,  0.105); 
    this.testData[77] = new Array(78,  0.680,  0.079,  1.290,  0.000,  0.982,  0.205,  0.589,  0.288,  0.151,  0.232,  0.077,  0.457,  0.093, -0.136,  0.560, -0.491,  0.292, -0.573,  0.335, -0.522,  0.116,  0.232,  0.077,  0.457,  0.093, -0.573,  0.335, -0.523,  0.116); 
    this.testData[78] = new Array(79,  0.689,  0.078,  1.286,  0.000,  0.978,  0.200,  0.582,  0.282,  0.145,  0.225,  0.071,  0.450,  0.084, -0.127,  0.553, -0.494,  0.301, -0.574,  0.347, -0.531,  0.126,  0.225,  0.071,  0.450,  0.084, -0.574,  0.347, -0.531,  0.126); 
    this.testData[79] = new Array(80,  0.697,  0.076,  1.281,  0.000,  0.973,  0.196,  0.575,  0.272,  0.137,  0.214,  0.064,  0.439,  0.073, -0.117,  0.545, -0.495,  0.311, -0.574,  0.359, -0.538,  0.137,  0.214,  0.064,  0.439,  0.073, -0.574,  0.359, -0.538,  0.137); 
    

}

Data.prototype.constructor = Data;