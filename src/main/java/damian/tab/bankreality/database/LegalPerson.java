package damian.tab.bankreality.database;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.validation.constraints.NotNull;

@EqualsAndHashCode(callSuper = true)
@Entity
@PrimaryKeyJoinColumn
@Data
public class LegalPerson extends Client {
    @NotNull
    @Column
    private double nip;
    @NotNull
    @Column
    private String companyName;
    @Column
    private String companyType;
}

