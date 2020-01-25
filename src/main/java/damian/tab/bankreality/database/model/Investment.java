package damian.tab.bankreality.database.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Data
public class Investment implements Serializable {
    @Id
    @NotNull
    @GeneratedValue(generator = "Investment_generator")
    @SequenceGenerator(name = "Investment_generator", sequenceName = "Investment_sequence", initialValue = 4000000, allocationSize = 10)
    private int id;

    @NotNull
    @Column
    private double depositAmount;

    @NotNull
    @Column
    private Date expirationDate;

    @NotNull
    @Column
    private int AER;

    @ManyToOne
    @JoinColumn(name = "accountNumber")
    @EmbeddedId
    private Account account;
}
