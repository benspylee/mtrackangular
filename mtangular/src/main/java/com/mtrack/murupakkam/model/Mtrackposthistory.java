package com.mtrack.murupakkam.model;

import com.mtrack.murupakkam.core.model.Mbasemodel;
import java.io.Serializable;

import javax.persistence.Entity;

//@Entity
public class Mtrackposthistory
extends Mbasemodel
implements Serializable
{
	private int postcount;
	private String pmonth;
	private int bmonth;
	private Double pyear;

	public int getBmonth()
	{
		return this.bmonth;
	}

	public void setBmonth(int bmonth) { this.bmonth = bmonth; }

	public int getPostcount() {
		return this.postcount;
	}

	public void setPostcount(int postcount) { this.postcount = postcount; }

	public String getPmonth() {
		return this.pmonth;
	}

	public void setPmonth(String pmonth) { this.pmonth = pmonth; }

	public Double getPyear() {
		return this.pyear;
	}

	public void setPyear(Double pyear) { this.pyear = pyear; }
}
