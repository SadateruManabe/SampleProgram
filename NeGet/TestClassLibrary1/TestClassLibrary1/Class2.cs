﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Newtonsoft.Json;

namespace OssCons.DotNetSubcommittee.TestClassLibrary1
{
    /// <summary>Class2</summary>
    public class Class2
    {
        /// <summary>SerializeObject</summary>
        public static string SerializeObject(List<string> list)
        {
            return JsonConvert.SerializeObject(list);
        }
    }
}
