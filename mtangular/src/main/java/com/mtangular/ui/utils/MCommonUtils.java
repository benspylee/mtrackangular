package com.mtangular.ui.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

public class MCommonUtils {
	
	
	public static String dateTostring(Date date)
	{
		SimpleDateFormat sf=new SimpleDateFormat("yyyy-MM-dd");
		return sf.format(date);
	}

}
