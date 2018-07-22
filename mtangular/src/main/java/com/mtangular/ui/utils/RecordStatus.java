package com.mtangular.ui.utils;

public enum RecordStatus {
	
	ACTIVE(1),DELETE(-1),APPROVED(26);
	
	private int status;

	RecordStatus(int status)
	{
		this.status=status;
	}
	
	public int getStatus() {
		return status;
	}
	
}
