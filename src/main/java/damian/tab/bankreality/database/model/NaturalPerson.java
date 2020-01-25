package damian.tab.bankreality.database.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.validation.constraints.NotNull;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@PrimaryKeyJoinColumn
public class NaturalPerson extends Client {
    @NotNull
    @Column
    private String name;
    @NotNull
    @Column
    private String surname;
    @NotNull
    @Column
    private double idCard;
}
